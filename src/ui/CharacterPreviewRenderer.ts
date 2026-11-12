import * as THREE from 'three';
import { CharacterConfig } from '../characters/CharacterConfig';
import { CharacterMeshResult, ProceduralHumanoid } from '../characters/ProceduralHumanoid';
import { AnimationController } from '../characters/AnimationController';

export class CharacterPreviewRenderer {
  private canvas: HTMLCanvasElement;
  private renderer: THREE.WebGLRenderer;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private currentModelResult: CharacterMeshResult | null = null;
  private animController: AnimationController | null = null;
  private rotationAngle: number = 0;
  private baseFacingAngle: number = 0;
  private accentColor: number;

  constructor(canvasId: string, accentColor: number = 0x00d2ff, baseFacing: number = 0.2) {
    this.canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    this.accentColor = accentColor;
    this.baseFacingAngle = baseFacing;

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true
    });
    this.renderer.setSize(280, 380);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.scene = new THREE.Scene();

    // Camera framed on full-body fighter
    this.camera = new THREE.PerspectiveCamera(38, 280 / 380, 0.1, 50);
    this.camera.position.set(0, 1.05, 3.6);
    this.camera.lookAt(0, 0.95, 0);

    this.setupLighting();
    this.setupPedestal();
  }

  private setupLighting(): void {
    const ambient = new THREE.AmbientLight(0xffffff, 1.1);
    this.scene.add(ambient);

    // Key front light
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.0);
    keyLight.position.set(2, 4, 3);
    keyLight.castShadow = true;
    this.scene.add(keyLight);

    // Colored rim/back light
    const rimLight = new THREE.DirectionalLight(this.accentColor, 2.5);
    rimLight.position.set(-2.5, 3, -2);
    this.scene.add(rimLight);

    // Warm footlight
    const fillLight = new THREE.PointLight(this.accentColor, 1.2, 5);
    fillLight.position.set(0, 0.2, 1.5);
    this.scene.add(fillLight);
  }

  private setupPedestal(): void {
    const pedestalGeo = new THREE.CylinderGeometry(1.1, 1.2, 0.12, 28);
    const pedestalMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.6,
      metalness: 0.8
    });
    const pedestal = new THREE.Mesh(pedestalGeo, pedestalMat);
    pedestal.position.y = -0.06;
    pedestal.receiveShadow = true;
    this.scene.add(pedestal);

    const ringGeo = new THREE.TorusGeometry(1.12, 0.02, 8, 32);
    ringGeo.rotateX(Math.PI * 0.5);
    const ringMat = new THREE.MeshBasicMaterial({ color: this.accentColor });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.position.y = 0.005;
    this.scene.add(ring);
  }

  public setCharacter(config: CharacterConfig): void {
    if (this.currentModelResult) {
      this.scene.remove(this.currentModelResult.root);
    }

    this.currentModelResult = ProceduralHumanoid.create(config);
    this.currentModelResult.root.position.set(0, 0, 0);
    this.currentModelResult.root.rotation.y = this.baseFacingAngle;
    this.scene.add(this.currentModelResult.root);

    this.animController = new AnimationController(this.currentModelResult.bones);
    this.animController.play('idle', true);
  }

  public update(dt: number): void {
    if (!this.currentModelResult || !this.animController) return;

    // Subtle breathing animation
    this.animController.update(dt);

    // Gentle cinematic turntable oscillation
    this.rotationAngle += dt * 0.6;
    const sway = Math.sin(this.rotationAngle) * 0.22;
    this.currentModelResult.root.rotation.y = this.baseFacingAngle + sway;

    this.renderer.render(this.scene, this.camera);
  }
}
