export interface PlayerActions {
  moveLeft: boolean;
  moveRight: boolean;
  jump: boolean;
  crouch: boolean;
  punch: boolean;
  kick: boolean;
  special: boolean;
  block: boolean;

  // Single-frame triggers
  punchTriggered: boolean;
  kickTriggered: boolean;
  punchLightTriggered: boolean;
  punchHeavyTriggered: boolean;
  kickLightTriggered: boolean;
  kickHeavyTriggered: boolean;
  specialTriggered: boolean;
  jumpTriggered: boolean;
}

interface KeyHoldTracker {
  startTime: number;
  isHeld: boolean;
  heavyTriggered: boolean;
}

export class InputManager {
  private activeKeys: Set<string> = new Set();
  private prevKeys: Set<string> = new Set();

  // Attack Hold Trackers (for Light vs Heavy detection at 350ms)
  private holdThresholdMs: number = 350;
  private p1PunchHold: KeyHoldTracker = { startTime: 0, isHeld: false, heavyTriggered: false };
  private p1KickHold: KeyHoldTracker = { startTime: 0, isHeld: false, heavyTriggered: false };
  private p2PunchHold: KeyHoldTracker = { startTime: 0, isHeld: false, heavyTriggered: false };
  private p2KickHold: KeyHoldTracker = { startTime: 0, isHeld: false, heavyTriggered: false };

  // Queued trigger flags for the current frame
  private p1PunchLight: boolean = false;
  private p1PunchHeavy: boolean = false;
  private p1KickLight: boolean = false;
  private p1KickHeavy: boolean = false;

  private p2PunchLight: boolean = false;
  private p2PunchHeavy: boolean = false;
  private p2KickLight: boolean = false;
  private p2KickHeavy: boolean = false;

  // Keys to prevent default browser behavior (scrolling, text search, etc.)
  private gameKeyCodes: Set<string> = new Set([
    'KeyW', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyR',
    'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight',
    'KeyK', 'KeyL', 'Semicolon', 'KeyO',
    'Space'
  ]);

  constructor() {
    this.setupListeners();
  }

