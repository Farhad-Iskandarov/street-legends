import * as THREE from 'three';

export type ArenaId = 'khirdalan' | 'warsaw' | 'krakow' | 'baku';

export interface ArenaInfo {
  id: ArenaId;
  name: string;
  subtitle: string;
  imagePath: string | null;
}

export const ARENA_LIST: ArenaInfo[] = [
  {
    id: 'khirdalan',
    name: 'KHIRDALAN',
    subtitle: 'Night Street (Default)',
    imagePath: null
  },
  {
    id: 'warsaw',
    name: 'WARSAW',
    subtitle: 'Palace of Culture',
    imagePath: '/assets/arenas/warsaw.jpg'
  },
  {
    id: 'krakow',
    name: 'KRAKOW',
    subtitle: 'Main Market Square',
    imagePath: '/assets/arenas/krakow.jpg'
  },
  {
    id: 'baku',
    name: 'BAKU',
    subtitle: 'Flame Towers & Boulevard',
    imagePath: '/assets/arenas/baku.jpg'
  }
];

interface AnimatedWindow {
  mesh: THREE.Mesh;
  mat: THREE.MeshBasicMaterial;
  baseColor: THREE.Color;
  phase: number;
  speed: number;
  mode: 'twinkle' | 'pulse' | 'toggle' | 'wave' | 'shimmer' | 'beacon';
  baseX: number;
  baseY: number;
  rowRatio?: number;
}

export class FightingArena {
  public scene: THREE.Scene;
  public arenaHalfWidth: number = 11.5;
  public currentArenaId: ArenaId = 'khirdalan';

  private streetBaseGroup: THREE.Group;
  private khirdalanGroup: THREE.Group;
  private customArenaGroup: THREE.Group;
  private cityLightsGroup: THREE.Group;

  private backdropMesh!: THREE.Mesh;
  private backdropMat!: THREE.MeshBasicMaterial;
  private radialGlowTex: THREE.Texture | null = null;
  private textureCache: Map<string, THREE.Texture> = new Map();

  private animatedLights: { light: THREE.PointLight; baseIntensity: number; phase: number }[] = [];
  private khirdalanWindows: AnimatedWindow[] = [];
  private customStageLights: AnimatedWindow[] = [];
  private steamParticles: THREE.Mesh[] = [];

  constructor() {
    this.scene = new THREE.Scene();

    // 1. Crisp 3D Foreground Street (shared across all 4 arenas so the ground under fighters is 100% vector-sharp)
    this.streetBaseGroup = new THREE.Group();
    this.streetBaseGroup.name = 'street_base_group';
    this.scene.add(this.streetBaseGroup);

    // 2. Khirdalan 3D Buildings & Street Props
    this.khirdalanGroup = new THREE.Group();
    this.khirdalanGroup.name = 'khirdalan_arena_group';
    this.scene.add(this.khirdalanGroup);

    // 3. Custom City Backdrop & Soft Radial Light Blooms (Warsaw, Krakow, Baku)
    this.customArenaGroup = new THREE.Group();
    this.customArenaGroup.name = 'custom_arena_group';
    this.customArenaGroup.visible = false;
    this.scene.add(this.customArenaGroup);

    this.cityLightsGroup = new THREE.Group();
    this.cityLightsGroup.name = 'city_lights_group';
    this.customArenaGroup.add(this.cityLightsGroup);

    this.setupAtmosphere();
    this.buildStreet();
    this.buildCitySkyline();
    this.buildStreetProps();
    this.buildCustomBackdrop();
    this.setupLighting();
  }

