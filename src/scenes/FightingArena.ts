import * as THREE from 'three';

export class FightingArena {
  public scene: THREE.Scene;
  public arenaHalfWidth: number = 11.5;
  private animatedLights: { light: THREE.PointLight; baseIntensity: number; phase: number }[] = [];
  private steamParticles: THREE.Mesh[] = [];

  constructor() {
    this.scene = new THREE.Scene();
    this.setupAtmosphere();
    this.buildStreet();
    this.buildCitySkyline();
    this.buildStreetProps();
    this.setupLighting();
  }

  private setupAtmosphere(): void {
    // Night sky dark blue-black with fog
    this.scene.background = new THREE.Color(0x060913);
    this.scene.fog = new THREE.FogExp2(0x0a0f1d, 0.024);
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
    // 1. Asphalt Ground
    const groundGeo = new THREE.PlaneGeometry(60, 20);
    const groundMat = new THREE.MeshStandardMaterial({
      color: 0x181c24,
      roughness: 0.85,
      metalness: 0.15
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = 0;
    ground.position.z = 0;
    ground.receiveShadow = true;
    this.scene.add(ground);

    // 2. Road Markings (Yellow center dashes)
    const lineMat = new THREE.MeshBasicMaterial({ color: 0xeab308 });
    for (let x = -20; x <= 20; x += 3.5) {
      const lineGeo = new THREE.PlaneGeometry(2.0, 0.18);
      const line = new THREE.Mesh(lineGeo, lineMat);
      line.rotation.x = -Math.PI / 2;
      line.position.set(x, 0.005, 0.8);
      this.scene.add(line);
    }

    // 3. Sidewalk Curb
    const curbGeo = new THREE.BoxGeometry(60, 0.22, 2.8);
    const curbMat = new THREE.MeshStandardMaterial({
      color: 0x272e3d,
      roughness: 0.9
    });
    const curb = new THREE.Mesh(curbGeo, curbMat);
    curb.position.set(0, 0.11, -2.4);
    curb.receiveShadow = true;
    this.scene.add(curb);

    // 4. Manhole Cover
    const manholeGeo = new THREE.CylinderGeometry(0.65, 0.65, 0.04, 20);
    const manholeMat = new THREE.MeshStandardMaterial({
      color: 0x334155,
      roughness: 0.7,
      metalness: 0.7
    });
    const manhole = new THREE.Mesh(manholeGeo, manholeMat);
    manhole.position.set(0, 0.02, 0.3);
    manhole.receiveShadow = true;
    this.scene.add(manhole);

    // Steam particles from manhole
    const steamGeo = new THREE.SphereGeometry(0.08, 6, 6);
    const steamMat = new THREE.MeshBasicMaterial({ color: 0x94a3b8, transparent: true, opacity: 0.25 });
    for (let i = 0; i < 15; i++) {
      const s = new THREE.Mesh(steamGeo, steamMat.clone());
      s.position.set((Math.random() - 0.5) * 0.4, 0.1 + Math.random() * 1.5, 0.3 + (Math.random() - 0.5) * 0.4);
      this.scene.add(s);
      this.steamParticles.push(s);
    }
  }

  private buildCitySkyline(): void {
    // Skyscraper Buildings in background (Z: -5 to -18)
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
    // Sign 1: DRAGON ARCADE (Pink/Purple)
    this.createNeonSign('DRAGON ARCADE', -7, 6.2, -4.8, 0xff007f);
    // Sign 2: NEO DOWNTOWN (Electric Cyan)
    this.createNeonSign('NEO COMBAT', 7, 6.6, -4.8, 0x00f0ff);
    // Sign 3: NIGHT CLUB (Gold)
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
    this.scene.add(bldg);

    // Windows grid on front face
    const rows = Math.floor(h / 1.6);
    const cols = Math.floor(w / 1.1);

    for (let r = 2; r < rows; r++) {
      for (let c = 1; c < cols; c++) {
        // Randomly lit windows
        if (Math.random() < 0.42) {
          const winGeo = new THREE.PlaneGeometry(0.35, 0.45);
          const winColor = windowPalette[Math.floor(Math.random() * windowPalette.length)];
          const winMat = new THREE.MeshBasicMaterial({ color: winColor });
          const win = new THREE.Mesh(winGeo, winMat);

          const wx = x - w / 2 + c * (w / cols);
          const wy = r * 1.6;
          const wz = z + d / 2 + 0.02;

          win.position.set(wx, wy, wz);
          this.scene.add(win);
        }
      }
    }
  }

  private createNeonSign(text: string, x: number, y: number, z: number, colorHex: number): void {
    const frameGeo = new THREE.BoxGeometry(4.8, 1.2, 0.2);
    const frameMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.5 });
    const frame = new THREE.Mesh(frameGeo, frameMat);
    frame.position.set(x, y, z);
    this.scene.add(frame);

    // Glowing Neon Bar
    const neonGeo = new THREE.BoxGeometry(4.4, 0.85, 0.1);
    const neonMat = new THREE.MeshBasicMaterial({ color: colorHex });
    const neon = new THREE.Mesh(neonGeo, neonMat);
    neon.position.set(x, y, z + 0.1);
    this.scene.add(neon);

    // Neon Point Light with subtle flicker
    const neonLight = new THREE.PointLight(colorHex, 2.2, 8.0);
    neonLight.position.set(x, y, z + 0.6);
    this.scene.add(neonLight);

    this.animatedLights.push({
      light: neonLight,
      baseIntensity: 2.2,
      phase: Math.random() * 10
    });
  }

