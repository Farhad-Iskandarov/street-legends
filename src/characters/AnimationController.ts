import { ArticulatedBones } from './ProceduralHumanoid';

export type AnimationState =
  | 'idle'
  | 'walk_forward'
  | 'walk_backward'
  | 'jump'
  | 'crouch'
  | 'punch'
  | 'punch_light'
  | 'punch_heavy'
  | 'punch_jump'
  | 'punch_crouch'
  | 'kick'
  | 'kick_light'
  | 'kick_heavy'
  | 'kick_jump'
  | 'kick_crouch'
  | 'special'
  | 'special_alex'
  | 'special_max'
  | 'special_ryan'
  | 'special_luna'
  | 'special_maya'
  | 'block'
  | 'block_low'
  | 'hurt'
  | 'hurt_high'
  | 'hurt_low'
  | 'hurt_heavy'
  | 'ko'
  | 'victory'
  | 'victory_alex'
  | 'victory_max'
  | 'victory_ryan'
  | 'victory_luna'
  | 'victory_maya';

interface BoneTransform {
  pos?: [number, number, number];
  rot: [number, number, number]; // Euler radians [x, y, z]
}

type Pose = Partial<Record<keyof ArticulatedBones, BoneTransform>>;

export class AnimationController {
  private bones: ArticulatedBones;
  private currentState: AnimationState = 'idle';
  private previousState: AnimationState = 'idle';
  private stateTime: number = 0;
  private transitionAlpha: number = 1.0;
  private transitionDuration: number = 0.10;

  private defaultHipsY: number = 0.95;

  constructor(bones: ArticulatedBones) {
    this.bones = bones;
    this.defaultHipsY = bones.hips.position.y;
  }

  public play(state: AnimationState, forceReset: boolean = false): void {
    if (this.currentState === state && !forceReset) return;

    this.previousState = this.currentState;
    this.currentState = state;
    this.stateTime = 0;
    this.transitionAlpha = 0;
  }

  public getState(): AnimationState {
    return this.currentState;
  }

  public getStateTime(): number {
    return this.stateTime;
  }

  public update(dt: number): void {
    this.stateTime += dt;
    if (this.transitionAlpha < 1.0) {
      this.transitionAlpha = Math.min(1.0, this.transitionAlpha + dt / this.transitionDuration);
    }

    const currentPose = this.samplePose(this.currentState, this.stateTime);
    const prevPose = this.samplePose(this.previousState, this.stateTime);

    this.applyBlendedPose(prevPose, currentPose, this.transitionAlpha);
    this.updateAvatarSprite(this.stateTime);
  }

  private updateAvatarSprite(t: number): void {
    const avatarGroup = this.bones.root?.getObjectByName('aynur_avatar_group');
    if (!avatarGroup) return;

    const dir = avatarGroup.scale.x < 0 ? -1 : 1;
    let posX = 0;
    let posY = 0;
    let rotZ = 0;
    let scaleX = 1.0;
    let scaleY = 1.0;

    switch (this.currentState) {
      case 'idle': {
        const breathe = Math.sin(t * 3.2) * 0.012;
        scaleY = 1.0 + breathe;
        scaleX = 1.0 - breathe * 0.35;
        break;
      }
      case 'walk_forward':
      case 'walk_backward': {
        const walkDir = this.currentState === 'walk_forward' ? 1 : -0.8;
        const cycle = Math.sin(t * 9.0);
        posY = Math.abs(cycle) * 0.06;
        rotZ = -0.045 * walkDir * dir + cycle * 0.02;
        break;
      }
      case 'jump': {
        scaleY = 1.03;
        scaleX = 0.98;
        rotZ = -0.04 * dir;
        break;
      }
      case 'crouch':
      case 'block_low': {
        scaleY = 0.76;
        scaleX = 1.04;
        rotZ = -0.04 * dir;
        break;
      }
      case 'block': {
        scaleY = 0.96;
        posX = -0.06 * dir;
        rotZ = 0.05 * dir;
        break;
      }
      case 'punch':
      case 'punch_light':
      case 'punch_heavy':
      case 'punch_jump':
      case 'punch_crouch': {
        const isHeavy = this.currentState === 'punch_heavy';
        const dur = isHeavy ? 0.36 : 0.20;
        const p = Math.min(1.0, t / dur);
        const reach = p < 0.38 ? p / 0.38 : 1.0 - (p - 0.38) / 0.62;
        posX = (isHeavy ? 0.36 : 0.22) * reach * dir;
        rotZ = -(isHeavy ? 0.12 : 0.07) * reach * dir;
        scaleY = this.currentState === 'punch_crouch' ? 0.78 : 1.0;
        scaleX = 1.0 + 0.04 * reach;
        break;
      }
      case 'kick':
      case 'kick_light':
      case 'kick_heavy':
      case 'kick_jump':
      case 'kick_crouch': {
        const isHeavy = this.currentState === 'kick_heavy';
        const dur = isHeavy ? 0.42 : 0.26;
        const p = Math.min(1.0, t / dur);
        const ext = p < 0.40 ? p / 0.40 : 1.0 - (p - 0.40) / 0.60;
        posX = (isHeavy ? 0.42 : 0.28) * ext * dir;
        posY = (isHeavy ? 0.10 : 0.04) * ext;
        rotZ = -(isHeavy ? 0.14 : 0.09) * ext * dir;
        scaleY = this.currentState === 'kick_crouch' ? 0.76 : 1.0;
        scaleX = 1.0 + 0.05 * ext;
        break;
      }
      case 'special':
      case 'special_alex':
      case 'special_max':
      case 'special_ryan':
      case 'special_luna':
      case 'special_maya': {
        const dur = 0.50;
        const p = Math.min(1.0, t / dur);
        const ext = Math.sin(p * Math.PI);
        posX = 0.48 * ext * dir;
        posY = 0.20 * ext;
        rotZ = -0.16 * ext * dir;
        scaleX = 1.0 + 0.06 * ext;
        scaleY = 1.0 + 0.04 * ext;
        break;
      }
      case 'hurt':
      case 'hurt_high':
      case 'hurt_low':
      case 'hurt_heavy': {
        const dur = 0.28;
        const p = Math.min(1.0, t / dur);
        const recoil = Math.sin(p * Math.PI);
        posX = -0.18 * recoil * dir;
        rotZ = 0.15 * recoil * dir;
        break;
      }
      case 'ko': {
        const p = Math.min(1.0, t / 0.55);
        const ease = 1 - Math.pow(1 - p, 3);
        rotZ = 1.48 * ease * dir;
        posY = 0.12 * Math.sin(p * Math.PI);
        break;
      }
      case 'victory':
      case 'victory_alex':
      case 'victory_max':
      case 'victory_ryan':
      case 'victory_luna':
      case 'victory_maya': {
        posY = Math.abs(Math.sin(t * 5.0)) * 0.12;
        break;
      }
    }

    avatarGroup.position.set(posX, posY, 0);
    avatarGroup.rotation.set(0, 0, rotZ);
    avatarGroup.scale.set(dir * scaleX, scaleY, 1.0);
  }

