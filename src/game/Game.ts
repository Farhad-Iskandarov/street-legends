import * as THREE from 'three';
import { FightingArena } from '../scenes/FightingArena';
import { CameraController } from './CameraController';
import { InputManager } from './InputManager';
import { AudioManager } from './AudioManager';
import { VFXManager } from './VFXManager';
import { CombatSystem } from './CombatSystem';
import { MatchManager } from './MatchManager';
import { UIManager } from '../ui/UIManager';
import { Fighter } from '../characters/Fighter';
import { FighterFactory } from '../characters/FighterFactory';
import { CharacterConfig, CHARACTERS_REGISTRY } from '../characters/CharacterConfig';

export type GameState = 'MENU' | 'CHAR_SELECT' | 'VS' | 'BATTLE' | 'VICTORY';

export class Game {
  private renderer: THREE.WebGLRenderer;
  private canvas: HTMLCanvasElement;
  private arena: FightingArena;
  private cameraCtrl: CameraController;
  private input: InputManager;
  private audio: AudioManager;
  private vfx: VFXManager;
  private combat: CombatSystem;
  private match: MatchManager;
  private ui: UIManager;

  private state: GameState = 'MENU';
  private lastTime: number = 0;

  // Active Fighters
  private fighter1: Fighter;
  private fighter2: Fighter;
  private p1Config: CharacterConfig;
  private p2Config: CharacterConfig;

  constructor() {
    this.canvas = document.getElementById('game-canvas') as HTMLCanvasElement;

    // 1. WebGL Renderer
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;

    // 2. Scene & Environment
    this.arena = new FightingArena();
    this.cameraCtrl = new CameraController(45, window.innerWidth / window.innerHeight);

    // 3. Subsystems
    this.input = new InputManager();
    this.audio = new AudioManager();
    this.vfx = new VFXManager(this.arena.scene);

    // 4. Default Selected Fighters (Alex vs Luna)
    this.p1Config = CHARACTERS_REGISTRY['alex'];
    this.p2Config = CHARACTERS_REGISTRY['luna'];
    this.fighter1 = FighterFactory.createFromConfig(1, this.p1Config);
    this.fighter2 = FighterFactory.createFromConfig(2, this.p2Config);

    this.arena.scene.add(this.fighter1.root);
    this.arena.scene.add(this.fighter2.root);

    // 5. Combat System
    this.combat = new CombatSystem(this.vfx, this.audio);

    // 6. UI & Match Managers
    this.ui = new UIManager(this.audio, {
      onStartClicked: () => this.handleStartClicked(),
      onSelectBackClicked: () => this.handleSelectBackClicked(),
      onBothFightersLocked: (p1, p2) => this.handleFightersLocked(p1, p2),
      onRematchClicked: () => this.handleRematchClicked(),
      onCharSelectClicked: () => this.handleCharSelectClicked(),
      onMainMenuClicked: () => this.handleMainMenuClicked()
    });

    this.match = new MatchManager(this.ui, this.audio, (winnerId) => this.handleMatchEnded(winnerId));

    // 7. Window Resize
    window.addEventListener('resize', () => this.handleResize());

    // 8. Start Game Loop
    this.lastTime = performance.now();
    requestAnimationFrame((t) => this.loop(t));
  }

  private handleResize(): void {
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.renderer.setSize(w, h);
    this.cameraCtrl.onResize(w, h);
  }

  // --- UI FLOW HANDLERS ---

  private handleStartClicked(): void {
    this.audio.ensureContext();
    this.state = 'CHAR_SELECT';
    this.ui.showCharSelect();
  }

  private handleSelectBackClicked(): void {
    this.state = 'MENU';
    this.ui.showMainMenu();
  }

