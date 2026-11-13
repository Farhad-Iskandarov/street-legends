import { CHARACTER_LIST, CharacterConfig } from '../characters/CharacterConfig';
import { ARENA_LIST, ArenaId } from '../scenes/FightingArena';
import { AudioManager } from '../game/AudioManager';
import { CharacterPreviewRenderer } from './CharacterPreviewRenderer';

export interface UIEventListeners {
  onStartClicked: () => void;
  onSelectBackClicked: () => void;
  onBothFightersLocked: (p1Char: CharacterConfig, p2Char: CharacterConfig, arenaId: ArenaId) => void;
  onArenaSelected?: (arenaId: ArenaId) => void;
  onRematchClicked: () => void;
  onCharSelectClicked: () => void;
  onMainMenuClicked: () => void;
}

export class UIManager {
  private audio: AudioManager;
  private listeners: UIEventListeners;

  // Screen elements
  private mainMenuEl = document.getElementById('main-menu')!;
  private controlsModalEl = document.getElementById('controls-modal')!;
  private howModalEl = document.getElementById('how-to-play-modal')!;
  private charSelectEl = document.getElementById('char-select-screen')!;
  private vsScreenEl = document.getElementById('vs-screen')!;
  private gameHudEl = document.getElementById('game-hud')!;
  private victoryEl = document.getElementById('victory-screen')!;

  // Audio Toggle
  private audioBtn = document.getElementById('audio-toggle-btn')!;
  private audioIcon = document.getElementById('audio-icon')!;

  // 3D Live Character Previews
  private p1Preview: CharacterPreviewRenderer | null = null;
  private p2Preview: CharacterPreviewRenderer | null = null;

  // Character Select state
  public p1SelectIndex: number = 0;
  public p2SelectIndex: number = 3; // Default P2 to Aynur
  public arenaSelectIndex: number = 0; // Default to Khirdalan (index 0)
  public p1Locked: boolean = false;
  public p2Locked: boolean = false;
  private isCharSelectActive: boolean = false;

  // Preview Info Elements
  private p1PrevNameEl = document.getElementById('p1-preview-name');
  private p1PrevTitleEl = document.getElementById('p1-preview-title');
  private p1PrevOutfitEl = document.getElementById('p1-preview-outfit');

  private p2PrevNameEl = document.getElementById('p2-preview-name');
  private p2PrevTitleEl = document.getElementById('p2-preview-title');
  private p2PrevOutfitEl = document.getElementById('p2-preview-outfit');

  // HUD Elements
  private p1NameEl = document.getElementById('hud-p1-name')!;
  private p1HpFillEl = document.getElementById('hud-p1-hp')!;
  private p1HpDamageEl = document.getElementById('hud-p1-damage')!;
  private p1HpTextEl = document.getElementById('hud-p1-hp-text')!;
  private p1CdEl = document.getElementById('hud-p1-cd')!;
  private p1CdLabelEl = document.getElementById('hud-p1-cd-label');
  private p1Dot0 = document.getElementById('p1-dot-0')!;
  private p1Dot1 = document.getElementById('p1-dot-1')!;

  private p2NameEl = document.getElementById('hud-p2-name')!;
  private p2HpFillEl = document.getElementById('hud-p2-hp')!;
  private p2HpDamageEl = document.getElementById('hud-p2-damage')!;
  private p2HpTextEl = document.getElementById('hud-p2-hp-text')!;
  private p2CdEl = document.getElementById('hud-p2-cd')!;
  private p2CdLabelEl = document.getElementById('hud-p2-cd-label');
  private p2Dot0 = document.getElementById('p2-dot-0')!;
  private p2Dot1 = document.getElementById('p2-dot-1')!;

  private roundLabelEl = document.getElementById('hud-round-label')!;
  private timerEl = document.getElementById('hud-timer')!;

  // Combos
  private p1ComboEl = document.getElementById('hud-p1-combo');
  private p1ComboCountEl = document.getElementById('hud-p1-combo-count');
  private p1ComboNameEl = document.getElementById('hud-p1-combo-name');

  private p2ComboEl = document.getElementById('hud-p2-combo');
  private p2ComboCountEl = document.getElementById('hud-p2-combo-count');
  private p2ComboNameEl = document.getElementById('hud-p2-combo-name');