  public setArena(arenaId: ArenaId): void {
    this.currentArenaId = arenaId;
    const arenaInfo = ARENA_LIST.find(a => a.id === arenaId) || ARENA_LIST[0];

    if (arenaId === 'khirdalan' || !arenaInfo.imagePath) {
      this.khirdalanGroup.visible = true;
      this.customArenaGroup.visible = false;
      this.scene.fog = new THREE.FogExp2(0x0a0f1d, 0.018);
      return;
    }

    this.khirdalanGroup.visible = false;
    this.customArenaGroup.visible = true;
    this.scene.fog = null;

    // Frame the city skyline directly on top of the 3D sidewalk curb (y = 0.16, z = -2.5)
    // without over-zooming so every pixel of the HD texture is razor-sharp
    if (arenaId === 'warsaw') {
      // Top 76% of warsaw.jpg (skyline + Palace of Culture down to the sidewalk curb)
      this.backdropMesh.scale.set(22.5, 9.6, 1);
      this.backdropMesh.position.set(0, 0.16 + 4.8, -2.5);
    } else {
      // Top 90% of krakow.jpg / baku.jpg (panoramic 3.33:1 skyline down to the sidewalk curb)
      this.backdropMesh.scale.set(23.5, 7.1, 1);
      this.backdropMesh.position.set(0, 0.16 + 3.55, -2.5);
    }

    // Build stage-specific animated building lights, beacons, and reflections
    this.populateCustomStageLights(arenaId);

    if (typeof document !== 'undefined' && typeof document.createElementNS === 'function') {
      const texKey = `${arenaId}_hd`;
      const cached = this.textureCache.get(texKey);
      if (cached) {
        this.backdropMat.map = cached;
        this.backdropMat.needsUpdate = true;
      } else {
        this.loadSharpenedHDTexture(arenaInfo.imagePath, arenaId, (hdTex) => {
          this.textureCache.set(texKey, hdTex);
          if (this.currentArenaId === arenaId) {
            this.backdropMat.map = hdTex;
            this.backdropMat.needsUpdate = true;
          }
        });
      }
    }
  }

