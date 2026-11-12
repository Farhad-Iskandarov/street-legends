export interface CharacterAppearance {
  skinTone: number;
  hairColor: number;
  hairStyle: 'short' | 'spiky' | 'hoodie' | 'ponytail' | 'braids' | 'undercut' | 'fade';
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
  id: string; // fighter_01, fighter_02, fighter_03, fighter_04, fighter_05
  name: string; // Editable display name
  gender: 'male' | 'female';
  title: string;
  archetype: string;
  bio: string;
  avatarIcon: string;
  portraitPath: string;
  modelPath: string; // e.g., '/assets/characters/fighter-01/model.glb'
  positionOffset: { x: number; y: number; z: number };
  scale: { x: number; y: number; z: number };
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
    id: 'fighter_01',
    name: 'ALEX', // Replaceable with real name later
    gender: 'male',
    title: 'THE STREET BRAWLER',
    archetype: 'Balanced Striker',
    bio: 'A resilient street combatant with an aggressive boxing stance and balanced all-around combat fundamentals.',
    avatarIcon: '🥊',
    portraitPath: '/assets/characters/fighter-01/portrait.png',
    modelPath: '/assets/characters/fighter-01/model.glb',
    positionOffset: { x: 0, y: 0, z: 0 },
    scale: { x: 1.0, y: 1.0, z: 1.0 },
    outfit: {
      styleName: 'Modern Street Fighter',
      topDescription: 'Dark tactical combat jacket over athletic compression shirt',
      bottomDescription: 'Reinforced street combat trousers',
      footwear: 'High-top black athletic cross-trainers with cyan trim',
      gloves: 'Cyan protective hand wraps'
    },
    appearance: {
      skinTone: 0xd4a373,
      hairColor: 0x24180b,
      hairStyle: 'short',
      primaryColor: 0x1e293b,    // Dark modern street jacket
      secondaryColor: 0x0f172a,  // Dark combat denim
      accentColor: 0x00d2ff,     // Cyan electric trim & wraps
      gender: 'male',
      scale: { x: 1.0, y: 1.0, z: 1.0 }
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
    id: 'fighter_02',
    name: 'MAX', // Replaceable with real name later
    gender: 'male',
    title: 'IRON JUGGERNAUT',
    archetype: 'Heavy Boxer',
    bio: 'A heavyweight power striker possessing a solid guard, explosive counter-punching, and devastating knockback.',
    avatarIcon: '💥',
    portraitPath: '/assets/characters/fighter-02/portrait.png',
    modelPath: '/assets/characters/fighter-02/model.glb',
    positionOffset: { x: 0, y: 0, z: 0 },
    scale: { x: 1.12, y: 1.04, z: 1.12 },
    outfit: {
      styleName: 'Sport-Inspired Power Fighter',
      topDescription: 'Fitted athletic sports compression shirt',
      bottomDescription: 'Heavy-duty athletic training shorts',
      footwear: 'Low-profile boxing boots',
      gloves: 'Gold competition boxing gloves'
    },
    appearance: {
      skinTone: 0xbb8056,
      hairColor: 0x171717,
      hairStyle: 'spiky',
      primaryColor: 0xea580c,    // Sport orange athletic top
      secondaryColor: 0x18181b,  // Charcoal training shorts
      accentColor: 0xf59e0b,     // Gold boxing gloves & laces
      gender: 'male',
      scale: { x: 1.14, y: 1.04, z: 1.14 }
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
    id: 'fighter_03',
    name: 'RYAN', // Replaceable with real name later
    gender: 'male',
    title: 'WIND WALKER',
    archetype: 'Urban Martial Artist',
    bio: 'An urban parkour master and taekwondo specialist combining aerial kicks with quick repositioning.',
    avatarIcon: '⚡',
    portraitPath: '/assets/characters/fighter-03/portrait.png',
    modelPath: '/assets/characters/fighter-03/model.glb',
    positionOffset: { x: 0, y: 0, z: 0 },
    scale: { x: 0.96, y: 1.02, z: 0.96 },
    outfit: {
      styleName: 'Urban Martial Arts Combatant',
      topDescription: 'Distinctive emerald hooded martial arts jacket with contrast trim',
      bottomDescription: 'Flexible combat cargo trousers with knee articulation',
      footwear: 'High-traction martial arts kicking boots',
      gloves: 'Fingerless tactical combat gloves'
    },
    appearance: {
      skinTone: 0xf6c89f,
      hairColor: 0x3f2e18,
      hairStyle: 'hoodie',
      primaryColor: 0x15803d,    // Emerald hooded martial vest
      secondaryColor: 0x334155,  // Slate cargo combat trousers
      accentColor: 0x4ade80,     // Lime trim & kicking boots
      gender: 'male',
      scale: { x: 0.96, y: 1.02, z: 0.96 }
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
    id: 'fighter_04',
    name: 'LUNA', // Replaceable with real name later
    gender: 'female',
    title: 'SHADOW VIPER',
    archetype: 'Stealth Martial Artist',
    bio: 'An agile modern female martial artist utilizing rapid-fire strikes and elusive defensive posture.',
    avatarIcon: '🌙',
    portraitPath: '/assets/characters/fighter-04/portrait.png',
    modelPath: '/assets/characters/fighter-04/model.glb',
    positionOffset: { x: 0, y: 0, z: 0 },
    scale: { x: 0.92, y: 0.98, z: 0.92 },
    outfit: {
      styleName: 'Modern Female Martial Artist',
      topDescription: 'Fitted athletic fighting top with protective chest guard',
      bottomDescription: 'High-mobility athletic combat leggings',
      footwear: 'Low-profile ninja-inspired split-toe combat shoes',
      gloves: 'Reinforced forearm guards and wrist wraps'
    },
    appearance: {
      skinTone: 0xfce7d2,
      hairColor: 0x1e1b4b,
      hairStyle: 'ponytail',
      primaryColor: 0x7c3aed,    // Royal purple martial suit
      secondaryColor: 0x111827,  // Dark stealth leggings
      accentColor: 0xc084fc,     // Magenta glowing wrist wraps
      gender: 'female',
      scale: { x: 0.92, y: 0.98, z: 0.92 }
    },
    specialAttack: {
      name: 'PHOENIX KICK',
      type: 'phoenix_kick',
      damage: 20,
      cooldown: 6.0,
      color: 0xef4444,
      secondaryColor: 0xfacc15,
      description: 'Launches a soaring rising martial kick enveloped in red and gold radiant phoenix flame trails.'
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
    id: 'fighter_05',
    name: 'MAYA', // Replaceable with real name later
    gender: 'female',
    title: 'DESERT BLADE',
    archetype: 'Street Combat Specialist',
    bio: 'A relentless street combat veteran who pairs punishing close-range strikes with comfortable athletic gear.',
    avatarIcon: '🔥',
    portraitPath: '/assets/characters/fighter-05/portrait.png',
    modelPath: '/assets/characters/fighter-05/model.glb',
    positionOffset: { x: 0, y: 0, z: 0 },
    scale: { x: 0.95, y: 1.0, z: 0.95 },
    outfit: {
      styleName: 'Stylish Street-Combat Striker',
      topDescription: 'Comfortable athletic sports top with traditional fighter cord bindings',
      bottomDescription: 'Relaxed athletic street-combat trousers',
      footwear: 'Lightweight ankle-supported street combat shoes',
      gloves: 'Traditional rope and canvas hand bindings'
    },
    appearance: {
      skinTone: 0x935f3d,
      hairColor: 0x0a0a0a,
      hairStyle: 'braids',
      primaryColor: 0xbe123c,    // Crimson combat crop
      secondaryColor: 0xf59e0b,  // Golden athletic trousers
      accentColor: 0xfacc15,     // Gold forehead warrior band
      gender: 'female',
      scale: { x: 0.95, y: 1.0, z: 0.95 }
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

// Aliases for Step 1 compatibility
CHARACTERS_REGISTRY['alex'] = CHARACTERS_REGISTRY['fighter_01'];
CHARACTERS_REGISTRY['max'] = CHARACTERS_REGISTRY['fighter_02'];
CHARACTERS_REGISTRY['ryan'] = CHARACTERS_REGISTRY['fighter_03'];
CHARACTERS_REGISTRY['luna'] = CHARACTERS_REGISTRY['fighter_04'];
CHARACTERS_REGISTRY['maya'] = CHARACTERS_REGISTRY['fighter_05'];

// Primary 5-fighter list in order
export const CHARACTER_LIST: CharacterConfig[] = [
  CHARACTERS_REGISTRY['fighter_01'],
  CHARACTERS_REGISTRY['fighter_02'],
  CHARACTERS_REGISTRY['fighter_03'],
  CHARACTERS_REGISTRY['fighter_04'],
  CHARACTERS_REGISTRY['fighter_05']
];