  // Announcer Overlay
  private announcerBanner = document.getElementById('announcer-banner')!;
  private announcerText = document.getElementById('announcer-text')!;
  private announcerSub = document.getElementById('announcer-sub')!;

  // Victory screen elements
  private vicWinnerEl = document.getElementById('vic-winner-text')!;
  private vicCharNameEl = document.getElementById('vic-character-name')!;
  private vicRoundsCountEl = document.getElementById('vic-rounds-count')!;

  constructor(audio: AudioManager, listeners: UIEventListeners) {
    this.audio = audio;
    this.listeners = listeners;
    this.initEventListeners();
    this.init3DPreviews();
    this.renderCharacterCards();
    this.renderArenaCards();
    this.updateCharacterSelectionUI();
  }

  private init3DPreviews(): void {
    try {
      if (document.getElementById('p1-preview-canvas') && typeof WebGLRenderingContext !== 'undefined') {
        this.p1Preview = new CharacterPreviewRenderer('p1-preview-canvas', 0x00d2ff, 0.25);
        this.p2Preview = new CharacterPreviewRenderer('p2-preview-canvas', 0xff3366, -0.25);
      }
    } catch (e) {
      console.warn('[UIManager] 3D Character Preview renderers skipped (headless or unsupported environment):', e);
    }
  }

  private initEventListeners(): void {
    // Audio Toggle
    this.audioBtn.addEventListener('click', () => {
      const isMuted = this.audio.toggleMute();
      this.audioIcon.textContent = isMuted ? '🔇' : '🔊';
    });

    // Main Menu Buttons
    const btnStart = document.getElementById('btn-start')!;
    btnStart.addEventListener('click', () => {
      this.audio.playMenuSelect();
      this.listeners.onStartClicked();
    });

    const btnControls = document.getElementById('btn-controls')!;
    btnControls.addEventListener('click', () => {
      this.audio.playMenuSelect();
      this.controlsModalEl.classList.remove('hidden');
    });

    const btnHow = document.getElementById('btn-how-to-play')!;
    btnHow.addEventListener('click', () => {
      this.audio.playMenuSelect();
      this.howModalEl.classList.remove('hidden');
    });

    // Modals
    document.getElementById('controls-close-btn')!.addEventListener('click', () => {
      this.audio.playMenuSelect();
      this.controlsModalEl.classList.add('hidden');
    });
    document.getElementById('controls-back-btn')!.addEventListener('click', () => {
      this.audio.playMenuSelect();
      this.controlsModalEl.classList.add('hidden');
    });

    document.getElementById('how-close-btn')!.addEventListener('click', () => {
      this.audio.playMenuSelect();
      this.howModalEl.classList.add('hidden');
    });
    document.getElementById('how-back-btn')!.addEventListener('click', () => {
      this.audio.playMenuSelect();
      this.howModalEl.classList.add('hidden');
    });

    // Character Select Back
    document.getElementById('btn-select-back')!.addEventListener('click', () => {
      this.audio.playMenuSelect();
      this.listeners.onSelectBackClicked();
    });

    // Victory Buttons
    document.getElementById('btn-rematch')!.addEventListener('click', () => {
      this.audio.playMenuSelect();
      this.listeners.onRematchClicked();
    });
    document.getElementById('btn-char-select')!.addEventListener('click', () => {
      this.audio.playMenuSelect();
      this.listeners.onCharSelectClicked();
    });
    document.getElementById('btn-vic-main-menu')!.addEventListener('click', () => {
      this.audio.playMenuSelect();
      this.listeners.onMainMenuClicked();
    });
  }

  private renderCharacterCards(): void {
    const container = document.getElementById('characters-carousel')!;
    container.innerHTML = '';

    CHARACTER_LIST.forEach((char, index) => {
      const card = document.createElement('div');
      card.className = 'character-card';
      card.id = `char-card-${index}`;

      const hasRealPortrait = char.id === 'aynur' || !!char.previewImagePath;
      const portraitMarkup = hasRealPortrait
        ? `<img src="${char.portraitPath}" alt="${char.name}" class="card-portrait-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
           <div class="card-avatar-graphic" style="display:none;">${char.avatarIcon}</div>`
        : `<div class="card-avatar-graphic">${char.avatarIcon}</div>`;

      card.innerHTML = `
        <div class="card-portrait-wrap">
          <div class="card-player-indicators">
            <span class="p-tag tag-p1">P1</span>
            <span class="p-tag tag-p2">P2</span>
          </div>
          ${portraitMarkup}
        </div>
        <div class="card-details">
          <div class="card-name">${char.name}</div>
          <div class="card-meta">
            <span>${char.gender}</span>
            <span>${char.archetype}</span>
          </div>
        </div>
      `;

      // Allow mouse click to select as well for convenience
      card.addEventListener('click', () => {
        if (!this.p1Locked) {
          this.p1SelectIndex = index;
          this.audio.playMenuHover();
          this.updateCharacterSelectionUI();
        } else if (!this.p2Locked) {
          this.p2SelectIndex = index;
          this.audio.playMenuHover();
          this.updateCharacterSelectionUI();
        }
      });

      container.appendChild(card);
    });
  }

