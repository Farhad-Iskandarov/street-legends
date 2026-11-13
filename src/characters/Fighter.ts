import * as THREE from 'three';
import { CharacterConfig } from './CharacterConfig';
import { CharacterMeshResult, ProceduralHumanoid } from './ProceduralHumanoid';
import { AnimationController, AnimationState } from './AnimationController';

export type AttackHeight = 'high' | 'mid' | 'low' | 'overhead' | 'special';

export interface AttackInfo {
  type:
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
    | 'special';
  name: string;
  damage: number;
  height: AttackHeight;
  activeStart: number;
  activeEnd: number;
  duration: number;
  range: number;
  knockback: number;
  hitStun: number;
}

export class Fighter {
  public playerId: 1 | 2;
  public config: CharacterConfig;
  public root: THREE.Group;
  public meshResult: CharacterMeshResult;
  public anim: AnimationController;

  // Transform & Physics
  public position: THREE.Vector3 = new THREE.Vector3();
  public velocity: THREE.Vector2 = new THREE.Vector2(); // x: horizontal, y: vertical
  public facing: 1 | -1 = 1; // 1 = facing right (+X), -1 = facing left (-X)
  public isGrounded: boolean = true;
  private gravity: number = -38.0;

  // Combat State
  public health: number = 100;
  public isCrouching: boolean = false;
  public isBlocking: boolean = false;
  public isAttacking: boolean = false;
  public currentAttack: AttackInfo | null = null;
  public attackTimer: number = 0;
  public hasHit: boolean = false;
  public specialCooldown: number = 0; // In seconds remaining

  public isHitStunned: boolean = false;
  public hitStunTimer: number = 0;
  public isKnockedOut: boolean = false;
  public isVictorious: boolean = false;

  // Hit stop micro freeze frame
  public hitStopTimer: number = 0;

  // Hurtbox Bounds (World-space approximations for collision & attacks)
  public hurtboxRadius: number = 0.45;
  public hurtboxHeight: number = 1.85;

  constructor(playerId: 1 | 2, config: CharacterConfig, customMeshResult?: CharacterMeshResult) {
    this.playerId = playerId;
    this.config = config;

    // Use loaded custom model or procedural fallback
    this.meshResult = customMeshResult || ProceduralHumanoid.create(config);
    this.root = this.meshResult.root;
    this.anim = new AnimationController(this.meshResult.bones);

    // Initial state
    this.resetForRound(playerId === 1 ? -4 : 4, playerId === 1 ? 1 : -1);
  }

  public resetForRound(startX: number, facingDir: 1 | -1): void {
    this.health = this.config.stats.maxHealth;
    this.position.set(startX, 0, 0);
    this.velocity.set(0, 0);
    this.facing = facingDir;
    this.isGrounded = true;
    this.isCrouching = false;
    this.isBlocking = false;
    this.isAttacking = false;
    this.currentAttack = null;
    this.attackTimer = 0;
    this.hasHit = false;
    this.specialCooldown = 0;
    this.isHitStunned = false;
    this.hitStunTimer = 0;
    this.hitStopTimer = 0;
    this.isKnockedOut = false;
    this.isVictorious = false;

    this.root.position.copy(this.position);
    this.updateFacing();
    this.anim.play('idle', true);
  }

  public updateFacing(): void {
    const avatarGroup = this.root.getObjectByName('aynur_avatar_group');
    if (avatarGroup) {
      this.root.rotation.y = 0;
      const absScaleX = Math.abs(avatarGroup.scale.x) || 1;
      avatarGroup.scale.x = this.facing === 1 ? absScaleX : -absScaleX;
      return;
    }
    // 2.5D angled side-view: face right (+X) at +70 deg, face left (-X) at -70 deg so front/3-quarter details face the camera!
    this.root.rotation.y = this.facing === 1 ? Math.PI * 0.38 : -Math.PI * 0.38;
  }