  private applyBlendedPose(poseA: Pose, poseB: Pose, alpha: number): void {
    const boneKeys: (keyof ArticulatedBones)[] = [
      'hips', 'torso', 'chest', 'head',
      'leftUpperArm', 'leftForearm', 'leftHand',
      'rightUpperArm', 'rightForearm', 'rightHand',
      'leftThigh', 'leftShin', 'leftFoot',
      'rightThigh', 'rightShin', 'rightFoot'
    ];

    for (const key of boneKeys) {
      const bone = this.bones[key];
      if (!bone) continue;

      const tA = poseA[key] || { rot: [0, 0, 0] };
      const tB = poseB[key] || { rot: [0, 0, 0] };

      bone.rotation.x = tA.rot[0] + (tB.rot[0] - tA.rot[0]) * alpha;
      bone.rotation.y = tA.rot[1] + (tB.rot[1] - tA.rot[1]) * alpha;
      bone.rotation.z = tA.rot[2] + (tB.rot[2] - tA.rot[2]) * alpha;

      if (tA.pos || tB.pos) {
        const defY = key === 'hips' ? this.defaultHipsY : 0;
        const pAx = tA.pos ? tA.pos[0] : 0;
        const pAy = tA.pos ? tA.pos[1] : defY;
        const pAz = tA.pos ? tA.pos[2] : 0;

        const pBx = tB.pos ? tB.pos[0] : 0;
        const pBy = tB.pos ? tB.pos[1] : defY;
        const pBz = tB.pos ? tB.pos[2] : 0;

        bone.position.x = pAx + (pBx - pAx) * alpha;
        bone.position.y = pAy + (pBy - pAy) * alpha;
        bone.position.z = pAz + (pBz - pAz) * alpha;
      }
    }
  }

  private samplePose(state: AnimationState, t: number): Pose {
    switch (state) {
      case 'idle':
        return this.getPoseIdle(t);
      case 'walk_forward':
        return this.getPoseWalk(t, 1.0);
      case 'walk_backward':
        return this.getPoseWalk(t, -0.8);
      case 'jump':
        return this.getPoseJump(t);
      case 'crouch':
        return this.getPoseCrouch(t);

      // Punches
      case 'punch':
      case 'punch_light':
        return this.getPosePunchLight(t);
      case 'punch_heavy':
        return this.getPosePunchHeavy(t);
      case 'punch_jump':
        return this.getPosePunchJump(t);
      case 'punch_crouch':
        return this.getPosePunchCrouch(t);

      // Kicks
      case 'kick':
      case 'kick_light':
        return this.getPoseKickLight(t);
      case 'kick_heavy':
        return this.getPoseKickHeavy(t);
      case 'kick_jump':
        return this.getPoseKickJump(t);
      case 'kick_crouch':
        return this.getPoseKickCrouch(t);

      // Specials
      case 'special':
      case 'special_alex':
        return this.getPoseSpecialAlex(t);
      case 'special_max':
        return this.getPoseSpecialMax(t);
      case 'special_ryan':
        return this.getPoseSpecialRyan(t);
      case 'special_luna':
        return this.getPoseSpecialLuna(t);
      case 'special_maya':
        return this.getPoseSpecialMaya(t);

      // Defense & Reactions
      case 'block':
        return this.getPoseBlock(t);
      case 'block_low':
        return this.getPoseBlockLow(t);
      case 'hurt':
      case 'hurt_high':
        return this.getPoseHurtHigh(t);
      case 'hurt_low':
        return this.getPoseHurtLow(t);
      case 'hurt_heavy':
        return this.getPoseHurtHeavy(t);
      case 'ko':
        return this.getPoseKO(t);

      // Character-specific Victories
      case 'victory':
      case 'victory_alex':
        return this.getPoseVictoryAlex(t);
      case 'victory_max':
        return this.getPoseVictoryMax(t);
      case 'victory_ryan':
        return this.getPoseVictoryRyan(t);
      case 'victory_luna':
        return this.getPoseVictoryLuna(t);
      case 'victory_maya':
        return this.getPoseVictoryMaya(t);

      default:
        return this.getPoseIdle(t);
    }
  }

  // --- CORE POSES ---