  private renderArenaCards(): void {
    const container = document.getElementById('arenas-carousel');
    if (!container) return;
    container.innerHTML = '';

    ARENA_LIST.forEach((arena, index) => {
      const card = document.createElement('div');
      card.className = 'arena-card';
      card.id = `arena-card-${index}`;

      const thumbMarkup = arena.imagePath
        ? `<img src="${arena.imagePath}" alt="${arena.name}" class="arena-thumb-img" />`
        : `<div class="arena-thumb-default">🌃 3D STREET</div>`;

      card.innerHTML = `
        <div class="arena-thumb-wrap">
          ${thumbMarkup}
        </div>
        <div class="arena-card-info">
          <div class="arena-card-name">${arena.name}</div>
          <div class="arena-card-sub">${arena.subtitle}</div>
        </div>
      `;

      card.addEventListener('click', () => {
        this.arenaSelectIndex = index;
        this.audio.playMenuSelect();
        this.updateCharacterSelectionUI();
        this.listeners.onArenaSelected?.(arena.id);
      });

      container.appendChild(card);
    });
  }

  public updateCharacterSelectionUI(): void {
    ARENA_LIST.forEach((_, idx) => {
      const aCard = document.getElementById(`arena-card-${idx}`);
      if (!aCard) return;
      aCard.classList.toggle('selected', this.arenaSelectIndex === idx);
    });

    CHARACTER_LIST.forEach((_, idx) => {
      const card = document.getElementById(`char-card-${idx}`);
      if (!card) return;

      const isP1 = this.p1SelectIndex === idx;
      const isP2 = this.p2SelectIndex === idx;

      card.classList.remove('p1-selected', 'p2-selected', 'both-selected');

      if (isP1 && isP2) {
        card.classList.add('both-selected');
      } else if (isP1) {
        card.classList.add('p1-selected');
      } else if (isP2) {
        card.classList.add('p2-selected');
      }
    });

    const p1Char = CHARACTER_LIST[this.p1SelectIndex];
    const p2Char = CHARACTER_LIST[this.p2SelectIndex];

    // Update Bottom Summary Slots
    document.getElementById('p1-selected-name')!.textContent = p1Char.name;
    document.getElementById('p1-selected-style')!.textContent = p1Char.title;
    const p1LockEl = document.getElementById('p1-lock-status')!;
    p1LockEl.textContent = this.p1Locked ? 'LOCKED IN!' : 'CHOOSING... (F TO LOCK)';
    p1LockEl.className = `slot-status ${this.p1Locked ? 'locked' : ''}`;

    document.getElementById('p2-selected-name')!.textContent = p2Char.name;
    document.getElementById('p2-selected-style')!.textContent = p2Char.title;
    const p2LockEl = document.getElementById('p2-lock-status')!;
    p2LockEl.textContent = this.p2Locked ? 'LOCKED IN!' : 'CHOOSING... (K TO LOCK)';
    p2LockEl.className = `slot-status ${this.p2Locked ? 'locked' : ''}`;

    // Update 3D Preview Panes
    if (this.p1PrevNameEl) this.p1PrevNameEl.textContent = p1Char.name;
    if (this.p1PrevTitleEl) this.p1PrevTitleEl.textContent = p1Char.title;
    if (this.p1PrevOutfitEl) this.p1PrevOutfitEl.textContent = p1Char.outfit ? p1Char.outfit.styleName : p1Char.archetype;
    this.p1Preview?.setCharacter(p1Char);

    if (this.p2PrevNameEl) this.p2PrevNameEl.textContent = p2Char.name;
    if (this.p2PrevTitleEl) this.p2PrevTitleEl.textContent = p2Char.title;
    if (this.p2PrevOutfitEl) this.p2PrevOutfitEl.textContent = p2Char.outfit ? p2Char.outfit.styleName : p2Char.archetype;
    this.p2Preview?.setCharacter(p2Char);
  }