  public autoFaceOpponent(opponentX: number): void {
    if (this.isKnockedOut || this.isVictorious) return;
    if (this.isAttacking || this.isHitStunned) return;

    const shouldFace: 1 | -1 = opponentX > this.position.x ? 1 : -1;
    if (this.facing !== shouldFace) {
      this.facing = shouldFace;
      this.updateFacing();
    }
  }

  // --- ACTIONS ---

  public move(dir: number): void {
    if (this.isHitStunned || this.isKnockedOut || this.isVictorious || this.isAttacking || this.isBlocking) {
      return;
    }
    if (this.isCrouching) {
      this.velocity.x = 0;
      return;
    }

    this.velocity.x = dir * this.config.stats.moveSpeed;

    if (this.isGrounded) {
      const movingForward = (this.facing === 1 && dir > 0) || (this.facing === -1 && dir < 0);
      if (movingForward) {
        this.anim.play('walk_forward');
      } else {
        this.anim.play('walk_backward');
      }
    }
  }

  public stopMoving(): void {
    this.velocity.x = 0;
    if (this.isGrounded && !this.isAttacking && !this.isCrouching && !this.isBlocking && !this.isHitStunned && !this.isKnockedOut && !this.isVictorious) {
      this.anim.play('idle');
    }
  }

  public jump(): void {
    if (!this.isGrounded || this.isHitStunned || this.isKnockedOut || this.isVictorious || this.isAttacking || this.isBlocking) {
      return;
    }

    this.isGrounded = false;
    this.isCrouching = false;
    this.velocity.y = this.config.stats.jumpVelocity;
    this.anim.play('jump');
  }

  public crouch(enable: boolean): void {
    if (!this.isGrounded || this.isHitStunned || this.isKnockedOut || this.isVictorious) return;

    this.isCrouching = enable;
    if (enable) {
      this.velocity.x = 0;
      if (!this.isAttacking) {
        this.anim.play(this.isBlocking ? 'block_low' : 'crouch');
      }
    } else {
      if (!this.isAttacking) {
        this.anim.play(this.isBlocking ? 'block' : 'idle');
      }
    }
  }

  public block(enable: boolean): void {
    if (this.isKnockedOut || this.isVictorious || this.isHitStunned) return;

    if (enable && this.isAttacking) return;

    this.isBlocking = enable;
    if (enable) {
      this.velocity.x = 0;
      this.anim.play(this.isCrouching ? 'block_low' : 'block');
    } else {
      if (this.isGrounded && !this.isAttacking) {
        this.anim.play(this.isCrouching ? 'crouch' : 'idle');
      }
    }
  }

  // --- ATTACKS ---

  public punch(heavy: boolean = false): boolean {
    if (!this.isGrounded) {
      return this.punchJump();
    }
    if (this.isCrouching) {
      return this.punchCrouch();
    }
    if (heavy) {
      return this.punchHeavy();
    }
    // Legacy light punch for compatibility with tests
    const attack: AttackInfo = {
      type: 'punch',
      name: 'Punch',
      damage: this.config.stats.punchDamage || 8,
      height: 'mid',
      activeStart: 0.05,
      activeEnd: 0.13,
      duration: 0.20,
      range: 1.30,
      knockback: 2.5,
      hitStun: 0.18
    };
    this.startAttack(attack, 'punch');
    return true;
  }

  public kick(heavy: boolean = false): boolean {
    if (!this.isGrounded) {
      return this.kickJump();
    }
    if (this.isCrouching) {
      return this.kickCrouch();
    }
    if (heavy) {
      return this.kickHeavy();
    }
    // Legacy light kick for compatibility with tests
    const attack: AttackInfo = {
      type: 'kick',
      name: 'Kick',
      damage: this.config.stats.kickDamage || 12,
      height: 'mid',
      activeStart: 0.07,
      activeEnd: 0.15,
      duration: 0.25,
      range: 1.40,
      knockback: 3.0,
      hitStun: 0.20
    };
    this.startAttack(attack, 'kick');
    return true;
  }