  private getPoseIdle(t: number): Pose {
    const cycle = Math.sin(t * 3.2);
    const breathe = Math.sin(t * 2.0) * 0.04;
    return {
      hips: {
        pos: [0, this.defaultHipsY - Math.abs(cycle) * 0.03, 0],
        rot: [0, 0.35, 0]
      },
      torso: { rot: [0.05, 0.1, 0] },
      chest: { rot: [breathe, 0.15, 0] },
      head: { rot: [-0.05, -0.4, 0] },
      leftUpperArm: { rot: [-0.75 + cycle * 0.05, 0.3, 0.4] },
      leftForearm: { rot: [-1.4, 0.4, -0.3] },
      rightUpperArm: { rot: [-0.6 + cycle * 0.04, -0.2, -0.5] },
      rightForearm: { rot: [-1.6, -0.5, 0.4] },
      leftThigh: { rot: [-0.25, 0.2, 0.1] },
      leftShin: { rot: [0.35, 0, 0] },
      rightThigh: { rot: [0.25, -0.1, -0.1] },
      rightShin: { rot: [0.3, 0, 0] }
    };
  }

  private getPoseWalk(t: number, speedMult: number): Pose {
    const freq = 6.5 * Math.abs(speedMult);
    const cycle = Math.sin(t * freq);
    const dir = Math.sign(speedMult);

    return {
      hips: {
        pos: [0, this.defaultHipsY - Math.abs(cycle) * 0.04, 0],
        rot: [0.08 * dir, 0.25 + cycle * 0.1, 0]
      },
      torso: { rot: [0.06 * dir, 0, -cycle * 0.08] },
      chest: { rot: [0.05 * dir, -cycle * 0.12, 0] },
      head: { rot: [0, -0.2, 0] },
      leftUpperArm: { rot: [-0.7 - cycle * 0.4 * dir, 0.3, 0.4] },
      leftForearm: { rot: [-1.3 - cycle * 0.2, 0.3, -0.2] },
      rightUpperArm: { rot: [-0.6 + cycle * 0.4 * dir, -0.2, -0.5] },
      rightForearm: { rot: [-1.5 + cycle * 0.2, -0.4, 0.3] },
      leftThigh: { rot: [cycle * 0.65 * dir, 0.1, 0] },
      leftShin: { rot: [Math.max(0, -cycle * 0.7 * dir), 0, 0] },
      rightThigh: { rot: [-cycle * 0.65 * dir, -0.1, 0] },
      rightShin: { rot: [Math.max(0, cycle * 0.7 * dir), 0, 0] }
    };
  }

  private getPoseJump(t: number): Pose {
    return {
      hips: { pos: [0, this.defaultHipsY + 0.1, 0], rot: [0.15, 0.2, 0] },
      torso: { rot: [0.1, 0, 0] },
      chest: { rot: [0.1, 0.1, 0] },
      head: { rot: [-0.2, -0.3, 0] },
      leftUpperArm: { rot: [-1.8, 0.4, 0.5] },
      leftForearm: { rot: [-1.1, 0.2, -0.2] },
      rightUpperArm: { rot: [-1.6, -0.3, -0.6] },
      rightForearm: { rot: [-1.2, -0.3, 0.3] },
      leftThigh: { rot: [-1.0, 0.2, 0.2] },
      leftShin: { rot: [1.2, 0, 0] },
      rightThigh: { rot: [-0.7, -0.2, -0.2] },
      rightShin: { rot: [1.3, 0, 0] }
    };
  }

  private getPoseCrouch(t: number): Pose {
    return {
      hips: { pos: [0, this.defaultHipsY - 0.42, 0], rot: [0.2, 0.35, 0] },
      torso: { rot: [0.35, 0.1, 0] },
      chest: { rot: [0.2, 0.1, 0] },
      head: { rot: [-0.35, -0.4, 0] },
      leftUpperArm: { rot: [-1.1, 0.4, 0.3] },
      leftForearm: { rot: [-1.5, 0.4, -0.3] },
      rightUpperArm: { rot: [-0.9, -0.3, -0.4] },
      rightForearm: { rot: [-1.6, -0.5, 0.4] },
      leftThigh: { rot: [-1.4, 0.3, 0.2] },
      leftShin: { rot: [1.7, 0, 0] },
      rightThigh: { rot: [-1.2, -0.3, -0.2] },
      rightShin: { rot: [1.8, 0, 0] }
    };
  }

  // --- ADVANCED PUNCHES ---

  private getPosePunchLight(t: number): Pose {
    // Fast snap jab (0.20s duration)
    const dur = 0.20;
    const p = Math.min(1.0, t / dur);
    const reach = p < 0.35 ? p / 0.35 : 1.0 - (p - 0.35) / 0.65;

    return {
      hips: { pos: [0, this.defaultHipsY, 0.1 * reach], rot: [0, 0.45 * reach, 0] },
      torso: { rot: [0.05, 0.4 * reach, 0] },
      chest: { rot: [0.08, 0.5 * reach, 0] },
      head: { rot: [0, -0.45 * reach, 0] },
      leftUpperArm: { rot: [-0.9, 0.4, 0.4] },
      leftForearm: { rot: [-1.6, 0.5, -0.3] },
      rightUpperArm: { rot: [-1.5 * reach - 0.3 * (1 - reach), -0.1, -0.1] },
      rightForearm: { rot: [-0.15 * reach - 1.4 * (1 - reach), 0, 0] },
      leftThigh: { rot: [-0.35 * reach - 0.2 * (1 - reach), 0.2, 0.1] },
      leftShin: { rot: [0.35, 0, 0] },
      rightThigh: { rot: [0.3, -0.1, -0.1] },
      rightShin: { rot: [0.2, 0, 0] }
    };
  }