  /**
   * Loads the city background image onto a 2x Super-Sampled HD Canvas (2048px wide),
   * crops the redundant lower road strip (since the 3D vector road is rendered in the foreground),
   * and applies a 3x3 Unsharp-Mask Convolution filter so architectural lines, windows, and lamps are crisp HD.
   */
  private loadSharpenedHDTexture(
    url: string,
    arenaId: ArenaId,
    onLoaded: (tex: THREE.Texture) => void
  ): void {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const cropHeightRatio = arenaId === 'warsaw' ? 0.76 : 0.90;
      const srcW = img.width;
      const srcH = Math.round(img.height * cropHeightRatio);

      // Step 1: Draw source crop and remove isolated floating colorful squares in the night sky
      const srcCanvas = document.createElement('canvas');
      srcCanvas.width = srcW;
      srcCanvas.height = srcH;
      const srcCtx = srcCanvas.getContext('2d');
      if (!srcCtx) return;
      srcCtx.drawImage(img, 0, 0, srcW, srcH, 0, 0, srcW, srcH);

      try {
        const rawData = srcCtx.getImageData(0, 0, srcW, srcH);
        const px = rawData.data;
        const orig = new Uint8ClampedArray(px);

        const isDarkSky = (x: number, y: number): boolean => {
          const cx = Math.max(0, Math.min(srcW - 1, x));
          const cy = Math.max(0, Math.min(srcH - 1, y));
          const i = (cy * srcW + cx) * 4;
          return orig[i] < 38 && orig[i + 1] < 52 && orig[i + 2] < 88;
        };

        const maxSkyY = Math.floor(srcH * 0.65);
        const radius = Math.max(26, Math.round(srcW * 0.032));

        for (let y = 0; y < maxSkyY; y++) {
          for (let x = 0; x < srcW; x++) {
            if (isDarkSky(x, y)) continue;

            let skyLeft = false;
            let skyRight = false;
            let skyUp = false;
            let skyDown = false;
            let sampleSkyX = Math.max(0, x - radius);

            for (let d = 4; d <= radius; d += 2) {
              if (!skyLeft && isDarkSky(x - d, y)) {
                skyLeft = true;
                sampleSkyX = Math.max(0, x - d - 2);
              }
              if (!skyRight && isDarkSky(x + d, y)) {
                skyRight = true;
                if (!skyLeft) sampleSkyX = Math.min(srcW - 1, x + d + 2);
              }
              if (!skyUp && (y - d < 0 || isDarkSky(x, y - d))) {
                skyUp = true;
              }
              if (
                !skyDown &&
                isDarkSky(x, y + d) &&
                isDarkSky(x - 3, y + d) &&
                isDarkSky(x + 3, y + d)
              ) {
                skyDown = true;
              }
            }

            if (skyLeft && skyRight && skyUp && skyDown) {
              const dstIdx = (y * srcW + x) * 4;
              const srcSkyIdx = (y * srcW + sampleSkyX) * 4;
              px[dstIdx] = orig[srcSkyIdx];
              px[dstIdx + 1] = orig[srcSkyIdx + 1];
              px[dstIdx + 2] = orig[srcSkyIdx + 2];
            }
          }
        }
        srcCtx.putImageData(rawData, 0, 0);
      } catch {
        // Ignore if canvas read is restricted
      }

      // Step 2: 2x HD Super-Sampled target resolution
      const dstW = Math.min(2048, srcW * 2);
      const dstH = Math.round(srcH * (dstW / srcW));

      const canvas = document.createElement('canvas');
      canvas.width = dstW;
      canvas.height = dstH;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(srcCanvas, 0, 0, srcW, srcH, 0, 0, dstW, dstH);

      // Apply fast 3x3 Unsharp-Mask sharpening filter + subtle night contrast boost
      try {
        const imgData = ctx.getImageData(0, 0, dstW, dstH);
        const src = imgData.data;
        const out = new Uint8ClampedArray(src.length);
        out.set(src);

        const amount = 0.48; // Crisp edge enhancement without ringing
        const rowStride = dstW * 4;

        for (let y = 1; y < dstH - 1; y++) {
          let idx = (y * dstW + 1) * 4;
          for (let x = 1; x < dstW - 1; x++, idx += 4) {
            for (let c = 0; c < 3; c++) {
              const center = src[idx + c];
              const neighbors =
                (src[idx - 4 + c] +
                  src[idx + 4 + c] +
                  src[idx - rowStride + c] +
                  src[idx + rowStride + c]) *
                0.25;
              const sharpened = center + (center - neighbors) * amount;
              // Subtle S-curve contrast boost for crisp darks & glowing windows
              const norm = Math.max(0, Math.min(255, sharpened)) / 255;
              const contrasted = Math.pow(norm, 0.96) * 255;
              out[idx + c] = contrasted;
            }
          }
        }

        imgData.data.set(out);
        ctx.putImageData(imgData, 0, 0);
      } catch {
        // Fallback to unsharpened canvas if getImageData is restricted
      }

      const canvasTex = new THREE.CanvasTexture(canvas);
      canvasTex.colorSpace = THREE.SRGBColorSpace;
      canvasTex.minFilter = THREE.LinearMipmapLinearFilter;
      canvasTex.magFilter = THREE.LinearFilter;
      canvasTex.anisotropy = 16;
      canvasTex.generateMipmaps = true;
      canvasTex.needsUpdate = true;
      onLoaded(canvasTex);
    };
    img.src = url;
  }

  private buildCustomBackdrop(): void {
    const unitPlane = new THREE.PlaneGeometry(1, 1);
    this.backdropMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
      toneMapped: false,
      fog: false
    });
    this.backdropMesh = new THREE.Mesh(unitPlane, this.backdropMat);
    this.backdropMesh.scale.set(22.5, 9.6, 1);
    this.backdropMesh.position.set(0, 4.96, -2.5);
    this.customArenaGroup.add(this.backdropMesh);
  }

  private getRadialGlowTexture(): THREE.Texture | null {
    if (this.radialGlowTex) return this.radialGlowTex;
    if (typeof document === 'undefined' || typeof document.createElementNS !== 'function') {
      return null;
    }
    const size = 64;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    const half = size / 2;
    const grad = ctx.createRadialGradient(half, half, 0, half, half, half);
    grad.addColorStop(0.0, 'rgba(255, 255, 255, 1.0)');
    grad.addColorStop(0.28, 'rgba(255, 255, 255, 0.55)');
    grad.addColorStop(0.65, 'rgba(255, 255, 255, 0.14)');
    grad.addColorStop(1.0, 'rgba(255, 255, 255, 0.0)');

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, size, size);

    const tex = new THREE.CanvasTexture(canvas);
    tex.needsUpdate = true;
    this.radialGlowTex = tex;
    return tex;
  }

  /**
   * Builds soft radial light blooms (streetlamp halos, tower beacons, and architectural glow)
   * tailored to Warsaw, Krakow, and Baku — using smooth circular radial gradients (no squares).
   */
  private populateCustomStageLights(arenaId: ArenaId): void {
    while (this.cityLightsGroup.children.length > 0) {
      this.cityLightsGroup.remove(this.cityLightsGroup.children[0]);
    }
    this.customStageLights = [];

    const glowTex = this.getRadialGlowTexture();

    const addSoftGlow = (
      x: number,
      y: number,
      w: number,
      h: number,
      colorHex: number,
      mode: AnimatedWindow['mode'],
      speed: number = 2.5,
      rowRatio: number = 0
    ) => {
      const geo = new THREE.PlaneGeometry(w, h);
      const mat = new THREE.MeshBasicMaterial({
        color: colorHex,
        map: glowTex,
        transparent: true,
        opacity: 0.65,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        toneMapped: false,
        fog: false
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(x, y, -2.42);
      this.cityLightsGroup.add(mesh);

      this.customStageLights.push({
        mesh,
        mat,
        baseColor: new THREE.Color(colorHex),
        phase: Math.random() * Math.PI * 2,
        speed,
        mode,
        baseX: x,
        baseY: y,
        rowRatio
      });
    };

    if (arenaId === 'warsaw') {
      // 1. Palace of Culture Spire Red Aviation Beacon (blinking soft radial glow at tip of spire)
      addSoftGlow(0.02, 8.95, 0.55, 0.55, 0xff1e42, 'beacon', 4.0);

      // 2. Clock Tower Face & Central Palace Illumination
      addSoftGlow(0.02, 7.15, 0.85, 0.85, 0xfef08a, 'pulse', 2.0);
      addSoftGlow(0.02, 4.2, 2.8, 3.8, 0xc084fc, 'pulse', 1.6);

      // 3. Lower Colonnade Warm Architectural Glows
      for (let i = -6; i <= 6; i += 2) {
        addSoftGlow(i * 0.9, 1.35, 0.95, 1.1, 0xfde047, 'twinkle', 1.8 + Math.abs(i) * 0.2);
      }

      // 4. Streetlamp Halos (Left & Right)
      addSoftGlow(-9.3, 5.15, 1.8, 1.8, 0xfacc15, 'pulse', 2.0);
      addSoftGlow(9.3, 5.15, 1.8, 1.8, 0xfacc15, 'pulse', 2.0);
    } else if (arenaId === 'krakow') {
      // 1. Cloth Hall (Sukiennice) Warm Glowing Arcade Arches (Left side)
      for (let i = 0; i < 8; i++) {
        const ax = -9.4 + i * 0.78;
        addSoftGlow(ax, 1.15, 0.95, 1.1, 0xfbbf24, 'pulse', 2.0 + (i % 3) * 0.5);
      }

      // 2. St. Mary's Basilica Twin Towers Soft Spotlight Glow (Center-Right)
      addSoftGlow(1.05, 3.6, 1.4, 3.2, 0xf59e0b, 'pulse', 1.8);
      addSoftGlow(2.25, 3.2, 1.3, 2.8, 0xf59e0b, 'pulse', 2.1);

      // 3. Soft Cobblestone Shimmer across the Square
      for (let i = 0; i < 12; i++) {
        const rx = -8.5 + i * 1.45;
        addSoftGlow(rx, 0.42, 1.2, 0.35, 0xf59e0b, 'shimmer', 2.2 + (i % 4) * 0.4);
      }

      // 4. Left & Right Streetlamp Halos
      addSoftGlow(-10.1, 4.9, 1.9, 1.9, 0xfef08a, 'pulse', 2.2);
      addSoftGlow(10.1, 4.9, 1.9, 1.9, 0xfef08a, 'pulse', 2.2);
    } else if (arenaId === 'baku') {
      // 1. Animated Flame Towers Soft LED Color Waves (3 iconic Flame Towers in center)
      const towers = [
        { cx: -0.05, baseW: 1.35, yStart: 2.4, yEnd: 4.9 },
        { cx: 1.35, baseW: 1.1, yStart: 2.3, yEnd: 4.3 },
        { cx: 2.28, baseW: 1.25, yStart: 2.4, yEnd: 4.7 }
      ];
      for (const t of towers) {
        const steps = 7;
        for (let s = 0; s < steps; s++) {
          const ratio = s / (steps - 1);
          const y = t.yStart + ratio * (t.yEnd - t.yStart);
          const w = t.baseW * (1.0 - ratio * 0.45);
          addSoftGlow(t.cx, y, w, 0.55, 0x00d2ff, 'wave', 3.0, ratio);
        }
      }

      // 2. Baku TV Tower Red Aviation Beacon
      addSoftGlow(3.92, 5.95, 0.55, 0.55, 0xff1e42, 'beacon', 4.5);

      // 3. Maiden Tower & Government House Warm Floodlights
      addSoftGlow(-8.2, 2.4, 2.6, 2.8, 0xf59e0b, 'pulse', 1.6);
      addSoftGlow(8.4, 2.2, 3.8, 2.2, 0xfbbf24, 'pulse', 1.9);

      // 4. Caspian Sea Soft Water Shimmer
      for (let i = 0; i < 14; i++) {
        const wx = -7.0 + i * 1.1;
        addSoftGlow(wx, 0.45, 1.2, 0.32, 0xfbbf24, 'shimmer', 2.5 + (i % 3) * 0.6);
      }

      // 5. Boulevard Streetlamp Halos
      addSoftGlow(-10.1, 4.9, 1.9, 1.9, 0xfef08a, 'pulse', 2.2);
      addSoftGlow(10.1, 4.9, 1.9, 1.9, 0xfef08a, 'pulse', 2.2);
    }
  }

  private setupAtmosphere(): void {
    // Night sky dark blue-black with fog
    this.scene.background = new THREE.Color(0x060913);
    this.scene.fog = new THREE.FogExp2(0x0a0f1d, 0.018);
  }

  private setupLighting(): void {
    // Ambient light - deep night blue fill
    const ambient = new THREE.AmbientLight(0x1e293b, 1.2);
    this.scene.add(ambient);

    // Directional moonlight from high top-right
    const moonLight = new THREE.DirectionalLight(0x93c5fd, 1.5);
    moonLight.position.set(6, 16, 8);
    moonLight.castShadow = true;
    moonLight.shadow.mapSize.width = 2048;
    moonLight.shadow.mapSize.height = 2048;
    moonLight.shadow.camera.near = 0.5;
    moonLight.shadow.camera.far = 40;
    moonLight.shadow.camera.left = -16;
    moonLight.shadow.camera.right = 16;
    moonLight.shadow.camera.top = 16;
    moonLight.shadow.camera.bottom = -4;
    moonLight.shadow.bias = -0.001;
    this.scene.add(moonLight);

    // Rim / Back light for characters
    const rimLight = new THREE.DirectionalLight(0x0284c7, 0.8);
    rimLight.position.set(-8, 8, -6);
    this.scene.add(rimLight);
  }

  private buildStreet(): void {
    // 1. Crisp 3D Asphalt Ground (shared by all 4 arenas)
    const groundGeo = new THREE.PlaneGeometry(60, 20);
    const groundMat = new THREE.MeshStandardMaterial({
      color: 0x141824,
      roughness: 0.85,
      metalness: 0.15
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = 0;
    ground.position.z = 0;
    ground.receiveShadow = true;
    this.streetBaseGroup.add(ground);

    // 2. Road Markings (Sharp 3D Yellow center dashes)
    const lineMat = new THREE.MeshBasicMaterial({ color: 0xeab308 });
    for (let x = -20; x <= 20; x += 3.5) {
      const lineGeo = new THREE.PlaneGeometry(2.0, 0.18);
      const line = new THREE.Mesh(lineGeo, lineMat);
      line.rotation.x = -Math.PI / 2;
      line.position.set(x, 0.005, 0.8);
      this.streetBaseGroup.add(line);
    }

    // 3. Sidewalk Curb
    const curbGeo = new THREE.BoxGeometry(60, 0.22, 2.8);
    const curbMat = new THREE.MeshStandardMaterial({
      color: 0x222938,
      roughness: 0.9
    });
    const curb = new THREE.Mesh(curbGeo, curbMat);
    curb.position.set(0, 0.11, -2.4);
    curb.receiveShadow = true;
    this.streetBaseGroup.add(curb);

    // 4. Manhole Cover & Steam (Khirdalan specific)
    const manholeGeo = new THREE.CylinderGeometry(0.65, 0.65, 0.04, 20);
    const manholeMat = new THREE.MeshStandardMaterial({
      color: 0x334155,
      roughness: 0.7,
      metalness: 0.7
    });
    const manhole = new THREE.Mesh(manholeGeo, manholeMat);
    manhole.position.set(0, 0.02, 0.3);
    manhole.receiveShadow = true;
    this.khirdalanGroup.add(manhole);

    const steamGeo = new THREE.SphereGeometry(0.08, 6, 6);
    const steamMat = new THREE.MeshBasicMaterial({ color: 0x94a3b8, transparent: true, opacity: 0.25 });
    for (let i = 0; i < 15; i++) {
      const s = new THREE.Mesh(steamGeo, steamMat.clone());
      s.position.set((Math.random() - 0.5) * 0.4, 0.1 + Math.random() * 1.5, 0.3 + (Math.random() - 0.5) * 0.4);
      this.khirdalanGroup.add(s);
      this.steamParticles.push(s);
    }
  }

  private buildCitySkyline(): void {
    const buildingColors = [0x0f172a, 0x111827, 0x1e1b4b, 0x090d16];
    const windowColors = [0xfef08a, 0x38bdf8, 0xf472b6, 0xfacc15];

    // Left block of buildings
    for (let i = 0; i < 9; i++) {
      const w = 4 + Math.random() * 3.5;
      const h = 14 + Math.random() * 16;
      const d = 4 + Math.random() * 4;
      const x = -28 + i * 4.2;
      const z = -6.5 - Math.random() * 7;

      this.createBuilding(x, h, z, w, d, buildingColors[i % buildingColors.length], windowColors);
    }

    // Right block of buildings
    for (let i = 0; i < 9; i++) {
      const w = 4 + Math.random() * 3.5;
      const h = 14 + Math.random() * 16;
      const d = 4 + Math.random() * 4;
      const x = 4 + i * 4.2;
      const z = -6.5 - Math.random() * 7;

      this.createBuilding(x, h, z, w, d, buildingColors[(i + 2) % buildingColors.length], windowColors);
    }

    // Giant Neon Signs
    this.createNeonSign('DRAGON ARCADE', -7, 6.2, -4.8, 0xff007f);
    this.createNeonSign('NEO COMBAT', 7, 6.6, -4.8, 0x00f0ff);
    this.createNeonSign('OVERDRIVE', 0, 8.2, -7.5, 0xffbe0b);
  }

  private createBuilding(
    x: number,
    h: number,
    z: number,
    w: number,
    d: number,
    baseColor: number,
    windowPalette: number[]
  ): void {
    const geo = new THREE.BoxGeometry(w, h, d);
    const mat = new THREE.MeshStandardMaterial({
      color: baseColor,
      roughness: 0.8,
      metalness: 0.2
    });
    const bldg = new THREE.Mesh(geo, mat);
    bldg.position.set(x, h / 2, z);
    bldg.receiveShadow = true;
    this.khirdalanGroup.add(bldg);

    // Animated Windows grid on front face
    const rows = Math.floor(h / 1.6);
    const cols = Math.floor(w / 1.1);

    for (let r = 2; r < rows; r++) {
      for (let c = 1; c < cols; c++) {
        if (Math.random() < 0.45) {
          const winGeo = new THREE.PlaneGeometry(0.35, 0.45);
          const winColor = windowPalette[Math.floor(Math.random() * windowPalette.length)];
          const winMat = new THREE.MeshBasicMaterial({
            color: winColor,
            transparent: true,
            opacity: 0.9
          });
          const win = new THREE.Mesh(winGeo, winMat);

          const wx = x - w / 2 + c * (w / cols);
          const wy = r * 1.6;
          const wz = z + d / 2 + 0.02;

          win.position.set(wx, wy, wz);
          this.khirdalanGroup.add(win);

          this.khirdalanWindows.push({
            mesh: win,
            mat: winMat,
            baseColor: new THREE.Color(winColor),
            phase: Math.random() * Math.PI * 2,
            speed: 1.5 + Math.random() * 2.5,
            mode: Math.random() < 0.35 ? 'toggle' : 'twinkle',
            baseX: wx,
            baseY: wy
          });
        }
      }
    }
  }

  private createNeonSign(text: string, x: number, y: number, z: number, colorHex: number): void {
    const frameGeo = new THREE.BoxGeometry(4.8, 1.2, 0.2);
    const frameMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.5 });
    const frame = new THREE.Mesh(frameGeo, frameMat);
    frame.position.set(x, y, z);
    this.khirdalanGroup.add(frame);

    const neonGeo = new THREE.BoxGeometry(4.4, 0.85, 0.1);
    const neonMat = new THREE.MeshBasicMaterial({ color: colorHex });
    const neon = new THREE.Mesh(neonGeo, neonMat);
    neon.position.set(x, y, z + 0.1);
    this.khirdalanGroup.add(neon);

    const neonLight = new THREE.PointLight(colorHex, 2.2, 8.0);
    neonLight.position.set(x, y, z + 0.6);
    this.khirdalanGroup.add(neonLight);

    this.animatedLights.push({
      light: neonLight,
      baseIntensity: 2.2,
      phase: Math.random() * 10
    });
  }

  private buildStreetProps(): void {
    this.createStreetLamp(-10, 0, -1.8);
    this.createStreetLamp(10, 0, -1.8);

    const dumpsterGeo = new THREE.BoxGeometry(2.2, 1.4, 1.2);
    const dumpsterMat = new THREE.MeshStandardMaterial({
      color: 0x1e3a2b,
      roughness: 0.7,
      metalness: 0.3
    });
    const dumpster = new THREE.Mesh(dumpsterGeo, dumpsterMat);
    dumpster.position.set(-11.5, 0.8, -2.6);
    dumpster.castShadow = true;
    dumpster.receiveShadow = true;
    this.khirdalanGroup.add(dumpster);

    const crateMat = new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.9 });
    const crate1 = new THREE.Mesh(new THREE.BoxGeometry(1.0, 1.0, 1.0), crateMat);
    crate1.position.set(11.2, 0.6, -2.6);
    crate1.castShadow = true;
    this.khirdalanGroup.add(crate1);

    const crate2 = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.8, 0.8), crateMat);
    crate2.position.set(12.1, 0.5, -2.5);
    crate2.rotation.y = 0.3;
    crate2.castShadow = true;
    this.khirdalanGroup.add(crate2);
  }

  private createStreetLamp(x: number, y: number, z: number): void {
    const poleGeo = new THREE.CylinderGeometry(0.08, 0.12, 4.8, 8);
    const poleMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.5, metalness: 0.8 });
    const pole = new THREE.Mesh(poleGeo, poleMat);
    pole.position.set(x, y + 2.4, z);
    pole.castShadow = true;
    this.khirdalanGroup.add(pole);

    const armGeo = new THREE.BoxGeometry(0.8, 0.08, 0.08);
    const arm = new THREE.Mesh(armGeo, poleMat);
    arm.position.set(x + (x < 0 ? 0.35 : -0.35), y + 4.75, z);
    this.khirdalanGroup.add(arm);

    const headGeo = new THREE.ConeGeometry(0.28, 0.22, 8);
    const headMat = new THREE.MeshStandardMaterial({ color: 0x334155 });
    const head = new THREE.Mesh(headGeo, headMat);
    head.position.set(x + (x < 0 ? 0.7 : -0.7), y + 4.65, z);
    this.khirdalanGroup.add(head);

    const bulbGeo = new THREE.SphereGeometry(0.12, 8, 8);
    const bulbMat = new THREE.MeshBasicMaterial({ color: 0xffedd5 });
    const bulb = new THREE.Mesh(bulbGeo, bulbMat);
    bulb.position.set(x + (x < 0 ? 0.7 : -0.7), y + 4.5, z);
    this.khirdalanGroup.add(bulb);

    const lampLight = new THREE.PointLight(0xffbe0b, 1.8, 10.0);
    lampLight.position.set(x + (x < 0 ? 0.7 : -0.7), y + 4.4, z);
    lampLight.castShadow = true;
    this.khirdalanGroup.add(lampLight);
  }

  public update(dt: number, cameraX: number = 0): void {
    const time = performance.now() * 0.001;

    // 1. Subtle parallax tracking so the HD city backdrop stays centered in the camera frustum without over-zooming
    this.customArenaGroup.position.x = cameraX * 0.55;

    if (this.currentArenaId === 'khirdalan') {
      // 2A. Animate Khirdalan Neon Signs, Steam, and Building Windows
      for (const item of this.animatedLights) {
        const noise = Math.sin(time * 8.0 + item.phase) * Math.cos(time * 3.5);
        const flicker = noise > 0.88 ? 0.6 : 1.0;
        item.light.intensity = item.baseIntensity * flicker;
      }

      for (const w of this.khirdalanWindows) {
        const v = Math.sin(time * w.speed + w.phase);
        if (w.mode === 'toggle') {
          w.mat.opacity = v > -0.2 ? 0.95 : 0.08;
        } else {
          w.mat.opacity = 0.35 + (v * 0.5 + 0.5) * 0.65;
        }
      }

      for (const s of this.steamParticles) {
        s.position.y += dt * 0.45;
        s.scale.addScalar(dt * 0.3);
        if (s.position.y > 1.8) {
          s.position.y = 0.1;
          s.position.x = (Math.random() - 0.5) * 0.4;
          s.position.z = 0.3 + (Math.random() - 0.5) * 0.4;
          s.scale.set(1, 1, 1);
        }
      }
    } else {
      // 2B. Animate Custom City Stage Soft Light Blooms (Warsaw, Krakow, Baku)
      for (const l of this.customStageLights) {
        const v = Math.sin(time * l.speed + l.phase);
        if (l.mode === 'beacon') {
          const blink = Math.sin(time * l.speed) > 0.1 ? 0.95 : 0.08;
          l.mat.opacity = blink;
          l.mesh.scale.setScalar(0.85 + blink * 0.35);
        } else if (l.mode === 'pulse') {
          const p = v * 0.5 + 0.5;
          l.mat.opacity = 0.14 + p * 0.28;
          l.mesh.scale.setScalar(0.92 + p * 0.16);
        } else if (l.mode === 'twinkle') {
          l.mat.opacity = 0.15 + (v * 0.5 + 0.5) * 0.45;
        } else if (l.mode === 'toggle') {
          l.mat.opacity = v > 0.0 ? 0.55 : 0.08;
        } else if (l.mode === 'shimmer') {
          l.mat.opacity = 0.15 + (v * 0.5 + 0.5) * 0.38;
          l.mesh.scale.x = 0.85 + (v * 0.5 + 0.5) * 0.3;
        } else if (l.mode === 'wave') {
          // Baku Flame Towers scrolling color wave (Cyan -> Red/Flame -> Green)
          const cycle = (time * 0.85 - (l.rowRatio || 0) * 1.4) % 3.0;
          const normCycle = cycle < 0 ? cycle + 3.0 : cycle;
          if (normCycle < 1.0) {
            l.mat.color.setHex(0x00d2ff); // Electric Blue
          } else if (normCycle < 2.0) {
            l.mat.color.setHex(0xff2a55); // Flame Red-Orange
          } else {
            l.mat.color.setHex(0x22c55e); // Emerald Green
          }
          l.mat.opacity = 0.18 + (Math.sin(time * 4.0 - (l.rowRatio || 0) * 5.0) * 0.5 + 0.5) * 0.28;
        }
      }
    }
  }
}