  private setupListeners(): void {
    window.addEventListener('keydown', (e: KeyboardEvent) => {
      // Prevent browser scroll or quick search
      if (this.gameKeyCodes.has(e.code) || e.key === ';' || e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        e.preventDefault();
      }

      // Prevent OS key-repeat from firing multiple attacks
      if (e.repeat) return;

      const now = performance.now();

      // Track hold start times
      if (e.code === 'KeyF' && !this.p1PunchHold.isHeld) {
        this.p1PunchHold = { startTime: now, isHeld: true, heavyTriggered: false };
      }
      if (e.code === 'KeyG' && !this.p1KickHold.isHeld) {
        this.p1KickHold = { startTime: now, isHeld: true, heavyTriggered: false };
      }
      if (e.code === 'KeyK' && !this.p2PunchHold.isHeld) {
        this.p2PunchHold = { startTime: now, isHeld: true, heavyTriggered: false };
      }
      if (e.code === 'KeyL' && !this.p2KickHold.isHeld) {
        this.p2KickHold = { startTime: now, isHeld: true, heavyTriggered: false };
      }

      this.activeKeys.add(e.code);
      if (e.key === ';') {
        this.activeKeys.add('Semicolon');
      }
    });

    window.addEventListener('keyup', (e: KeyboardEvent) => {
      if (this.gameKeyCodes.has(e.code) || e.key === ';' || e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        e.preventDefault();
      }

      const now = performance.now();

      // Handle Key Releases: If released before 350ms, fire Light Attack!
      if (e.code === 'KeyF' && this.p1PunchHold.isHeld) {
        const heldDuration = now - this.p1PunchHold.startTime;
        if (heldDuration < this.holdThresholdMs && !this.p1PunchHold.heavyTriggered) {
          this.p1PunchLight = true;
        }
        this.p1PunchHold.isHeld = false;
      }

      if (e.code === 'KeyG' && this.p1KickHold.isHeld) {
        const heldDuration = now - this.p1KickHold.startTime;
        if (heldDuration < this.holdThresholdMs && !this.p1KickHold.heavyTriggered) {
          this.p1KickLight = true;
        }
        this.p1KickHold.isHeld = false;
      }

      if (e.code === 'KeyK' && this.p2PunchHold.isHeld) {
        const heldDuration = now - this.p2PunchHold.startTime;
        if (heldDuration < this.holdThresholdMs && !this.p2PunchHold.heavyTriggered) {
          this.p2PunchLight = true;
        }
        this.p2PunchHold.isHeld = false;
      }

      if (e.code === 'KeyL' && this.p2KickHold.isHeld) {
        const heldDuration = now - this.p2KickHold.startTime;
        if (heldDuration < this.holdThresholdMs && !this.p2KickHold.heavyTriggered) {
          this.p2KickLight = true;
        }
        this.p2KickHold.isHeld = false;
      }

      this.activeKeys.delete(e.code);
      if (e.key === ';') {
        this.activeKeys.delete('Semicolon');
      }
    });

    // Clear all keys on blur to prevent stuck keys
    window.addEventListener('blur', () => {
      this.reset();
    });

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.reset();
      }
    });
  }

  public isKeyDown(code: string): boolean {
    return this.activeKeys.has(code);
  }

  public isKeyJustPressed(code: string): boolean {
    return this.activeKeys.has(code) && !this.prevKeys.has(code);
  }

  public getPlayer1Actions(): PlayerActions {
    const now = performance.now();

    // Check ongoing holds reaching heavy threshold (350ms)
    if (this.p1PunchHold.isHeld && !this.p1PunchHold.heavyTriggered) {
      if (now - this.p1PunchHold.startTime >= this.holdThresholdMs) {
        this.p1PunchHeavy = true;
        this.p1PunchHold.heavyTriggered = true;
      }
    }

    if (this.p1KickHold.isHeld && !this.p1KickHold.heavyTriggered) {
      if (now - this.p1KickHold.startTime >= this.holdThresholdMs) {
        this.p1KickHeavy = true;
        this.p1KickHold.heavyTriggered = true;
      }
    }

    const moveLeft = this.isKeyDown('KeyA');
    const moveRight = this.isKeyDown('KeyD');
    const jump = this.isKeyDown('KeyW');
    const crouch = this.isKeyDown('KeyS');
    const punch = this.isKeyDown('KeyF');
    const kick = this.isKeyDown('KeyG');
    const special = this.isKeyDown('KeyH');
    const block = this.isKeyDown('KeyR');

    const jumpTriggered = this.isKeyJustPressed('KeyW');
    const specialTriggered = this.isKeyJustPressed('KeyH');

    // Trigger states
    const punchLightTriggered = this.p1PunchLight;
    const punchHeavyTriggered = this.p1PunchHeavy;
    const kickLightTriggered = this.p1KickLight;
    const kickHeavyTriggered = this.p1KickHeavy;
    const punchTriggered = punchLightTriggered || punchHeavyTriggered;
    const kickTriggered = kickLightTriggered || kickHeavyTriggered;

    // Reset single-frame flags after consumption
    this.p1PunchLight = false;
    this.p1PunchHeavy = false;
    this.p1KickLight = false;
    this.p1KickHeavy = false;

    return {
      moveLeft,
      moveRight,
      jump,
      crouch,
      punch,
      kick,
      special,
      block,
      punchTriggered,
      kickTriggered,
      punchLightTriggered,
      punchHeavyTriggered,
      kickLightTriggered,
      kickHeavyTriggered,
      specialTriggered,
      jumpTriggered
    };
  }

  public getPlayer2Actions(): PlayerActions {
    const now = performance.now();

    if (this.p2PunchHold.isHeld && !this.p2PunchHold.heavyTriggered) {
      if (now - this.p2PunchHold.startTime >= this.holdThresholdMs) {
        this.p2PunchHeavy = true;
        this.p2PunchHold.heavyTriggered = true;
      }
    }

    if (this.p2KickHold.isHeld && !this.p2KickHold.heavyTriggered) {
      if (now - this.p2KickHold.startTime >= this.holdThresholdMs) {
        this.p2KickHeavy = true;
        this.p2KickHold.heavyTriggered = true;
      }
    }

    const moveLeft = this.isKeyDown('ArrowLeft');
    const moveRight = this.isKeyDown('ArrowRight');
    const jump = this.isKeyDown('ArrowUp');
    const crouch = this.isKeyDown('ArrowDown');
    const punch = this.isKeyDown('KeyK');
    const kick = this.isKeyDown('KeyL');
    const special = this.isKeyDown('Semicolon') || this.isKeyDown('Quote');
    const block = this.isKeyDown('KeyO');

    const jumpTriggered = this.isKeyJustPressed('ArrowUp');
    const specialTriggered = this.isKeyJustPressed('Semicolon') || this.isKeyJustPressed('Quote');

    const punchLightTriggered = this.p2PunchLight;
    const punchHeavyTriggered = this.p2PunchHeavy;
    const kickLightTriggered = this.p2KickLight;
    const kickHeavyTriggered = this.p2KickHeavy;
    const punchTriggered = punchLightTriggered || punchHeavyTriggered;
    const kickTriggered = kickLightTriggered || kickHeavyTriggered;

    this.p2PunchLight = false;
    this.p2PunchHeavy = false;
    this.p2KickLight = false;
    this.p2KickHeavy = false;

    return {
      moveLeft,
      moveRight,
      jump,
      crouch,
      punch,
      kick,
      special,
      block,
      punchTriggered,
      kickTriggered,
      punchLightTriggered,
      punchHeavyTriggered,
      kickLightTriggered,
      kickHeavyTriggered,
      specialTriggered,
      jumpTriggered
    };
  }

  public update(): void {
    this.prevKeys = new Set(this.activeKeys);
  }

  public reset(): void {
    this.activeKeys.clear();
    this.prevKeys.clear();
    this.p1PunchHold = { startTime: 0, isHeld: false, heavyTriggered: false };
    this.p1KickHold = { startTime: 0, isHeld: false, heavyTriggered: false };
    this.p2PunchHold = { startTime: 0, isHeld: false, heavyTriggered: false };
    this.p2KickHold = { startTime: 0, isHeld: false, heavyTriggered: false };
    this.p1PunchLight = false;
    this.p1PunchHeavy = false;
    this.p1KickLight = false;
    this.p1KickHeavy = false;
    this.p2PunchLight = false;
    this.p2PunchHeavy = false;
    this.p2KickLight = false;
    this.p2KickHeavy = false;
  }
}