  private getPosePunchHeavy(t: number): Pose {
    // Heavy straight punch (0.36s duration) with full body commitment
    const dur = 0.36;
    const p = Math.min(1.0, t / dur);
    const reach = p < 0.40 ? p / 0.40 : 1.0 - (p - 0.40) / 0.60;

    return {
      hips: { pos: [0, this.defaultHipsY - 0.08 * reach, 0.25 * reach], rot: [0.1 * reach, 0.85 * reach, 0] },
      torso: { rot: [0.15 * reach, 0.7 * reach, 0] },
      chest: { rot: [0.15 * reach, 0.8 * reach, 0] },
      head: { rot: [-0.05, -0.7 * reach, 0] },
      leftUpperArm: { rot: [-0.6 * reach - 0.9 * (1 - reach), 0.3, 0.6] },
      leftForearm: { rot: [-1.3, 0.3, -0.2] },
      rightUpperArm: { rot: [-1.65 * reach - 0.2 * (1 - reach), 0, -0.3 * reach] },
      rightForearm: { rot: [-0.05 * reach - 1.5 * (1 - reach), 0, 0] },
      leftThigh: { rot: [-0.6 * reach - 0.2 * (1 - reach), 0.3, 0.2] },
      leftShin: { rot: [0.7 * reach + 0.3 * (1 - reach), 0, 0] },
      rightThigh: { rot: [0.5 * reach + 0.2 * (1 - reach), -0.2, -0.2] },
      rightShin: { rot: [0.3, 0, 0] }
    };
  }

  private getPosePunchJump(t: number): Pose {
    const dur = 0.30;
    const p = Math.min(1.0, t / dur);
    const reach = p < 0.4 ? p / 0.4 : 1.0 - (p - 0.4) / 0.6;

    return {
      hips: { pos: [0, this.defaultHipsY + 0.1, 0], rot: [0.2, 0.3 * reach, 0] },
      torso: { rot: [0.25 * reach, 0.2 * reach, 0] },
      chest: { rot: [0.3 * reach, 0.3 * reach, 0] },
      head: { rot: [-0.25, -0.3 * reach, 0] },
      leftUpperArm: { rot: [-1.5, 0.3, 0.5] },
      leftForearm: { rot: [-1.2, 0.2, -0.2] },
      // Downward angled aerial hammer punch
      rightUpperArm: { rot: [-1.2 * reach - 0.4 * (1 - reach), 0, -0.4 * reach] },
      rightForearm: { rot: [-0.5 * reach - 1.4 * (1 - reach), 0, 0] },
      leftThigh: { rot: [-1.1, 0.2, 0.2] },
      leftShin: { rot: [1.3, 0, 0] },
      rightThigh: { rot: [-0.8, -0.2, -0.2] },
      rightShin: { rot: [1.2, 0, 0] }
    };
  }

  private getPosePunchCrouch(t: number): Pose {
    const dur = 0.22;
    const p = Math.min(1.0, t / dur);
    const reach = p < 0.35 ? p / 0.35 : 1.0 - (p - 0.35) / 0.65;

    return {
      hips: { pos: [0, this.defaultHipsY - 0.42, 0.15 * reach], rot: [0.2, 0.45 * reach, 0] },
      torso: { rot: [0.35, 0.3 * reach, 0] },
      chest: { rot: [0.25, 0.4 * reach, 0] },
      head: { rot: [-0.3, -0.35 * reach, 0] },
      leftUpperArm: { rot: [-1.2, 0.4, 0.3] },
      leftForearm: { rot: [-1.6, 0.4, -0.3] },
      // Low body punch
      rightUpperArm: { rot: [-1.1 * reach - 0.5 * (1 - reach), 0, -0.2] },
      rightForearm: { rot: [-0.1 * reach - 1.5 * (1 - reach), 0, 0] },
      leftThigh: { rot: [-1.4, 0.3, 0.2] },
      leftShin: { rot: [1.7, 0, 0] },
      rightThigh: { rot: [-1.2, -0.3, -0.2] },
      rightShin: { rot: [1.8, 0, 0] }
    };
  }

  // --- ADVANCED KICKS ---

  private getPoseKickLight(t: number): Pose {
    const dur = 0.26;
    const p = Math.min(1.0, t / dur);
    const ext = p < 0.38 ? p / 0.38 : 1.0 - (p - 0.38) / 0.62;

    return {
      hips: { pos: [0, this.defaultHipsY + 0.05 * ext, 0], rot: [-0.15 * ext, -0.35 * ext, 0] },
      torso: { rot: [-0.15 * ext, 0.15 * ext, 0] },
      chest: { rot: [-0.1 * ext, 0.2 * ext, 0] },
      head: { rot: [0.1 * ext, -0.25 * ext, 0] },
      leftUpperArm: { rot: [-1.1 * ext - 0.6, 0.4, 0.5] },
      leftForearm: { rot: [-1.4, 0.2, -0.2] },
      rightUpperArm: { rot: [0.3 * ext - 0.5, -0.4, -0.7] },
      rightForearm: { rot: [-0.9, -0.3, 0.2] },
      leftThigh: { rot: [0.1 * ext - 0.1, 0.1, 0] },
      leftShin: { rot: [0.2, 0, 0] },
      rightThigh: { rot: [-1.45 * ext + 0.2 * (1 - ext), -0.2 * ext, -0.1] },
      rightShin: { rot: [0.15 * ext + 0.7 * (1 - ext), 0, 0] },
      rightFoot: { rot: [-0.25 * ext, 0, 0] }
    };
  }