  // Handle Character Select Keyboard Controls
  public handleCharSelectInput(input: {
    p1Left: boolean;
    p1Right: boolean;
    p1Confirm: boolean;
    p2Left: boolean;
    p2Right: boolean;
    p2Confirm: boolean;
    arenaPrev?: boolean;
    arenaNext?: boolean;
  }): void {
    let changed = false;

    // Arena selection via W/S or ArrowUp/ArrowDown
    if (input.arenaPrev) {
      this.arenaSelectIndex = (this.arenaSelectIndex - 1 + ARENA_LIST.length) % ARENA_LIST.length;
      this.audio.playMenuHover();
      this.listeners.onArenaSelected?.(ARENA_LIST[this.arenaSelectIndex].id);
      changed = true;
    } else if (input.arenaNext) {
      this.arenaSelectIndex = (this.arenaSelectIndex + 1) % ARENA_LIST.length;
      this.audio.playMenuHover();
      this.listeners.onArenaSelected?.(ARENA_LIST[this.arenaSelectIndex].id);
      changed = true;
    }

    // Player 1: A / D / F
    if (!this.p1Locked) {
      if (input.p1Left) {
        this.p1SelectIndex = (this.p1SelectIndex - 1 + CHARACTER_LIST.length) % CHARACTER_LIST.length;
        this.audio.playMenuHover();
        changed = true;
      }
      if (input.p1Right) {
        this.p1SelectIndex = (this.p1SelectIndex + 1) % CHARACTER_LIST.length;
        this.audio.playMenuHover();
        changed = true;
      }
      if (input.p1Confirm) {
        this.p1Locked = true;
        this.audio.playMenuSelect();
        changed = true;
      }
    }

    // Player 2: ArrowLeft / ArrowRight / K
    if (!this.p2Locked) {
      if (input.p2Left) {
        this.p2SelectIndex = (this.p2SelectIndex - 1 + CHARACTER_LIST.length) % CHARACTER_LIST.length;
        this.audio.playMenuHover();
        changed = true;
      }
      if (input.p2Right) {
        this.p2SelectIndex = (this.p2SelectIndex + 1) % CHARACTER_LIST.length;
        this.audio.playMenuHover();
        changed = true;
      }
      if (input.p2Confirm) {
        this.p2Locked = true;
        this.audio.playMenuSelect();
        changed = true;
      }
    }

    if (changed) {
      this.updateCharacterSelectionUI();
    }

    if (this.p1Locked && this.p2Locked) {
      // Prevent firing multiple times - reset locks so this only fires once
      this.p1Locked = false;
      this.p2Locked = false;
      const p1Char = CHARACTER_LIST[this.p1SelectIndex];
      const p2Char = CHARACTER_LIST[this.p2SelectIndex];
      const selectedArena = ARENA_LIST[this.arenaSelectIndex] || ARENA_LIST[0];
      this.listeners.onBothFightersLocked(p1Char, p2Char, selectedArena.id);
    }
  }

  // --- SCREEN SWITCHING ---

  public showMainMenu(): void {
    this.isCharSelectActive = false;
    this.hideAllScreens();
    this.mainMenuEl.classList.remove('hidden');
    this.mainMenuEl.classList.add('active');
  }

  public showCharSelect(): void {
    this.hideAllScreens();
    this.isCharSelectActive = true;
    this.p1Locked = false;
    this.p2Locked = false;
    this.updateCharacterSelectionUI();
    this.charSelectEl.classList.remove('hidden');
    this.charSelectEl.classList.add('active');
  }

