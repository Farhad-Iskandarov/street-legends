import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { CharacterConfig } from './CharacterConfig';
import { CharacterMeshResult, ProceduralHumanoid, ArticulatedBones } from './ProceduralHumanoid';

export class CharacterModelLoader {
  private static loader: GLTFLoader = new GLTFLoader();
  private static cache: Map<string, THREE.Group> = new Map();

  /**
   * Attempts to load an external GLB/GLTF character model.
   * If not available or if loading fails, gracefully falls back to the high-detail procedural humanoid.
   */
  public static async loadCharacterModel(config: CharacterConfig): Promise<CharacterMeshResult> {
    if (!config.modelPath || config.previewImagePath || config.id === 'aynur' || config.id === 'sevil') {
      return ProceduralHumanoid.create(config);
    }

    try {
      // Check if file exists by head request or load attempt
      const gltf = await new Promise<any>((resolve, reject) => {
        CharacterModelLoader.loader.load(
          config.modelPath,
          (loadedGltf) => resolve(loadedGltf),
          undefined,
          (err) => reject(err)
        );
      });

      console.log(`[CharacterModelLoader] Successfully loaded custom 3D model for ${config.name}: ${config.modelPath}`);

      const root = gltf.scene as THREE.Group;
      root.name = `custom_fighter_${config.id}`;

      // Apply character scale and position offsets
      root.scale.set(config.scale.x, config.scale.y, config.scale.z);
      if (config.positionOffset) {
        root.position.set(config.positionOffset.x, config.positionOffset.y, config.positionOffset.z);
      }

      // Configure shadows and material quality
      root.traverse((child: THREE.Object3D) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh;
          mesh.castShadow = true;
          mesh.receiveShadow = true;
          if (mesh.material) {
            const mat = mesh.material as THREE.MeshStandardMaterial;
            if (mat.roughness !== undefined) {
              mat.roughness = Math.max(0.3, mat.roughness);
            }
          }
        }
      });

      // Find or create articulated bones structure for animation controller
      const bones = CharacterModelLoader.mapOrSynthesizeBones(root);

      // Attach invisible hitboxes and projectile spawn point
      const punchHitboxGeo = new THREE.SphereGeometry(0.35, 8, 8);
      const punchHitboxMat = new THREE.MeshBasicMaterial({ visible: false, wireframe: true });
      const punchHitboxMesh = new THREE.Mesh(punchHitboxGeo, punchHitboxMat);
      bones.rightHand.add(punchHitboxMesh);

      const kickHitboxGeo = new THREE.SphereGeometry(0.42, 8, 8);
      const kickHitboxMat = new THREE.MeshBasicMaterial({ visible: false, wireframe: true });
      const kickHitboxMesh = new THREE.Mesh(kickHitboxGeo, kickHitboxMat);
      bones.rightFoot.add(kickHitboxMesh);

      const specialOrigin = new THREE.Object3D();
      specialOrigin.position.set(0.2, 0.1, 0.4);
      bones.chest.add(specialOrigin);

      return {
        root,
        bones,
        punchHitboxMesh,
        kickHitboxMesh,
        specialOrigin
      };
    } catch (err) {
      console.warn(`[CharacterModelLoader] Notice: Custom model "${config.modelPath}" for ${config.name} not found or failed to load. Using procedural articulated humanoid fallback.`);
      return ProceduralHumanoid.create(config);
    }
  }

  /**
   * Maps common humanoid bone naming schemes to our standardized ArticulatedBones structure,
   * or synthesizes bone anchor nodes if the model is unrigged.
   */
  private static mapOrSynthesizeBones(root: THREE.Group): ArticulatedBones {
    const boneMap: Partial<Record<keyof ArticulatedBones, THREE.Group>> = {};

    const nameKeywords: Record<keyof ArticulatedBones, string[]> = {
      root: ['root'],
      hips: ['hips', 'pelvis'],
      torso: ['spine', 'abdomen', 'torso'],
      chest: ['chest', 'spine1', 'spine2'],
      head: ['head'],
      leftUpperArm: ['leftupperarm', 'leftarm', 'upperarm_l', 'arm_l'],
      leftForearm: ['leftforearm', 'lowerarm_l', 'forearm_l'],
      leftHand: ['lefthand', 'hand_l', 'wrist_l'],
      rightUpperArm: ['rightupperarm', 'rightarm', 'upperarm_r', 'arm_r'],
      rightForearm: ['rightforearm', 'lowerarm_r', 'forearm_r'],
      rightHand: ['righthand', 'hand_r', 'wrist_r'],
      leftThigh: ['leftupleg', 'thigh_l', 'upperleg_l', 'leftthigh'],
      leftShin: ['leftleg', 'shin_l', 'lowerleg_l', 'calf_l'],
      leftFoot: ['leftfoot', 'foot_l', 'ankle_l'],
      rightThigh: ['rightupleg', 'thigh_r', 'upperleg_r', 'rightthigh'],
      rightShin: ['rightleg', 'shin_r', 'lowerleg_r', 'calf_r'],
      rightFoot: ['rightfoot', 'foot_r', 'ankle_r']
    };

    root.traverse((obj: THREE.Object3D) => {
      const lowerName = obj.name.toLowerCase().replace(/[-_.:]/g, '');
      for (const [boneKey, keywords] of Object.entries(nameKeywords)) {
        const key = boneKey as keyof ArticulatedBones;
        if (!boneMap[key] && keywords.some(kw => lowerName.includes(kw.replace(/[-_.:]/g, '')))) {
          boneMap[key] = obj as THREE.Group;
        }
      }
    });

    // Synthesize any missing bone references to prevent null errors
    const ensureBone = (key: keyof ArticulatedBones, parent?: THREE.Group, defaultY: number = 0): THREE.Group => {
      if (!boneMap[key]) {
        const synthesized = new THREE.Group();
        synthesized.name = `synth_${key}`;
        synthesized.position.y = defaultY;
        if (parent) {
          parent.add(synthesized);
        } else {
          root.add(synthesized);
        }
        boneMap[key] = synthesized;
      }
      return boneMap[key]!;
    };

    const rootBone = ensureBone('root', undefined, 0);
    const hips = ensureBone('hips', rootBone, 0.95);
    const torso = ensureBone('torso', hips, 0.12);
    const chest = ensureBone('chest', torso, 0.32);
    const head = ensureBone('head', chest, 0.38);

    const leftUpperArm = ensureBone('leftUpperArm', chest, 0.26);
    const leftForearm = ensureBone('leftForearm', leftUpperArm, -0.32);
    const leftHand = ensureBone('leftHand', leftForearm, -0.30);

    const rightUpperArm = ensureBone('rightUpperArm', chest, 0.26);
    const rightForearm = ensureBone('rightForearm', rightUpperArm, -0.32);
    const rightHand = ensureBone('rightHand', rightForearm, -0.30);

    const leftThigh = ensureBone('leftThigh', hips, -0.06);
    const leftShin = ensureBone('leftShin', leftThigh, -0.44);
    const leftFoot = ensureBone('leftFoot', leftShin, -0.44);

    const rightThigh = ensureBone('rightThigh', hips, -0.06);
    const rightShin = ensureBone('rightShin', rightThigh, -0.44);
    const rightFoot = ensureBone('rightFoot', rightShin, -0.44);

    return {
      root: rootBone,
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
  }
}