  private getPoseKickHeavy(t: number): Pose {
    // Powerful high roundhouse kick (0.42s duration)
    const dur = 0.42;
    const p = Math.min(1.0, t / dur);
    const ext = p < 0.42 ? p / 0.42 : 1.0 - (p - 0.42) / 0.58;

    return {
      hips: { pos: [0, this.defaultHipsY + 0.12 * ext, 0], rot: [-0.35 * ext, -0.7 * ext, 0.2 * ext] },
      torso: { rot: [-0.3 * ext, 0.35 * ext, -0.15 * ext] },
      chest: { rot: [-0.25 * ext, 0.45 * ext, 0] },
      head: { rot: [0.2 * ext, -0.45 * ext, 0] },
      leftUpperArm: { rot: [-1.4 * ext - 0.5, 0.4, 0.7] },
      leftForearm: { rot: [-1.3, 0.2, -0.2] },
      rightUpperArm: { rot: [0.8 * ext - 0.4, -0.5, -1.0] },
      rightForearm: { rot: [-0.7, -0.4, 0.2] },
      leftThigh: { rot: [0.3 * ext - 0.1, 0.1, 0] },
      leftShin: { rot: [0.3, 0, 0] },
      // High head-height kick
      rightThigh: { rot: [-1.85 * ext + 0.2 * (1 - ext), -0.45 * ext, -0.25 * ext] },
      rightShin: { rot: [0.05 * ext + 0.9 * (1 - ext), 0, 0] },
      rightFoot: { rot: [-0.4 * ext, 0, 0] }
    };
  }

  private getPoseKickJump(t: number): Pose {
    const dur = 0.34;
    const p = Math.min(1.0, t / dur);
    const ext = p < 0.4 ? p / 0.4 : 1.0 - (p - 0.4) / 0.6;

    return {
      hips: { pos: [0, this.defaultHipsY + 0.15, 0], rot: [-0.2 * ext, -0.4 * ext, 0] },
      torso: { rot: [-0.15 * ext, 0.2 * ext, 0] },
      chest: { rot: [-0.1 * ext, 0.25 * ext, 0] },
      head: { rot: [0.1 * ext, -0.3 * ext, 0] },
      leftUpperArm: { rot: [-1.6, 0.3, 0.6] },
      leftForearm: { rot: [-1.1, 0.2, -0.2] },
      rightUpperArm: { rot: [0.4 * ext - 0.6, -0.4, -0.8] },
      rightForearm: { rot: [-0.8, -0.3, 0.2] },
      leftThigh: { rot: [-1.1, 0.2, 0.2] },
      leftShin: { rot: [1.3, 0, 0] },
      // Flying jump kick
      rightThigh: { rot: [-1.55 * ext - 0.2 * (1 - ext), -0.25 * ext, -0.2] },
      rightShin: { rot: [0.1 * ext + 1.1 * (1 - ext), 0, 0] },
      rightFoot: { rot: [-0.35 * ext, 0, 0] }
    };
  }

  private getPoseKickCrouch(t: number): Pose {
    // Low sweeping leg kick along the ground
    const dur = 0.28;
    const p = Math.min(1.0, t / dur);
    const ext = p < 0.38 ? p / 0.38 : 1.0 - (p - 0.38) / 0.62;

    return {
      hips: { pos: [0, this.defaultHipsY - 0.52, 0.1 * ext], rot: [-0.15 * ext, -0.5 * ext, 0] },
      torso: { rot: [0.4 * ext + 0.2, 0.3 * ext, 0] },
      chest: { rot: [0.3 * ext + 0.1, 0.35 * ext, 0] },
      head: { rot: [-0.25, -0.4 * ext, 0] },
      leftUpperArm: { rot: [-1.3, 0.4, 0.3] },
      leftForearm: { rot: [-1.5, 0.4, -0.3] },
      rightUpperArm: { rot: [0.2 * ext - 0.8, -0.3, -0.6] },
      rightForearm: { rot: [-1.2, -0.4, 0.3] },
      leftThigh: { rot: [-1.5, 0.4, 0.3] },
      leftShin: { rot: [1.8, 0, 0] },
      // Sweeping extended leg at shin/ankle height
      rightThigh: { rot: [-1.25 * ext - 0.5 * (1 - ext), -0.2 * ext, -0.15] },
      rightShin: { rot: [0.1 * ext + 1.2 * (1 - ext), 0, 0] },
      rightFoot: { rot: [-0.2 * ext, 0, 0] }
    };
  }

  // --- 5 CHARACTER-SPECIFIC SPECIAL ATTACKS ---

  private getPoseSpecialAlex(t: number): Pose {
    // FIRE STRIKE: forward lunging flaming punch
    const dur = 0.50;
    const p = Math.min(1.0, t / dur);
    const lunge = p < 0.42 ? p / 0.42 : 1.0 - (p - 0.42) / 0.58;

    return {
      hips: { pos: [0, this.defaultHipsY - 0.12 * lunge, 0.35 * lunge], rot: [0.15 * lunge, 0.9 * lunge, 0] },
      torso: { rot: [0.2 * lunge, 0.75 * lunge, 0] },
      chest: { rot: [0.2 * lunge, 0.85 * lunge, 0] },
      head: { rot: [-0.1, -0.8 * lunge, 0] },
      leftUpperArm: { rot: [0.4 * lunge - 0.8 * (1 - lunge), 0.3, 0.8] },
      leftForearm: { rot: [-1.1, 0.3, -0.2] },
      rightUpperArm: { rot: [-1.7 * lunge - 0.3 * (1 - lunge), 0, -0.3] },
      rightForearm: { rot: [-0.05 * lunge - 1.5 * (1 - lunge), 0, 0] },
      leftThigh: { rot: [-0.7 * lunge - 0.2 * (1 - lunge), 0.3, 0.2] },
      leftShin: { rot: [0.8 * lunge + 0.3 * (1 - lunge), 0, 0] },
      rightThigh: { rot: [0.6 * lunge + 0.2 * (1 - lunge), -0.2, -0.2] },
      rightShin: { rot: [0.3, 0, 0] }
    };
  }