  public showVSScreen(p1Char: CharacterConfig, p2Char: CharacterConfig, onComplete: () => void): void {
    this.isCharSelectActive = false;
    this.hideAllScreens();
    this.vsScreenEl.classList.remove('hidden');
    this.vsScreenEl.classList.add('active');

    // Populate VS Cards with high detail
    const vsP1ImgEl = document.getElementById('vs-p1-img')!;
    if (p1Char.id === 'aynur' || p1Char.previewImagePath) {
      vsP1ImgEl.innerHTML = `<img src="${p1Char.portraitPath}" alt="${p1Char.name}" class="vs-portrait-img" onerror="this.parentElement.textContent='${p1Char.avatarIcon}';" />`;
    } else {
      vsP1ImgEl.textContent = p1Char.avatarIcon;
    }
    document.getElementById('vs-p1-name')!.textContent = p1Char.name;
    document.getElementById('vs-p1-title')!.textContent = p1Char.title;
    const p1OutfitEl = document.getElementById('vs-p1-outfit');
    if (p1OutfitEl) p1OutfitEl.textContent = p1Char.outfit?.styleName || p1Char.archetype;

    const vsP2ImgEl = document.getElementById('vs-p2-img')!;
    if (p2Char.id === 'aynur' || p2Char.previewImagePath) {
      vsP2ImgEl.innerHTML = `<img src="${p2Char.portraitPath}" alt="${p2Char.name}" class="vs-portrait-img" onerror="this.parentElement.textContent='${p2Char.avatarIcon}';" />`;
    } else {
      vsP2ImgEl.textContent = p2Char.avatarIcon;
    }
    document.getElementById('vs-p2-name')!.textContent = p2Char.name;
    document.getElementById('vs-p2-title')!.textContent = p2Char.title;
    const p2OutfitEl = document.getElementById('vs-p2-outfit');
    if (p2OutfitEl) p2OutfitEl.textContent = p2Char.outfit?.styleName || p2Char.archetype;

    this.audio.playRoundStart();

    // Display for 2.2 seconds before transitioning to match
    setTimeout(() => {
      onComplete();
    }, 2200);
  }

  public showGameHUD(p1Name: string, p2Name: string): void {
    this.isCharSelectActive = false;
    this.hideAllScreens();
    this.p1NameEl.textContent = p1Name;
    this.p2NameEl.textContent = p2Name;
    this.gameHudEl.classList.remove('hidden');
    this.gameHudEl.classList.add('active');
  }

  public showVictoryScreen(winnerPlayerId: 1 | 2, winnerCharName: string, p1Score: number, p2Score: number): void {
    this.isCharSelectActive = false;
    this.hideAllScreens();
    this.victoryEl.classList.remove('hidden');
    this.victoryEl.classList.add('active');

    this.vicWinnerEl.textContent = `PLAYER ${winnerPlayerId} WINS!`;
    this.vicWinnerEl.style.color = winnerPlayerId === 1 ? 'var(--p1-blue)' : 'var(--p2-red)';
    this.vicCharNameEl.textContent = winnerCharName;
    this.vicRoundsCountEl.textContent = `${p1Score} - ${p2Score}`;
  }

  private hideAllScreens(): void {
    this.mainMenuEl.classList.add('hidden');
    this.mainMenuEl.classList.remove('active');
    this.charSelectEl.classList.add('hidden');
    this.charSelectEl.classList.remove('active');
    this.vsScreenEl.classList.add('hidden');
    this.vsScreenEl.classList.remove('active');
    this.gameHudEl.classList.add('hidden');
    this.gameHudEl.classList.remove('active');
    this.victoryEl.classList.add('hidden');
    this.victoryEl.classList.remove('active');
    this.controlsModalEl.classList.add('hidden');
    this.howModalEl.classList.add('hidden');
  }

  // --- IN-GAME HUD UPDATES ---

