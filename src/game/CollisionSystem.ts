import { Fighter } from '../characters/Fighter';

export class CollisionSystem {
  public static resolveFighterOverlap(f1: Fighter, f2: Fighter, arenaHalfWidth: number): void {
    if (f1.isKnockedOut || f2.isKnockedOut) return;

    // Check vertical overlap
    const yDiff = Math.abs(f1.position.y - f2.position.y);
    const heightThreshold = 1.35; // If a fighter jumps high enough, they can cross over!
    if (yDiff > heightThreshold) {
      return;
    }

    const minDistance = f1.hurtboxRadius + f2.hurtboxRadius + 0.1;
    const dx = f2.position.x - f1.position.x;
    const dist = Math.abs(dx);

    if (dist < minDistance) {
      const overlap = minDistance - dist;
      const pushDirection = dx >= 0 ? 1 : -1;
      const halfPush = overlap * 0.5;

      const bound = arenaHalfWidth - f1.hurtboxRadius;

      // Try pushing both fighters apart
      let f1NewX = f1.position.x - pushDirection * halfPush;
      let f2NewX = f2.position.x + pushDirection * halfPush;

      // Check wall limits
      if (f1NewX < -bound) {
        const excess = -bound - f1NewX;
        f1NewX = -bound;
        f2NewX += excess;
      } else if (f1NewX > bound) {
        const excess = f1NewX - bound;
        f1NewX = bound;
        f2NewX -= excess;
      }

      if (f2NewX < -bound) {
        const excess = -bound - f2NewX;
        f2NewX = -bound;
        f1NewX += excess;
      } else if (f2NewX > bound) {
        const excess = f2NewX - bound;
        f2NewX = bound;
        f1NewX -= excess;
      }

      f1.position.x = Math.max(-bound, Math.min(bound, f1NewX));
      f2.position.x = Math.max(-bound, Math.min(bound, f2NewX));

      f1.root.position.x = f1.position.x;
      f2.root.position.x = f2.position.x;
    }
  }

  public static checkMeleeHit(attacker: Fighter, defender: Fighter): boolean {
    if (!attacker.isAttacking || !attacker.currentAttack || attacker.hasHit) {
      return false;
    }
    if (defender.isKnockedOut) {
      return false;
    }

    const attack = attacker.currentAttack;
    // Check if attack is currently in its active damage frame window
    if (attacker.attackTimer < attack.activeStart || attacker.attackTimer > attack.activeEnd) {
      return false;
    }

    // Check direction: attacker must be facing defender (or very close)
    const dx = defender.position.x - attacker.position.x;
    const isFacingCorrectly = (attacker.facing === 1 && dx > -0.25) || (attacker.facing === -1 && dx < 0.25);
    if (!isFacingCorrectly) {
      return false;
    }

    // Height & vertical check
    const attackerY = attacker.position.y;
    const defenderY = defender.position.y;
    const verticalDist = Math.abs(defenderY - attackerY);

    // Low attacks cannot hit opponents who are high airborne (jumping)
    if (attack.height === 'low' && defenderY > 0.9) {
      return false;
    }

    // Jump / overhead attacks miss if defender is way above attacker
    if (attack.height === 'overhead' && defenderY > attackerY + 1.2) {
      return false;
    }

    // Distance check along X
    const horizontalDist = Math.abs(dx);

    if (horizontalDist <= attack.range && verticalDist <= 1.6) {
      attacker.hasHit = true; // Registered hit once for this attack swing
      return true;
    }

    return false;
  }
}