  private getPoseSpecialMax(t: number): Pose {
    // THUNDER KICK: fast spinning 360 electric heel kick
    const dur = 0.52;
    const p = Math.min(1.0, t / dur);
    const spin = p * Math.PI * 2;
    const ext = Math.sin(p * Math.PI);

    return {
      hips: { pos: [0, this.defaultHipsY + 0.2 * ext, 0], rot: [0, spin, 0] },
      torso: { rot: [-0.2 * ext, 0, 0] },
      chest: { rot: [-0.15 * ext, 0, 0] },
      head: { rot: [0.1 * ext, 0, 0] },
      leftUpperArm: { rot: [-1.4, 0.4, 0.6] },
      leftForearm: { rot: [-1.2, 0.2, -0.2] },
      rightUpperArm: { rot: [0.6 * ext - 0.5, -0.5, -0.8] },
      rightForearm: { rot: [-0.8, -0.3, 0.2] },
      leftThigh: { rot: [0.2 * ext - 0.1, 0.1, 0] },
      leftShin: { rot: [0.3, 0, 0] },
      rightThigh: { rot: [-1.8 * ext + 0.2 * (1 - ext), -0.3 * ext, -0.2] },
      rightShin: { rot: [0.1 * ext + 0.8 * (1 - ext), 0, 0] },
      rightFoot: { rot: [-0.3 * ext, 0, 0] }
    };
  }

  private getPoseSpecialRyan(t: number): Pose {
    // SHADOW RUSH: hyper-fast forward dash strike
    const dur = 0.48;
    const p = Math.min(1.0, t / dur);
    const dash = p < 0.45 ? p / 0.45 : 1.0 - (p - 0.45) / 0.55;

    return {
      hips: { pos: [0, this.defaultHipsY - 0.25 * dash, 0.45 * dash], rot: [0.4 * dash, 0.4 * dash, 0] },
      torso: { rot: [0.45 * dash, 0.3 * dash, 0] },
      chest: { rot: [0.35 * dash, 0.4 * dash, 0] },
      head: { rot: [-0.4 * dash, -0.35 * dash, 0] },
      leftUpperArm: { rot: [0.8 * dash - 0.8, 0.3, 0.6] },
      leftForearm: { rot: [-0.6 * dash - 1.2 * (1 - dash), 0.2, 0] },
      rightUpperArm: { rot: [-1.6 * dash - 0.3 * (1 - dash), 0, -0.2] },
      rightForearm: { rot: [-0.1 * dash - 1.4 * (1 - dash), 0, 0] },
      leftThigh: { rot: [-0.9 * dash - 0.2 * (1 - dash), 0.3, 0.2] },
      leftShin: { rot: [1.1 * dash + 0.3 * (1 - dash), 0, 0] },
      rightThigh: { rot: [0.8 * dash + 0.2 * (1 - dash), -0.2, -0.2] },
      rightShin: { rot: [0.4, 0, 0] }
    };
  }

  private getPoseSpecialLuna(t: number): Pose {
    // PHOENIX KICK: ascending rising dragon kick
    const dur = 0.54;
    const p = Math.min(1.0, t / dur);
    const rise = Math.sin(p * Math.PI);

    return {
      hips: { pos: [0, this.defaultHipsY + 0.45 * rise, 0], rot: [-0.4 * rise, -0.5 * rise, 0] },
      torso: { rot: [-0.35 * rise, 0.3 * rise, 0] },
      chest: { rot: [-0.3 * rise, 0.4 * rise, 0] },
      head: { rot: [0.3 * rise, -0.4 * rise, 0] },
      leftUpperArm: { rot: [-2.2 * rise - 0.6 * (1 - rise), 0.3, 0.4] },
      leftForearm: { rot: [-0.5 * rise - 1.2 * (1 - rise), 0.2, 0] },
      rightUpperArm: { rot: [0.8 * rise - 0.5, -0.4, -0.8] },
      rightForearm: { rot: [-0.7, -0.3, 0.2] },
      leftThigh: { rot: [0.3 * rise - 0.1, 0.1, 0] },
      leftShin: { rot: [0.2, 0, 0] },
      // Rising vertical kick launched upwards
      rightThigh: { rot: [-2.2 * rise + 0.2 * (1 - rise), -0.3 * rise, -0.2] },
      rightShin: { rot: [0.05 * rise + 0.8 * (1 - rise), 0, 0] },
      rightFoot: { rot: [-0.45 * rise, 0, 0] }
    };
  }

  private getPoseSpecialMaya(t: number): Pose {
    // DRAGON SPIN: fast full 360 sweep with purple shockwave
    const dur = 0.52;
    const p = Math.min(1.0, t / dur);
    const spin = p * Math.PI * 2;
    const low = Math.sin(p * Math.PI);

    return {
      hips: { pos: [0, this.defaultHipsY - 0.35 * low, 0], rot: [0.2 * low, spin, 0] },
      torso: { rot: [0.25 * low, 0, 0] },
      chest: { rot: [0.2 * low, 0, 0] },
      head: { rot: [-0.2 * low, 0, 0] },
      leftUpperArm: { rot: [-1.2, 0.5, 0.5] },
      leftForearm: { rot: [-1.4, 0.3, -0.2] },
      rightUpperArm: { rot: [-1.2, -0.5, -0.5] },
      rightForearm: { rot: [-1.4, -0.3, 0.2] },
      leftThigh: { rot: [-1.3 * low - 0.2 * (1 - low), 0.3, 0.2] },
      leftShin: { rot: [1.6 * low + 0.3 * (1 - low), 0, 0] },
      // Sweeping leg extended 360 degrees
      rightThigh: { rot: [-1.4 * low + 0.2 * (1 - low), -0.3 * low, -0.2] },
      rightShin: { rot: [0.1 * low + 0.7 * (1 - low), 0, 0] },
      rightFoot: { rot: [-0.3 * low, 0, 0] }
    };
  }