  public punchLight(): boolean {
    if (this.cannotAttack()) return false;
    const attack: AttackInfo = {
      type: 'punch_light',
      name: 'Light Punch',
      damage: this.config.stats.punchLightDamage || 6,
      height: 'mid',
      activeStart: 0.05,
      activeEnd: 0.13,
      duration: 0.20,
      range: 1.30,
      knockback: 2.5,
      hitStun: 0.18
    };
    this.startAttack(attack, 'punch_light');
    return true;
  }

  public punchHeavy(): boolean {
    if (this.cannotAttack()) return false;
    const attack: AttackInfo = {
      type: 'punch_heavy',
      name: 'Heavy Punch',
      damage: this.config.stats.punchHeavyDamage || 12,
      height: 'high',
      activeStart: 0.10,
      activeEnd: 0.23,
      duration: 0.36,
      range: 1.55,
      knockback: 5.8,
      hitStun: 0.32
    };
    this.startAttack(attack, 'punch_heavy');
    return true;
  }

  public punchJump(): boolean {
    if (this.cannotAttack()) return false;
    const attack: AttackInfo = {
      type: 'punch_jump',
      name: 'Jump Punch',
      damage: this.config.stats.punchJumpDamage || 9,
      height: 'overhead',
      activeStart: 0.08,
      activeEnd: 0.21,
      duration: 0.30,
      range: 1.40,
      knockback: 4.0,
      hitStun: 0.25
    };
    this.startAttack(attack, 'punch_jump');
    return true;
  }

  public punchCrouch(): boolean {
    if (this.cannotAttack()) return false;
    const attack: AttackInfo = {
      type: 'punch_crouch',
      name: 'Crouch Punch',
      damage: this.config.stats.punchCrouchDamage || 7,
      height: 'low',
      activeStart: 0.06,
      activeEnd: 0.15,
      duration: 0.22,
      range: 1.25,
      knockback: 3.0,
      hitStun: 0.22
    };
    this.startAttack(attack, 'punch_crouch');
    return true;
  }

  public kickLight(): boolean {
    if (this.cannotAttack()) return false;
    const attack: AttackInfo = {
      type: 'kick_light',
      name: 'Light Kick',
      damage: this.config.stats.kickLightDamage || 9,
      height: 'mid',
      activeStart: 0.08,
      activeEnd: 0.18,
      duration: 0.26,
      range: 1.70,
      knockback: 4.0,
      hitStun: 0.22
    };
    this.startAttack(attack, 'kick_light');
    return true;
  }

  public kickHeavy(): boolean {
    if (this.cannotAttack()) return false;
    const attack: AttackInfo = {
      type: 'kick_heavy',
      name: 'Heavy Kick',
      damage: this.config.stats.kickHeavyDamage || 15,
      height: 'high',
      activeStart: 0.12,
      activeEnd: 0.28,
      duration: 0.42,
      range: 1.95,
      knockback: 7.2,
      hitStun: 0.38
    };
    this.startAttack(attack, 'kick_heavy');
    return true;
  }

  public kickJump(): boolean {
    if (this.cannotAttack()) return false;
    const attack: AttackInfo = {
      type: 'kick_jump',
      name: 'Jump Kick',
      damage: this.config.stats.kickJumpDamage || 12,
      height: 'overhead',
      activeStart: 0.10,
      activeEnd: 0.25,
      duration: 0.34,
      range: 1.75,
      knockback: 5.5,
      hitStun: 0.28
    };
    this.startAttack(attack, 'kick_jump');
    return true;
  }

  public kickCrouch(): boolean {
    if (this.cannotAttack()) return false;
    const attack: AttackInfo = {
      type: 'kick_crouch',
      name: 'Crouch Kick',
      damage: this.config.stats.kickCrouchDamage || 8,
      height: 'low',
      activeStart: 0.08,
      activeEnd: 0.21,
      duration: 0.28,
      range: 1.65,
      knockback: 4.2,
      hitStun: 0.25
    };
    this.startAttack(attack, 'kick_crouch');
    return true;
  }

