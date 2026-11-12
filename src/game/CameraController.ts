import * as THREE from 'three';
import { Fighter } from '../characters/Fighter';

export class CameraController {
  public camera: THREE.PerspectiveCamera;
  private currentTarget: THREE.Vector3 = new THREE.Vector3(0, 1.6, 0);
  private currentPos: THREE.Vector3 = new THREE.Vector3(0, 1.6, 10.5);

  private minZ: number = 8.5;
  private maxZ: number = 15.0;
  private baseY: number = 1.8;

  constructor(fov: number = 45, aspect: number = 16 / 9) {
    this.camera = new THREE.PerspectiveCamera(fov, aspect, 0.1, 1000);
    this.camera.position.set(0, this.baseY, 11);
    this.camera.lookAt(0, this.baseY, 0);
  }

  public reset(): void {
    this.currentPos.set(0, this.baseY, 11);
    this.currentTarget.set(0, this.baseY, 0);
    this.camera.position.copy(this.currentPos);
    this.camera.lookAt(this.currentTarget);
  }

  public update(dt: number, f1: Fighter, f2: Fighter, arenaHalfWidth: number): void {
    // 1. Calculate midpoint between fighters
    const midX = (f1.position.x + f2.position.x) * 0.5;
    const midY = (f1.position.y + f2.position.y) * 0.5;

    // 2. Calculate separation distance
    const dist = Math.abs(f1.position.x - f2.position.x);

    // 3. Dynamic Zoom based on distance
    // When close (dist ~ 2), Z ~ 9; when far (dist ~ 14), Z ~ 14.5
    const targetZ = THREE.MathUtils.clamp(8.5 + dist * 0.45, this.minZ, this.maxZ);

    // 4. Clamped camera X so camera doesn't show beyond arena backdrops
    const maxCamX = arenaHalfWidth * 0.45;
    const targetX = THREE.MathUtils.clamp(midX, -maxCamX, maxCamX);
    const targetY = this.baseY + Math.max(0, midY * 0.35);

    // 5. Smooth Lerp
    const lerpSpeed = 7.0 * dt;
    this.currentPos.x += (targetX - this.currentPos.x) * lerpSpeed;
    this.currentPos.y += (targetY - this.currentPos.y) * lerpSpeed;
    this.currentPos.z += (targetZ - this.currentPos.z) * lerpSpeed;

    this.currentTarget.x += (targetX - this.currentTarget.x) * lerpSpeed;
    this.currentTarget.y += ((targetY - 0.2) - this.currentTarget.y) * lerpSpeed;
    this.currentTarget.z = 0;

    this.camera.position.copy(this.currentPos);
    this.camera.lookAt(this.currentTarget);
  }

  public onResize(width: number, height: number): void {
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  }
}