  // --- DEFENSE & HIT REACTIONS ---

  private getPoseBlock(t: number): Pose {
    return {
      hips: { pos: [0, this.defaultHipsY - 0.10, 0], rot: [0.08, 0.4, 0] },
      torso: { rot: [0.12, 0.1, 0] },
      chest: { rot: [0.15, 0.15, 0] },
      head: { rot: [-0.15, -0.4, 0] },
      leftUpperArm: { rot: [-1.2, 0.5, 0.4] },
      leftForearm: { rot: [-1.8, 0.6, -0.4] },
      rightUpperArm: { rot: [-1.1, -0.4, -0.3] },
      rightForearm: { rot: [-1.9, -0.5, 0.4] },
      leftThigh: { rot: [-0.4, 0.2, 0.1] },
      leftShin: { rot: [0.5, 0, 0] },
      rightThigh: { rot: [0.3, -0.1, -0.1] },
      rightShin: { rot: [0.4, 0, 0] }
    };
  }

  private getPoseBlockLow(t: number): Pose {
    return {
      hips: { pos: [0, this.defaultHipsY - 0.44, 0], rot: [0.2, 0.4, 0] },
      torso: { rot: [0.35, 0.1, 0] },
      chest: { rot: [0.25, 0.15, 0] },
      head: { rot: [-0.35, -0.4, 0] },
      leftUpperArm: { rot: [-1.3, 0.5, 0.3] },
      leftForearm: { rot: [-1.8, 0.6, -0.3] },
      rightUpperArm: { rot: [-1.2, -0.4, -0.3] },
      rightForearm: { rot: [-1.9, -0.5, 0.3] },
      leftThigh: { rot: [-1.4, 0.3, 0.2] },
      leftShin: { rot: [1.7, 0, 0] },
      rightThigh: { rot: [-1.2, -0.3, -0.2] },
      rightShin: { rot: [1.8, 0, 0] }
    };
  }

  private getPoseHurtHigh(t: number): Pose {
    const shake = Math.sin(t * 32.0) * 0.08;
    return {
      hips: { pos: [0, this.defaultHipsY - 0.08, -0.1], rot: [-0.25, 0.1 + shake, 0] },
      torso: { rot: [-0.3, 0, shake] },
      chest: { rot: [-0.35, 0, 0] },
      head: { rot: [0.45, 0, shake * 1.5] },
      leftUpperArm: { rot: [-0.4, 0.4, 0.8] },
      leftForearm: { rot: [-0.8, 0.2, 0] },
      rightUpperArm: { rot: [-0.3, -0.4, -0.8] },
      rightForearm: { rot: [-0.7, -0.2, 0] },
      leftThigh: { rot: [-0.2, 0.2, 0.1] },
      leftShin: { rot: [0.4, 0, 0] },
      rightThigh: { rot: [0.3, -0.1, -0.1] },
      rightShin: { rot: [0.5, 0, 0] }
    };
  }

  private getPoseHurtLow(t: number): Pose {
    const shake = Math.sin(t * 28.0) * 0.06;
    return {
      hips: { pos: [0, this.defaultHipsY - 0.15, -0.05], rot: [0.35, 0.1 + shake, 0] },
      torso: { rot: [0.4, 0, shake] },
      chest: { rot: [0.3, 0, 0] },
      head: { rot: [-0.2, 0, shake] },
      leftUpperArm: { rot: [-0.8, 0.3, 0.5] },
      leftForearm: { rot: [-1.1, 0.2, 0] },
      rightUpperArm: { rot: [-0.7, -0.3, -0.5] },
      rightForearm: { rot: [-1.0, -0.2, 0] },
      leftThigh: { rot: [-0.7, 0.3, 0.2] },
      leftShin: { rot: [0.8, 0, 0] },
      rightThigh: { rot: [-0.5, -0.2, -0.1] },
      rightShin: { rot: [0.7, 0, 0] }
    };
  }

  private getPoseHurtHeavy(t: number): Pose {
    const shake = Math.sin(t * 36.0) * 0.12;
    return {
      hips: { pos: [0, this.defaultHipsY - 0.12, -0.2], rot: [-0.45, 0.15 + shake, 0] },
      torso: { rot: [-0.5, 0, shake * 1.5] },
      chest: { rot: [-0.55, 0, 0] },
      head: { rot: [0.6, 0, shake * 2] },
      leftUpperArm: { rot: [-0.2, 0.5, 1.1] },
      leftForearm: { rot: [-0.5, 0.2, 0] },
      rightUpperArm: { rot: [-0.1, -0.5, -1.1] },
      rightForearm: { rot: [-0.4, -0.2, 0] },
      leftThigh: { rot: [-0.3, 0.3, 0.2] },
      leftShin: { rot: [0.5, 0, 0] },
      rightThigh: { rot: [0.4, -0.2, -0.2] },
      rightShin: { rot: [0.6, 0, 0] }
    };
  }

  private getPoseKO(t: number): Pose {
    const fall = Math.min(1.0, t / 0.55);
    return {
      hips: {
        pos: [0, this.defaultHipsY * (1.0 - fall * 0.88), -fall * 0.65],
        rot: [-Math.PI * 0.48 * fall, 0, 0]
      },
      torso: { rot: [0, 0, 0] },
      chest: { rot: [0, 0, 0] },
      head: { rot: [0.2 * (1 - fall), 0.3 * fall, 0] },
      leftUpperArm: { rot: [0, 0, 1.2 * fall] },
      leftForearm: { rot: [0, 0, 0] },
      rightUpperArm: { rot: [0, 0, -1.2 * fall] },
      rightForearm: { rot: [0, 0, 0] },
      leftThigh: { rot: [0, 0, 0.3 * fall] },
      leftShin: { rot: [0, 0, 0] },
      rightThigh: { rot: [0, 0, -0.3 * fall] },
      rightShin: { rot: [0, 0, 0] }
    };
  }

