# STREET LEGENDS — ULTIMATE COMBAT

**Street Legends** is a high-performance, web-based, 2-player local arcade fighting game built with **Three.js**, **TypeScript**, **WebGL**, and **Vite**.

---

## 🚀 STEP 2: PERSONALIZED 3D CHARACTER INTEGRATION

In **Step 2**, the character system has been upgraded to support personalized 3D fighters based on real photographs:

### 1. Photo Reference Architecture
Reference photographs must be stored in the designated subfolders:
```
public/assets/character-references/
├── fighter-01/   (Fighter 1 - Male)
├── fighter-02/   (Fighter 2 - Male)
├── fighter-03/   (Fighter 3 - Male)
├── fighter-04/   (Fighter 4 - Female)
├── fighter-05/   (Fighter 5 - Female)
└── PHOTO_SUBMISSION_GUIDE.md
```
*(Reference photographs are kept confidential and are excluded from public client bundles).*

### 2. Custom 3D Model Asset Paths
The game's `CharacterModelLoader` searches for GLB/GLTF assets in:
```
public/assets/characters/
├── fighter-01/model.glb
├── fighter-02/model.glb
├── fighter-03/model.glb
├── fighter-04/model.glb
└── fighter-05/model.glb
```
**Graceful Fallback:** If a custom 3D model is missing or loading fails, the system automatically uses a high-detail procedural articulated humanoid so the game remains 100% playable without visual glitches.

### 3. Fighter Roster & Outfits

| ID | Gender | Temporary Name | Archetype | Style & Outfit |
|---|---|---|---|---|
| `fighter_01` | Male | **ALEX** | Balanced Striker | Modern dark street combat jacket, athletic sneakers, cyan wraps |
| `fighter_02` | Male | **MAX** | Heavy Boxer | Athletic sports compression shirt, training shorts, gold boxing gloves |
| `fighter_03` | Male | **RYAN** | Urban Martial Artist | Emerald hooded martial jacket, combat cargo trousers, kicking boots |
| `fighter_04` | Female | **LUNA** | Stealth Martial Artist | Modern athletic fighting top, high-mobility leggings, forearm guards |
| `fighter_05` | Female | **MAYA** | Street Combat Specialist | Crimson sports crop, relaxed combat trousers, fighter rope bindings |

*Note: Character names are easily editable in `src/characters/CharacterConfig.ts` without modifying gameplay code.*

### 4. Interactive 3D Character Selection Screen
- **Player 1 Live 3D Preview (Left):** Real-time 3D viewport showcasing the highlighted fighter in an idle breathing stance with subtle turntable rotation and blue neon lighting.
- **Player 2 Live 3D Preview (Right):** Real-time 3D viewport showcasing Player 2's highlighted fighter with red neon lighting.
- **Center Carousel:** 5 character cards with independent selection and mirror-match support.

---

## Quick Start (Run Locally)

1. Navigate to the project directory:
   ```bash
   cd C:\Users\farha\.gemini\antigravity\scratch\street-legends
   ```

2. Start the local development server:
   ```bash
   npm run dev
   ```

3. Open your browser:
   ```
   http://localhost:3000
   ```

4. Run the automated verification test suite:
   ```bash
   npm test
   ```

---

## 🎮 Keyboard Controls (Single Shared Keyboard)

### Player 1 (Blue Corner — Left Side of Keyboard)
| Key | Action |
|---|---|
| <kbd>W</kbd> | Jump |
| <kbd>A</kbd> | Move Left |
| <kbd>D</kbd> | Move Right |
| <kbd>S</kbd> | Crouch |
| <kbd>F</kbd> | Punch (8 HP) |
| <kbd>G</kbd> | Kick (12 HP) |
| <kbd>H</kbd> | Special Attack (20 HP, 5s cooldown) |
| <kbd>R</kbd> | Block (80% Protection) |

*Select Screen:* <kbd>A</kbd> (prev), <kbd>D</kbd> (next), <kbd>F</kbd> (lock in).

---

### Player 2 (Red Corner — Right Side of Keyboard)
| Key | Action |
|---|---|
| <kbd>↑ Up</kbd> | Jump |
| <kbd>← Left</kbd> | Move Left |
| <kbd>→</kbd> Right | Move Right |
| <kbd>↓ Down</kbd> | Crouch |
| <kbd>K</kbd> | Punch (8 HP) |
| <kbd>L</kbd> | Kick (12 HP) |
| <kbd>;</kbd> | Special Attack (20 HP, 5s cooldown) |
| <kbd>O</kbd> | Block (80% Protection) |

*Select Screen:* <kbd>←</kbd> (prev), <kbd>→</kbd> (next), <kbd>K</kbd> (lock in).