  public specialAttack(): boolean {
    if (this.cannotAttack()) return false;
    if (this.specialCooldown > 0) return false;

    const specialName = this.config.specialAttack ? this.config.specialAttack.name : 'FIRE STRIKE';
    const specialType = this.config.specialAttack ? this.config.specialAttack.type : 'fire_strike';

    const attack: AttackInfo = {
      type: 'special',
      name: specialName,
      damage: this.config.stats.specialDamage || 20,
      height: 'special',
      activeStart: 0.18,
      activeEnd: 0.45,
      duration: 0.50,
      range: 2.4,
      knockback: 8.5,
      hitStun: 0.45
    };

    this.specialCooldown = 5.0; // Fixed cooldown to match test expectations

    // Pick character-specific special animation
    let animState: AnimationState = 'special';
    if (specialType === 'fire_strike') animState = 'special_alex';
    else if (specialType === 'thunder_kick') animState = 'special_max';
    else if (specialType === 'shadow_rush') animState = 'special_ryan';
    else if (specialType === 'phoenix_kick') animState = 'special_luna';
    else if (specialType === 'dragon_spin') animState = 'special_maya';

    this.startAttack(attack, animState);
    return true;
  }

  private cannotAttack(): boolean {
    return this.isAttacking || this.isBlocking || this.isHitStunned || this.isKnockedOut || this.isVictorious;
  }

  private startAttack(attack: AttackInfo, animState: AnimationState): void {
    this.isAttacking = true;
    this.currentAttack = attack;
    this.attackTimer = 0;
    this.hasHit = false;

    if (this.isGrounded) {
      // Forward momentum nudge for heavy and special attacks
      if (attack.type === 'punch_heavy') {
        this.velocity.x = this.facing * 1.5;
      } else if (attack.type === 'special') {
        this.velocity.x = this.facing * 3.0;
      } else {
        this.velocity.x *= 0.3;
      }
    }
    this.anim.play(animState, true);
  }

  /**
   * Advanced High/Low Blocking & Damage Calculation
   */
  public takeDamage(
    incomingDamage: number,
    knockbackDir: number,
    knockbackForce: number,
    attackHeight: AttackHeight = 'mid'
  ): { damageDealt: number; wasBlocked: boolean; isKO: boolean } {
    if (this.isKnockedOut) {
      return { damageDealt: 0, wasBlocked: false, isKO: true };
    }

    let actualDamage = incomingDamage;
    let wasBlocked = false;

    if (this.isBlocking) {
      if (!this.isCrouching) {
        // Standing Block: guards high, mid, special. Low attacks bypass!
        if (attackHeight === 'low') {
          // Low attack bypasses standing guard (85% damage taken)
          actualDamage = Math.round(incomingDamage * 0.85 * 10) / 10;
          wasBlocked = false;
        } else {
          // Standing guard protects (80% reduction)
          actualDamage = Math.round(incomingDamage * 0.2 * 10) / 10;
          wasBlocked = true;
        }
      } else {
        // Crouching Block: guards low and mid. Overhead attacks bypass!
        if (attackHeight === 'overhead') {
          // Overhead jump attacks bypass crouching guard!
          actualDamage = incomingDamage;
          wasBlocked = false;
        } else {
          // Crouching guard protects against low and mid (80% reduction)
          actualDamage = Math.round(incomingDamage * 0.2 * 10) / 10;
          wasBlocked = true;
        }
      }
    }

    this.health = Math.max(0, this.health - actualDamage);

    // Apply knockback
    const effectiveKb = wasBlocked ? knockbackForce * 0.35 : knockbackForce;
    this.velocity.x = knockbackDir * effectiveKb;

    if (this.health <= 0) {
      this.isKnockedOut = true;
      this.isAttacking = false;
      this.currentAttack = null;
      this.anim.play('ko', true);
      return { damageDealt: actualDamage, wasBlocked, isKO: true };
    }

    if (!wasBlocked) {
      this.isHitStunned = true;
      const stunDur = incomingDamage >= 12 ? 0.32 : 0.20;
      this.hitStunTimer = stunDur;
      this.isAttacking = false;
      this.currentAttack = null;

      // Reaction animation
      if (attackHeight === 'low') {
        this.anim.play('hurt_low', true);
      } else if (incomingDamage >= 12) {
        this.anim.play('hurt_heavy', true);
      } else {
        this.anim.play('hurt_high', true);
      }
    }

    return { damageDealt: actualDamage, wasBlocked, isKO: false };
  }