  // --- 5 CHARACTER-SPECIFIC VICTORY ANIMATIONS ---

  private getPoseVictoryAlex(t: number): Pose {
    // ALEX: Raises right fist high in triumph, chest out
    const cheer = Math.sin(t * 3.5) * 0.06;
    return {
      hips: { pos: [0, this.defaultHipsY, 0], rot: [0, -0.2, 0] },
      torso: { rot: [-0.08, 0, 0] },
      chest: { rot: [-0.12, 0.1, 0] },
      head: { rot: [-0.15, 0.1, 0] },
      // Left arm resting on hip
      leftUpperArm: { rot: [0.3, 0.4, 0.8] },
      leftForearm: { rot: [-1.4, 0.4, -0.3] },
      // Right fist held high in the air
      rightUpperArm: { rot: [-2.9 + cheer, -0.15, -0.25] },
      rightForearm: { rot: [-0.25, -0.1, 0] },
      leftThigh: { rot: [0, 0, 0.2] },
      leftShin: { rot: [0.1, 0, 0] },
      rightThigh: { rot: [0, 0, -0.2] },
      rightShin: { rot: [0.1, 0, 0] }
    };
  }

  private getPoseVictoryMax(t: number): Pose {
    // MAX: Celebratory boxer double pump and flex
    const flex = Math.sin(t * 4.0) * 0.08;
    return {
      hips: { pos: [0, this.defaultHipsY - 0.05, 0], rot: [0, 0, 0] },
      torso: { rot: [0.05, 0, 0] },
      chest: { rot: [0.1 + flex, 0, 0] },
      head: { rot: [-0.1, 0, 0] },
      // Both arms flexed at 90 degrees showing biceps
      leftUpperArm: { rot: [-1.5, 0.4, 1.4] },
      leftForearm: { rot: [-1.9 + flex, 0.4, 0] },
      rightUpperArm: { rot: [-1.5, -0.4, -1.4] },
      rightForearm: { rot: [-1.9 + flex, -0.4, 0] },
      leftThigh: { rot: [0, 0, 0.3] },
      leftShin: { rot: [0.2, 0, 0] },
      rightThigh: { rot: [0, 0, -0.3] },
      rightShin: { rot: [0.2, 0, 0] }
    };
  }

  private getPoseVictoryRyan(t: number): Pose {
    // RYAN: Crosses arms across chest and coolly nods toward the camera
    const breath = Math.sin(t * 2.2) * 0.03;
    return {
      hips: { pos: [0, this.defaultHipsY, 0], rot: [0, 0.25, 0] },
      torso: { rot: [-0.05, 0, 0] },
      chest: { rot: [-0.08 + breath, -0.1, 0] },
      head: { rot: [-0.08, -0.25, 0] },
      // Crossed arms pose
      leftUpperArm: { rot: [-1.1, 0.7, 0.6] },
      leftForearm: { rot: [-1.6, 0.8, -0.5] },
      rightUpperArm: { rot: [-1.0, -0.7, -0.6] },
      rightForearm: { rot: [-1.6, -0.8, 0.5] },
      leftThigh: { rot: [0.1, 0.1, 0.15] },
      leftShin: { rot: [0.1, 0, 0] },
      rightThigh: { rot: [-0.1, -0.1, -0.15] },
      rightShin: { rot: [0.1, 0, 0] }
    };
  }

  private getPoseVictoryLuna(t: number): Pose {
    // LUNA: Confident martial arts bow / respectful ninja pose
    const bow = Math.sin(t * 2.5) * 0.04;
    return {
      hips: { pos: [0, this.defaultHipsY, 0], rot: [0, 0, 0] },
      torso: { rot: [0.1 + bow, 0, 0] },
      chest: { rot: [0.08 + bow, 0, 0] },
      head: { rot: [0.15, 0, 0] },
      // Palms pressed together in martial salute at chest
      leftUpperArm: { rot: [-1.1, 0.5, 0.4] },
      leftForearm: { rot: [-1.6, 0.6, -0.5] },
      rightUpperArm: { rot: [-1.1, -0.5, -0.4] },
      rightForearm: { rot: [-1.6, -0.6, 0.5] },
      leftThigh: { rot: [0, 0, 0.1] },
      leftShin: { rot: [0.05, 0, 0] },
      rightThigh: { rot: [0, 0, -0.1] },
      rightShin: { rot: [0.05, 0, 0] }
    };
  }

  private getPoseVictoryMaya(t: number): Pose {
    // MAYA: Spins gracefully into traditional Muay Thai warrior pose
    const breath = Math.sin(t * 3.0) * 0.05;
    return {
      hips: { pos: [0, this.defaultHipsY, 0], rot: [0, 0.4, 0] },
      torso: { rot: [-0.05, 0.1, 0] },
      chest: { rot: [-0.1 + breath, 0.15, 0] },
      head: { rot: [-0.05, -0.35, 0] },
      // One arm raised high in warrior salute, other guarding chest
      leftUpperArm: { rot: [-2.6 + breath, 0.2, 0.3] },
      leftForearm: { rot: [-0.4, 0.3, 0] },
      rightUpperArm: { rot: [-0.9, -0.3, -0.4] },
      rightForearm: { rot: [-1.5, -0.4, 0.3] },
      // Balanced one-leg stance
      leftThigh: { rot: [-0.3, 0.2, 0.1] },
      leftShin: { rot: [0.4, 0, 0] },
      rightThigh: { rot: [0.2, -0.1, -0.1] },
      rightShin: { rot: [0.2, 0, 0] }
    };
  }
}
