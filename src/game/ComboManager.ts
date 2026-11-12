export interface ComboDefinition {
  id: string;
  name: string;
  sequence: string[]; // e.g. ['PUNCH', 'PUNCH', 'KICK'] or ['CROUCH_PUNCH', 'KICK']
  bonusDamage: number;
}

export const COMBOS: ComboDefinition[] = [
  {
    id: 'triple_strike',
    name: 'TRIPLE STRIKE',
    sequence: ['PUNCH', 'PUNCH', 'KICK'],
    bonusDamage: 4
  },
  {
    id: 'power_combo',
    name: 'POWER COMBO',
    sequence: ['KICK', 'PUNCH', 'KICK'],
    bonusDamage: 5
  },
  {
    id: 'rising_attack',
    name: 'RISING ATTACK',
    sequence: ['CROUCH_PUNCH', 'KICK'],
    bonusDamage: 6
  }
];

export interface ActiveComboState {
  playerId: 1 | 2;
  currentHits: number;
  totalDamage: number;
  inputHistory: { action: string; time: number }[];
  lastHitTime: number;
  matchedCombo: ComboDefinition | null;
}

export class ComboManager {
  private p1State: ActiveComboState;
  private p2State: ActiveComboState;
  private comboTimeout: number = 0.85; // seconds allowed between consecutive hits

  public onComboUpdate?: (playerId: 1 | 2, hits: number, comboName: string | null) => void;
  public onComboComplete?: (playerId: 1 | 2, combo: ComboDefinition, totalDamage: number) => void;

  constructor() {
    this.p1State = this.createEmptyState(1);
    this.p2State = this.createEmptyState(2);
  }

  private createEmptyState(playerId: 1 | 2): ActiveComboState {
    return {
      playerId,
      currentHits: 0,
      totalDamage: 0,
      inputHistory: [],
      lastHitTime: 0,
      matchedCombo: null
    };
  }

  public registerInput(playerId: 1 | 2, action: string): void {
    const state = playerId === 1 ? this.p1State : this.p2State;
    const now = performance.now() * 0.001;

    // Prune stale inputs (> 1.2s old)
    state.inputHistory = state.inputHistory.filter(item => (now - item.time) <= 1.2);
    state.inputHistory.push({ action, time: now });
  }

  /**
   * Called when an attack successfully connects and damages the opponent.
   * Returns the damage multiplier (scaling) and any combo bonus.
   */
  public registerHit(
    attackerId: 1 | 2,
    attackAction: string,
    baseDamage: number
  ): { scaledDamage: number; comboCount: number; completedCombo: ComboDefinition | null } {
    const state = attackerId === 1 ? this.p1State : this.p2State;
    const now = performance.now() * 0.001;

    if (state.currentHits > 0 && (now - state.lastHitTime) > this.comboTimeout) {
      // Combo timed out; reset to first hit
      state.currentHits = 0;
      state.totalDamage = 0;
      state.matchedCombo = null;
    }

    state.currentHits++;
    state.lastHitTime = now;

    // Damage Scaling: 100%, 90%, 80%, 70% min
    let scale = 1.0;
    if (state.currentHits === 2) scale = 0.90;
    else if (state.currentHits === 3) scale = 0.80;
    else if (state.currentHits >= 4) scale = 0.70;

    let scaledDamage = Math.round(baseDamage * scale * 10) / 10;

    // Check for sequence match in the recent input history
    const matched = this.checkComboMatch(state.inputHistory.map(i => i.action));
    let completedCombo: ComboDefinition | null = null;

    if (matched && matched !== state.matchedCombo) {
      state.matchedCombo = matched;
      completedCombo = matched;
      scaledDamage += matched.bonusDamage;
      this.onComboComplete?.(attackerId, matched, state.totalDamage + scaledDamage);
    }

    state.totalDamage += scaledDamage;

    if (state.currentHits >= 2) {
      this.onComboUpdate?.(attackerId, state.currentHits, state.matchedCombo ? state.matchedCombo.name : null);
    }

    return {
      scaledDamage,
      comboCount: state.currentHits,
      completedCombo
    };
  }

  private checkComboMatch(actions: string[]): ComboDefinition | null {
    if (actions.length < 2) return null;

    for (const combo of COMBOS) {
      const len = combo.sequence.length;
      if (actions.length >= len) {
        const slice = actions.slice(-len);
        const matches = combo.sequence.every((req, idx) => {
          if (req === 'PUNCH') return slice[idx].includes('PUNCH') && !slice[idx].includes('CROUCH');
          if (req === 'KICK') return slice[idx].includes('KICK');
          if (req === 'CROUCH_PUNCH') return slice[idx] === 'CROUCH_PUNCH';
          return slice[idx] === req;
        });

        if (matches) return combo;
      }
    }
    return null;
  }

  public reset(playerId?: 1 | 2): void {
    if (!playerId || playerId === 1) {
      this.p1State = this.createEmptyState(1);
      this.onComboUpdate?.(1, 0, null);
    }
    if (!playerId || playerId === 2) {
      this.p2State = this.createEmptyState(2);
      this.onComboUpdate?.(2, 0, null);
    }
  }

  public update(): void {
    const now = performance.now() * 0.001;
    if (this.p1State.currentHits > 0 && (now - this.p1State.lastHitTime) > this.comboTimeout) {
      this.reset(1);
    }
    if (this.p2State.currentHits > 0 && (now - this.p2State.lastHitTime) > this.comboTimeout) {
      this.reset(2);
    }
  }
}