  private async handleFightersLocked(p1Char: CharacterConfig, p2Char: CharacterConfig): Promise<void> {
    this.p1Config = p1Char;
    this.p2Config = p2Char;

    // Remove existing fighters from scene
    this.arena.scene.remove(this.fighter1.root);
    this.arena.scene.remove(this.fighter2.root);

    // Spawn selected fighters (supporting custom GLB models with procedural fallback)
    this.fighter1 = await FighterFactory.createFighterAsync(1, this.p1Config);
    this.fighter2 = await FighterFactory.createFighterAsync(2, this.p2Config);
    this.arena.scene.add(this.fighter1.root);
    this.arena.scene.add(this.fighter2.root);

    // Show VS Screen
    this.state = 'VS';
    this.ui.showVSScreen(p1Char, p2Char, () => {
      this.startCombatMatch();
    });
  }

  private startCombatMatch(): void {
    this.state = 'BATTLE';
    this.vfx.clearAll();
    this.ui.showGameHUD(this.p1Config.name, this.p2Config.name);
    this.match.startNewMatch(this.fighter1, this.fighter2);
    this.audio.startBattleMusic();
  }

  private handleRematchClicked(): void {
    this.vfx.clearAll();
    this.state = 'BATTLE';
    this.ui.showGameHUD(this.p1Config.name, this.p2Config.name);
    this.match.restartSameMatch(this.fighter1, this.fighter2);
    this.audio.startBattleMusic();
  }

  private handleCharSelectClicked(): void {
    this.vfx.clearAll();
    this.audio.stopBattleMusic();
    this.state = 'CHAR_SELECT';
    this.ui.showCharSelect();
  }

  private handleMainMenuClicked(): void {
    this.vfx.clearAll();
    this.audio.stopBattleMusic();
    this.state = 'MENU';
    this.ui.showMainMenu();
  }

  private handleMatchEnded(winnerId: 1 | 2): void {
    this.state = 'VICTORY';
    this.audio.stopBattleMusic();
    const winnerName = winnerId === 1 ? this.p1Config.name : this.p2Config.name;
    this.ui.showVictoryScreen(winnerId, winnerName, this.match.p1Wins, this.match.p2Wins);
  }

  // --- MAIN GAME LOOP ---

  private loop(currentTime: number): void {
    const rawDt = (currentTime - this.lastTime) * 0.001;
    this.lastTime = currentTime;
    const dt = Math.min(rawDt, 0.05); // Clamp dt to prevent spiral of death on tab unfocus

    // 1. Process State-Specific Updates
    if (this.state === 'CHAR_SELECT') {
      this.updateCharSelectInput();
    } else if (this.state === 'BATTLE') {
      this.updateBattle(dt);
    }

    // UI Updates (e.g. 3D Character Previews)
    this.ui.update(dt);

    // 2. Scene & Lighting Animations
    this.arena.update(dt);

    // 3. Camera Update
    this.cameraCtrl.update(dt, this.fighter1, this.fighter2, this.arena.arenaHalfWidth);

    // 4. VFX Update (projectiles, particles, screen shake)
    this.vfx.update(dt, this.cameraCtrl.camera);

    // 5. Render 3D Scene
    this.renderer.render(this.arena.scene, this.cameraCtrl.camera);

    // 6. End-of-frame Input Snapshot
    this.input.update();

    requestAnimationFrame((t) => this.loop(t));
  }

  private updateCharSelectInput(): void {
    const p1Left = this.input.isKeyJustPressed('KeyA');
    const p1Right = this.input.isKeyJustPressed('KeyD');
    const p1Confirm = this.input.isKeyJustPressed('KeyF');

    const p2Left = this.input.isKeyJustPressed('ArrowLeft');
    const p2Right = this.input.isKeyJustPressed('ArrowRight');
    const p2Confirm = this.input.isKeyJustPressed('KeyK');

    this.ui.handleCharSelectInput({
      p1Left,
      p1Right,
      p1Confirm,
      p2Left,
      p2Right,
      p2Confirm
    });
  }

