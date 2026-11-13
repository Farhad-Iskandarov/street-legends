export interface CharacterAppearance {
  skinTone: number;
  hairColor: number;
  eyeColor?: number;
  lipColor?: number;
  hairStyle: 'short' | 'spiky' | 'hoodie' | 'ponytail' | 'braids' | 'undercut' | 'fade' | 'half_up_wavy';
  primaryColor: number;     // Jacket / Top
  secondaryColor: number;   // Pants / Bottoms
  accentColor: number;      // Trim / Shoes / Gloves
  gender: 'male' | 'female';
  scale: { x: number; y: number; z: number };
}

export interface OutfitConfig {
  styleName: string;
  topDescription: string;
  bottomDescription: string;
  footwear: string;
  gloves: string;
}

export interface SpecialAttackConfig {
  name: string;
  type: 'fire_strike' | 'thunder_kick' | 'shadow_rush' | 'phoenix_kick' | 'dragon_spin';
  damage: number;
  cooldown: number; // 6.0 seconds
  color: number;
  secondaryColor: number;
  description: string;
}

export interface CharacterConfig {
  id: string; // fighter_01, fighter_02, fighter_03, fighter_04, fighter_05, or custom id like aynur
  name: string; // Editable display name
  displayName?: string;
  gender: 'male' | 'female';
  title: string;
  archetype: string;
  bio: string;
  avatarIcon: string;
  portraitPath: string;
  previewImagePath?: string;
  modelPath: string; // e.g., '/assets/characters/aynur/model.glb'
  positionOffset: { x: number; y: number; z: number };
  scale: { x: number; y: number; z: number };
  visualNotes?: string;
  outfitNotes?: string;
  outfit: OutfitConfig;
  appearance: CharacterAppearance;
  specialAttack: SpecialAttackConfig;
  stats: {
    maxHealth: number;
    moveSpeed: number;
    jumpVelocity: number;
    punchLightDamage: number;
    punchHeavyDamage: number;
    punchJumpDamage: number;
    punchCrouchDamage: number;
    kickLightDamage: number;
    kickHeavyDamage: number;
    kickJumpDamage: number;
    kickCrouchDamage: number;
    punchDamage: number; // backward compatibility
    kickDamage: number;  // backward compatibility
    specialDamage: number;
    specialCooldown: number; // in seconds
  };
}