  public triggerVictory(): void {
    this.isVictorious = true;
    this.isAttacking = false;
    this.currentAttack = null;
    this.isBlocking = false;

    // Pick character-specific victory animation
    const charId = this.config.id.toLowerCase();
    let vicAnim: AnimationState = 'victory';
    if (charId.includes('01') || charId.includes('alex') || charId.includes('tacir')) vicAnim = 'victory_alex';
    else if (charId.includes('02') || charId.includes('max') || charId.includes('farhad')) vicAnim = 'victory_max';
    else if (charId.includes('03') || charId.includes('ryan') || charId.includes('rufat')) vicAnim = 'victory_ryan';
    else if (charId.includes('04') || charId.includes('luna') || charId.includes('aynur')) vicAnim = 'victory_luna';
    else if (charId.includes('05') || charId.includes('maya') || charId.includes('sevil')) vicAnim = 'victory_maya';

    this.anim.play(vicAnim, true);
  }

  public update(dt: number, arenaHalfWidth: number): void {
    // 1. Cooldowns
    if (this.specialCooldown > 0) {
      this.specialCooldown = Math.max(0, this.specialCooldown - dt);
    }

    // 2. Hitstun
    if (this.isHitStunned) {
      this.hitStunTimer -= dt;
      if (this.hitStunTimer <= 0) {
        this.isHitStunned = false;
        if (!this.isKnockedOut && !this.isVictorious) {
          this.anim.play(this.isCrouching ? 'crouch' : 'idle');
        }
      }
    }

    // 3. Attack Progression
    if (this.isAttacking && this.currentAttack) {
      this.attackTimer += dt;
      if (this.attackTimer >= this.currentAttack.duration) {
        this.isAttacking = false;
        this.currentAttack = null;
        if (!this.isKnockedOut && !this.isVictorious) {
          if (this.isBlocking) {
            this.anim.play(this.isCrouching ? 'block_low' : 'block');
          } else if (this.isCrouching) {
            this.anim.play('crouch');
          } else {
            this.anim.play(this.isGrounded ? 'idle' : 'jump');
          }
        }
      }
    }

    // 4. Gravity & Vertical Physics
    if (!this.isGrounded) {
      this.velocity.y += this.gravity * dt;
      this.position.y += this.velocity.y * dt;

      if (this.position.y <= 0) {
        this.position.y = 0;
        this.velocity.y = 0;
        this.isGrounded = true;
        if (!this.isAttacking && !this.isHitStunned && !this.isKnockedOut && !this.isVictorious) {
          if (this.isCrouching) {
            this.anim.play(this.isBlocking ? 'block_low' : 'crouch');
          } else if (Math.abs(this.velocity.x) > 0.5) {
            this.anim.play('walk_forward');
          } else {
            this.anim.play(this.isBlocking ? 'block' : 'idle');
          }
        }
      }
    }

    // 5. Horizontal Physics & Arena Boundaries
    this.position.x += this.velocity.x * dt;
    if (this.isGrounded && Math.abs(this.velocity.x) > 0.01) {
      this.velocity.x *= 0.88;
      if (Math.abs(this.velocity.x) < 0.05) this.velocity.x = 0;
    }

    // Clamp inside arena walls
    const bound = arenaHalfWidth - this.hurtboxRadius;
    if (this.position.x < -bound) {
      this.position.x = -bound;
      this.velocity.x = 0;
    } else if (this.position.x > bound) {
      this.position.x = bound;
      this.velocity.x = 0;
    }

    this.position.z = 0;
    this.root.position.copy(this.position);
    this.anim.update(dt);
  }

  public getProjectileSpawnPosition(): THREE.Vector3 {
    const worldPos = new THREE.Vector3();
    this.meshResult.specialOrigin.getWorldPosition(worldPos);
    worldPos.z = 0;
    return worldPos;
  }
}
