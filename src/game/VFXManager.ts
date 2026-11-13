import * as THREE from 'three';

export interface Projectile {
  mesh: THREE.Group;
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  ownerId: 1 | 2;
  damage: number;
  knockback: number;
  radius: number;
  lifeTime: number;
  maxLife: number;
  specialType: string;
}

interface Particle {
  mesh: THREE.Mesh;
  velocity: THREE.Vector3;
  life: number;
  maxLife: number;
  scaleDecay: boolean;
}

export class VFXManager {
  private scene: THREE.Scene;
  private projectiles: Projectile[] = [];
  private particles: Particle[] = [];
  private particlePool: THREE.Mesh[] = [];
  private flashOverlay: HTMLElement | null = null;
  private container: HTMLElement | null = null;

  // Screen shake
  private shakeIntensity: number = 0;
  private shakeDecay: number = 0.90;
  private shakeOffset: THREE.Vector2 = new THREE.Vector2();

  // Slow motion & Hit stop
  private slowMoTimer: number = 0;
  private slowMoFactor: number = 1.0;
  private hitStopTimer: number = 0;

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    this.flashOverlay = document.getElementById('fx-flash-overlay');
    this.container = document.getElementById('game-container');
    this.initParticlePool();
  }

  private initParticlePool(): void {
    const geo = new THREE.SphereGeometry(0.06, 6, 6);
    const mat = new THREE.MeshBasicMaterial({ color: 0xffdd44, transparent: true });

    for (let i = 0; i < 140; i++) {
      const mesh = new THREE.Mesh(geo, mat.clone());
      mesh.visible = false;
      this.scene.add(mesh);
      this.particlePool.push(mesh);
    }
  }

  public triggerScreenShake(intensity: number): void {
    this.shakeIntensity = Math.max(this.shakeIntensity, intensity);
  }

  public triggerSlowMotion(factor: number = 0.28, duration: number = 0.85): void {
    this.slowMoFactor = factor;
    this.slowMoTimer = duration;
  }

  public triggerHitStop(duration: number = 0.05): void {
    this.hitStopTimer = Math.max(this.hitStopTimer, duration);
  }

  public getEffectiveDt(dt: number): number {
    if (this.hitStopTimer > 0) {
      return 0.0001; // Near freeze
    }
    if (this.slowMoTimer > 0) {
      return dt * this.slowMoFactor;
    }
    return dt;
  }

  public triggerImpactFlash(color: string = 'white', durationMs: number = 60): void {
    if (!this.flashOverlay) return;
    this.flashOverlay.style.backgroundColor = color;
    this.flashOverlay.style.opacity = '0.40';
    setTimeout(() => {
      if (this.flashOverlay) {
        this.flashOverlay.style.opacity = '0';
      }
    }, durationMs);
  }

  public spawnHitSparks(position: THREE.Vector3, colorHex: number = 0xffe600, count: number = 12): void {
    for (let i = 0; i < count; i++) {
      let mesh = this.particlePool.find(p => !p.visible);
      if (!mesh) {
        const geo = new THREE.SphereGeometry(0.06, 6, 6);
        const mat = new THREE.MeshBasicMaterial({ color: colorHex, transparent: true });
        mesh = new THREE.Mesh(geo, mat);
        this.scene.add(mesh);
        this.particlePool.push(mesh);
      }

      mesh.visible = true;
      (mesh.material as THREE.MeshBasicMaterial).color.setHex(colorHex);
      (mesh.material as THREE.MeshBasicMaterial).opacity = 1.0;
      mesh.position.copy(position);

      const angle = Math.random() * Math.PI * 2;
      const speed = 2.5 + Math.random() * 5.5;
      const vx = Math.cos(angle) * speed;
      const vy = Math.sin(angle) * speed + 1.8;

      this.particles.push({
        mesh,
        velocity: new THREE.Vector3(vx, vy, (Math.random() - 0.5) * 1.5),
        life: 0,
        maxLife: 0.25 + Math.random() * 0.22,
        scaleDecay: true
      });
    }
  }

  public spawnBlockEffect(position: THREE.Vector3): void {
    this.spawnHitSparks(position, 0x00d2ff, 14);
  }

  /**
   * Character-Specific Special Attack Visual Effects
   */
  public spawnSpecialEffect(
    type: string,
    position: THREE.Vector3,
    facing: number,
    colorHex: number = 0xf97316
  ): void {
    if (type === 'fire_strike') {
      // Alex Fire Strike: Burst of orange & yellow fire sparks along punch vector
      for (let i = 0; i < 24; i++) {
        const pColor = Math.random() > 0.3 ? 0xf97316 : 0xfacc15;
        this.spawnBurstParticle(position, pColor, facing * (3 + Math.random() * 6), (Math.random() - 0.5) * 4, 0.4);
      }
    } else if (type === 'thunder_kick') {
      // Max Thunder Kick: Radial lightning arcs and blue electric sparks
      for (let i = 0; i < 28; i++) {
        const angle = Math.random() * Math.PI * 2;
        const spd = 4 + Math.random() * 5;
        this.spawnBurstParticle(position, 0x00d2ff, Math.cos(angle) * spd, Math.sin(angle) * spd, 0.35);
      }
    } else if (type === 'shadow_rush') {
      // Ryan Shadow Rush: Dark energy violet motion trails
      for (let i = 0; i < 22; i++) {
        const pColor = Math.random() > 0.4 ? 0x8b5cf6 : 0x312e81;
        this.spawnBurstParticle(position, pColor, -facing * (2 + Math.random() * 5), (Math.random() - 0.5) * 3, 0.45);
      }
    } else if (type === 'phoenix_kick') {
      // Luna Phoenix Kick: Rising golden and red flame plume
      for (let i = 0; i < 26; i++) {
        const pColor = Math.random() > 0.5 ? 0xef4444 : 0xfacc15;
        this.spawnBurstParticle(position, pColor, (Math.random() - 0.5) * 3, 4 + Math.random() * 6, 0.5);
      }
    } else if (type === 'dragon_spin') {
      // Maya Dragon Spin: Expanding circular purple ring
      for (let i = 0; i < 30; i++) {
        const angle = (i / 30) * Math.PI * 2;
        const spd = 5.5;
        this.spawnBurstParticle(position, 0xd946ef, Math.cos(angle) * spd, Math.sin(angle) * spd * 0.5, 0.4);
      }
    }
  }

  private spawnBurstParticle(pos: THREE.Vector3, colorHex: number, vx: number, vy: number, maxLife: number): void {
    let mesh = this.particlePool.find(p => !p.visible);
    if (!mesh) {
      const geo = new THREE.SphereGeometry(0.07, 6, 6);
      const mat = new THREE.MeshBasicMaterial({ color: colorHex, transparent: true });
      mesh = new THREE.Mesh(geo, mat);
      this.scene.add(mesh);
      this.particlePool.push(mesh);
    }

    mesh.visible = true;
    (mesh.material as THREE.MeshBasicMaterial).color.setHex(colorHex);
    (mesh.material as THREE.MeshBasicMaterial).opacity = 1.0;
    mesh.position.copy(pos);

    this.particles.push({
      mesh,
      velocity: new THREE.Vector3(vx, vy, (Math.random() - 0.5) * 1.5),
      life: 0,
      maxLife,
      scaleDecay: true
    });
  }

  public spawnProjectile(
    ownerId: 1 | 2,
    spawnPos: THREE.Vector3,
    direction: number,
    damage: number,
    colorHex: number = 0x38bdf8,
    specialType: string = 'fire_strike'
  ): void {
    const group = new THREE.Group();
    group.position.copy(spawnPos);
    group.position.z = 0;

    // Glowing core
    const coreGeo = new THREE.SphereGeometry(0.32, 12, 12);
    const coreMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    group.add(coreMesh);

    // Outer aura
    const auraGeo = new THREE.SphereGeometry(0.54, 12, 12);
    const auraMat = new THREE.MeshBasicMaterial({
      color: colorHex,
      transparent: true,
      opacity: 0.80,
      wireframe: true
    });
    const auraMesh = new THREE.Mesh(auraGeo, auraMat);
    group.add(auraMesh);

    // Dynamic light
    const light = new THREE.PointLight(colorHex, 2.2, 7.0);
    group.add(light);

    this.scene.add(group);

    const speed = 15.0;
    const projectile: Projectile = {
      mesh: group,
      position: group.position,
      velocity: new THREE.Vector3(direction * speed, 0, 0),
      ownerId,
      damage,
      knockback: 8.5,
      radius: 0.52,
      lifeTime: 0,
      maxLife: 2.2,
      specialType
    };

    this.projectiles.push(projectile);
  }

  public getProjectiles(): Projectile[] {
    return this.projectiles;
  }

  public removeProjectile(projectile: Projectile): void {
    const index = this.projectiles.indexOf(projectile);
    if (index !== -1) {
      this.projectiles.splice(index, 1);
      this.scene.remove(projectile.mesh);
    }
  }

  public update(dt: number, camera: THREE.PerspectiveCamera): void {
    // 1. Hit stop & Slow motion management
    if (this.hitStopTimer > 0) {
      this.hitStopTimer -= dt;
    }
    if (this.slowMoTimer > 0) {
      this.slowMoTimer -= dt;
      if (this.slowMoTimer <= 0) {
        this.slowMoFactor = 1.0;
      }
    }

    const effectiveDt = this.getEffectiveDt(dt);

    // 2. Update Projectiles
    for (let i = this.projectiles.length - 1; i >= 0; i--) {
      const proj = this.projectiles[i];
      proj.lifeTime += effectiveDt;
      proj.position.addScaledVector(proj.velocity, effectiveDt);
      proj.mesh.position.copy(proj.position);
      proj.mesh.rotation.z += effectiveDt * 12;

      // Projectile particle trail
      if (Math.random() < 0.45) {
        this.spawnHitSparks(proj.position, 0x00d2ff, 1);
      }

      if (proj.lifeTime >= proj.maxLife) {
        this.removeProjectile(proj);
      }
    }

    // 3. Update Particles
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.life += dt; // Real dt so particles don't freeze
      if (p.life >= p.maxLife) {
        p.mesh.visible = false;
        this.particles.splice(i, 1);
        continue;
      }

      p.velocity.y -= 14.0 * dt;
      p.mesh.position.addScaledVector(p.velocity, dt);

      const alpha = 1.0 - p.life / p.maxLife;
      (p.mesh.material as THREE.MeshBasicMaterial).opacity = alpha;
      if (p.scaleDecay) {
        p.mesh.scale.setScalar(alpha);
      }
    }

    // 4. Screen Shake
    if (this.shakeIntensity > 0.005) {
      this.shakeOffset.x = (Math.random() * 2 - 1) * this.shakeIntensity;
      this.shakeOffset.y = (Math.random() * 2 - 1) * this.shakeIntensity;
      this.shakeIntensity *= this.shakeDecay;

      if (this.container) {
        this.container.style.transform = `translate(${this.shakeOffset.x * 28}px, ${this.shakeOffset.y * 28}px)`;
      }
    } else {
      this.shakeIntensity = 0;
      this.shakeOffset.set(0, 0);
      if (this.container && this.container.style.transform !== '') {
        this.container.style.transform = 'translate(0px, 0px)';
      }
    }
  }

  public clearAll(): void {
    for (const proj of this.projectiles) {
      this.scene.remove(proj.mesh);
    }
    this.projectiles = [];

    for (const p of this.particles) {
      p.mesh.visible = false;
    }
    this.particles = [];
    this.slowMoTimer = 0;
    this.slowMoFactor = 1.0;
    this.hitStopTimer = 0;
  }
}