export const CHARACTERS_REGISTRY: Record<string, CharacterConfig> = {
  fighter_01: {
    id: 'tacir',
    name: 'TACIR',
    displayName: 'Tacir',
    gender: 'male',
    title: 'THE STREET BRAWLER',
    archetype: 'Balanced Striker',
    bio: 'A resilient, battle-hardened street brawler in tailored black attire with rolled sleeves, delivering disciplined boxing combos and fiery strikes.',
    avatarIcon: '🥊',
    portraitPath: '/assets/characters/tacir/preview.webp',
    previewImagePath: '/assets/characters/tacir/preview.webp',
    modelPath: '/assets/characters/tacir/model.glb',
    positionOffset: { x: 0, y: 0, z: 0 },
    scale: { x: 0.96, y: 1.0, z: 0.96 },
    visualNotes: 'Stylized muscular male fighter with slicked-back dark hair, prominent eyebrows, full dark beard and mustache, and an intense guarded stance.',
    outfitNotes: 'Tailored black button-down shirt with sleeves rolled past the forearms, matching black trousers with a silver-buckled leather belt, and heavy black boots.',
    outfit: {
      styleName: 'Tailored Black Brawler Attire',
      topDescription: 'Tailored black button-down collared shirt with rolled sleeves',
      bottomDescription: 'Black tailored trousers with silver-buckled leather belt',
      footwear: 'Heavy-duty black combat boots',
      gloves: 'Bare-knuckle disciplined boxing stance'
    },
    appearance: {
      skinTone: 0xd4a373,
      hairColor: 0x1c1917,
      eyeColor: 0x2b1810,
      hairStyle: 'short',
      primaryColor: 0x18181b,    // Tailored black button-down shirt
      secondaryColor: 0x27272a,  // Matching black trousers
      accentColor: 0xe2e8f0,     // Silver belt buckle & buttons
      gender: 'male',
      scale: { x: 0.96, y: 1.0, z: 0.96 }
    },
    specialAttack: {
      name: 'FIRE STRIKE',
      type: 'fire_strike',
      damage: 20,
      cooldown: 6.0,
      color: 0xf97316,
      secondaryColor: 0xffedd5,
      description: 'Performs a powerful forward lunging punch surrounded by blazing orange fire energy.'
    },
    stats: {
      maxHealth: 100,
      moveSpeed: 7.2,
      jumpVelocity: 14.5,
      punchLightDamage: 6,
      punchHeavyDamage: 12,
      punchJumpDamage: 9,
      punchCrouchDamage: 7,
      kickLightDamage: 9,
      kickHeavyDamage: 15,
      kickJumpDamage: 12,
      kickCrouchDamage: 8,
      punchDamage: 8,
      kickDamage: 12,
      specialDamage: 20,
      specialCooldown: 6.0
    }
  },

  fighter_02: {
    id: 'farhad',
    name: 'FARHAD',
    displayName: 'Farhad',
    gender: 'male',
    title: 'SHADOW BRAWLER',
    archetype: 'Heavy Boxer',
    bio: 'A focused powerhouse striker in stealth black streetwear and cargo trousers, delivering heavy knockout punches and counter-strikes.',
    avatarIcon: '🥊',
    portraitPath: '/assets/characters/farhad/preview.webp',
    previewImagePath: '/assets/characters/farhad/preview.webp',
    modelPath: '/assets/characters/farhad/model.glb',
    positionOffset: { x: 0, y: 0, z: 0 },
    scale: { x: 0.96, y: 1.0, z: 0.96 },
    visualNotes: 'Stylized 3D male fighter with dark curly hair faded on the sides, defined dark eyebrows, focused eyes, and a neat dark beard and mustache.',
    outfitNotes: 'Matte black ribbed long-sleeve crewneck sweatshirt, black cargo pants with thigh utility flap pockets and cuffed ankles, and crisp white low-top sneakers.',
    outfit: {
      styleName: 'All-Black Crewneck & Cargo Streetwear',
      topDescription: 'Matte black long-sleeved ribbed crewneck pullover sweatshirt',
      bottomDescription: 'Relaxed black cargo trousers with outer thigh flap pockets and elastic ankle cuffs',
      footwear: 'Crisp white low-top court sneakers',
      gloves: 'Bare-knuckle power boxing stance'
    },
    appearance: {
      skinTone: 0xf1c2a0,
      hairColor: 0x171717,
      eyeColor: 0x3b82f6,
      hairStyle: 'short',
      primaryColor: 0x18181b,    // Matte black crewneck sweatshirt
      secondaryColor: 0x27272a,  // Black cargo trousers
      accentColor: 0xf8fafc,     // Crisp white sneakers
      gender: 'male',
      scale: { x: 0.96, y: 1.0, z: 0.96 }
    },
    specialAttack: {
      name: 'THUNDER KICK',
      type: 'thunder_kick',
      damage: 20,
      cooldown: 6.0,
      color: 0x00d2ff,
      secondaryColor: 0x38bdf8,
      description: 'Performs a powerful spinning 360-degree kick charged with crackling blue lightning.'
    },
    stats: {
      maxHealth: 100,
      moveSpeed: 7.2,
      jumpVelocity: 14.5,
      punchLightDamage: 6,
      punchHeavyDamage: 12,
      punchJumpDamage: 9,
      punchCrouchDamage: 7,
      kickLightDamage: 9,
      kickHeavyDamage: 15,
      kickJumpDamage: 12,
      kickCrouchDamage: 8,
      punchDamage: 8,
      kickDamage: 12,
      specialDamage: 20,
      specialCooldown: 6.0
    }
  },

  fighter_03: {
    id: 'rufat',
    name: 'RUFAT',
    displayName: 'Rufat',
    gender: 'male',
    title: 'WILD COMPANION',
    archetype: 'Urban Martial Artist',
    bio: 'An agile street fighter accompanied by his loyal shoulder monkey, wearing a crisp crewneck sweater, black backpack, and dark cargo pants.',
    avatarIcon: '🐒',
    portraitPath: '/assets/characters/rufat/preview.webp',
    previewImagePath: '/assets/characters/rufat/preview.webp',
    modelPath: '/assets/characters/rufat/model.glb',
    positionOffset: { x: 0, y: 0, z: 0 },
    scale: { x: 0.96, y: 1.0, z: 0.96 },
    visualNotes: 'Stylized 3D male fighter with a short dark fade haircut, trimmed beard, confident smile, and an orange monkey companion perched on his right shoulder.',
    outfitNotes: 'Light off-white ribbed crewneck sweater with black backpack shoulder straps, dark charcoal cargo pants with side flap pockets, and crisp white sneakers.',
    outfit: {
      styleName: 'Backpack & Shoulder Monkey Street Style',
      topDescription: 'Light off-white ribbed crewneck sweatshirt with black backpack straps and shoulder monkey companion',
      bottomDescription: 'Dark charcoal-black cargo trousers with thigh flap pockets and tapered cuffs',
      footwear: 'Chunky crisp white low-top athletic sneakers',
      gloves: 'Bare-knuckle street fighting stance'
    },
    appearance: {
      skinTone: 0xf4c6a8,
      hairColor: 0x1c1917,
      eyeColor: 0x3b2219,
      hairStyle: 'short',
      primaryColor: 0xe2e8f0,    // Off-white crewneck sweatshirt
      secondaryColor: 0x27272a,  // Dark charcoal cargo trousers
      accentColor: 0xd97706,     // Orange shoulder monkey & white sneaker accents
      gender: 'male',
      scale: { x: 0.96, y: 1.0, z: 0.96 }
    },
    specialAttack: {
      name: 'SHADOW RUSH',
      type: 'shadow_rush',
      damage: 20,
      cooldown: 6.0,
      color: 0x8b5cf6,
      secondaryColor: 0x312e81,
      description: 'Executes a hyper-fast forward shadow dash leaving motion trails followed by an impactful strike.'
    },
    stats: {
      maxHealth: 100,
      moveSpeed: 7.2,
      jumpVelocity: 14.5,
      punchLightDamage: 6,
      punchHeavyDamage: 12,
      punchJumpDamage: 9,
      punchCrouchDamage: 7,
      kickLightDamage: 9,
      kickHeavyDamage: 15,
      kickJumpDamage: 12,
      kickCrouchDamage: 8,
      punchDamage: 8,
      kickDamage: 12,
      specialDamage: 20,
      specialCooldown: 6.0
    }
  },

  fighter_04: {
    id: 'aynur',
    name: 'AYNUR',
    displayName: 'Aynur',
    gender: 'female',
    title: 'CRIMSON ROSE',
    archetype: 'Elegant Precision Striker',
    bio: 'A confident, poised, and stylish street fighter in her signature crimson puffer jacket and crossbody bag, delivering fast precision combos.',
    avatarIcon: '🌸',
    portraitPath: '/assets/characters/aynur/preview.webp',
    previewImagePath: '/assets/characters/aynur/preview.webp',
    modelPath: '/assets/characters/aynur/model.glb',
    positionOffset: { x: 0, y: 0, z: 0 },
    scale: { x: 0.96, y: 1.0, z: 0.96 },
    visualNotes: 'Stylized 3D character matching the Tripo3D model: fair warm skin tone with rosy cheeks, large expressive dark brown eyes, defined dark eyebrows, friendly confident smile, and voluminous dark wavy hair parted slightly off-center cascading over both shoulders.',
    outfitNotes: 'Bright crimson/red quilted puffer jacket worn open with white trim and snap button cuffs over an off-white ribbed cable-knit sweater, matching red quilted crescent crossbody bag slung from right shoulder to left hip, charcoal-slate jogger pants with silver side-seam studs, and chunky crisp white sneakers.',
    outfit: {
      styleName: 'Red Puffer & Crossbody Street Style',
      topDescription: 'Bright crimson quilted puffer jacket worn open over cream cable-knit sweater with red crescent crossbody bag',
      bottomDescription: 'Charcoal-gray relaxed joggers with silver side-seam rivet studs and ankle cuffs',
      footwear: 'Chunky crisp white platform athletic sneakers',
      gloves: 'Bare-knuckle street fighting stance with silver-buttoned red jacket cuffs'
    },
    appearance: {
      skinTone: 0xf4c6a8,        // Fair warm peach skin tone matching Tripo3D model
      hairColor: 0x261714,       // Deep dark espresso brunette wavy hair
      eyeColor: 0x2b1810,        // Large expressive dark brown eyes
      lipColor: 0xd14949,        // Vibrant warm red-rose smile
      hairStyle: 'half_up_wavy', // Voluminous parted wavy hair cascading over shoulders
      primaryColor: 0xc8102e,    // Bright crimson/red quilted puffer jacket & crossbody bag
      secondaryColor: 0x52525b,  // Charcoal/slate gray studded jogger pants
      accentColor: 0xf8fafc,     // Crisp off-white sweater & chunky white sneakers
      gender: 'female',
      scale: { x: 0.96, y: 1.0, z: 0.96 }
    },
    specialAttack: {
      name: 'PHOENIX KICK',
      type: 'phoenix_kick',
      damage: 20,
      cooldown: 6.0,
      color: 0xc8102e,
      secondaryColor: 0xfda4af,
      description: 'Launches a soaring rising martial kick enveloped in crimson-red and radiant rose energy trails.'
    },
    stats: {
      maxHealth: 100,
      moveSpeed: 7.2,
      jumpVelocity: 14.5,
      punchLightDamage: 6,
      punchHeavyDamage: 12,
      punchJumpDamage: 9,
      punchCrouchDamage: 7,
      kickLightDamage: 9,
      kickHeavyDamage: 15,
      kickJumpDamage: 12,
      kickCrouchDamage: 8,
      punchDamage: 8,
      kickDamage: 12,
      specialDamage: 20,
      specialCooldown: 6.0
    }
  },

  fighter_05: {
    id: 'sevil',
    name: 'SEVIL',
    displayName: 'Sevil',
    gender: 'female',
    title: 'BOHO BLOSSOM',
    archetype: 'Floral Boho Striker',
    bio: 'A vibrant bohemian martial artist adorned with a daisy flower crown, floral bell-sleeve tunic, and flared embroidered trousers, striking with fluid precision.',
    avatarIcon: '🌼',
    portraitPath: '/assets/characters/sevil/preview.webp',
    previewImagePath: '/assets/characters/sevil/preview.webp',
    modelPath: '/assets/characters/sevil/model.glb',
    positionOffset: { x: 0, y: 0, z: 0 },
    scale: { x: 0.96, y: 1.0, z: 0.96 },
    visualNotes: 'Stylized 3D female martial artist with center-parted dark brown bob hair, white daisy flower crown, warm smile, turquoise choker, and medallion necklace.',
    outfitNotes: 'Floral bell-sleeved boho tunic in golden yellow, pink, and brown with mandala medallion belt, fingerless brown combat wraps, floral-embroidered flared brown pants, and rugged lace-up boots.',
    outfit: {
      styleName: 'Floral Boho & Daisy Crown',
      topDescription: 'Off-shoulder floral bohemian bell-sleeve tunic with turquoise choker and mandala medallion belt',
      bottomDescription: 'Flared brown bell-bottom trousers with vibrant floral hem embroidery',
      footwear: 'Chunky brown lace-up combat boots',
      gloves: 'Fingerless brown leather combat wraps with red wrist bands'
    },
    appearance: {
      skinTone: 0xf1c2a0,
      hairColor: 0x3b2219,
      eyeColor: 0x3b2219,
      lipColor: 0xb91c1c,
      hairStyle: 'half_up_wavy',
      primaryColor: 0xd97706,    // Golden floral boho tunic
      secondaryColor: 0x5c3a36,  // Brown flared embroidered trousers
      accentColor: 0xfef08a,     // Daisy flower crown & floral accents
      gender: 'female',
      scale: { x: 0.96, y: 1.0, z: 0.96 }
    },
    specialAttack: {
      name: 'DRAGON SPIN',
      type: 'dragon_spin',
      damage: 20,
      cooldown: 6.0,
      color: 0xd946ef,
      secondaryColor: 0x9333ea,
      description: 'Executes a high-speed spinning sweep attack with purple dragon energy ribbons and expanding circular shockwaves.'
    },
    stats: {
      maxHealth: 100,
      moveSpeed: 7.2,
      jumpVelocity: 14.5,
      punchLightDamage: 6,
      punchHeavyDamage: 12,
      punchJumpDamage: 9,
      punchCrouchDamage: 7,
      kickLightDamage: 9,
      kickHeavyDamage: 15,
      kickJumpDamage: 12,
      kickCrouchDamage: 8,
      punchDamage: 8,
      kickDamage: 12,
      specialDamage: 20,
      specialCooldown: 6.0
    }
  }
};