  public updateHUD(
    p1Hp: number,
    p2Hp: number,
    p1MaxHp: number,
    p2MaxHp: number,
    p1CdRemain: number,
    p2CdRemain: number,
    maxCd: number,
    p1RoundsWon: number,
    p2RoundsWon: number,
    currentRound: number,
    timerSeconds: number
  ): void {
    // 1. Health Bars
    const p1Pct = Math.max(0, Math.min(100, (p1Hp / p1MaxHp) * 100));
    const p2Pct = Math.max(0, Math.min(100, (p2Hp / p2MaxHp) * 100));

    this.p1HpFillEl.style.width = `${p1Pct}%`;
    this.p1HpDamageEl.style.width = `${p1Pct}%`;
    this.p1HpTextEl.textContent = `${Math.ceil(p1Hp)} / ${p1MaxHp}`;

    this.p2HpFillEl.style.width = `${p2Pct}%`;
    this.p2HpDamageEl.style.width = `${p2Pct}%`;
    this.p2HpTextEl.textContent = `${Math.ceil(p2Hp)} / ${p2MaxHp}`;

    // Critical low health styling (<= 20 HP per specification)
    if (p1Hp <= 20) {
      this.p1HpFillEl.classList.add('hp-critical');
    } else {
      this.p1HpFillEl.classList.remove('hp-critical');
    }

    if (p2Hp <= 20) {
      this.p2HpFillEl.classList.add('hp-critical');
    } else {
      this.p2HpFillEl.classList.remove('hp-critical');
    }

    // 2. Round Won Dots
    this.p1Dot0.classList.toggle('won', p1RoundsWon >= 1);
    this.p1Dot1.classList.toggle('won', p1RoundsWon >= 2);
    this.p2Dot0.classList.toggle('won', p2RoundsWon >= 1);
    this.p2Dot1.classList.toggle('won', p2RoundsWon >= 2);

    // 3. Cooldown Bars & Text Labels
    const p1CdPct = p1CdRemain <= 0 ? 100 : (1.0 - p1CdRemain / maxCd) * 100;
    const p2CdPct = p2CdRemain <= 0 ? 100 : (1.0 - p2CdRemain / maxCd) * 100;

    this.p1CdEl.style.width = `${p1CdPct}%`;
    this.p1CdEl.classList.toggle('cooling', p1CdRemain > 0);

    if (this.p1CdLabelEl) {
      if (p1CdRemain <= 0) {
        this.p1CdLabelEl.textContent = 'SPECIAL READY';
        this.p1CdLabelEl.classList.add('ready');
      } else {
        this.p1CdLabelEl.textContent = `SPECIAL: ${p1CdRemain.toFixed(1)}s`;
        this.p1CdLabelEl.classList.remove('ready');
      }
    }

    this.p2CdEl.style.width = `${p2CdPct}%`;
    this.p2CdEl.classList.toggle('cooling', p2CdRemain > 0);

    if (this.p2CdLabelEl) {
      if (p2CdRemain <= 0) {
        this.p2CdLabelEl.textContent = 'SPECIAL READY';
        this.p2CdLabelEl.classList.add('ready');
      } else {
        this.p2CdLabelEl.textContent = `SPECIAL: ${p2CdRemain.toFixed(1)}s`;
        this.p2CdLabelEl.classList.remove('ready');
      }
    }

    // 4. Center Info
    this.roundLabelEl.textContent = `ROUND ${currentRound}`;
    const displayTime = Math.ceil(timerSeconds);
    this.timerEl.textContent = displayTime.toString();

    if (displayTime <= 10) {
      this.timerEl.classList.add('low-time');
    } else {
      this.timerEl.classList.remove('low-time');
    }
  }

  public showCombo(playerId: 1 | 2, hits: number, comboName: string | null): void {
    const banner = playerId === 1 ? this.p1ComboEl : this.p2ComboEl;
    const countEl = playerId === 1 ? this.p1ComboCountEl : this.p2ComboCountEl;
    const nameEl = playerId === 1 ? this.p1ComboNameEl : this.p2ComboNameEl;

    if (!banner || !countEl) return;

    if (hits >= 2) {
      countEl.textContent = `${hits} HITS`;
      if (nameEl) {
        nameEl.textContent = comboName ? comboName : '';
        nameEl.style.display = comboName ? 'block' : 'none';
      }
      banner.classList.remove('hidden');
    } else {
      banner.classList.add('hidden');
    }
  }

  // --- ANNOUNCER OVERLAYS ---

  public showAnnounce(mainText: string, subText: string = '', durationMs: number = 1000): void {
    this.announcerText.textContent = mainText;
    this.announcerSub.textContent = subText;
    this.announcerBanner.classList.remove('hidden');

    this.announcerText.style.animation = 'none';
    void this.announcerText.offsetWidth; // Trigger reflow
    this.announcerText.style.animation = '';

    setTimeout(() => {
      this.announcerBanner.classList.add('hidden');
    }, durationMs);
  }

  public hideAnnounce(): void {
    this.announcerBanner.classList.add('hidden');
  }

  public update(dt: number): void {
    if (this.isCharSelectActive) {
      this.p1Preview?.update(dt);
      this.p2Preview?.update(dt);
    }
  }
}