  private updateBattle(dt: number): void {
    // 1. Process Player Inputs only during fighting phase
    if (this.match.phase === 'fighting') {
      this.processCombatInputs();
    } else {
      // Idle fighters during countdown / round over
      if (!this.fighter1.isVictorious && !this.fighter1.isKnockedOut) {
        this.fighter1.stopMoving();
      }
      if (!this.fighter2.isVictorious && !this.fighter2.isKnockedOut) {
        this.fighter2.stopMoving();
      }
    }

    // 2. Auto-facing: characters continuously face each other
    this.fighter1.autoFaceOpponent(this.fighter2.position.x);
    this.fighter2.autoFaceOpponent(this.fighter1.position.x);

    // 3. Update Fighter Physics & Animations
    this.fighter1.update(dt, this.arena.arenaHalfWidth);
    this.fighter2.update(dt, this.arena.arenaHalfWidth);

    // 4. Update Combat & Push Collisions
    this.combat.update(dt, this.fighter1, this.fighter2, this.arena.arenaHalfWidth);

    // 5. Update Match Rules (Timer, Rounds, KO)
    this.match.update(dt, this.fighter1, this.fighter2);

    // 6. Update UI HUD
    this.ui.updateHUD(
      this.fighter1.health,
      this.fighter2.health,
      this.fighter1.config.stats.maxHealth,
      this.fighter2.config.stats.maxHealth,
      this.fighter1.specialCooldown,
      this.fighter2.specialCooldown,
      this.fighter1.config.stats.specialCooldown,
      this.match.p1Wins,
      this.match.p2Wins,
      this.match.currentRound,
      this.match.roundTimer
    );
  }

  private processCombatInputs(): void {
    const p1 = this.input.getPlayer1Actions();
    const p2 = this.input.getPlayer2Actions();

    // --- PLAYER 1 INPUTS ---
    // Blocking
    if (p1.block) {
      this.fighter1.block(true);
    } else if (this.fighter1.isBlocking) {
      this.fighter1.block(false);
    }

    // Movement & Crouch
    if (!this.fighter1.isBlocking) {
      if (p1.crouch) {
        this.fighter1.crouch(true);
      } else {
        if (this.fighter1.isCrouching) this.fighter1.crouch(false);

        if (p1.jumpTriggered) {
          this.fighter1.jump();
          this.audio.playJump();
        } else if (p1.moveLeft) {
          this.fighter1.move(-1);
        } else if (p1.moveRight) {
          this.fighter1.move(1);
        } else {
          this.fighter1.stopMoving();
        }
      }

      // Attacks
      if (p1.specialTriggered) {
        if (this.fighter1.specialAttack()) {
          this.audio.playSpecialAttack();
          const spawnPos = this.fighter1.getProjectileSpawnPosition();
          this.vfx.spawnProjectile(1, spawnPos, this.fighter1.facing, this.fighter1.config.stats.specialDamage, 0x00d2ff);
        }
      } else if (p1.kickTriggered) {
        this.fighter1.kick();
      } else if (p1.punchTriggered) {
        this.fighter1.punch();
      }
    }

    // --- PLAYER 2 INPUTS ---
    // Blocking
    if (p2.block) {
      this.fighter2.block(true);
    } else if (this.fighter2.isBlocking) {
      this.fighter2.block(false);
    }

    // Movement & Crouch
    if (!this.fighter2.isBlocking) {
      if (p2.crouch) {
        this.fighter2.crouch(true);
      } else {
        if (this.fighter2.isCrouching) this.fighter2.crouch(false);

        if (p2.jumpTriggered) {
          this.fighter2.jump();
          this.audio.playJump();
        } else if (p2.moveLeft) {
          this.fighter2.move(-1);
        } else if (p2.moveRight) {
          this.fighter2.move(1);
        } else {
          this.fighter2.stopMoving();
        }
      }

      // Attacks
      if (p2.specialTriggered) {
        if (this.fighter2.specialAttack()) {
          this.audio.playSpecialAttack();
          const spawnPos = this.fighter2.getProjectileSpawnPosition();
          this.vfx.spawnProjectile(2, spawnPos, this.fighter2.facing, this.fighter2.config.stats.specialDamage, 0xff3366);
        }
      } else if (p2.kickTriggered) {
        this.fighter2.kick();
      } else if (p2.punchTriggered) {
        this.fighter2.punch();
      }
    }
  }
}
