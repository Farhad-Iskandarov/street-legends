import * as THREE from 'three';
import { Fighter } from '../characters/Fighter';
import { CollisionSystem } from './CollisionSystem';
import { VFXManager } from './VFXManager';
import { AudioManager } from './AudioManager';
import { ComboManager } from './ComboManager';

export interface CombatEvent {
  type: 'hit' | 'block' | 'ko';
  attackerId: 1 | 2;
  defenderId: 1 | 2;
  damage: number;
  attackType: string;
}

export class CombatSystem {
  private vfx: VFXManager;
  private audio: AudioManager;
  public readonly comboManager: ComboManager;
  private onCombatEvent?: (evt: CombatEvent) => void;

  constructor(vfx: VFXManager, audio: AudioManager, onCombatEvent?: (evt: CombatEvent) => void) {
    this.vfx = vfx;
    this.audio = audio;
    this.comboManager = new ComboManager();
    this.onCombatEvent = onCombatEvent;
  }

  public update(dt: number, f1: Fighter, f2: Fighter, arenaHalfWidth: number): void {
    // 0. Update active combos
    this.comboManager.update();

    // 1. Resolve body overlap / pushbox
    CollisionSystem.resolveFighterOverlap(f1, f2, arenaHalfWidth);

    // 2. Check Melee Attacks: F1 -> F2
    this.processMelee(f1, f2);

    // 3. Check Melee Attacks: F2 -> F1
    this.processMelee(f2, f1);

    // 4. Check Active Projectiles
    this.processProjectiles(f1, f2);
  }

  private processMelee(attacker: Fighter, defender: Fighter): void {
    if (CollisionSystem.checkMeleeHit(attacker, defender)) {
      const attack = attacker.currentAttack!;
      const knockbackDir = attacker.facing;

      // 1. Calculate Combo Hit and Damage Scaling
      const comboHit = this.comboManager.registerHit(attacker.playerId, attack.type, attack.damage);
      const damageToDeal = comboHit.scaledDamage;

      // 2. Apply damage with height check
      const result = defender.takeDamage(damageToDeal, knockbackDir, attack.knockback, attack.height);

      // Hit point position for VFX
      const hitPoint = new THREE.Vector3(
        (attacker.position.x + defender.position.x) * 0.5,
        Math.max(attacker.position.y, defender.position.y) + 1.2,
        0
      );

      if (result.wasBlocked) {
        // Attack was blocked: break active combo sequence
        this.comboManager.reset(attacker.playerId);

        this.audio.playBlock();
        this.vfx.spawnBlockEffect(hitPoint);
        this.vfx.triggerScreenShake(0.12);
        this.onCombatEvent?.({
          type: 'block',
          attackerId: attacker.playerId,
          defenderId: defender.playerId,
          damage: result.damageDealt,
          attackType: attack.type
        });
      } else {
        // Unblocked Hit: Hit-Stop micro freeze
        const isHeavy = attack.type.includes('heavy') || attack.type === 'special';
        this.vfx.triggerHitStop(isHeavy ? 0.08 : 0.04);

        // Sound Feedback
        if (attack.type === 'special') {
          const specType = attacker.config.specialAttack?.type || 'fire_strike';
          this.audio.playSpecialByCharacter(specType);
          this.vfx.spawnSpecialEffect(specType, hitPoint, attacker.facing);
        } else if (attack.type.startsWith('kick')) {
          this.audio.playKickImpact(attack.type === 'kick_heavy');
        } else {
          this.audio.playPunchImpact(attack.type === 'punch_heavy');
        }

        // Combo Audio / VFX
        if (comboHit.completedCombo) {
          this.audio.playComboComplete();
          this.vfx.spawnHitSparks(hitPoint, 0xffd700, 24);
        } else if (comboHit.comboCount >= 2) {
          this.audio.playComboHit(comboHit.comboCount);
        }

        // Hit Sparks & Screen Shake based on attack type
        if (attack.type.includes('heavy')) {
          this.vfx.spawnHitSparks(hitPoint, 0xff3300, 20);
          this.vfx.triggerImpactFlash('rgba(255, 100, 50, 0.6)', 50);
          this.vfx.triggerScreenShake(0.38);
        } else if (attack.type === 'special') {
          this.vfx.spawnHitSparks(hitPoint, 0x00d2ff, 28);
          this.vfx.triggerImpactFlash('rgba(255, 255, 255, 0.8)', 70);
          this.vfx.triggerScreenShake(0.45);
        } else {
          this.vfx.spawnHitSparks(hitPoint, 0xffe600, 12);
          this.vfx.triggerImpactFlash('rgba(255, 240, 200, 0.4)', 35);
          this.vfx.triggerScreenShake(0.18);
        }

        if (result.isKO) {
          this.audio.playKO();
          this.vfx.triggerSlowMotion(0.2, 0.7); // Brief cinematic slow-motion on KO
          this.vfx.triggerScreenShake(0.85);
          this.vfx.triggerImpactFlash('#ff0033', 140);
          this.onCombatEvent?.({
            type: 'ko',
            attackerId: attacker.playerId,
            defenderId: defender.playerId,
            damage: result.damageDealt,
            attackType: attack.type
          });
        } else {
          this.onCombatEvent?.({
            type: 'hit',
            attackerId: attacker.playerId,
            defenderId: defender.playerId,
            damage: result.damageDealt,
            attackType: attack.type
          });
        }
      }
    }
  }

  private processProjectiles(f1: Fighter, f2: Fighter): void {
    const projectiles = this.vfx.getProjectiles();

    for (const proj of projectiles) {
      const target = proj.ownerId === 1 ? f2 : f1;
      if (target.isKnockedOut) continue;

      // Distance check between projectile position and target center
      const targetCenterY = target.position.y + 0.95;
      const dx = Math.abs(proj.position.x - target.position.x);
      const dy = Math.abs(proj.position.y - targetCenterY);

      if (dx < (proj.radius + target.hurtboxRadius) && dy < 1.1) {
        // Projectile hit!
        const knockbackDir = proj.velocity.x > 0 ? 1 : -1;
        const result = target.takeDamage(proj.damage, knockbackDir, proj.knockback, 'special');

        this.vfx.removeProjectile(proj);
        this.audio.playSpecialExplosion();

        const hitPoint = proj.position.clone();

        if (result.wasBlocked) {
          this.audio.playBlock();
          this.vfx.spawnBlockEffect(hitPoint);
          this.vfx.triggerScreenShake(0.25);
          this.onCombatEvent?.({
            type: 'block',
            attackerId: proj.ownerId,
            defenderId: target.playerId,
            damage: result.damageDealt,
            attackType: 'special'
          });
        } else {
          this.vfx.spawnHitSparks(hitPoint, 0x00d2ff, 25);
          this.vfx.triggerScreenShake(0.6);
          this.vfx.triggerImpactFlash('rgba(0, 210, 255, 0.7)', 90);

          if (result.isKO) {
            this.audio.playKO();
            this.vfx.triggerSlowMotion(0.2, 0.7);
            this.vfx.triggerScreenShake(0.9);
            this.vfx.triggerImpactFlash('#ff0033', 120);
            this.onCombatEvent?.({
              type: 'ko',
              attackerId: proj.ownerId,
              defenderId: target.playerId,
              damage: result.damageDealt,
              attackType: 'special'
            });
          } else {
            this.onCombatEvent?.({
              type: 'hit',
              attackerId: proj.ownerId,
              defenderId: target.playerId,
              damage: result.damageDealt,
              attackType: 'special'
            });
          }
        }
      }
    }
  }
}