  private buildStreetProps(): void {
    // 1. Street Lamps
    this.createStreetLamp(-10, 0, -1.8);
    this.createStreetLamp(10, 0, -1.8);

    // 2. Dumpster
    const dumpsterGeo = new THREE.BoxGeometry(2.2, 1.4, 1.2);
    const dumpsterMat = new THREE.MeshStandardMaterial({
      color: 0x1e3a2b, // Dark green industrial
      roughness: 0.7,
      metalness: 0.3
    });
    const dumpster = new THREE.Mesh(dumpsterGeo, dumpsterMat);
    dumpster.position.set(-11.5, 0.8, -2.6);
    dumpster.castShadow = true;
    dumpster.receiveShadow = true;
    this.scene.add(dumpster);

    // 3. Wooden Crates
    const crateMat = new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.9 });
    const crate1 = new THREE.Mesh(new THREE.BoxGeometry(1.0, 1.0, 1.0), crateMat);
    crate1.position.set(11.2, 0.6, -2.6);
    crate1.castShadow = true;
    this.scene.add(crate1);

    const crate2 = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.8, 0.8), crateMat);
    crate2.position.set(12.1, 0.5, -2.5);
    crate2.rotation.y = 0.3;
    crate2.castShadow = true;
    this.scene.add(crate2);
  }

  private createStreetLamp(x: number, y: number, z: number): void {
    const poleGeo = new THREE.CylinderGeometry(0.08, 0.12, 4.8, 8);
    const poleMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.5, metalness: 0.8 });
    const pole = new THREE.Mesh(poleGeo, poleMat);
    pole.position.set(x, y + 2.4, z);
    pole.castShadow = true;
    this.scene.add(pole);

    // Arm and lamp head
    const armGeo = new THREE.BoxGeometry(0.8, 0.08, 0.08);
    const arm = new THREE.Mesh(armGeo, poleMat);
    arm.position.set(x + (x < 0 ? 0.35 : -0.35), y + 4.75, z);
    this.scene.add(arm);

    const headGeo = new THREE.ConeGeometry(0.28, 0.22, 8);
    const headMat = new THREE.MeshStandardMaterial({ color: 0x334155 });
    const head = new THREE.Mesh(headGeo, headMat);
    head.position.set(x + (x < 0 ? 0.7 : -0.7), y + 4.65, z);
    this.scene.add(head);

    // Warm Light Bulb
    const bulbGeo = new THREE.SphereGeometry(0.12, 8, 8);
    const bulbMat = new THREE.MeshBasicMaterial({ color: 0xffedd5 });
    const bulb = new THREE.Mesh(bulbGeo, bulbMat);
    bulb.position.set(x + (x < 0 ? 0.7 : -0.7), y + 4.5, z);
    this.scene.add(bulb);

    // Warm street lamp light pooling down onto the fighters
    const lampLight = new THREE.PointLight(0xffbe0b, 1.8, 10.0);
    lampLight.position.set(x + (x < 0 ? 0.7 : -0.7), y + 4.4, z);
    lampLight.castShadow = true;
    this.scene.add(lampLight);
  }

  public update(dt: number): void {
    const time = performance.now() * 0.001;

    // Subtle neon light flicker
    for (const item of this.animatedLights) {
      const noise = Math.sin(time * 8.0 + item.phase) * Math.cos(time * 3.5);
      const flicker = noise > 0.88 ? 0.6 : 1.0;
      item.light.intensity = item.baseIntensity * flicker;
    }

    // Steam particles rising from manhole
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
  }
}