// Aliases for Step 1 & Character Pipeline compatibility
CHARACTERS_REGISTRY['tacir'] = CHARACTERS_REGISTRY['fighter_01'];
CHARACTERS_REGISTRY['alex'] = CHARACTERS_REGISTRY['fighter_01'];
CHARACTERS_REGISTRY['farhad'] = CHARACTERS_REGISTRY['fighter_02'];
CHARACTERS_REGISTRY['max'] = CHARACTERS_REGISTRY['fighter_02'];
CHARACTERS_REGISTRY['rufat'] = CHARACTERS_REGISTRY['fighter_03'];
CHARACTERS_REGISTRY['ryan'] = CHARACTERS_REGISTRY['fighter_03'];
CHARACTERS_REGISTRY['aynur'] = CHARACTERS_REGISTRY['fighter_04'];
CHARACTERS_REGISTRY['luna'] = CHARACTERS_REGISTRY['fighter_04'];
CHARACTERS_REGISTRY['sevil'] = CHARACTERS_REGISTRY['fighter_05'];
CHARACTERS_REGISTRY['maya'] = CHARACTERS_REGISTRY['fighter_05'];

// Primary 5-fighter list in order
export const CHARACTER_LIST: CharacterConfig[] = [
  CHARACTERS_REGISTRY['fighter_01'],
  CHARACTERS_REGISTRY['fighter_02'],
  CHARACTERS_REGISTRY['fighter_03'],
  CHARACTERS_REGISTRY['fighter_04'],
  CHARACTERS_REGISTRY['fighter_05']
];
