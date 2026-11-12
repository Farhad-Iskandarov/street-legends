import * as THREE from 'three';
import { CharacterConfig } from './CharacterConfig';

export interface ArticulatedBones {
  root: THREE.Group;
  hips: THREE.Group;
  torso: THREE.Group;
  chest: THREE.Group;
  head: THREE.Group;
  leftUpperArm: THREE.Group;
  leftForearm: THREE.Group;
  leftHand: THREE.Group;
  rightUpperArm: THREE.Group;
  rightForearm: THREE.Group;
  rightHand: THREE.Group;
  leftThigh: THREE.Group;
  leftShin: THREE.Group;
  leftFoot: THREE.Group;
  rightThigh: THREE.Group;
  rightShin: THREE.Group;
  rightFoot: THREE.Group;
}

export interface CharacterMeshResult {
  root: THREE.Group;
  bones: ArticulatedBones;
  punchHitboxMesh: THREE.Mesh;
  kickHitboxMesh: THREE.Mesh;
  specialOrigin: THREE.Object3D;
}

export class ProceduralHumanoid {
  public static create(config: CharacterConfig): CharacterMeshResult {
    const root = new THREE.Group();
    root.name = `fighter_${config.id}`;

    const app = config.appearance;
    const isFemale = app.gender === 'female';

    // Physically-Based Materials
    const skinMat = new THREE.MeshStandardMaterial({
      color: app.skinTone,
      roughness: 0.68,
      metalness: 0.05
    });

    const lipMat = new THREE.MeshStandardMaterial({
      color: ProceduralHumanoid.blendColor(app.skinTone, 0xb91c1c, 0.25),
      roughness: 0.55,
      metalness: 0.05
    });

    const hairMat = new THREE.MeshStandardMaterial({
      color: app.hairColor,
      roughness: 0.55,
      metalness: 0.12
    });

    const primaryMat = new THREE.MeshStandardMaterial({
      color: app.primaryColor,
      roughness: 0.72,
      metalness: 0.15
    });

    const secondaryMat = new THREE.MeshStandardMaterial({
      color: app.secondaryColor,
      roughness: 0.78,
      metalness: 0.1
    });

    const accentMat = new THREE.MeshStandardMaterial({
      color: app.accentColor,
      roughness: 0.35,
      metalness: 0.45
    });

    const scleraMat = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      roughness: 0.2
    });

    const irisMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.15
    });

    // Anatomical Proportions
    const torsoW = isFemale ? 0.44 : 0.54;
    const torsoD = isFemale ? 0.26 : 0.34;
    const hipsW = isFemale ? 0.42 : 0.46;
    const legRadius = isFemale ? 0.11 : 0.135;
    const armRadius = isFemale ? 0.08 : 0.105;

    // --- SKELETON TREE ---
    const hips = new THREE.Group();
    hips.position.y = 0.95;
    root.add(hips);

    // Hips / Pelvis mesh
    const hipsGeo = new THREE.CylinderGeometry(hipsW * 0.5, hipsW * 0.44, 0.24, 14);
    const hipsMesh = new THREE.Mesh(hipsGeo, secondaryMat);
    hipsMesh.castShadow = true;
    hipsMesh.receiveShadow = true;
    hips.add(hipsMesh);

    // Belt / Waistband
    const beltGeo = new THREE.CylinderGeometry(hipsW * 0.52, hipsW * 0.52, 0.08, 14);
    const beltMesh = new THREE.Mesh(beltGeo, accentMat);
    beltMesh.position.y = 0.09;
    hips.add(beltMesh);

    // Torso (Abdomen & Lower Spine)
    const torso = new THREE.Group();
    torso.position.y = 0.12;
    hips.add(torso);

    const torsoGeo = new THREE.CylinderGeometry(torsoW * 0.48, hipsW * 0.46, 0.32, 14);
    const torsoMesh = new THREE.Mesh(torsoGeo, primaryMat);
    torsoMesh.position.y = 0.16;
    torsoMesh.castShadow = true;
    torsoMesh.receiveShadow = true;
    torso.add(torsoMesh);

    // Chest / Upper Torso
    const chest = new THREE.Group();
    chest.position.y = 0.32;
    torso.add(chest);

    const chestGeo = new THREE.BoxGeometry(torsoW, 0.34, torsoD);
    const chestMesh = new THREE.Mesh(chestGeo, primaryMat);
    chestMesh.position.y = 0.17;
    chestMesh.castShadow = true;
    chestMesh.receiveShadow = true;
    chest.add(chestMesh);

    // Pectorals / Chest armor accent
    const pecGeo = new THREE.BoxGeometry(torsoW * 0.9, 0.14, 0.04);
    const pecMesh = new THREE.Mesh(pecGeo, accentMat);
    pecMesh.position.set(0, 0.22, torsoD * 0.5 + 0.015);
    chest.add(pecMesh);

    // Head Group
    const head = new THREE.Group();
    head.position.y = 0.40;
    chest.add(head);

    // Neck
    const neckGeo = new THREE.CylinderGeometry(0.09, 0.115, 0.14, 12);
    const neckMesh = new THREE.Mesh(neckGeo, skinMat);
    neckMesh.position.y = 0.07;
    neckMesh.castShadow = true;
    head.add(neckMesh);

    // Cranium
    const headGeo = new THREE.SphereGeometry(0.185, 18, 16);
    headGeo.scale(1.0, 1.22, 1.05);
    const headMesh = new THREE.Mesh(headGeo, skinMat);
    headMesh.position.y = 0.28;
    headMesh.castShadow = true;
    head.add(headMesh);

    // Sculpted Jawline & Chin
    const jawGeo = new THREE.ConeGeometry(0.13, 0.18, 5);
    jawGeo.rotateY(Math.PI);
    const jawMesh = new THREE.Mesh(jawGeo, skinMat);
    jawMesh.position.set(0, 0.21, 0.07);
    head.add(jawMesh);

    // Nose Bridge & Tip
    const noseGeo = new THREE.ConeGeometry(0.032, 0.08, 4);
    noseGeo.rotateX(Math.PI * 0.4);
    const noseMesh = new THREE.Mesh(noseGeo, skinMat);
    noseMesh.position.set(0, 0.27, 0.20);
    head.add(noseMesh);

    // Lips
    const lipGeo = new THREE.BoxGeometry(0.07, 0.022, 0.03);
    const lipsMesh = new THREE.Mesh(lipGeo, lipMat);
    lipsMesh.position.set(0, 0.21, 0.18);
    head.add(lipsMesh);

    // Ears
    const earGeo = new THREE.SphereGeometry(0.04, 8, 8);
    earGeo.scale(0.5, 1.4, 1.0);
    const leftEar = new THREE.Mesh(earGeo, skinMat);
    leftEar.position.set(0.19, 0.28, -0.02);
    const rightEar = new THREE.Mesh(earGeo, skinMat);
    rightEar.position.set(-0.19, 0.28, -0.02);
    head.add(leftEar, rightEar);

    // Eyes: Sclera + Iris
    const eyeRadius = 0.032;
    const eyeGeo = new THREE.SphereGeometry(eyeRadius, 10, 10);
    const irisGeo = new THREE.SphereGeometry(eyeRadius * 0.65, 8, 8);

    const leftSclera = new THREE.Mesh(eyeGeo, scleraMat);
    leftSclera.position.set(0.065, 0.285, 0.165);
    const leftIris = new THREE.Mesh(irisGeo, irisMat);
    leftIris.position.set(0.065, 0.285, 0.19);

    const rightSclera = new THREE.Mesh(eyeGeo, scleraMat);
    rightSclera.position.set(-0.065, 0.285, 0.165);
    const rightIris = new THREE.Mesh(irisGeo, irisMat);
    rightIris.position.set(-0.065, 0.285, 0.19);

    head.add(leftSclera, leftIris, rightSclera, rightIris);

    // Eyebrows
    const browGeo = new THREE.BoxGeometry(0.065, 0.022, 0.03);
    const leftBrow = new THREE.Mesh(browGeo, hairMat);
    leftBrow.position.set(0.065, 0.325, 0.18);
    leftBrow.rotation.z = -0.12;

    const rightBrow = new THREE.Mesh(browGeo, hairMat);
    rightBrow.position.set(-0.065, 0.325, 0.18);
    rightBrow.rotation.z = 0.12;
    head.add(leftBrow, rightBrow);

    // Hairstyle & Headgear
    ProceduralHumanoid.createHairStyle(head, app.hairStyle, hairMat, accentMat);

    // --- ARMS ---
    // Left Arm
    const leftUpperArm = new THREE.Group();
    leftUpperArm.position.set(torsoW * 0.55, 0.26, 0);
    chest.add(leftUpperArm);

    const shoulderGeo = new THREE.SphereGeometry(armRadius * 1.3, 12, 12);
    const leftShoulderMesh = new THREE.Mesh(shoulderGeo, primaryMat);
    leftUpperArm.add(leftShoulderMesh);

    const upperArmGeo = new THREE.CylinderGeometry(armRadius * 0.98, armRadius * 0.86, 0.32, 12);
    upperArmGeo.translate(0, -0.16, 0);
    const leftUpperArmMesh = new THREE.Mesh(upperArmGeo, primaryMat);
    leftUpperArmMesh.castShadow = true;
    leftUpperArm.add(leftUpperArmMesh);

    const leftForearm = new THREE.Group();
    leftForearm.position.set(0, -0.32, 0);
    leftUpperArm.add(leftForearm);

    const forearmGeo = new THREE.CylinderGeometry(armRadius * 0.88, armRadius * 0.76, 0.30, 12);
    forearmGeo.translate(0, -0.15, 0);
    const leftForearmMesh = new THREE.Mesh(forearmGeo, skinMat);
    leftForearmMesh.castShadow = true;
    leftForearm.add(leftForearmMesh);

    // Forearm guard / wraps
    const wrapGeo = new THREE.CylinderGeometry(armRadius * 0.92, armRadius * 0.82, 0.18, 12);
    wrapGeo.translate(0, -0.18, 0);
    const leftWrapMesh = new THREE.Mesh(wrapGeo, accentMat);
    leftForearm.add(leftWrapMesh);

    const leftHand = new THREE.Group();
    leftHand.position.set(0, -0.30, 0);
    leftForearm.add(leftHand);

    const fistGeo = new THREE.BoxGeometry(armRadius * 1.8, armRadius * 2.2, armRadius * 2.0);
    const leftHandMesh = new THREE.Mesh(fistGeo, accentMat);
    leftHandMesh.castShadow = true;
    leftHand.add(leftHandMesh);

    // Right Arm
    const rightUpperArm = new THREE.Group();
    rightUpperArm.position.set(-torsoW * 0.55, 0.26, 0);
    chest.add(rightUpperArm);

    const rightShoulderMesh = new THREE.Mesh(shoulderGeo, primaryMat);
    rightUpperArm.add(rightShoulderMesh);

    const rightUpperArmMesh = new THREE.Mesh(upperArmGeo, primaryMat);
    rightUpperArmMesh.castShadow = true;
    rightUpperArm.add(rightUpperArmMesh);

    const rightForearm = new THREE.Group();
    rightForearm.position.set(0, -0.32, 0);
    rightUpperArm.add(rightForearm);

    const rightForearmMesh = new THREE.Mesh(forearmGeo, skinMat);
    rightForearmMesh.castShadow = true;
    rightForearm.add(rightForearmMesh);

    const rightWrapMesh = new THREE.Mesh(wrapGeo, accentMat);
    rightForearm.add(rightWrapMesh);

    const rightHand = new THREE.Group();
    rightHand.position.set(0, -0.30, 0);
    rightForearm.add(rightHand);

    const rightHandMesh = new THREE.Mesh(fistGeo, accentMat);
    rightHandMesh.castShadow = true;
    rightHand.add(rightHandMesh);

    // --- LEGS ---
    // Left Leg
    const leftThigh = new THREE.Group();
    leftThigh.position.set(hipsW * 0.3, -0.06, 0);
    hips.add(leftThigh);

    const thighGeo = new THREE.CylinderGeometry(legRadius * 1.12, legRadius * 0.92, 0.44, 12);
    thighGeo.translate(0, -0.22, 0);
    const leftThighMesh = new THREE.Mesh(thighGeo, secondaryMat);
    leftThighMesh.castShadow = true;
    leftThigh.add(leftThighMesh);

    const leftShin = new THREE.Group();
    leftShin.position.set(0, -0.44, 0);
    leftThigh.add(leftShin);

    const shinGeo = new THREE.CylinderGeometry(legRadius * 0.90, legRadius * 0.80, 0.44, 12);
    shinGeo.translate(0, -0.22, 0);
    const leftShinMesh = new THREE.Mesh(shinGeo, secondaryMat);
    leftShinMesh.castShadow = true;
    leftShin.add(leftShinMesh);

    const leftFoot = new THREE.Group();
    leftFoot.position.set(0, -0.44, 0);
    leftShin.add(leftFoot);

    const footGeo = new THREE.BoxGeometry(legRadius * 1.6, 0.11, 0.32);
    footGeo.translate(0, -0.055, 0.08);
    const leftFootMesh = new THREE.Mesh(footGeo, accentMat);
    leftFootMesh.castShadow = true;
    leftFoot.add(leftFootMesh);

    // Right Leg
    const rightThigh = new THREE.Group();
    rightThigh.position.set(-hipsW * 0.3, -0.06, 0);
    hips.add(rightThigh);

    const rightThighMesh = new THREE.Mesh(thighGeo, secondaryMat);
    rightThighMesh.castShadow = true;
    rightThigh.add(rightThighMesh);

    const rightShin = new THREE.Group();
    rightShin.position.set(0, -0.44, 0);
    rightThigh.add(rightShin);

    const rightShinMesh = new THREE.Mesh(shinGeo, secondaryMat);
    rightShinMesh.castShadow = true;
    rightShin.add(rightShinMesh);

    const rightFoot = new THREE.Group();
    rightFoot.position.set(0, -0.44, 0);
    rightShin.add(rightFoot);

    const rightFootMesh = new THREE.Mesh(footGeo, accentMat);
    rightFootMesh.castShadow = true;
    rightFoot.add(rightFootMesh);

    // Scale configuration
    root.scale.set(app.scale.x, app.scale.y, app.scale.z);

    // Hitboxes
    const punchHitboxGeo = new THREE.SphereGeometry(0.35, 8, 8);
    const punchHitboxMat = new THREE.MeshBasicMaterial({ visible: false, wireframe: true, color: 0xff0000 });
    const punchHitboxMesh = new THREE.Mesh(punchHitboxGeo, punchHitboxMat);
    rightHand.add(punchHitboxMesh);

    const kickHitboxGeo = new THREE.SphereGeometry(0.42, 8, 8);
    const kickHitboxMat = new THREE.MeshBasicMaterial({ visible: false, wireframe: true, color: 0xffaa00 });
    const kickHitboxMesh = new THREE.Mesh(kickHitboxGeo, kickHitboxMat);
    rightFoot.add(kickHitboxMesh);

    const specialOrigin = new THREE.Object3D();
    specialOrigin.position.set(0.2, 0.1, 0.4);
    chest.add(specialOrigin);

    const bones: ArticulatedBones = {
      root,
      hips,
      torso,
      chest,
      head,
      leftUpperArm,
      leftForearm,
      leftHand,
      rightUpperArm,
      rightForearm,
      rightHand,
      leftThigh,
      leftShin,
      leftFoot,
      rightThigh,
      rightShin,
      rightFoot
    };

    return {
      root,
      bones,
      punchHitboxMesh,
      kickHitboxMesh,
      specialOrigin
    };
  }

  private static blendColor(hex1: number, hex2: number, ratio: number): number {
    const c1 = new THREE.Color(hex1);
    const c2 = new THREE.Color(hex2);
    c1.lerp(c2, ratio);
    return c1.getHex();
  }

  private static createHairStyle(head: THREE.Group, style: string, hairMat: THREE.Material, accentMat: THREE.Material) {
    if (style === 'short') {
      const hairCapGeo = new THREE.SphereGeometry(0.19, 16, 14, 0, Math.PI * 2, 0, Math.PI * 0.62);
      hairCapGeo.scale(1.04, 1.22, 1.08);
      const hairCap = new THREE.Mesh(hairCapGeo, hairMat);
      hairCap.position.y = 0.30;
      head.add(hairCap);

      const fringeGeo = new THREE.BoxGeometry(0.18, 0.08, 0.08);
      const fringe = new THREE.Mesh(fringeGeo, hairMat);
      fringe.position.set(0.04, 0.40, 0.16);
      fringe.rotation.z = -0.2;
      head.add(fringe);
    } else if (style === 'spiky') {
      const hairCapGeo = new THREE.SphereGeometry(0.19, 14, 12, 0, Math.PI * 2, 0, Math.PI * 0.58);
      const hairCap = new THREE.Mesh(hairCapGeo, hairMat);
      hairCap.position.y = 0.30;
      head.add(hairCap);

      for (let i = -2; i <= 2; i++) {
        const spikeGeo = new THREE.ConeGeometry(0.055, 0.18, 6);
        spikeGeo.rotateX(Math.PI * 0.15);
        spikeGeo.rotateZ(i * 0.22);
        const spike = new THREE.Mesh(spikeGeo, hairMat);
        spike.position.set(i * 0.065, 0.46, 0.02 - Math.abs(i) * 0.02);
        head.add(spike);
      }
    } else if (style === 'hoodie') {
      const hoodGeo = new THREE.SphereGeometry(0.24, 16, 16, 0, Math.PI * 2, 0, Math.PI * 0.78);
      const hoodMesh = new THREE.Mesh(hoodGeo, hairMat);
      hoodMesh.position.y = 0.28;
      head.add(hoodMesh);

      const bandGeo = new THREE.TorusGeometry(0.19, 0.035, 8, 16);
      bandGeo.rotateX(Math.PI * 0.5);
      const bandMesh = new THREE.Mesh(bandGeo, accentMat);
      bandMesh.position.y = 0.31;
      head.add(bandMesh);
    } else if (style === 'ponytail') {
      const hairCapGeo = new THREE.SphereGeometry(0.19, 16, 14, 0, Math.PI * 2, 0, Math.PI * 0.65);
      const hairCap = new THREE.Mesh(hairCapGeo, hairMat);
      hairCap.position.y = 0.29;
      head.add(hairCap);

      const tailRoot = new THREE.Group();
      tailRoot.position.set(0, 0.40, -0.16);
      const tieGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.05, 8);
      const tieMesh = new THREE.Mesh(tieGeo, accentMat);
      tieMesh.rotation.x = Math.PI * 0.5;
      tailRoot.add(tieMesh);

      const tailGeo = new THREE.CylinderGeometry(0.045, 0.015, 0.48, 8);
      tailGeo.translate(0, -0.24, 0);
      const tailMesh = new THREE.Mesh(tailGeo, hairMat);
      tailMesh.rotation.x = -0.35;
      tailRoot.add(tailMesh);
      head.add(tailRoot);

      const maskGeo = new THREE.CylinderGeometry(0.14, 0.12, 0.14, 10, 1, false, 0, Math.PI);
      const maskMesh = new THREE.Mesh(maskGeo, accentMat);
      maskMesh.position.set(0, 0.20, 0.05);
      head.add(maskMesh);
    } else if (style === 'braids') {
      const bunGeo = new THREE.SphereGeometry(0.12, 12, 12);
      const bun = new THREE.Mesh(bunGeo, hairMat);
      bun.position.set(0, 0.46, -0.05);
      head.add(bun);

      const headwrapGeo = new THREE.TorusGeometry(0.195, 0.038, 8, 16);
      headwrapGeo.rotateX(Math.PI * 0.5);
      const headwrap = new THREE.Mesh(headwrapGeo, accentMat);
      headwrap.position.y = 0.32;
      head.add(headwrap);

      const braidGeo = new THREE.CylinderGeometry(0.025, 0.015, 0.38, 6);
      braidGeo.translate(0, -0.19, 0);
      const leftBraid = new THREE.Mesh(braidGeo, hairMat);
      leftBraid.position.set(0.16, 0.28, -0.05);
      const rightBraid = new THREE.Mesh(braidGeo, hairMat);
      rightBraid.position.set(-0.16, 0.28, -0.05);
      head.add(leftBraid, rightBraid);
    }
  }
}
