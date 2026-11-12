import { Fighter } from '../characters/Fighter';
import { UIManager } from '../ui/UIManager';
import { AudioManager } from './AudioManager';

export type RoundPhase = 'countdown' | 'fighting' | 'round_over' | 'match_over';

export class MatchManager {
  private ui: UIManager;
  private audio: AudioManager;

  public p1Wins: number = 0;
  public p2Wins: number = 0;
  public currentRound: number = 1;

  public roundTimer: number = 90.0;
  public phase: RoundPhase = 'countdown';

  private countdownStep: number = 0;
  private countdownTimer: number = 0;
  private roundOverDelayTimer: number = 0;

  private onMatchEnded?: (winnerId: 1 | 2) => void;

  constructor(ui: UIManager, audio: AudioManager, onMatchEnded?: (winnerId: 1 | 2) => void) {
    this.ui = ui;
    this.audio = audio;
    this.onMatchEnded = onMatchEnded;
  }

  public startNewMatch(f1: Fighter, f2: Fighter): void {
    this.p1Wins = 0;
    this.p2Wins = 0;
    this.currentRound = 1;
    this.startRound(f1, f2);
  }

  public restartSameMatch(f1: Fighter, f2: Fighter): void {
    this.p1Wins = 0;
    this.p2Wins = 0;
    this.currentRound = 1;
    this.startRound(f1, f2);
  }

  public startRound(f1: Fighter, f2: Fighter): void {
    this.phase = 'countdown';
    this.roundTimer = 90.0;
    this.countdownStep = 0;
    this.countdownTimer = 0;
    this.roundOverDelayTimer = 0;

    // Reset fighters to starting positions and full HP
    f1.resetForRound(-4.2, 1);
    f2.resetForRound(4.2, -1);

    // Initial countdown step: "ROUND X"
    this.ui.showAnnounce(`ROUND ${this.currentRound}`, 'READY', 1000);
    this.audio.playRoundStart();
  }

  public update(dt: number, f1: Fighter, f2: Fighter): void {
    if (this.phase === 'countdown') {
      this.updateCountdown(dt, f1, f2);
    } else if (this.phase === 'fighting') {
      this.updateFighting(dt, f1, f2);
    } else if (this.phase === 'round_over') {
      this.updateRoundOver(dt, f1, f2);
    }
  }

  private updateCountdown(dt: number, f1: Fighter, f2: Fighter): void {
    this.countdownTimer += dt;

    if (this.countdownStep === 0 && this.countdownTimer >= 1.0) {
      this.countdownStep = 1;
      this.ui.showAnnounce('3', '', 800);
      this.audio.playMenuSelect();
    } else if (this.countdownStep === 1 && this.countdownTimer >= 1.8) {
      this.countdownStep = 2;
      this.ui.showAnnounce('2', '', 800);
      this.audio.playMenuSelect();
    } else if (this.countdownStep === 2 && this.countdownTimer >= 2.6) {
      this.countdownStep = 3;
      this.ui.showAnnounce('1', '', 800);
      this.audio.playMenuSelect();
    } else if (this.countdownStep === 3 && this.countdownTimer >= 3.4) {
      this.countdownStep = 4;
      this.phase = 'fighting';
      this.ui.showAnnounce('FIGHT!', '', 1000);
      this.audio.playRoundStart();
    }
  }

  private updateFighting(dt: number, f1: Fighter, f2: Fighter): void {
    // 1. Tick round timer
    this.roundTimer = Math.max(0, this.roundTimer - dt);

    // 2. Check Knockouts
    if (f1.health <= 0 || f2.health <= 0) {
      this.endRoundWithKO(f1, f2);
      return;
    }

    // 3. Check Time Expiration
    if (this.roundTimer <= 0) {
      this.endRoundWithTimeOut(f1, f2);
    }
  }

  private endRoundWithKO(f1: Fighter, f2: Fighter): void {
    this.phase = 'round_over';
    this.roundOverDelayTimer = 0;

    // Simultaneous KO check
    if (f1.health <= 0 && f2.health <= 0) {
      this.ui.showAnnounce('DOUBLE K.O.!', 'DRAW GAME', 2500);
      return;
    }

    if (f1.health <= 0) {
      // P2 won round
      this.p2Wins++;
      f2.triggerVictory();
      this.ui.showAnnounce('K.O.!', 'PLAYER 2 WINS ROUND', 2500);
    } else {
      // P1 won round
      this.p1Wins++;
      f1.triggerVictory();
      this.ui.showAnnounce('K.O.!', 'PLAYER 1 WINS ROUND', 2500);
    }
  }

  private endRoundWithTimeOut(f1: Fighter, f2: Fighter): void {
    this.phase = 'round_over';
    this.roundOverDelayTimer = 0;

    if (Math.abs(f1.health - f2.health) < 0.1) {
      // Draw - no points awarded, replay round
      this.ui.showAnnounce('TIME UP!', 'DRAW ROUND', 2500);
    } else if (f1.health > f2.health) {
      this.p1Wins++;
      f1.triggerVictory();
      this.ui.showAnnounce('TIME UP!', 'PLAYER 1 WINS ROUND', 2500);
    } else {
      this.p2Wins++;
      f2.triggerVictory();
      this.ui.showAnnounce('TIME UP!', 'PLAYER 2 WINS ROUND', 2500);
    }
  }

  private updateRoundOver(dt: number, f1: Fighter, f2: Fighter): void {
    this.roundOverDelayTimer += dt;

    // After 3.0 seconds, proceed to next round or end match
    if (this.roundOverDelayTimer >= 3.0) {
      if (this.p1Wins >= 2 || this.p2Wins >= 2) {
        // Match winner!
        this.phase = 'match_over';
        const winnerId: 1 | 2 = this.p1Wins >= 2 ? 1 : 2;
        this.audio.playVictory();
        this.onMatchEnded?.(winnerId);
      } else {
        // Advance to next round
        this.currentRound++;
        this.startRound(f1, f2);
      }
    }
  }
}
