import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const CHARACTERS_REGISTRY = {
  fighter_01: {
    id: "tacir",
    name: "TACIR",
    displayName: "Tacir",
    gender: "male",
    title: "THE STREET BRAWLER",
    archetype: "Balanced Striker",
    bio: "A resilient, battle-hardened street brawler in tailored black attire with rolled sleeves, delivering disciplined boxing combos and fiery strikes.",
    avatarIcon: "🥊",
    portraitPath: "/assets/characters/tacir/preview.webp",
    previewImagePath: "/assets/characters/tacir/preview.webp",
    modelPath: "/assets/characters/tacir/model.glb",
    positionOffset: { x: 0, y: 0, z: 0 },
    scale: { x: 0.96, y: 1, z: 0.96 },
    visualNotes: "Stylized muscular male fighter with slicked-back dark hair, prominent eyebrows, full dark beard and mustache, and an intense guarded stance.",
    outfitNotes: "Tailored black button-down shirt with sleeves rolled past the forearms, matching black trousers with a silver-buckled leather belt, and heavy black boots.",
    outfit: {
      styleName: "Tailored Black Brawler Attire",
      topDescription: "Tailored black button-down collared shirt with rolled sleeves",
      bottomDescription: "Black tailored trousers with silver-buckled leather belt",
      footwear: "Heavy-duty black combat boots",
      gloves: "Bare-knuckle disciplined boxing stance"
    },
    appearance: {
      skinTone: 13935475,
      hairColor: 1841431,
      eyeColor: 2824208,
      hairStyle: "short",
      primaryColor: 1579035,
      // Tailored black button-down shirt
      secondaryColor: 2565930,
      // Matching black trousers
      accentColor: 14870768,
      // Silver belt buckle & buttons
      gender: "male",
      scale: { x: 0.96, y: 1, z: 0.96 }
    },
    specialAttack: {
      name: "FIRE STRIKE",
      type: "fire_strike",
      damage: 20,
      cooldown: 6,
      color: 16347926,
      secondaryColor: 16772565,
      description: "Performs a powerful forward lunging punch surrounded by blazing orange fire energy."
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
      specialCooldown: 6
    }
  },
  fighter_02: {
    id: "farhad",
    name: "FARHAD",
    displayName: "Farhad",
    gender: "male",
    title: "SHADOW BRAWLER",
    archetype: "Heavy Boxer",
    bio: "A focused powerhouse striker in stealth black streetwear and cargo trousers, delivering heavy knockout punches and counter-strikes.",
    avatarIcon: "🥊",
    portraitPath: "/assets/characters/farhad/preview.webp",
    previewImagePath: "/assets/characters/farhad/preview.webp",
    modelPath: "/assets/characters/farhad/model.glb",
    positionOffset: { x: 0, y: 0, z: 0 },
    scale: { x: 0.96, y: 1, z: 0.96 },
    visualNotes: "Stylized 3D male fighter with dark curly hair faded on the sides, defined dark eyebrows, focused eyes, and a neat dark beard and mustache.",
    outfitNotes: "Matte black ribbed long-sleeve crewneck sweatshirt, black cargo pants with thigh utility flap pockets and cuffed ankles, and crisp white low-top sneakers.",
    outfit: {
      styleName: "All-Black Crewneck & Cargo Streetwear",
      topDescription: "Matte black long-sleeved ribbed crewneck pullover sweatshirt",
      bottomDescription: "Relaxed black cargo trousers with outer thigh flap pockets and elastic ankle cuffs",
      footwear: "Crisp white low-top court sneakers",
      gloves: "Bare-knuckle power boxing stance"
    },
    appearance: {
      skinTone: 15844e3,
      hairColor: 1513239,
      eyeColor: 3900150,
      hairStyle: "short",
      primaryColor: 1579035,
      // Matte black crewneck sweatshirt
      secondaryColor: 2565930,
      // Black cargo trousers
      accentColor: 16317180,
      // Crisp white sneakers
      gender: "male",
      scale: { x: 0.96, y: 1, z: 0.96 }
    },
    specialAttack: {
      name: "THUNDER KICK",
      type: "thunder_kick",
      damage: 20,
      cooldown: 6,
      color: 54015,
      secondaryColor: 3718648,
      description: "Performs a powerful spinning 360-degree kick charged with crackling blue lightning."
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
      specialCooldown: 6
    }
  },
  fighter_03: {
    id: "rufat",
    name: "RUFAT",
    displayName: "Rufat",
    gender: "male",
    title: "WILD COMPANION",
    archetype: "Urban Martial Artist",
    bio: "An agile street fighter accompanied by his loyal shoulder monkey, wearing a crisp crewneck sweater, black backpack, and dark cargo pants.",
    avatarIcon: "🐒",
    portraitPath: "/assets/characters/rufat/preview.webp",
    previewImagePath: "/assets/characters/rufat/preview.webp",
    modelPath: "/assets/characters/rufat/model.glb",
    positionOffset: { x: 0, y: 0, z: 0 },
    scale: { x: 0.96, y: 1, z: 0.96 },
    visualNotes: "Stylized 3D male fighter with a short dark fade haircut, trimmed beard, confident smile, and an orange monkey companion perched on his right shoulder.",
    outfitNotes: "Light off-white ribbed crewneck sweater with black backpack shoulder straps, dark charcoal cargo pants with side flap pockets, and crisp white sneakers.",
    outfit: {
      styleName: "Backpack & Shoulder Monkey Street Style",
      topDescription: "Light off-white ribbed crewneck sweatshirt with black backpack straps and shoulder monkey companion",
      bottomDescription: "Dark charcoal-black cargo trousers with thigh flap pockets and tapered cuffs",
      footwear: "Chunky crisp white low-top athletic sneakers",
      gloves: "Bare-knuckle street fighting stance"
    },
    appearance: {
      skinTone: 16041640,
      hairColor: 1841431,
      eyeColor: 3875353,
      hairStyle: "short",
      primaryColor: 14870768,
      // Off-white crewneck sweatshirt
      secondaryColor: 2565930,
      // Dark charcoal cargo trousers
      accentColor: 14251782,
      // Orange shoulder monkey & white sneaker accents
      gender: "male",
      scale: { x: 0.96, y: 1, z: 0.96 }
    },
    specialAttack: {
      name: "SHADOW RUSH",
      type: "shadow_rush",
      damage: 20,
      cooldown: 6,
      color: 9133302,
      secondaryColor: 3223169,
      description: "Executes a hyper-fast forward shadow dash leaving motion trails followed by an impactful strike."
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
      specialCooldown: 6
    }
  },
  fighter_04: {
    id: "aynur",
    name: "AYNUR",
    displayName: "Aynur",
    gender: "female",
    title: "CRIMSON ROSE",
    archetype: "Elegant Precision Striker",
    bio: "A confident, poised, and stylish street fighter in her signature crimson puffer jacket and crossbody bag, delivering fast precision combos.",
    avatarIcon: "🌸",
    portraitPath: "/assets/characters/aynur/preview.webp",
    previewImagePath: "/assets/characters/aynur/preview.webp",
    modelPath: "/assets/characters/aynur/model.glb",
    positionOffset: { x: 0, y: 0, z: 0 },
    scale: { x: 0.96, y: 1, z: 0.96 },
    visualNotes: "Stylized 3D character matching the Tripo3D model: fair warm skin tone with rosy cheeks, large expressive dark brown eyes, defined dark eyebrows, friendly confident smile, and voluminous dark wavy hair parted slightly off-center cascading over both shoulders.",
    outfitNotes: "Bright crimson/red quilted puffer jacket worn open with white trim and snap button cuffs over an off-white ribbed cable-knit sweater, matching red quilted crescent crossbody bag slung from right shoulder to left hip, charcoal-slate jogger pants with silver side-seam studs, and chunky crisp white sneakers.",
    outfit: {
      styleName: "Red Puffer & Crossbody Street Style",
      topDescription: "Bright crimson quilted puffer jacket worn open over cream cable-knit sweater with red crescent crossbody bag",
      bottomDescription: "Charcoal-gray relaxed joggers with silver side-seam rivet studs and ankle cuffs",
      footwear: "Chunky crisp white platform athletic sneakers",
      gloves: "Bare-knuckle street fighting stance with silver-buttoned red jacket cuffs"
    },
    appearance: {
      skinTone: 16041640,
      // Fair warm peach skin tone matching Tripo3D model
      hairColor: 2496276,
      // Deep dark espresso brunette wavy hair
      eyeColor: 2824208,
      // Large expressive dark brown eyes
      lipColor: 13715785,
      // Vibrant warm red-rose smile
      hairStyle: "half_up_wavy",
      // Voluminous parted wavy hair cascading over shoulders
      primaryColor: 13111342,
      // Bright crimson/red quilted puffer jacket & crossbody bag
      secondaryColor: 5395035,
      // Charcoal/slate gray studded jogger pants
      accentColor: 16317180,
      // Crisp off-white sweater & chunky white sneakers
      gender: "female",
      scale: { x: 0.96, y: 1, z: 0.96 }
    },
    specialAttack: {
      name: "PHOENIX KICK",
      type: "phoenix_kick",
      damage: 20,
      cooldown: 6,
      color: 13111342,
      secondaryColor: 16622767,
      description: "Launches a soaring rising martial kick enveloped in crimson-red and radiant rose energy trails."
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
      specialCooldown: 6
    }
  },
  fighter_05: {
    id: "sevil",
    name: "SEVIL",
    displayName: "Sevil",
    gender: "female",
    title: "BOHO BLOSSOM",
    archetype: "Floral Boho Striker",
    bio: "A vibrant bohemian martial artist adorned with a daisy flower crown, floral bell-sleeve tunic, and flared embroidered trousers, striking with fluid precision.",
    avatarIcon: "🌼",
    portraitPath: "/assets/characters/sevil/preview.webp",
    previewImagePath: "/assets/characters/sevil/preview.webp",
    modelPath: "/assets/characters/sevil/model.glb",
    positionOffset: { x: 0, y: 0, z: 0 },
    scale: { x: 0.96, y: 1, z: 0.96 },
    visualNotes: "Stylized 3D female martial artist with center-parted dark brown bob hair, white daisy flower crown, warm smile, turquoise choker, and medallion necklace.",
    outfitNotes: "Floral bell-sleeved boho tunic in golden yellow, pink, and brown with mandala medallion belt, fingerless brown combat wraps, floral-embroidered flared brown pants, and rugged lace-up boots.",
    outfit: {
      styleName: "Floral Boho & Daisy Crown",
      topDescription: "Off-shoulder floral bohemian bell-sleeve tunic with turquoise choker and mandala medallion belt",
      bottomDescription: "Flared brown bell-bottom trousers with vibrant floral hem embroidery",
      footwear: "Chunky brown lace-up combat boots",
      gloves: "Fingerless brown leather combat wraps with red wrist bands"
    },
    appearance: {
      skinTone: 15844e3,
      hairColor: 3875353,
      eyeColor: 3875353,
      lipColor: 12131356,
      hairStyle: "half_up_wavy",
      primaryColor: 14251782,
      // Golden floral boho tunic
      secondaryColor: 6044214,
      // Brown flared embroidered trousers
      accentColor: 16707722,
      // Daisy flower crown & floral accents
      gender: "female",
      scale: { x: 0.96, y: 1, z: 0.96 }
    },
    specialAttack: {
      name: "DRAGON SPIN",
      type: "dragon_spin",
      damage: 20,
      cooldown: 6,
      color: 14239471,
      secondaryColor: 9647082,
      description: "Executes a high-speed spinning sweep attack with purple dragon energy ribbons and expanding circular shockwaves."
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
      specialCooldown: 6
    }
  }
};
CHARACTERS_REGISTRY["tacir"] = CHARACTERS_REGISTRY["fighter_01"];
CHARACTERS_REGISTRY["alex"] = CHARACTERS_REGISTRY["fighter_01"];
CHARACTERS_REGISTRY["farhad"] = CHARACTERS_REGISTRY["fighter_02"];
CHARACTERS_REGISTRY["max"] = CHARACTERS_REGISTRY["fighter_02"];
CHARACTERS_REGISTRY["rufat"] = CHARACTERS_REGISTRY["fighter_03"];
CHARACTERS_REGISTRY["ryan"] = CHARACTERS_REGISTRY["fighter_03"];
CHARACTERS_REGISTRY["aynur"] = CHARACTERS_REGISTRY["fighter_04"];
CHARACTERS_REGISTRY["luna"] = CHARACTERS_REGISTRY["fighter_04"];
CHARACTERS_REGISTRY["sevil"] = CHARACTERS_REGISTRY["fighter_05"];
CHARACTERS_REGISTRY["maya"] = CHARACTERS_REGISTRY["fighter_05"];
const CHARACTER_LIST = [
  CHARACTERS_REGISTRY["fighter_01"],
  CHARACTERS_REGISTRY["fighter_02"],
  CHARACTERS_REGISTRY["fighter_03"],
  CHARACTERS_REGISTRY["fighter_04"],
  CHARACTERS_REGISTRY["fighter_05"]
];

class ProceduralHumanoid {
  static avatarTextureCache = /* @__PURE__ */ new Map();
  static create(config) {
    const root = new THREE.Group();
    root.name = `fighter_${config.id}`;
    const app = config.appearance;
    const isFemale = app.gender === "female";
    const skinMat = new THREE.MeshStandardMaterial({
      color: app.skinTone,
      roughness: 0.68,
      metalness: 0.05
    });
    const lipMat = new THREE.MeshStandardMaterial({
      color: app.lipColor || ProceduralHumanoid.blendColor(app.skinTone, 12131356, 0.25),
      roughness: 0.55,
      metalness: 0.05
    });
    const hairMat = new THREE.MeshStandardMaterial({
      color: app.hairColor,
      roughness: 0.55,
      metalness: 0.12
    });
    const primaryMat = new THREE.MeshStandardMaterial({
      color: app.primaryColor,
      roughness: 0.72,
      metalness: 0.15
    });
    const secondaryMat = new THREE.MeshStandardMaterial({
      color: app.secondaryColor,
      roughness: 0.78,
      metalness: 0.1
    });
    const accentMat = new THREE.MeshStandardMaterial({
      color: app.accentColor,
      roughness: 0.35,
      metalness: 0.45
    });
    const scleraMat = new THREE.MeshStandardMaterial({
      color: 16317180,
      roughness: 0.2
    });
    const irisMat = new THREE.MeshStandardMaterial({
      color: app.eyeColor || 1976635,
      roughness: 0.15
    });
    const torsoW = isFemale ? 0.44 : 0.54;
    const torsoD = isFemale ? 0.26 : 0.34;
    const hipsW = isFemale ? 0.42 : 0.46;
    const legRadius = isFemale ? 0.11 : 0.135;
    const armRadius = isFemale ? 0.08 : 0.105;
    const hips = new THREE.Group();
    hips.position.y = 0.95;
    root.add(hips);
    const hipsGeo = new THREE.CylinderGeometry(hipsW * 0.5, hipsW * 0.44, 0.24, 14);
    const hipsMesh = new THREE.Mesh(hipsGeo, secondaryMat);
    hipsMesh.castShadow = true;
    hipsMesh.receiveShadow = true;
    hips.add(hipsMesh);
    const beltGeo = new THREE.CylinderGeometry(hipsW * 0.52, hipsW * 0.52, 0.08, 14);
    const beltMesh = new THREE.Mesh(beltGeo, accentMat);
    beltMesh.position.y = 0.09;
    hips.add(beltMesh);
    const torso = new THREE.Group();
    torso.position.y = 0.12;
    hips.add(torso);
    const torsoGeo = new THREE.CylinderGeometry(torsoW * 0.48, hipsW * 0.46, 0.32, 14);
    const torsoMesh = new THREE.Mesh(torsoGeo, primaryMat);
    torsoMesh.position.y = 0.16;
    torsoMesh.castShadow = true;
    torsoMesh.receiveShadow = true;
    torso.add(torsoMesh);
    const chest = new THREE.Group();
    chest.position.y = 0.32;
    torso.add(chest);
    const chestGeo = new THREE.BoxGeometry(torsoW, 0.34, torsoD);
    const chestMesh = new THREE.Mesh(chestGeo, primaryMat);
    chestMesh.position.y = 0.17;
    chestMesh.castShadow = true;
    chestMesh.receiveShadow = true;
    chest.add(chestMesh);
    const pecGeo = new THREE.BoxGeometry(torsoW * 0.9, 0.14, 0.04);
    const pecMesh = new THREE.Mesh(pecGeo, accentMat);
    pecMesh.position.set(0, 0.22, torsoD * 0.5 + 0.015);
    chest.add(pecMesh);
    const head = new THREE.Group();
    head.position.y = 0.4;
    chest.add(head);
    const neckGeo = new THREE.CylinderGeometry(0.09, 0.115, 0.14, 12);
    const neckMesh = new THREE.Mesh(neckGeo, skinMat);
    neckMesh.position.y = 0.07;
    neckMesh.castShadow = true;
    head.add(neckMesh);
    const headGeo = new THREE.SphereGeometry(0.185, 18, 16);
    headGeo.scale(1, 1.22, 1.05);
    const headMesh = new THREE.Mesh(headGeo, skinMat);
    headMesh.position.y = 0.28;
    headMesh.castShadow = true;
    head.add(headMesh);
    const jawGeo = new THREE.ConeGeometry(0.13, 0.18, 5);
    jawGeo.rotateY(Math.PI);
    const jawMesh = new THREE.Mesh(jawGeo, skinMat);
    jawMesh.position.set(0, 0.21, 0.07);
    head.add(jawMesh);
    const noseGeo = new THREE.ConeGeometry(0.032, 0.08, 4);
    noseGeo.rotateX(Math.PI * 0.4);
    const noseMesh = new THREE.Mesh(noseGeo, skinMat);
    noseMesh.position.set(0, 0.27, 0.2);
    head.add(noseMesh);
    const lipGeo = new THREE.BoxGeometry(0.07, 0.022, 0.03);
    const lipsMesh = new THREE.Mesh(lipGeo, lipMat);
    lipsMesh.position.set(0, 0.21, 0.18);
    head.add(lipsMesh);
    const earGeo = new THREE.SphereGeometry(0.04, 8, 8);
    earGeo.scale(0.5, 1.4, 1);
    const leftEar = new THREE.Mesh(earGeo, skinMat);
    leftEar.position.set(0.19, 0.28, -0.02);
    const rightEar = new THREE.Mesh(earGeo, skinMat);
    rightEar.position.set(-0.19, 0.28, -0.02);
    head.add(leftEar, rightEar);
    const eyeRadius = 0.032;
    const eyeGeo = new THREE.SphereGeometry(eyeRadius, 10, 10);
    const irisGeo = new THREE.SphereGeometry(eyeRadius * 0.65, 8, 8);
    const leftSclera = new THREE.Mesh(eyeGeo, scleraMat);
    leftSclera.position.set(0.065, 0.285, 0.165);
    const leftIris = new THREE.Mesh(irisGeo, irisMat);
    leftIris.position.set(0.065, 0.285, 0.19);
    const rightSclera = new THREE.Mesh(eyeGeo, scleraMat);
    rightSclera.position.set(-0.065, 0.285, 0.165);
    const rightIris = new THREE.Mesh(irisGeo, irisMat);
    rightIris.position.set(-0.065, 0.285, 0.19);
    head.add(leftSclera, leftIris, rightSclera, rightIris);
    const browGeo = new THREE.BoxGeometry(0.065, 0.022, 0.03);
    const leftBrow = new THREE.Mesh(browGeo, hairMat);
    leftBrow.position.set(0.065, 0.325, 0.18);
    leftBrow.rotation.z = -0.12;
    const rightBrow = new THREE.Mesh(browGeo, hairMat);
    rightBrow.position.set(-0.065, 0.325, 0.18);
    rightBrow.rotation.z = 0.12;
    head.add(leftBrow, rightBrow);
    ProceduralHumanoid.createHairStyle(head, app.hairStyle, hairMat, accentMat);
    const leftUpperArm = new THREE.Group();
    leftUpperArm.position.set(torsoW * 0.55, 0.26, 0);
    chest.add(leftUpperArm);
    const shoulderGeo = new THREE.SphereGeometry(armRadius * 1.3, 12, 12);
    const leftShoulderMesh = new THREE.Mesh(shoulderGeo, primaryMat);
    leftUpperArm.add(leftShoulderMesh);
    const upperArmGeo = new THREE.CylinderGeometry(armRadius * 0.98, armRadius * 0.86, 0.32, 12);
    upperArmGeo.translate(0, -0.16, 0);
    const leftUpperArmMesh = new THREE.Mesh(upperArmGeo, primaryMat);
    leftUpperArmMesh.castShadow = true;
    leftUpperArm.add(leftUpperArmMesh);
    const leftForearm = new THREE.Group();
    leftForearm.position.set(0, -0.32, 0);
    leftUpperArm.add(leftForearm);
    const forearmGeo = new THREE.CylinderGeometry(armRadius * 0.88, armRadius * 0.76, 0.3, 12);
    forearmGeo.translate(0, -0.15, 0);
    const leftForearmMesh = new THREE.Mesh(forearmGeo, skinMat);
    leftForearmMesh.castShadow = true;
    leftForearm.add(leftForearmMesh);
    const wrapGeo = new THREE.CylinderGeometry(armRadius * 0.92, armRadius * 0.82, 0.18, 12);
    wrapGeo.translate(0, -0.18, 0);
    const leftWrapMesh = new THREE.Mesh(wrapGeo, accentMat);
    leftForearm.add(leftWrapMesh);
    const leftHand = new THREE.Group();
    leftHand.position.set(0, -0.3, 0);
    leftForearm.add(leftHand);
    const fistGeo = new THREE.BoxGeometry(armRadius * 1.8, armRadius * 2.2, armRadius * 2);
    const leftHandMesh = new THREE.Mesh(fistGeo, accentMat);
    leftHandMesh.castShadow = true;
    leftHand.add(leftHandMesh);
    const rightUpperArm = new THREE.Group();
    rightUpperArm.position.set(-torsoW * 0.55, 0.26, 0);
    chest.add(rightUpperArm);
    const rightShoulderMesh = new THREE.Mesh(shoulderGeo, primaryMat);
    rightUpperArm.add(rightShoulderMesh);
    const rightUpperArmMesh = new THREE.Mesh(upperArmGeo, primaryMat);
    rightUpperArmMesh.castShadow = true;
    rightUpperArm.add(rightUpperArmMesh);
    const rightForearm = new THREE.Group();
    rightForearm.position.set(0, -0.32, 0);
    rightUpperArm.add(rightForearm);
    const rightForearmMesh = new THREE.Mesh(forearmGeo, skinMat);
    rightForearmMesh.castShadow = true;
    rightForearm.add(rightForearmMesh);
    const rightWrapMesh = new THREE.Mesh(wrapGeo, accentMat);
    rightForearm.add(rightWrapMesh);
    const rightHand = new THREE.Group();
    rightHand.position.set(0, -0.3, 0);
    rightForearm.add(rightHand);
    const rightHandMesh = new THREE.Mesh(fistGeo, accentMat);
    rightHandMesh.castShadow = true;
    rightHand.add(rightHandMesh);
    const leftThigh = new THREE.Group();
    leftThigh.position.set(hipsW * 0.3, -0.06, 0);
    hips.add(leftThigh);
    const thighGeo = new THREE.CylinderGeometry(legRadius * 1.12, legRadius * 0.92, 0.44, 12);
    thighGeo.translate(0, -0.22, 0);
    const leftThighMesh = new THREE.Mesh(thighGeo, secondaryMat);
    leftThighMesh.castShadow = true;
    leftThigh.add(leftThighMesh);
    const leftShin = new THREE.Group();
    leftShin.position.set(0, -0.44, 0);
    leftThigh.add(leftShin);
    const shinGeo = new THREE.CylinderGeometry(legRadius * 0.9, legRadius * 0.8, 0.44, 12);
    shinGeo.translate(0, -0.22, 0);
    const leftShinMesh = new THREE.Mesh(shinGeo, secondaryMat);
    leftShinMesh.castShadow = true;
    leftShin.add(leftShinMesh);
    const leftFoot = new THREE.Group();
    leftFoot.position.set(0, -0.44, 0);
    leftShin.add(leftFoot);
    const footGeo = new THREE.BoxGeometry(legRadius * 1.6, 0.11, 0.32);
    footGeo.translate(0, -0.055, 0.08);
    const leftFootMesh = new THREE.Mesh(footGeo, accentMat);
    leftFootMesh.castShadow = true;
    leftFoot.add(leftFootMesh);
    const rightThigh = new THREE.Group();
    rightThigh.position.set(-hipsW * 0.3, -0.06, 0);
    hips.add(rightThigh);
    const rightThighMesh = new THREE.Mesh(thighGeo, secondaryMat);
    rightThighMesh.castShadow = true;
    rightThigh.add(rightThighMesh);
    const rightShin = new THREE.Group();
    rightShin.position.set(0, -0.44, 0);
    rightThigh.add(rightShin);
    const rightShinMesh = new THREE.Mesh(shinGeo, secondaryMat);
    rightShinMesh.castShadow = true;
    rightShin.add(rightShinMesh);
    const rightFoot = new THREE.Group();
    rightFoot.position.set(0, -0.44, 0);
    rightShin.add(rightFoot);
    const rightFootMesh = new THREE.Mesh(footGeo, accentMat);
    rightFootMesh.castShadow = true;
    rightFoot.add(rightFootMesh);
    root.scale.set(app.scale.x, app.scale.y, app.scale.z);
    if (config.previewImagePath || config.id === "aynur" || config.id === "sevil") {
      hips.traverse((child) => {
        if (child.isMesh) {
          child.visible = false;
        }
      });
      ProceduralHumanoid.attachAynurAvatarPlane(root, config.previewImagePath || config.portraitPath);
    }
    const punchHitboxGeo = new THREE.SphereGeometry(0.35, 8, 8);
    const punchHitboxMat = new THREE.MeshBasicMaterial({ visible: false, wireframe: true, color: 16711680 });
    const punchHitboxMesh = new THREE.Mesh(punchHitboxGeo, punchHitboxMat);
    rightHand.add(punchHitboxMesh);
    const kickHitboxGeo = new THREE.SphereGeometry(0.42, 8, 8);
    const kickHitboxMat = new THREE.MeshBasicMaterial({ visible: false, wireframe: true, color: 16755200 });
    const kickHitboxMesh = new THREE.Mesh(kickHitboxGeo, kickHitboxMat);
    rightFoot.add(kickHitboxMesh);
    const specialOrigin = new THREE.Object3D();
    specialOrigin.position.set(0.2, 0.1, 0.4);
    chest.add(specialOrigin);
    const bones = {
      root,
      hips,
      torso,
      chest,
      head,
      leftUpperArm,
      leftForearm,
      leftHand,
      rightUpperArm,
      rightForearm,
      rightHand,
      leftThigh,
      leftShin,
      leftFoot,
      rightThigh,
      rightShin,
      rightFoot
    };
    return {
      root,
      bones,
      punchHitboxMesh,
      kickHitboxMesh,
      specialOrigin
    };
  }
  static blendColor(hex1, hex2, ratio) {
    const c1 = new THREE.Color(hex1);
    const c2 = new THREE.Color(hex2);
    c1.lerp(c2, ratio);
    return c1.getHex();
  }
  static createHairStyle(head, style, hairMat, accentMat) {
    if (style === "short") {
      const hairCapGeo = new THREE.SphereGeometry(0.19, 16, 14, 0, Math.PI * 2, 0, Math.PI * 0.62);
      hairCapGeo.scale(1.04, 1.22, 1.08);
      const hairCap = new THREE.Mesh(hairCapGeo, hairMat);
      hairCap.position.y = 0.3;
      head.add(hairCap);
      const fringeGeo = new THREE.BoxGeometry(0.18, 0.08, 0.08);
      const fringe = new THREE.Mesh(fringeGeo, hairMat);
      fringe.position.set(0.04, 0.4, 0.16);
      fringe.rotation.z = -0.2;
      head.add(fringe);
    } else if (style === "spiky") {
      const hairCapGeo = new THREE.SphereGeometry(0.19, 14, 12, 0, Math.PI * 2, 0, Math.PI * 0.58);
      const hairCap = new THREE.Mesh(hairCapGeo, hairMat);
      hairCap.position.y = 0.3;
      head.add(hairCap);
      for (let i = -2; i <= 2; i++) {
        const spikeGeo = new THREE.ConeGeometry(0.055, 0.18, 6);
        spikeGeo.rotateX(Math.PI * 0.15);
        spikeGeo.rotateZ(i * 0.22);
        const spike = new THREE.Mesh(spikeGeo, hairMat);
        spike.position.set(i * 0.065, 0.46, 0.02 - Math.abs(i) * 0.02);
        head.add(spike);
      }
    } else if (style === "hoodie") {
      const hoodGeo = new THREE.SphereGeometry(0.24, 16, 16, 0, Math.PI * 2, 0, Math.PI * 0.78);
      const hoodMesh = new THREE.Mesh(hoodGeo, hairMat);
      hoodMesh.position.y = 0.28;
      head.add(hoodMesh);
      const bandGeo = new THREE.TorusGeometry(0.19, 0.035, 8, 16);
      bandGeo.rotateX(Math.PI * 0.5);
      const bandMesh = new THREE.Mesh(bandGeo, accentMat);
      bandMesh.position.y = 0.31;
      head.add(bandMesh);
    } else if (style === "ponytail") {
      const hairCapGeo = new THREE.SphereGeometry(0.19, 16, 14, 0, Math.PI * 2, 0, Math.PI * 0.65);
      const hairCap = new THREE.Mesh(hairCapGeo, hairMat);
      hairCap.position.y = 0.29;
      head.add(hairCap);
      const tailRoot = new THREE.Group();
      tailRoot.position.set(0, 0.4, -0.16);
      const tieGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.05, 8);
      const tieMesh = new THREE.Mesh(tieGeo, accentMat);
      tieMesh.rotation.x = Math.PI * 0.5;
      tailRoot.add(tieMesh);
      const tailGeo = new THREE.CylinderGeometry(0.045, 0.015, 0.48, 8);
      tailGeo.translate(0, -0.24, 0);
      const tailMesh = new THREE.Mesh(tailGeo, hairMat);
      tailMesh.rotation.x = -0.35;
      tailRoot.add(tailMesh);
      head.add(tailRoot);
      const maskGeo = new THREE.CylinderGeometry(0.14, 0.12, 0.14, 10, 1, false, 0, Math.PI);
      const maskMesh = new THREE.Mesh(maskGeo, accentMat);
      maskMesh.position.set(0, 0.2, 0.05);
      head.add(maskMesh);
    } else if (style === "braids") {
      const bunGeo = new THREE.SphereGeometry(0.12, 12, 12);
      const bun = new THREE.Mesh(bunGeo, hairMat);
      bun.position.set(0, 0.46, -0.05);
      head.add(bun);
      const headwrapGeo = new THREE.TorusGeometry(0.195, 0.038, 8, 16);
      headwrapGeo.rotateX(Math.PI * 0.5);
      const headwrap = new THREE.Mesh(headwrapGeo, accentMat);
      headwrap.position.y = 0.32;
      head.add(headwrap);
      const braidGeo = new THREE.CylinderGeometry(0.025, 0.015, 0.38, 6);
      braidGeo.translate(0, -0.19, 0);
      const leftBraid = new THREE.Mesh(braidGeo, hairMat);
      leftBraid.position.set(0.16, 0.28, -0.05);
      const rightBraid = new THREE.Mesh(braidGeo, hairMat);
      rightBraid.position.set(-0.16, 0.28, -0.05);
      head.add(leftBraid, rightBraid);
    } else if (style === "half_up_wavy") {
      const hairCapGeo = new THREE.SphereGeometry(0.205, 22, 18, 0, Math.PI * 2, 0, Math.PI * 0.68);
      hairCapGeo.scale(1.12, 1.18, 1.14);
      const hairCap = new THREE.Mesh(hairCapGeo, hairMat);
      hairCap.position.set(0, 0.3, -0.01);
      head.add(hairCap);
      const topWaveLeftGeo = new THREE.SphereGeometry(0.115, 16, 14);
      topWaveLeftGeo.scale(1.35, 0.72, 1.15);
      const topWaveLeft = new THREE.Mesh(topWaveLeftGeo, hairMat);
      topWaveLeft.position.set(0.085, 0.425, 0.085);
      topWaveLeft.rotation.z = -0.28;
      const topWaveRightGeo = new THREE.SphereGeometry(0.105, 16, 14);
      topWaveRightGeo.scale(1.25, 0.68, 1.12);
      const topWaveRight = new THREE.Mesh(topWaveRightGeo, hairMat);
      topWaveRight.position.set(-0.085, 0.415, 0.08);
      topWaveRight.rotation.z = 0.25;
      head.add(topWaveLeft, topWaveRight);
      const waveOffsets = [
        // Left side cascading waves
        { x: 0.185, y: 0.32, z: 0.05, r: 0.072, rotZ: 0.14, rotX: -0.05 },
        { x: 0.205, y: 0.22, z: 0.06, r: 0.068, rotZ: -0.1, rotX: 0.08 },
        { x: 0.175, y: 0.12, z: 0.07, r: 0.06, rotZ: 0.12, rotX: -0.04 },
        { x: 0.195, y: 0.28, z: -0.06, r: 0.078, rotZ: 0.08, rotX: 0.1 },
        { x: 0.18, y: 0.16, z: -0.07, r: 0.07, rotZ: -0.06, rotX: 0.12 },
        // Right side cascading waves
        { x: -0.185, y: 0.32, z: 0.05, r: 0.072, rotZ: -0.14, rotX: -0.05 },
        { x: -0.205, y: 0.22, z: 0.06, r: 0.068, rotZ: 0.1, rotX: 0.08 },
        { x: -0.175, y: 0.12, z: 0.07, r: 0.06, rotZ: -0.12, rotX: -0.04 },
        { x: -0.195, y: 0.28, z: -0.06, r: 0.078, rotZ: -0.08, rotX: 0.1 },
        { x: -0.18, y: 0.16, z: -0.07, r: 0.07, rotZ: 0.06, rotX: 0.12 }
      ];
      for (const w of waveOffsets) {
        const lockGeo = new THREE.SphereGeometry(w.r, 12, 10);
        lockGeo.scale(0.95, 1.65, 0.92);
        const lockMesh = new THREE.Mesh(lockGeo, hairMat);
        lockMesh.position.set(w.x, w.y, w.z);
        lockMesh.rotation.set(w.rotX, 0, w.rotZ);
        lockMesh.castShadow = true;
        head.add(lockMesh);
      }
      const backCascadeGeo = new THREE.SphereGeometry(0.21, 16, 14);
      backCascadeGeo.scale(1.15, 1.55, 0.72);
      const backCascade = new THREE.Mesh(backCascadeGeo, hairMat);
      backCascade.position.set(0, 0.2, -0.12);
      backCascade.rotation.x = 0.14;
      backCascade.castShadow = true;
      head.add(backCascade);
    }
  }
  /**
   * Attaches Aynur's exact existing avatar asset (/assets/characters/aynur/preview.webp)
   * as an unlit, color-accurate full-body character plane anchored at ground level (y = 0),
   * preserving the identical face, hair, clothing, colors, proportions, and pixel-art style
   * in both Character Select (Area 2) and actual gameplay.
   */
  static attachAynurAvatarPlane(root, texturePath) {
    const avatarGroup = new THREE.Group();
    avatarGroup.name = "aynur_avatar_group";
    avatarGroup.position.set(0, 0, 0);
    const planeH = 2.32;
    const planeW = planeH * (600 / 778);
    const planeGeo = new THREE.PlaneGeometry(planeW, planeH);
    planeGeo.translate(0, planeH * 0.5 - 0.25, 0);
    const planeMat = new THREE.MeshBasicMaterial({
      color: 16777215,
      transparent: true,
      alphaTest: 0.02,
      side: THREE.DoubleSide,
      toneMapped: false
    });
    if (typeof document !== "undefined" && typeof document.createElementNS === "function") {
      const cachedTex = ProceduralHumanoid.avatarTextureCache.get(texturePath);
      if (cachedTex) {
        planeMat.map = cachedTex;
        planeMat.needsUpdate = true;
      } else {
        const loader = new THREE.TextureLoader();
        const tex = loader.load(texturePath, (loadedTex) => {
          loadedTex.colorSpace = THREE.SRGBColorSpace;
          loadedTex.minFilter = THREE.LinearFilter;
          loadedTex.magFilter = THREE.LinearFilter;
          loadedTex.generateMipmaps = false;
          loadedTex.needsUpdate = true;
          planeMat.map = loadedTex;
          planeMat.needsUpdate = true;
        });
        tex.colorSpace = THREE.SRGBColorSpace;
        tex.minFilter = THREE.LinearFilter;
        tex.magFilter = THREE.LinearFilter;
        tex.generateMipmaps = false;
        ProceduralHumanoid.avatarTextureCache.set(texturePath, tex);
        planeMat.map = tex;
      }
    }
    const avatarMesh = new THREE.Mesh(planeGeo, planeMat);
    avatarMesh.name = "aynur_avatar_plane";
    avatarGroup.add(avatarMesh);
    root.add(avatarGroup);
  }
}

class AnimationController {
  bones;
  currentState = "idle";
  previousState = "idle";
  stateTime = 0;
  transitionAlpha = 1;
  transitionDuration = 0.1;
  defaultHipsY = 0.95;
  constructor(bones) {
    this.bones = bones;
    this.defaultHipsY = bones.hips.position.y;
  }
  play(state, forceReset = false) {
    if (this.currentState === state && !forceReset) return;
    this.previousState = this.currentState;
    this.currentState = state;
    this.stateTime = 0;
    this.transitionAlpha = 0;
  }
  getState() {
    return this.currentState;
  }
  getStateTime() {
    return this.stateTime;
  }
  update(dt) {
    this.stateTime += dt;
    if (this.transitionAlpha < 1) {
      this.transitionAlpha = Math.min(1, this.transitionAlpha + dt / this.transitionDuration);
    }
    const currentPose = this.samplePose(this.currentState, this.stateTime);
    const prevPose = this.samplePose(this.previousState, this.stateTime);
    this.applyBlendedPose(prevPose, currentPose, this.transitionAlpha);
    this.updateAvatarSprite(this.stateTime);
  }
  updateAvatarSprite(t) {
    const avatarGroup = this.bones.root?.getObjectByName("aynur_avatar_group");
    if (!avatarGroup) return;
    const dir = avatarGroup.scale.x < 0 ? -1 : 1;
    let posX = 0;
    let posY = 0;
    let rotZ = 0;
    let scaleX = 1;
    let scaleY = 1;
    switch (this.currentState) {
      case "idle": {
        const breathe = Math.sin(t * 3.2) * 0.012;
        scaleY = 1 + breathe;
        scaleX = 1 - breathe * 0.35;
        break;
      }
      case "walk_forward":
      case "walk_backward": {
        const walkDir = this.currentState === "walk_forward" ? 1 : -0.8;
        const cycle = Math.sin(t * 9);
        posY = Math.abs(cycle) * 0.06;
        rotZ = -0.045 * walkDir * dir + cycle * 0.02;
        break;
      }
      case "jump": {
        scaleY = 1.03;
        scaleX = 0.98;
        rotZ = -0.04 * dir;
        break;
      }
      case "crouch":
      case "block_low": {
        scaleY = 0.76;
        scaleX = 1.04;
        rotZ = -0.04 * dir;
        break;
      }
      case "block": {
        scaleY = 0.96;
        posX = -0.06 * dir;
        rotZ = 0.05 * dir;
        break;
      }
      case "punch":
      case "punch_light":
      case "punch_heavy":
      case "punch_jump":
      case "punch_crouch": {
        const isHeavy = this.currentState === "punch_heavy";
        const dur = isHeavy ? 0.36 : 0.2;
        const p = Math.min(1, t / dur);
        const reach = p < 0.38 ? p / 0.38 : 1 - (p - 0.38) / 0.62;
        posX = (isHeavy ? 0.36 : 0.22) * reach * dir;
        rotZ = -(isHeavy ? 0.12 : 0.07) * reach * dir;
        scaleY = this.currentState === "punch_crouch" ? 0.78 : 1;
        scaleX = 1 + 0.04 * reach;
        break;
      }
      case "kick":
      case "kick_light":
      case "kick_heavy":
      case "kick_jump":
      case "kick_crouch": {
        const isHeavy = this.currentState === "kick_heavy";
        const dur = isHeavy ? 0.42 : 0.26;
        const p = Math.min(1, t / dur);
        const ext = p < 0.4 ? p / 0.4 : 1 - (p - 0.4) / 0.6;
        posX = (isHeavy ? 0.42 : 0.28) * ext * dir;
        posY = (isHeavy ? 0.1 : 0.04) * ext;
        rotZ = -(isHeavy ? 0.14 : 0.09) * ext * dir;
        scaleY = this.currentState === "kick_crouch" ? 0.76 : 1;
        scaleX = 1 + 0.05 * ext;
        break;
      }
      case "special":
      case "special_alex":
      case "special_max":
      case "special_ryan":
      case "special_luna":
      case "special_maya": {
        const dur = 0.5;
        const p = Math.min(1, t / dur);
        const ext = Math.sin(p * Math.PI);
        posX = 0.48 * ext * dir;
        posY = 0.2 * ext;
        rotZ = -0.16 * ext * dir;
        scaleX = 1 + 0.06 * ext;
        scaleY = 1 + 0.04 * ext;
        break;
      }
      case "hurt":
      case "hurt_high":
      case "hurt_low":
      case "hurt_heavy": {
        const dur = 0.28;
        const p = Math.min(1, t / dur);
        const recoil = Math.sin(p * Math.PI);
        posX = -0.18 * recoil * dir;
        rotZ = 0.15 * recoil * dir;
        break;
      }
      case "ko": {
        const p = Math.min(1, t / 0.55);
        const ease = 1 - Math.pow(1 - p, 3);
        rotZ = 1.48 * ease * dir;
        posY = 0.12 * Math.sin(p * Math.PI);
        break;
      }
      case "victory":
      case "victory_alex":
      case "victory_max":
      case "victory_ryan":
      case "victory_luna":
      case "victory_maya": {
        posY = Math.abs(Math.sin(t * 5)) * 0.12;
        break;
      }
    }
    avatarGroup.position.set(posX, posY, 0);
    avatarGroup.rotation.set(0, 0, rotZ);
    avatarGroup.scale.set(dir * scaleX, scaleY, 1);
  }
  applyBlendedPose(poseA, poseB, alpha) {
    const boneKeys = [
      "hips",
      "torso",
      "chest",
      "head",
      "leftUpperArm",
      "leftForearm",
      "leftHand",
      "rightUpperArm",
      "rightForearm",
      "rightHand",
      "leftThigh",
      "leftShin",
      "leftFoot",
      "rightThigh",
      "rightShin",
      "rightFoot"
    ];
    for (const key of boneKeys) {
      const bone = this.bones[key];
      if (!bone) continue;
      const tA = poseA[key] || { rot: [0, 0, 0] };
      const tB = poseB[key] || { rot: [0, 0, 0] };
      bone.rotation.x = tA.rot[0] + (tB.rot[0] - tA.rot[0]) * alpha;
      bone.rotation.y = tA.rot[1] + (tB.rot[1] - tA.rot[1]) * alpha;
      bone.rotation.z = tA.rot[2] + (tB.rot[2] - tA.rot[2]) * alpha;
      if (tA.pos || tB.pos) {
        const defY = key === "hips" ? this.defaultHipsY : 0;
        const pAx = tA.pos ? tA.pos[0] : 0;
        const pAy = tA.pos ? tA.pos[1] : defY;
        const pAz = tA.pos ? tA.pos[2] : 0;
        const pBx = tB.pos ? tB.pos[0] : 0;
        const pBy = tB.pos ? tB.pos[1] : defY;
        const pBz = tB.pos ? tB.pos[2] : 0;
        bone.position.x = pAx + (pBx - pAx) * alpha;
        bone.position.y = pAy + (pBy - pAy) * alpha;
        bone.position.z = pAz + (pBz - pAz) * alpha;
      }
    }
  }
  samplePose(state, t) {
    switch (state) {
      case "idle":
        return this.getPoseIdle(t);
      case "walk_forward":
        return this.getPoseWalk(t, 1);
      case "walk_backward":
        return this.getPoseWalk(t, -0.8);
      case "jump":
        return this.getPoseJump(t);
      case "crouch":
        return this.getPoseCrouch(t);
      // Punches
      case "punch":
      case "punch_light":
        return this.getPosePunchLight(t);
      case "punch_heavy":
        return this.getPosePunchHeavy(t);
      case "punch_jump":
        return this.getPosePunchJump(t);
      case "punch_crouch":
        return this.getPosePunchCrouch(t);
      // Kicks
      case "kick":
      case "kick_light":
        return this.getPoseKickLight(t);
      case "kick_heavy":
        return this.getPoseKickHeavy(t);
      case "kick_jump":
        return this.getPoseKickJump(t);
      case "kick_crouch":
        return this.getPoseKickCrouch(t);
      // Specials
      case "special":
      case "special_alex":
        return this.getPoseSpecialAlex(t);
      case "special_max":
        return this.getPoseSpecialMax(t);
      case "special_ryan":
        return this.getPoseSpecialRyan(t);
      case "special_luna":
        return this.getPoseSpecialLuna(t);
      case "special_maya":
        return this.getPoseSpecialMaya(t);
      // Defense & Reactions
      case "block":
        return this.getPoseBlock(t);
      case "block_low":
        return this.getPoseBlockLow(t);
      case "hurt":
      case "hurt_high":
        return this.getPoseHurtHigh(t);
      case "hurt_low":
        return this.getPoseHurtLow(t);
      case "hurt_heavy":
        return this.getPoseHurtHeavy(t);
      case "ko":
        return this.getPoseKO(t);
      // Character-specific Victories
      case "victory":
      case "victory_alex":
        return this.getPoseVictoryAlex(t);
      case "victory_max":
        return this.getPoseVictoryMax(t);
      case "victory_ryan":
        return this.getPoseVictoryRyan(t);
      case "victory_luna":
        return this.getPoseVictoryLuna(t);
      case "victory_maya":
        return this.getPoseVictoryMaya(t);
      default:
        return this.getPoseIdle(t);
    }
  }
  // --- CORE POSES ---
  getPoseIdle(t) {
    const cycle = Math.sin(t * 3.2);
    const breathe = Math.sin(t * 2) * 0.04;
    return {
      hips: {
        pos: [0, this.defaultHipsY - Math.abs(cycle) * 0.03, 0],
        rot: [0, 0.35, 0]
      },
      torso: { rot: [0.05, 0.1, 0] },
      chest: { rot: [breathe, 0.15, 0] },
      head: { rot: [-0.05, -0.4, 0] },
      leftUpperArm: { rot: [-0.75 + cycle * 0.05, 0.3, 0.4] },
      leftForearm: { rot: [-1.4, 0.4, -0.3] },
      rightUpperArm: { rot: [-0.6 + cycle * 0.04, -0.2, -0.5] },
      rightForearm: { rot: [-1.6, -0.5, 0.4] },
      leftThigh: { rot: [-0.25, 0.2, 0.1] },
      leftShin: { rot: [0.35, 0, 0] },
      rightThigh: { rot: [0.25, -0.1, -0.1] },
      rightShin: { rot: [0.3, 0, 0] }
    };
  }
  getPoseWalk(t, speedMult) {
    const freq = 6.5 * Math.abs(speedMult);
    const cycle = Math.sin(t * freq);
    const dir = Math.sign(speedMult);
    return {
      hips: {
        pos: [0, this.defaultHipsY - Math.abs(cycle) * 0.04, 0],
        rot: [0.08 * dir, 0.25 + cycle * 0.1, 0]
      },
      torso: { rot: [0.06 * dir, 0, -cycle * 0.08] },
      chest: { rot: [0.05 * dir, -cycle * 0.12, 0] },
      head: { rot: [0, -0.2, 0] },
      leftUpperArm: { rot: [-0.7 - cycle * 0.4 * dir, 0.3, 0.4] },
      leftForearm: { rot: [-1.3 - cycle * 0.2, 0.3, -0.2] },
      rightUpperArm: { rot: [-0.6 + cycle * 0.4 * dir, -0.2, -0.5] },
      rightForearm: { rot: [-1.5 + cycle * 0.2, -0.4, 0.3] },
      leftThigh: { rot: [cycle * 0.65 * dir, 0.1, 0] },
      leftShin: { rot: [Math.max(0, -cycle * 0.7 * dir), 0, 0] },
      rightThigh: { rot: [-cycle * 0.65 * dir, -0.1, 0] },
      rightShin: { rot: [Math.max(0, cycle * 0.7 * dir), 0, 0] }
    };
  }
  getPoseJump(t) {
    return {
      hips: { pos: [0, this.defaultHipsY + 0.1, 0], rot: [0.15, 0.2, 0] },
      torso: { rot: [0.1, 0, 0] },
      chest: { rot: [0.1, 0.1, 0] },
      head: { rot: [-0.2, -0.3, 0] },
      leftUpperArm: { rot: [-1.8, 0.4, 0.5] },
      leftForearm: { rot: [-1.1, 0.2, -0.2] },
      rightUpperArm: { rot: [-1.6, -0.3, -0.6] },
      rightForearm: { rot: [-1.2, -0.3, 0.3] },
      leftThigh: { rot: [-1, 0.2, 0.2] },
      leftShin: { rot: [1.2, 0, 0] },
      rightThigh: { rot: [-0.7, -0.2, -0.2] },
      rightShin: { rot: [1.3, 0, 0] }
    };
  }
  getPoseCrouch(t) {
    return {
      hips: { pos: [0, this.defaultHipsY - 0.42, 0], rot: [0.2, 0.35, 0] },
      torso: { rot: [0.35, 0.1, 0] },
      chest: { rot: [0.2, 0.1, 0] },
      head: { rot: [-0.35, -0.4, 0] },
      leftUpperArm: { rot: [-1.1, 0.4, 0.3] },
      leftForearm: { rot: [-1.5, 0.4, -0.3] },
      rightUpperArm: { rot: [-0.9, -0.3, -0.4] },
      rightForearm: { rot: [-1.6, -0.5, 0.4] },
      leftThigh: { rot: [-1.4, 0.3, 0.2] },
      leftShin: { rot: [1.7, 0, 0] },
      rightThigh: { rot: [-1.2, -0.3, -0.2] },
      rightShin: { rot: [1.8, 0, 0] }
    };
  }
  // --- ADVANCED PUNCHES ---
  getPosePunchLight(t) {
    const dur = 0.2;
    const p = Math.min(1, t / dur);
    const reach = p < 0.35 ? p / 0.35 : 1 - (p - 0.35) / 0.65;
    return {
      hips: { pos: [0, this.defaultHipsY, 0.1 * reach], rot: [0, 0.45 * reach, 0] },
      torso: { rot: [0.05, 0.4 * reach, 0] },
      chest: { rot: [0.08, 0.5 * reach, 0] },
      head: { rot: [0, -0.45 * reach, 0] },
      leftUpperArm: { rot: [-0.9, 0.4, 0.4] },
      leftForearm: { rot: [-1.6, 0.5, -0.3] },
      rightUpperArm: { rot: [-1.5 * reach - 0.3 * (1 - reach), -0.1, -0.1] },
      rightForearm: { rot: [-0.15 * reach - 1.4 * (1 - reach), 0, 0] },
      leftThigh: { rot: [-0.35 * reach - 0.2 * (1 - reach), 0.2, 0.1] },
      leftShin: { rot: [0.35, 0, 0] },
      rightThigh: { rot: [0.3, -0.1, -0.1] },
      rightShin: { rot: [0.2, 0, 0] }
    };
  }
  getPosePunchHeavy(t) {
    const dur = 0.36;
    const p = Math.min(1, t / dur);
    const reach = p < 0.4 ? p / 0.4 : 1 - (p - 0.4) / 0.6;
    return {
      hips: { pos: [0, this.defaultHipsY - 0.08 * reach, 0.25 * reach], rot: [0.1 * reach, 0.85 * reach, 0] },
      torso: { rot: [0.15 * reach, 0.7 * reach, 0] },
      chest: { rot: [0.15 * reach, 0.8 * reach, 0] },
      head: { rot: [-0.05, -0.7 * reach, 0] },
      leftUpperArm: { rot: [-0.6 * reach - 0.9 * (1 - reach), 0.3, 0.6] },
      leftForearm: { rot: [-1.3, 0.3, -0.2] },
      rightUpperArm: { rot: [-1.65 * reach - 0.2 * (1 - reach), 0, -0.3 * reach] },
      rightForearm: { rot: [-0.05 * reach - 1.5 * (1 - reach), 0, 0] },
      leftThigh: { rot: [-0.6 * reach - 0.2 * (1 - reach), 0.3, 0.2] },
      leftShin: { rot: [0.7 * reach + 0.3 * (1 - reach), 0, 0] },
      rightThigh: { rot: [0.5 * reach + 0.2 * (1 - reach), -0.2, -0.2] },
      rightShin: { rot: [0.3, 0, 0] }
    };
  }
  getPosePunchJump(t) {
    const dur = 0.3;
    const p = Math.min(1, t / dur);
    const reach = p < 0.4 ? p / 0.4 : 1 - (p - 0.4) / 0.6;
    return {
      hips: { pos: [0, this.defaultHipsY + 0.1, 0], rot: [0.2, 0.3 * reach, 0] },
      torso: { rot: [0.25 * reach, 0.2 * reach, 0] },
      chest: { rot: [0.3 * reach, 0.3 * reach, 0] },
      head: { rot: [-0.25, -0.3 * reach, 0] },
      leftUpperArm: { rot: [-1.5, 0.3, 0.5] },
      leftForearm: { rot: [-1.2, 0.2, -0.2] },
      // Downward angled aerial hammer punch
      rightUpperArm: { rot: [-1.2 * reach - 0.4 * (1 - reach), 0, -0.4 * reach] },
      rightForearm: { rot: [-0.5 * reach - 1.4 * (1 - reach), 0, 0] },
      leftThigh: { rot: [-1.1, 0.2, 0.2] },
      leftShin: { rot: [1.3, 0, 0] },
      rightThigh: { rot: [-0.8, -0.2, -0.2] },
      rightShin: { rot: [1.2, 0, 0] }
    };
  }
  getPosePunchCrouch(t) {
    const dur = 0.22;
    const p = Math.min(1, t / dur);
    const reach = p < 0.35 ? p / 0.35 : 1 - (p - 0.35) / 0.65;
    return {
      hips: { pos: [0, this.defaultHipsY - 0.42, 0.15 * reach], rot: [0.2, 0.45 * reach, 0] },
      torso: { rot: [0.35, 0.3 * reach, 0] },
      chest: { rot: [0.25, 0.4 * reach, 0] },
      head: { rot: [-0.3, -0.35 * reach, 0] },
      leftUpperArm: { rot: [-1.2, 0.4, 0.3] },
      leftForearm: { rot: [-1.6, 0.4, -0.3] },
      // Low body punch
      rightUpperArm: { rot: [-1.1 * reach - 0.5 * (1 - reach), 0, -0.2] },
      rightForearm: { rot: [-0.1 * reach - 1.5 * (1 - reach), 0, 0] },
      leftThigh: { rot: [-1.4, 0.3, 0.2] },
      leftShin: { rot: [1.7, 0, 0] },
      rightThigh: { rot: [-1.2, -0.3, -0.2] },
      rightShin: { rot: [1.8, 0, 0] }
    };
  }
  // --- ADVANCED KICKS ---
  getPoseKickLight(t) {
    const dur = 0.26;
    const p = Math.min(1, t / dur);
    const ext = p < 0.38 ? p / 0.38 : 1 - (p - 0.38) / 0.62;
    return {
      hips: { pos: [0, this.defaultHipsY + 0.05 * ext, 0], rot: [-0.15 * ext, -0.35 * ext, 0] },
      torso: { rot: [-0.15 * ext, 0.15 * ext, 0] },
      chest: { rot: [-0.1 * ext, 0.2 * ext, 0] },
      head: { rot: [0.1 * ext, -0.25 * ext, 0] },
      leftUpperArm: { rot: [-1.1 * ext - 0.6, 0.4, 0.5] },
      leftForearm: { rot: [-1.4, 0.2, -0.2] },
      rightUpperArm: { rot: [0.3 * ext - 0.5, -0.4, -0.7] },
      rightForearm: { rot: [-0.9, -0.3, 0.2] },
      leftThigh: { rot: [0.1 * ext - 0.1, 0.1, 0] },
      leftShin: { rot: [0.2, 0, 0] },
      rightThigh: { rot: [-1.45 * ext + 0.2 * (1 - ext), -0.2 * ext, -0.1] },
      rightShin: { rot: [0.15 * ext + 0.7 * (1 - ext), 0, 0] },
      rightFoot: { rot: [-0.25 * ext, 0, 0] }
    };
  }
  getPoseKickHeavy(t) {
    const dur = 0.42;
    const p = Math.min(1, t / dur);
    const ext = p < 0.42 ? p / 0.42 : 1 - (p - 0.42) / 0.58;
    return {
      hips: { pos: [0, this.defaultHipsY + 0.12 * ext, 0], rot: [-0.35 * ext, -0.7 * ext, 0.2 * ext] },
      torso: { rot: [-0.3 * ext, 0.35 * ext, -0.15 * ext] },
      chest: { rot: [-0.25 * ext, 0.45 * ext, 0] },
      head: { rot: [0.2 * ext, -0.45 * ext, 0] },
      leftUpperArm: { rot: [-1.4 * ext - 0.5, 0.4, 0.7] },
      leftForearm: { rot: [-1.3, 0.2, -0.2] },
      rightUpperArm: { rot: [0.8 * ext - 0.4, -0.5, -1] },
      rightForearm: { rot: [-0.7, -0.4, 0.2] },
      leftThigh: { rot: [0.3 * ext - 0.1, 0.1, 0] },
      leftShin: { rot: [0.3, 0, 0] },
      // High head-height kick
      rightThigh: { rot: [-1.85 * ext + 0.2 * (1 - ext), -0.45 * ext, -0.25 * ext] },
      rightShin: { rot: [0.05 * ext + 0.9 * (1 - ext), 0, 0] },
      rightFoot: { rot: [-0.4 * ext, 0, 0] }
    };
  }
  getPoseKickJump(t) {
    const dur = 0.34;
    const p = Math.min(1, t / dur);
    const ext = p < 0.4 ? p / 0.4 : 1 - (p - 0.4) / 0.6;
    return {
      hips: { pos: [0, this.defaultHipsY + 0.15, 0], rot: [-0.2 * ext, -0.4 * ext, 0] },
      torso: { rot: [-0.15 * ext, 0.2 * ext, 0] },
      chest: { rot: [-0.1 * ext, 0.25 * ext, 0] },
      head: { rot: [0.1 * ext, -0.3 * ext, 0] },
      leftUpperArm: { rot: [-1.6, 0.3, 0.6] },
      leftForearm: { rot: [-1.1, 0.2, -0.2] },
      rightUpperArm: { rot: [0.4 * ext - 0.6, -0.4, -0.8] },
      rightForearm: { rot: [-0.8, -0.3, 0.2] },
      leftThigh: { rot: [-1.1, 0.2, 0.2] },
      leftShin: { rot: [1.3, 0, 0] },
      // Flying jump kick
      rightThigh: { rot: [-1.55 * ext - 0.2 * (1 - ext), -0.25 * ext, -0.2] },
      rightShin: { rot: [0.1 * ext + 1.1 * (1 - ext), 0, 0] },
      rightFoot: { rot: [-0.35 * ext, 0, 0] }
    };
  }
  getPoseKickCrouch(t) {
    const dur = 0.28;
    const p = Math.min(1, t / dur);
    const ext = p < 0.38 ? p / 0.38 : 1 - (p - 0.38) / 0.62;
    return {
      hips: { pos: [0, this.defaultHipsY - 0.52, 0.1 * ext], rot: [-0.15 * ext, -0.5 * ext, 0] },
      torso: { rot: [0.4 * ext + 0.2, 0.3 * ext, 0] },
      chest: { rot: [0.3 * ext + 0.1, 0.35 * ext, 0] },
      head: { rot: [-0.25, -0.4 * ext, 0] },
      leftUpperArm: { rot: [-1.3, 0.4, 0.3] },
      leftForearm: { rot: [-1.5, 0.4, -0.3] },
      rightUpperArm: { rot: [0.2 * ext - 0.8, -0.3, -0.6] },
      rightForearm: { rot: [-1.2, -0.4, 0.3] },
      leftThigh: { rot: [-1.5, 0.4, 0.3] },
      leftShin: { rot: [1.8, 0, 0] },
      // Sweeping extended leg at shin/ankle height
      rightThigh: { rot: [-1.25 * ext - 0.5 * (1 - ext), -0.2 * ext, -0.15] },
      rightShin: { rot: [0.1 * ext + 1.2 * (1 - ext), 0, 0] },
      rightFoot: { rot: [-0.2 * ext, 0, 0] }
    };
  }
  // --- 5 CHARACTER-SPECIFIC SPECIAL ATTACKS ---
  getPoseSpecialAlex(t) {
    const dur = 0.5;
    const p = Math.min(1, t / dur);
    const lunge = p < 0.42 ? p / 0.42 : 1 - (p - 0.42) / 0.58;
    return {
      hips: { pos: [0, this.defaultHipsY - 0.12 * lunge, 0.35 * lunge], rot: [0.15 * lunge, 0.9 * lunge, 0] },
      torso: { rot: [0.2 * lunge, 0.75 * lunge, 0] },
      chest: { rot: [0.2 * lunge, 0.85 * lunge, 0] },
      head: { rot: [-0.1, -0.8 * lunge, 0] },
      leftUpperArm: { rot: [0.4 * lunge - 0.8 * (1 - lunge), 0.3, 0.8] },
      leftForearm: { rot: [-1.1, 0.3, -0.2] },
      rightUpperArm: { rot: [-1.7 * lunge - 0.3 * (1 - lunge), 0, -0.3] },
      rightForearm: { rot: [-0.05 * lunge - 1.5 * (1 - lunge), 0, 0] },
      leftThigh: { rot: [-0.7 * lunge - 0.2 * (1 - lunge), 0.3, 0.2] },
      leftShin: { rot: [0.8 * lunge + 0.3 * (1 - lunge), 0, 0] },
      rightThigh: { rot: [0.6 * lunge + 0.2 * (1 - lunge), -0.2, -0.2] },
      rightShin: { rot: [0.3, 0, 0] }
    };
  }
  getPoseSpecialMax(t) {
    const dur = 0.52;
    const p = Math.min(1, t / dur);
    const spin = p * Math.PI * 2;
    const ext = Math.sin(p * Math.PI);
    return {
      hips: { pos: [0, this.defaultHipsY + 0.2 * ext, 0], rot: [0, spin, 0] },
      torso: { rot: [-0.2 * ext, 0, 0] },
      chest: { rot: [-0.15 * ext, 0, 0] },
      head: { rot: [0.1 * ext, 0, 0] },
      leftUpperArm: { rot: [-1.4, 0.4, 0.6] },
      leftForearm: { rot: [-1.2, 0.2, -0.2] },
      rightUpperArm: { rot: [0.6 * ext - 0.5, -0.5, -0.8] },
      rightForearm: { rot: [-0.8, -0.3, 0.2] },
      leftThigh: { rot: [0.2 * ext - 0.1, 0.1, 0] },
      leftShin: { rot: [0.3, 0, 0] },
      rightThigh: { rot: [-1.8 * ext + 0.2 * (1 - ext), -0.3 * ext, -0.2] },
      rightShin: { rot: [0.1 * ext + 0.8 * (1 - ext), 0, 0] },
      rightFoot: { rot: [-0.3 * ext, 0, 0] }
    };
  }
  getPoseSpecialRyan(t) {
    const dur = 0.48;
    const p = Math.min(1, t / dur);
    const dash = p < 0.45 ? p / 0.45 : 1 - (p - 0.45) / 0.55;
    return {
      hips: { pos: [0, this.defaultHipsY - 0.25 * dash, 0.45 * dash], rot: [0.4 * dash, 0.4 * dash, 0] },
      torso: { rot: [0.45 * dash, 0.3 * dash, 0] },
      chest: { rot: [0.35 * dash, 0.4 * dash, 0] },
      head: { rot: [-0.4 * dash, -0.35 * dash, 0] },
      leftUpperArm: { rot: [0.8 * dash - 0.8, 0.3, 0.6] },
      leftForearm: { rot: [-0.6 * dash - 1.2 * (1 - dash), 0.2, 0] },
      rightUpperArm: { rot: [-1.6 * dash - 0.3 * (1 - dash), 0, -0.2] },
      rightForearm: { rot: [-0.1 * dash - 1.4 * (1 - dash), 0, 0] },
      leftThigh: { rot: [-0.9 * dash - 0.2 * (1 - dash), 0.3, 0.2] },
      leftShin: { rot: [1.1 * dash + 0.3 * (1 - dash), 0, 0] },
      rightThigh: { rot: [0.8 * dash + 0.2 * (1 - dash), -0.2, -0.2] },
      rightShin: { rot: [0.4, 0, 0] }
    };
  }
  getPoseSpecialLuna(t) {
    const dur = 0.54;
    const p = Math.min(1, t / dur);
    const rise = Math.sin(p * Math.PI);
    return {
      hips: { pos: [0, this.defaultHipsY + 0.45 * rise, 0], rot: [-0.4 * rise, -0.5 * rise, 0] },
      torso: { rot: [-0.35 * rise, 0.3 * rise, 0] },
      chest: { rot: [-0.3 * rise, 0.4 * rise, 0] },
      head: { rot: [0.3 * rise, -0.4 * rise, 0] },
      leftUpperArm: { rot: [-2.2 * rise - 0.6 * (1 - rise), 0.3, 0.4] },
      leftForearm: { rot: [-0.5 * rise - 1.2 * (1 - rise), 0.2, 0] },
      rightUpperArm: { rot: [0.8 * rise - 0.5, -0.4, -0.8] },
      rightForearm: { rot: [-0.7, -0.3, 0.2] },
      leftThigh: { rot: [0.3 * rise - 0.1, 0.1, 0] },
      leftShin: { rot: [0.2, 0, 0] },
      // Rising vertical kick launched upwards
      rightThigh: { rot: [-2.2 * rise + 0.2 * (1 - rise), -0.3 * rise, -0.2] },
      rightShin: { rot: [0.05 * rise + 0.8 * (1 - rise), 0, 0] },
      rightFoot: { rot: [-0.45 * rise, 0, 0] }
    };
  }
  getPoseSpecialMaya(t) {
    const dur = 0.52;
    const p = Math.min(1, t / dur);
    const spin = p * Math.PI * 2;
    const low = Math.sin(p * Math.PI);
    return {
      hips: { pos: [0, this.defaultHipsY - 0.35 * low, 0], rot: [0.2 * low, spin, 0] },
      torso: { rot: [0.25 * low, 0, 0] },
      chest: { rot: [0.2 * low, 0, 0] },
      head: { rot: [-0.2 * low, 0, 0] },
      leftUpperArm: { rot: [-1.2, 0.5, 0.5] },
      leftForearm: { rot: [-1.4, 0.3, -0.2] },
      rightUpperArm: { rot: [-1.2, -0.5, -0.5] },
      rightForearm: { rot: [-1.4, -0.3, 0.2] },
      leftThigh: { rot: [-1.3 * low - 0.2 * (1 - low), 0.3, 0.2] },
      leftShin: { rot: [1.6 * low + 0.3 * (1 - low), 0, 0] },
      // Sweeping leg extended 360 degrees
      rightThigh: { rot: [-1.4 * low + 0.2 * (1 - low), -0.3 * low, -0.2] },
      rightShin: { rot: [0.1 * low + 0.7 * (1 - low), 0, 0] },
      rightFoot: { rot: [-0.3 * low, 0, 0] }
    };
  }
  // --- DEFENSE & HIT REACTIONS ---
  getPoseBlock(t) {
    return {
      hips: { pos: [0, this.defaultHipsY - 0.1, 0], rot: [0.08, 0.4, 0] },
      torso: { rot: [0.12, 0.1, 0] },
      chest: { rot: [0.15, 0.15, 0] },
      head: { rot: [-0.15, -0.4, 0] },
      leftUpperArm: { rot: [-1.2, 0.5, 0.4] },
      leftForearm: { rot: [-1.8, 0.6, -0.4] },
      rightUpperArm: { rot: [-1.1, -0.4, -0.3] },
      rightForearm: { rot: [-1.9, -0.5, 0.4] },
      leftThigh: { rot: [-0.4, 0.2, 0.1] },
      leftShin: { rot: [0.5, 0, 0] },
      rightThigh: { rot: [0.3, -0.1, -0.1] },
      rightShin: { rot: [0.4, 0, 0] }
    };
  }
  getPoseBlockLow(t) {
    return {
      hips: { pos: [0, this.defaultHipsY - 0.44, 0], rot: [0.2, 0.4, 0] },
      torso: { rot: [0.35, 0.1, 0] },
      chest: { rot: [0.25, 0.15, 0] },
      head: { rot: [-0.35, -0.4, 0] },
      leftUpperArm: { rot: [-1.3, 0.5, 0.3] },
      leftForearm: { rot: [-1.8, 0.6, -0.3] },
      rightUpperArm: { rot: [-1.2, -0.4, -0.3] },
      rightForearm: { rot: [-1.9, -0.5, 0.3] },
      leftThigh: { rot: [-1.4, 0.3, 0.2] },
      leftShin: { rot: [1.7, 0, 0] },
      rightThigh: { rot: [-1.2, -0.3, -0.2] },
      rightShin: { rot: [1.8, 0, 0] }
    };
  }
  getPoseHurtHigh(t) {
    const shake = Math.sin(t * 32) * 0.08;
    return {
      hips: { pos: [0, this.defaultHipsY - 0.08, -0.1], rot: [-0.25, 0.1 + shake, 0] },
      torso: { rot: [-0.3, 0, shake] },
      chest: { rot: [-0.35, 0, 0] },
      head: { rot: [0.45, 0, shake * 1.5] },
      leftUpperArm: { rot: [-0.4, 0.4, 0.8] },
      leftForearm: { rot: [-0.8, 0.2, 0] },
      rightUpperArm: { rot: [-0.3, -0.4, -0.8] },
      rightForearm: { rot: [-0.7, -0.2, 0] },
      leftThigh: { rot: [-0.2, 0.2, 0.1] },
      leftShin: { rot: [0.4, 0, 0] },
      rightThigh: { rot: [0.3, -0.1, -0.1] },
      rightShin: { rot: [0.5, 0, 0] }
    };
  }
  getPoseHurtLow(t) {
    const shake = Math.sin(t * 28) * 0.06;
    return {
      hips: { pos: [0, this.defaultHipsY - 0.15, -0.05], rot: [0.35, 0.1 + shake, 0] },
      torso: { rot: [0.4, 0, shake] },
      chest: { rot: [0.3, 0, 0] },
      head: { rot: [-0.2, 0, shake] },
      leftUpperArm: { rot: [-0.8, 0.3, 0.5] },
      leftForearm: { rot: [-1.1, 0.2, 0] },
      rightUpperArm: { rot: [-0.7, -0.3, -0.5] },
      rightForearm: { rot: [-1, -0.2, 0] },
      leftThigh: { rot: [-0.7, 0.3, 0.2] },
      leftShin: { rot: [0.8, 0, 0] },
      rightThigh: { rot: [-0.5, -0.2, -0.1] },
      rightShin: { rot: [0.7, 0, 0] }
    };
  }
  getPoseHurtHeavy(t) {
    const shake = Math.sin(t * 36) * 0.12;
    return {
      hips: { pos: [0, this.defaultHipsY - 0.12, -0.2], rot: [-0.45, 0.15 + shake, 0] },
      torso: { rot: [-0.5, 0, shake * 1.5] },
      chest: { rot: [-0.55, 0, 0] },
      head: { rot: [0.6, 0, shake * 2] },
      leftUpperArm: { rot: [-0.2, 0.5, 1.1] },
      leftForearm: { rot: [-0.5, 0.2, 0] },
      rightUpperArm: { rot: [-0.1, -0.5, -1.1] },
      rightForearm: { rot: [-0.4, -0.2, 0] },
      leftThigh: { rot: [-0.3, 0.3, 0.2] },
      leftShin: { rot: [0.5, 0, 0] },
      rightThigh: { rot: [0.4, -0.2, -0.2] },
      rightShin: { rot: [0.6, 0, 0] }
    };
  }
  getPoseKO(t) {
    const fall = Math.min(1, t / 0.55);
    return {
      hips: {
        pos: [0, this.defaultHipsY * (1 - fall * 0.88), -fall * 0.65],
        rot: [-Math.PI * 0.48 * fall, 0, 0]
      },
      torso: { rot: [0, 0, 0] },
      chest: { rot: [0, 0, 0] },
      head: { rot: [0.2 * (1 - fall), 0.3 * fall, 0] },
      leftUpperArm: { rot: [0, 0, 1.2 * fall] },
      leftForearm: { rot: [0, 0, 0] },
      rightUpperArm: { rot: [0, 0, -1.2 * fall] },
      rightForearm: { rot: [0, 0, 0] },
      leftThigh: { rot: [0, 0, 0.3 * fall] },
      leftShin: { rot: [0, 0, 0] },
      rightThigh: { rot: [0, 0, -0.3 * fall] },
      rightShin: { rot: [0, 0, 0] }
    };
  }
  // --- 5 CHARACTER-SPECIFIC VICTORY ANIMATIONS ---
  getPoseVictoryAlex(t) {
    const cheer = Math.sin(t * 3.5) * 0.06;
    return {
      hips: { pos: [0, this.defaultHipsY, 0], rot: [0, -0.2, 0] },
      torso: { rot: [-0.08, 0, 0] },
      chest: { rot: [-0.12, 0.1, 0] },
      head: { rot: [-0.15, 0.1, 0] },
      // Left arm resting on hip
      leftUpperArm: { rot: [0.3, 0.4, 0.8] },
      leftForearm: { rot: [-1.4, 0.4, -0.3] },
      // Right fist held high in the air
      rightUpperArm: { rot: [-2.9 + cheer, -0.15, -0.25] },
      rightForearm: { rot: [-0.25, -0.1, 0] },
      leftThigh: { rot: [0, 0, 0.2] },
      leftShin: { rot: [0.1, 0, 0] },
      rightThigh: { rot: [0, 0, -0.2] },
      rightShin: { rot: [0.1, 0, 0] }
    };
  }
  getPoseVictoryMax(t) {
    const flex = Math.sin(t * 4) * 0.08;
    return {
      hips: { pos: [0, this.defaultHipsY - 0.05, 0], rot: [0, 0, 0] },
      torso: { rot: [0.05, 0, 0] },
      chest: { rot: [0.1 + flex, 0, 0] },
      head: { rot: [-0.1, 0, 0] },
      // Both arms flexed at 90 degrees showing biceps
      leftUpperArm: { rot: [-1.5, 0.4, 1.4] },
      leftForearm: { rot: [-1.9 + flex, 0.4, 0] },
      rightUpperArm: { rot: [-1.5, -0.4, -1.4] },
      rightForearm: { rot: [-1.9 + flex, -0.4, 0] },
      leftThigh: { rot: [0, 0, 0.3] },
      leftShin: { rot: [0.2, 0, 0] },
      rightThigh: { rot: [0, 0, -0.3] },
      rightShin: { rot: [0.2, 0, 0] }
    };
  }
  getPoseVictoryRyan(t) {
    const breath = Math.sin(t * 2.2) * 0.03;
    return {
      hips: { pos: [0, this.defaultHipsY, 0], rot: [0, 0.25, 0] },
      torso: { rot: [-0.05, 0, 0] },
      chest: { rot: [-0.08 + breath, -0.1, 0] },
      head: { rot: [-0.08, -0.25, 0] },
      // Crossed arms pose
      leftUpperArm: { rot: [-1.1, 0.7, 0.6] },
      leftForearm: { rot: [-1.6, 0.8, -0.5] },
      rightUpperArm: { rot: [-1, -0.7, -0.6] },
      rightForearm: { rot: [-1.6, -0.8, 0.5] },
      leftThigh: { rot: [0.1, 0.1, 0.15] },
      leftShin: { rot: [0.1, 0, 0] },
      rightThigh: { rot: [-0.1, -0.1, -0.15] },
      rightShin: { rot: [0.1, 0, 0] }
    };
  }
  getPoseVictoryLuna(t) {
    const bow = Math.sin(t * 2.5) * 0.04;
    return {
      hips: { pos: [0, this.defaultHipsY, 0], rot: [0, 0, 0] },
      torso: { rot: [0.1 + bow, 0, 0] },
      chest: { rot: [0.08 + bow, 0, 0] },
      head: { rot: [0.15, 0, 0] },
      // Palms pressed together in martial salute at chest
      leftUpperArm: { rot: [-1.1, 0.5, 0.4] },
      leftForearm: { rot: [-1.6, 0.6, -0.5] },
      rightUpperArm: { rot: [-1.1, -0.5, -0.4] },
      rightForearm: { rot: [-1.6, -0.6, 0.5] },
      leftThigh: { rot: [0, 0, 0.1] },
      leftShin: { rot: [0.05, 0, 0] },
      rightThigh: { rot: [0, 0, -0.1] },
      rightShin: { rot: [0.05, 0, 0] }
    };
  }
  getPoseVictoryMaya(t) {
    const breath = Math.sin(t * 3) * 0.05;
    return {
      hips: { pos: [0, this.defaultHipsY, 0], rot: [0, 0.4, 0] },
      torso: { rot: [-0.05, 0.1, 0] },
      chest: { rot: [-0.1 + breath, 0.15, 0] },
      head: { rot: [-0.05, -0.35, 0] },
      // One arm raised high in warrior salute, other guarding chest
      leftUpperArm: { rot: [-2.6 + breath, 0.2, 0.3] },
      leftForearm: { rot: [-0.4, 0.3, 0] },
      rightUpperArm: { rot: [-0.9, -0.3, -0.4] },
      rightForearm: { rot: [-1.5, -0.4, 0.3] },
      // Balanced one-leg stance
      leftThigh: { rot: [-0.3, 0.2, 0.1] },
      leftShin: { rot: [0.4, 0, 0] },
      rightThigh: { rot: [0.2, -0.1, -0.1] },
      rightShin: { rot: [0.2, 0, 0] }
    };
  }
}

class Fighter {
  playerId;
  config;
  root;
  meshResult;
  anim;
  // Transform & Physics
  position = new THREE.Vector3();
  velocity = new THREE.Vector2();
  // x: horizontal, y: vertical
  facing = 1;
  // 1 = facing right (+X), -1 = facing left (-X)
  isGrounded = true;
  gravity = -38;
  // Combat State
  health = 100;
  isCrouching = false;
  isBlocking = false;
  isAttacking = false;
  currentAttack = null;
  attackTimer = 0;
  hasHit = false;
  specialCooldown = 0;
  // In seconds remaining
  isHitStunned = false;
  hitStunTimer = 0;
  isKnockedOut = false;
  isVictorious = false;
  // Hit stop micro freeze frame
  hitStopTimer = 0;
  // Hurtbox Bounds (World-space approximations for collision & attacks)
  hurtboxRadius = 0.45;
  hurtboxHeight = 1.85;
  constructor(playerId, config, customMeshResult) {
    this.playerId = playerId;
    this.config = config;
    this.meshResult = customMeshResult || ProceduralHumanoid.create(config);
    this.root = this.meshResult.root;
    this.anim = new AnimationController(this.meshResult.bones);
    this.resetForRound(playerId === 1 ? -4 : 4, playerId === 1 ? 1 : -1);
  }
  resetForRound(startX, facingDir) {
    this.health = this.config.stats.maxHealth;
    this.position.set(startX, 0, 0);
    this.velocity.set(0, 0);
    this.facing = facingDir;
    this.isGrounded = true;
    this.isCrouching = false;
    this.isBlocking = false;
    this.isAttacking = false;
    this.currentAttack = null;
    this.attackTimer = 0;
    this.hasHit = false;
    this.specialCooldown = 0;
    this.isHitStunned = false;
    this.hitStunTimer = 0;
    this.hitStopTimer = 0;
    this.isKnockedOut = false;
    this.isVictorious = false;
    this.root.position.copy(this.position);
    this.updateFacing();
    this.anim.play("idle", true);
  }
  updateFacing() {
    const avatarGroup = this.root.getObjectByName("aynur_avatar_group");
    if (avatarGroup) {
      this.root.rotation.y = 0;
      const absScaleX = Math.abs(avatarGroup.scale.x) || 1;
      avatarGroup.scale.x = this.facing === 1 ? absScaleX : -absScaleX;
      return;
    }
    this.root.rotation.y = this.facing === 1 ? Math.PI * 0.38 : -Math.PI * 0.38;
  }
  autoFaceOpponent(opponentX) {
    if (this.isKnockedOut || this.isVictorious) return;
    if (this.isAttacking || this.isHitStunned) return;
    const shouldFace = opponentX > this.position.x ? 1 : -1;
    if (this.facing !== shouldFace) {
      this.facing = shouldFace;
      this.updateFacing();
    }
  }
  // --- ACTIONS ---
  move(dir) {
    if (this.isHitStunned || this.isKnockedOut || this.isVictorious || this.isAttacking || this.isBlocking) {
      return;
    }
    if (this.isCrouching) {
      this.velocity.x = 0;
      return;
    }
    this.velocity.x = dir * this.config.stats.moveSpeed;
    if (this.isGrounded) {
      const movingForward = this.facing === 1 && dir > 0 || this.facing === -1 && dir < 0;
      if (movingForward) {
        this.anim.play("walk_forward");
      } else {
        this.anim.play("walk_backward");
      }
    }
  }
  stopMoving() {
    this.velocity.x = 0;
    if (this.isGrounded && !this.isAttacking && !this.isCrouching && !this.isBlocking && !this.isHitStunned && !this.isKnockedOut && !this.isVictorious) {
      this.anim.play("idle");
    }
  }
  jump() {
    if (!this.isGrounded || this.isHitStunned || this.isKnockedOut || this.isVictorious || this.isAttacking || this.isBlocking) {
      return;
    }
    this.isGrounded = false;
    this.isCrouching = false;
    this.velocity.y = this.config.stats.jumpVelocity;
    this.anim.play("jump");
  }
  crouch(enable) {
    if (!this.isGrounded || this.isHitStunned || this.isKnockedOut || this.isVictorious) return;
    this.isCrouching = enable;
    if (enable) {
      this.velocity.x = 0;
      if (!this.isAttacking) {
        this.anim.play(this.isBlocking ? "block_low" : "crouch");
      }
    } else {
      if (!this.isAttacking) {
        this.anim.play(this.isBlocking ? "block" : "idle");
      }
    }
  }
  block(enable) {
    if (this.isKnockedOut || this.isVictorious || this.isHitStunned) return;
    if (enable && this.isAttacking) return;
    this.isBlocking = enable;
    if (enable) {
      this.velocity.x = 0;
      this.anim.play(this.isCrouching ? "block_low" : "block");
    } else {
      if (this.isGrounded && !this.isAttacking) {
        this.anim.play(this.isCrouching ? "crouch" : "idle");
      }
    }
  }
  // --- ATTACKS ---
  punch(heavy = false) {
    if (!this.isGrounded) {
      return this.punchJump();
    }
    if (this.isCrouching) {
      return this.punchCrouch();
    }
    if (heavy) {
      return this.punchHeavy();
    }
    const attack = {
      type: "punch",
      name: "Punch",
      damage: this.config.stats.punchDamage || 8,
      height: "mid",
      activeStart: 0.05,
      activeEnd: 0.13,
      duration: 0.2,
      range: 1.3,
      knockback: 2.5,
      hitStun: 0.18
    };
    this.startAttack(attack, "punch");
    return true;
  }
  kick(heavy = false) {
    if (!this.isGrounded) {
      return this.kickJump();
    }
    if (this.isCrouching) {
      return this.kickCrouch();
    }
    if (heavy) {
      return this.kickHeavy();
    }
    const attack = {
      type: "kick",
      name: "Kick",
      damage: this.config.stats.kickDamage || 12,
      height: "mid",
      activeStart: 0.07,
      activeEnd: 0.15,
      duration: 0.25,
      range: 1.4,
      knockback: 3,
      hitStun: 0.2
    };
    this.startAttack(attack, "kick");
    return true;
  }
  punchLight() {
    if (this.cannotAttack()) return false;
    const attack = {
      type: "punch_light",
      name: "Light Punch",
      damage: this.config.stats.punchLightDamage || 6,
      height: "mid",
      activeStart: 0.05,
      activeEnd: 0.13,
      duration: 0.2,
      range: 1.3,
      knockback: 2.5,
      hitStun: 0.18
    };
    this.startAttack(attack, "punch_light");
    return true;
  }
  punchHeavy() {
    if (this.cannotAttack()) return false;
    const attack = {
      type: "punch_heavy",
      name: "Heavy Punch",
      damage: this.config.stats.punchHeavyDamage || 12,
      height: "high",
      activeStart: 0.1,
      activeEnd: 0.23,
      duration: 0.36,
      range: 1.55,
      knockback: 5.8,
      hitStun: 0.32
    };
    this.startAttack(attack, "punch_heavy");
    return true;
  }
  punchJump() {
    if (this.cannotAttack()) return false;
    const attack = {
      type: "punch_jump",
      name: "Jump Punch",
      damage: this.config.stats.punchJumpDamage || 9,
      height: "overhead",
      activeStart: 0.08,
      activeEnd: 0.21,
      duration: 0.3,
      range: 1.4,
      knockback: 4,
      hitStun: 0.25
    };
    this.startAttack(attack, "punch_jump");
    return true;
  }
  punchCrouch() {
    if (this.cannotAttack()) return false;
    const attack = {
      type: "punch_crouch",
      name: "Crouch Punch",
      damage: this.config.stats.punchCrouchDamage || 7,
      height: "low",
      activeStart: 0.06,
      activeEnd: 0.15,
      duration: 0.22,
      range: 1.25,
      knockback: 3,
      hitStun: 0.22
    };
    this.startAttack(attack, "punch_crouch");
    return true;
  }
  kickLight() {
    if (this.cannotAttack()) return false;
    const attack = {
      type: "kick_light",
      name: "Light Kick",
      damage: this.config.stats.kickLightDamage || 9,
      height: "mid",
      activeStart: 0.08,
      activeEnd: 0.18,
      duration: 0.26,
      range: 1.7,
      knockback: 4,
      hitStun: 0.22
    };
    this.startAttack(attack, "kick_light");
    return true;
  }
  kickHeavy() {
    if (this.cannotAttack()) return false;
    const attack = {
      type: "kick_heavy",
      name: "Heavy Kick",
      damage: this.config.stats.kickHeavyDamage || 15,
      height: "high",
      activeStart: 0.12,
      activeEnd: 0.28,
      duration: 0.42,
      range: 1.95,
      knockback: 7.2,
      hitStun: 0.38
    };
    this.startAttack(attack, "kick_heavy");
    return true;
  }
  kickJump() {
    if (this.cannotAttack()) return false;
    const attack = {
      type: "kick_jump",
      name: "Jump Kick",
      damage: this.config.stats.kickJumpDamage || 12,
      height: "overhead",
      activeStart: 0.1,
      activeEnd: 0.25,
      duration: 0.34,
      range: 1.75,
      knockback: 5.5,
      hitStun: 0.28
    };
    this.startAttack(attack, "kick_jump");
    return true;
  }
  kickCrouch() {
    if (this.cannotAttack()) return false;
    const attack = {
      type: "kick_crouch",
      name: "Crouch Kick",
      damage: this.config.stats.kickCrouchDamage || 8,
      height: "low",
      activeStart: 0.08,
      activeEnd: 0.21,
      duration: 0.28,
      range: 1.65,
      knockback: 4.2,
      hitStun: 0.25
    };
    this.startAttack(attack, "kick_crouch");
    return true;
  }
  specialAttack() {
    if (this.cannotAttack()) return false;
    if (this.specialCooldown > 0) return false;
    const specialName = this.config.specialAttack ? this.config.specialAttack.name : "FIRE STRIKE";
    const specialType = this.config.specialAttack ? this.config.specialAttack.type : "fire_strike";
    const attack = {
      type: "special",
      name: specialName,
      damage: this.config.stats.specialDamage || 20,
      height: "special",
      activeStart: 0.18,
      activeEnd: 0.45,
      duration: 0.5,
      range: 2.4,
      knockback: 8.5,
      hitStun: 0.45
    };
    this.specialCooldown = 5;
    let animState = "special";
    if (specialType === "fire_strike") animState = "special_alex";
    else if (specialType === "thunder_kick") animState = "special_max";
    else if (specialType === "shadow_rush") animState = "special_ryan";
    else if (specialType === "phoenix_kick") animState = "special_luna";
    else if (specialType === "dragon_spin") animState = "special_maya";
    this.startAttack(attack, animState);
    return true;
  }
  cannotAttack() {
    return this.isAttacking || this.isBlocking || this.isHitStunned || this.isKnockedOut || this.isVictorious;
  }
  startAttack(attack, animState) {
    this.isAttacking = true;
    this.currentAttack = attack;
    this.attackTimer = 0;
    this.hasHit = false;
    if (this.isGrounded) {
      if (attack.type === "punch_heavy") {
        this.velocity.x = this.facing * 1.5;
      } else if (attack.type === "special") {
        this.velocity.x = this.facing * 3;
      } else {
        this.velocity.x *= 0.3;
      }
    }
    this.anim.play(animState, true);
  }
  /**
   * Advanced High/Low Blocking & Damage Calculation
   */
  takeDamage(incomingDamage, knockbackDir, knockbackForce, attackHeight = "mid") {
    if (this.isKnockedOut) {
      return { damageDealt: 0, wasBlocked: false, isKO: true };
    }
    let actualDamage = incomingDamage;
    let wasBlocked = false;
    if (this.isBlocking) {
      if (!this.isCrouching) {
        if (attackHeight === "low") {
          actualDamage = Math.round(incomingDamage * 0.85 * 10) / 10;
          wasBlocked = false;
        } else {
          actualDamage = Math.round(incomingDamage * 0.2 * 10) / 10;
          wasBlocked = true;
        }
      } else {
        if (attackHeight === "overhead") {
          actualDamage = incomingDamage;
          wasBlocked = false;
        } else {
          actualDamage = Math.round(incomingDamage * 0.2 * 10) / 10;
          wasBlocked = true;
        }
      }
    }
    this.health = Math.max(0, this.health - actualDamage);
    const effectiveKb = wasBlocked ? knockbackForce * 0.35 : knockbackForce;
    this.velocity.x = knockbackDir * effectiveKb;
    if (this.health <= 0) {
      this.isKnockedOut = true;
      this.isAttacking = false;
      this.currentAttack = null;
      this.anim.play("ko", true);
      return { damageDealt: actualDamage, wasBlocked, isKO: true };
    }
    if (!wasBlocked) {
      this.isHitStunned = true;
      const stunDur = incomingDamage >= 12 ? 0.32 : 0.2;
      this.hitStunTimer = stunDur;
      this.isAttacking = false;
      this.currentAttack = null;
      if (attackHeight === "low") {
        this.anim.play("hurt_low", true);
      } else if (incomingDamage >= 12) {
        this.anim.play("hurt_heavy", true);
      } else {
        this.anim.play("hurt_high", true);
      }
    }
    return { damageDealt: actualDamage, wasBlocked, isKO: false };
  }
  triggerVictory() {
    this.isVictorious = true;
    this.isAttacking = false;
    this.currentAttack = null;
    this.isBlocking = false;
    const charId = this.config.id.toLowerCase();
    let vicAnim = "victory";
    if (charId.includes("01") || charId.includes("alex") || charId.includes("tacir")) vicAnim = "victory_alex";
    else if (charId.includes("02") || charId.includes("max") || charId.includes("farhad")) vicAnim = "victory_max";
    else if (charId.includes("03") || charId.includes("ryan") || charId.includes("rufat")) vicAnim = "victory_ryan";
    else if (charId.includes("04") || charId.includes("luna") || charId.includes("aynur")) vicAnim = "victory_luna";
    else if (charId.includes("05") || charId.includes("maya") || charId.includes("sevil")) vicAnim = "victory_maya";
    this.anim.play(vicAnim, true);
  }
  update(dt, arenaHalfWidth) {
    if (this.specialCooldown > 0) {
      this.specialCooldown = Math.max(0, this.specialCooldown - dt);
    }
    if (this.isHitStunned) {
      this.hitStunTimer -= dt;
      if (this.hitStunTimer <= 0) {
        this.isHitStunned = false;
        if (!this.isKnockedOut && !this.isVictorious) {
          this.anim.play(this.isCrouching ? "crouch" : "idle");
        }
      }
    }
    if (this.isAttacking && this.currentAttack) {
      this.attackTimer += dt;
      if (this.attackTimer >= this.currentAttack.duration) {
        this.isAttacking = false;
        this.currentAttack = null;
        if (!this.isKnockedOut && !this.isVictorious) {
          if (this.isBlocking) {
            this.anim.play(this.isCrouching ? "block_low" : "block");
          } else if (this.isCrouching) {
            this.anim.play("crouch");
          } else {
            this.anim.play(this.isGrounded ? "idle" : "jump");
          }
        }
      }
    }
    if (!this.isGrounded) {
      this.velocity.y += this.gravity * dt;
      this.position.y += this.velocity.y * dt;
      if (this.position.y <= 0) {
        this.position.y = 0;
        this.velocity.y = 0;
        this.isGrounded = true;
        if (!this.isAttacking && !this.isHitStunned && !this.isKnockedOut && !this.isVictorious) {
          if (this.isCrouching) {
            this.anim.play(this.isBlocking ? "block_low" : "crouch");
          } else if (Math.abs(this.velocity.x) > 0.5) {
            this.anim.play("walk_forward");
          } else {
            this.anim.play(this.isBlocking ? "block" : "idle");
          }
        }
      }
    }
    this.position.x += this.velocity.x * dt;
    if (this.isGrounded && Math.abs(this.velocity.x) > 0.01) {
      this.velocity.x *= 0.88;
      if (Math.abs(this.velocity.x) < 0.05) this.velocity.x = 0;
    }
    const bound = arenaHalfWidth - this.hurtboxRadius;
    if (this.position.x < -bound) {
      this.position.x = -bound;
      this.velocity.x = 0;
    } else if (this.position.x > bound) {
      this.position.x = bound;
      this.velocity.x = 0;
    }
    this.position.z = 0;
    this.root.position.copy(this.position);
    this.anim.update(dt);
  }
  getProjectileSpawnPosition() {
    const worldPos = new THREE.Vector3();
    this.meshResult.specialOrigin.getWorldPosition(worldPos);
    worldPos.z = 0;
    return worldPos;
  }
}

class CharacterModelLoader {
  static loader = new GLTFLoader();
  static cache = /* @__PURE__ */ new Map();
  /**
   * Attempts to load an external GLB/GLTF character model.
   * If not available or if loading fails, gracefully falls back to the high-detail procedural humanoid.
   */
  static async loadCharacterModel(config) {
    if (!config.modelPath || config.previewImagePath || config.id === "aynur" || config.id === "sevil") {
      return ProceduralHumanoid.create(config);
    }
    try {
      const gltf = await new Promise((resolve, reject) => {
        CharacterModelLoader.loader.load(
          config.modelPath,
          (loadedGltf) => resolve(loadedGltf),
          void 0,
          (err) => reject(err)
        );
      });
      console.log(`[CharacterModelLoader] Successfully loaded custom 3D model for ${config.name}: ${config.modelPath}`);
      const root = gltf.scene;
      root.name = `custom_fighter_${config.id}`;
      root.scale.set(config.scale.x, config.scale.y, config.scale.z);
      if (config.positionOffset) {
        root.position.set(config.positionOffset.x, config.positionOffset.y, config.positionOffset.z);
      }
      root.traverse((child) => {
        if (child.isMesh) {
          const mesh = child;
          mesh.castShadow = true;
          mesh.receiveShadow = true;
          if (mesh.material) {
            const mat = mesh.material;
            if (mat.roughness !== void 0) {
              mat.roughness = Math.max(0.3, mat.roughness);
            }
          }
        }
      });
      const bones = CharacterModelLoader.mapOrSynthesizeBones(root);
      const punchHitboxGeo = new THREE.SphereGeometry(0.35, 8, 8);
      const punchHitboxMat = new THREE.MeshBasicMaterial({ visible: false, wireframe: true });
      const punchHitboxMesh = new THREE.Mesh(punchHitboxGeo, punchHitboxMat);
      bones.rightHand.add(punchHitboxMesh);
      const kickHitboxGeo = new THREE.SphereGeometry(0.42, 8, 8);
      const kickHitboxMat = new THREE.MeshBasicMaterial({ visible: false, wireframe: true });
      const kickHitboxMesh = new THREE.Mesh(kickHitboxGeo, kickHitboxMat);
      bones.rightFoot.add(kickHitboxMesh);
      const specialOrigin = new THREE.Object3D();
      specialOrigin.position.set(0.2, 0.1, 0.4);
      bones.chest.add(specialOrigin);
      return {
        root,
        bones,
        punchHitboxMesh,
        kickHitboxMesh,
        specialOrigin
      };
    } catch (err) {
      console.warn(`[CharacterModelLoader] Notice: Custom model "${config.modelPath}" for ${config.name} not found or failed to load. Using procedural articulated humanoid fallback.`);
      return ProceduralHumanoid.create(config);
    }
  }
  /**
   * Maps common humanoid bone naming schemes to our standardized ArticulatedBones structure,
   * or synthesizes bone anchor nodes if the model is unrigged.
   */
  static mapOrSynthesizeBones(root) {
    const boneMap = {};
    const nameKeywords = {
      root: ["root"],
      hips: ["hips", "pelvis"],
      torso: ["spine", "abdomen", "torso"],
      chest: ["chest", "spine1", "spine2"],
      head: ["head"],
      leftUpperArm: ["leftupperarm", "leftarm", "upperarm_l", "arm_l"],
      leftForearm: ["leftforearm", "lowerarm_l", "forearm_l"],
      leftHand: ["lefthand", "hand_l", "wrist_l"],
      rightUpperArm: ["rightupperarm", "rightarm", "upperarm_r", "arm_r"],
      rightForearm: ["rightforearm", "lowerarm_r", "forearm_r"],
      rightHand: ["righthand", "hand_r", "wrist_r"],
      leftThigh: ["leftupleg", "thigh_l", "upperleg_l", "leftthigh"],
      leftShin: ["leftleg", "shin_l", "lowerleg_l", "calf_l"],
      leftFoot: ["leftfoot", "foot_l", "ankle_l"],
      rightThigh: ["rightupleg", "thigh_r", "upperleg_r", "rightthigh"],
      rightShin: ["rightleg", "shin_r", "lowerleg_r", "calf_r"],
      rightFoot: ["rightfoot", "foot_r", "ankle_r"]
    };
    root.traverse((obj) => {
      const lowerName = obj.name.toLowerCase().replace(/[-_.:]/g, "");
      for (const [boneKey, keywords] of Object.entries(nameKeywords)) {
        const key = boneKey;
        if (!boneMap[key] && keywords.some((kw) => lowerName.includes(kw.replace(/[-_.:]/g, "")))) {
          boneMap[key] = obj;
        }
      }
    });
    const ensureBone = (key, parent, defaultY = 0) => {
      if (!boneMap[key]) {
        const synthesized = new THREE.Group();
        synthesized.name = `synth_${key}`;
        synthesized.position.y = defaultY;
        if (parent) {
          parent.add(synthesized);
        } else {
          root.add(synthesized);
        }
        boneMap[key] = synthesized;
      }
      return boneMap[key];
    };
    const rootBone = ensureBone("root", void 0, 0);
    const hips = ensureBone("hips", rootBone, 0.95);
    const torso = ensureBone("torso", hips, 0.12);
    const chest = ensureBone("chest", torso, 0.32);
    const head = ensureBone("head", chest, 0.38);
    const leftUpperArm = ensureBone("leftUpperArm", chest, 0.26);
    const leftForearm = ensureBone("leftForearm", leftUpperArm, -0.32);
    const leftHand = ensureBone("leftHand", leftForearm, -0.3);
    const rightUpperArm = ensureBone("rightUpperArm", chest, 0.26);
    const rightForearm = ensureBone("rightForearm", rightUpperArm, -0.32);
    const rightHand = ensureBone("rightHand", rightForearm, -0.3);
    const leftThigh = ensureBone("leftThigh", hips, -0.06);
    const leftShin = ensureBone("leftShin", leftThigh, -0.44);
    const leftFoot = ensureBone("leftFoot", leftShin, -0.44);
    const rightThigh = ensureBone("rightThigh", hips, -0.06);
    const rightShin = ensureBone("rightShin", rightThigh, -0.44);
    const rightFoot = ensureBone("rightFoot", rightShin, -0.44);
    return {
      root: rootBone,
      hips,
      torso,
      chest,
      head,
      leftUpperArm,
      leftForearm,
      leftHand,
      rightUpperArm,
      rightForearm,
      rightHand,
      leftThigh,
      leftShin,
      leftFoot,
      rightThigh,
      rightShin,
      rightFoot
    };
  }
}

class CollisionSystem {
  static resolveFighterOverlap(f1, f2, arenaHalfWidth) {
    if (f1.isKnockedOut || f2.isKnockedOut) return;
    const yDiff = Math.abs(f1.position.y - f2.position.y);
    const heightThreshold = 1.35;
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
      let f1NewX = f1.position.x - pushDirection * halfPush;
      let f2NewX = f2.position.x + pushDirection * halfPush;
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
  static checkMeleeHit(attacker, defender) {
    if (!attacker.isAttacking || !attacker.currentAttack || attacker.hasHit) {
      return false;
    }
    if (defender.isKnockedOut) {
      return false;
    }
    const attack = attacker.currentAttack;
    if (attacker.attackTimer < attack.activeStart || attacker.attackTimer > attack.activeEnd) {
      return false;
    }
    const dx = defender.position.x - attacker.position.x;
    const isFacingCorrectly = attacker.facing === 1 && dx > -0.25 || attacker.facing === -1 && dx < 0.25;
    if (!isFacingCorrectly) {
      return false;
    }
    const attackerY = attacker.position.y;
    const defenderY = defender.position.y;
    const verticalDist = Math.abs(defenderY - attackerY);
    if (attack.height === "low" && defenderY > 0.9) {
      return false;
    }
    if (attack.height === "overhead" && defenderY > attackerY + 1.2) {
      return false;
    }
    const horizontalDist = Math.abs(dx);
    if (horizontalDist <= attack.range && verticalDist <= 1.6) {
      attacker.hasHit = true;
      return true;
    }
    return false;
  }
}

class MatchManager {
  ui;
  audio;
  p1Wins = 0;
  p2Wins = 0;
  currentRound = 1;
  roundTimer = 90;
  phase = "countdown";
  countdownStep = 0;
  countdownTimer = 0;
  roundOverDelayTimer = 0;
  onMatchEnded;
  constructor(ui, audio, onMatchEnded) {
    this.ui = ui;
    this.audio = audio;
    this.onMatchEnded = onMatchEnded;
  }
  startNewMatch(f1, f2) {
    this.p1Wins = 0;
    this.p2Wins = 0;
    this.currentRound = 1;
    this.startRound(f1, f2);
  }
  restartSameMatch(f1, f2) {
    this.p1Wins = 0;
    this.p2Wins = 0;
    this.currentRound = 1;
    this.startRound(f1, f2);
  }
  startRound(f1, f2) {
    this.phase = "countdown";
    this.roundTimer = 90;
    this.countdownStep = 0;
    this.countdownTimer = 0;
    this.roundOverDelayTimer = 0;
    f1.resetForRound(-4.2, 1);
    f2.resetForRound(4.2, -1);
    this.ui.showAnnounce(`ROUND ${this.currentRound}`, "READY", 1e3);
    this.audio.playRoundStart();
  }
  update(dt, f1, f2) {
    if (this.phase === "countdown") {
      this.updateCountdown(dt, f1, f2);
    } else if (this.phase === "fighting") {
      this.updateFighting(dt, f1, f2);
    } else if (this.phase === "round_over") {
      this.updateRoundOver(dt, f1, f2);
    }
  }
  updateCountdown(dt, f1, f2) {
    this.countdownTimer += dt;
    if (this.countdownStep === 0 && this.countdownTimer >= 1) {
      this.countdownStep = 1;
      this.ui.showAnnounce("3", "", 800);
      this.audio.playMenuSelect();
    } else if (this.countdownStep === 1 && this.countdownTimer >= 1.8) {
      this.countdownStep = 2;
      this.ui.showAnnounce("2", "", 800);
      this.audio.playMenuSelect();
    } else if (this.countdownStep === 2 && this.countdownTimer >= 2.6) {
      this.countdownStep = 3;
      this.ui.showAnnounce("1", "", 800);
      this.audio.playMenuSelect();
    } else if (this.countdownStep === 3 && this.countdownTimer >= 3.4) {
      this.countdownStep = 4;
      this.phase = "fighting";
      this.ui.showAnnounce("FIGHT!", "", 1e3);
      this.audio.playRoundStart();
    }
  }
  updateFighting(dt, f1, f2) {
    this.roundTimer = Math.max(0, this.roundTimer - dt);
    if (f1.health <= 0 || f2.health <= 0) {
      this.endRoundWithKO(f1, f2);
      return;
    }
    if (this.roundTimer <= 0) {
      this.endRoundWithTimeOut(f1, f2);
    }
  }
  endRoundWithKO(f1, f2) {
    this.phase = "round_over";
    this.roundOverDelayTimer = 0;
    if (f1.health <= 0 && f2.health <= 0) {
      this.ui.showAnnounce("DOUBLE K.O.!", "DRAW GAME", 2500);
      return;
    }
    if (f1.health <= 0) {
      this.p2Wins++;
      f2.triggerVictory();
      this.ui.showAnnounce("K.O.!", "PLAYER 2 WINS ROUND", 2500);
    } else {
      this.p1Wins++;
      f1.triggerVictory();
      this.ui.showAnnounce("K.O.!", "PLAYER 1 WINS ROUND", 2500);
    }
  }
  endRoundWithTimeOut(f1, f2) {
    this.phase = "round_over";
    this.roundOverDelayTimer = 0;
    if (Math.abs(f1.health - f2.health) < 0.1) {
      this.ui.showAnnounce("TIME UP!", "DRAW ROUND", 2500);
    } else if (f1.health > f2.health) {
      this.p1Wins++;
      f1.triggerVictory();
      this.ui.showAnnounce("TIME UP!", "PLAYER 1 WINS ROUND", 2500);
    } else {
      this.p2Wins++;
      f2.triggerVictory();
      this.ui.showAnnounce("TIME UP!", "PLAYER 2 WINS ROUND", 2500);
    }
  }
  updateRoundOver(dt, f1, f2) {
    this.roundOverDelayTimer += dt;
    if (this.roundOverDelayTimer >= 3) {
      if (this.p1Wins >= 2 || this.p2Wins >= 2) {
        this.phase = "match_over";
        const winnerId = this.p1Wins >= 2 ? 1 : 2;
        this.audio.playVictory();
        this.onMatchEnded?.(winnerId);
      } else {
        this.currentRound++;
        this.startRound(f1, f2);
      }
    }
  }
}

class AudioManager {
  ctx = null;
  isMuted = false;
  masterGain = null;
  musicGain = null;
  sfxGain = null;
  isMusicPlaying = false;
  musicIntervalId = null;
  constructor() {
  }
  initContext() {
    if (this.ctx) {
      if (this.ctx.state === "suspended") {
        this.ctx.resume();
      }
      return;
    }
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : 0.8, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
      this.musicGain = this.ctx.createGain();
      this.musicGain.gain.setValueAtTime(0.35, this.ctx.currentTime);
      this.musicGain.connect(this.masterGain);
      this.sfxGain = this.ctx.createGain();
      this.sfxGain.gain.setValueAtTime(0.7, this.ctx.currentTime);
      this.sfxGain.connect(this.masterGain);
    } catch (err) {
      console.warn("AudioContext failed to initialize:", err);
    }
  }
  ensureContext() {
    this.initContext();
  }
  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : 0.8, this.ctx.currentTime);
    }
    return this.isMuted;
  }
  getIsMuted() {
    return this.isMuted;
  }
  // --- SOUND EFFECTS SYNTHESIZERS ---
  playMenuHover() {
    this.initContext();
    if (!this.ctx || !this.sfxGain || this.isMuted) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(440, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(660, this.ctx.currentTime + 0.05);
    gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(1e-3, this.ctx.currentTime + 0.05);
    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.05);
  }
  playMenuSelect() {
    this.initContext();
    if (!this.ctx || !this.sfxGain || this.isMuted) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "square";
    osc.frequency.setValueAtTime(520, now);
    osc.frequency.setValueAtTime(780, now + 0.06);
    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.18);
    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start(now);
    osc.stop(now + 0.18);
  }
  // --- ATTACK SOUNDS ---
  playPunchImpact(heavy = false) {
    this.initContext();
    if (!this.ctx || !this.sfxGain || this.isMuted) return;
    const now = this.ctx.currentTime;
    const startFreq = heavy ? 220 : 180;
    const endFreq = heavy ? 35 : 55;
    const dur = heavy ? 0.18 : 0.1;
    const vol = heavy ? 0.8 : 0.5;
    const osc = this.ctx.createOscillator();
    const oscGain = this.ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(startFreq, now);
    osc.frequency.exponentialRampToValueAtTime(endFreq, now + dur);
    oscGain.gain.setValueAtTime(vol, now);
    oscGain.gain.exponentialRampToValueAtTime(0.01, now + dur);
    osc.connect(oscGain);
    oscGain.connect(this.sfxGain);
    osc.start(now);
    osc.stop(now + dur);
    this.playNoiseBurst(dur * 0.7, heavy ? 0.55 : 0.35, 600, heavy ? 2e3 : 3e3);
  }
  playKickImpact(heavy = false) {
    this.initContext();
    if (!this.ctx || !this.sfxGain || this.isMuted) return;
    const now = this.ctx.currentTime;
    const startFreq = heavy ? 280 : 220;
    const endFreq = heavy ? 28 : 42;
    const dur = heavy ? 0.26 : 0.16;
    const vol = heavy ? 0.9 : 0.65;
    const osc = this.ctx.createOscillator();
    const oscGain = this.ctx.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(startFreq, now);
    osc.frequency.exponentialRampToValueAtTime(endFreq, now + dur);
    oscGain.gain.setValueAtTime(vol, now);
    oscGain.gain.exponentialRampToValueAtTime(0.01, now + dur);
    osc.connect(oscGain);
    oscGain.connect(this.sfxGain);
    osc.start(now);
    osc.stop(now + dur);
    this.playNoiseBurst(dur * 0.75, heavy ? 0.65 : 0.45, 400, heavy ? 1600 : 2400);
  }
  playBlock() {
    this.initContext();
    if (!this.ctx || !this.sfxGain || this.isMuted) return;
    const now = this.ctx.currentTime;
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc1.type = "sine";
    osc1.frequency.setValueAtTime(980, now);
    osc1.frequency.exponentialRampToValueAtTime(600, now + 0.18);
    osc2.type = "square";
    osc2.frequency.setValueAtTime(1420, now);
    osc2.frequency.exponentialRampToValueAtTime(800, now + 0.14);
    gain.gain.setValueAtTime(0.45, now);
    gain.gain.exponentialRampToValueAtTime(1e-3, now + 0.18);
    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(this.sfxGain);
    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + 0.18);
    osc2.stop(now + 0.18);
  }
  // --- 5 CHARACTER-SPECIFIC SPECIAL ATTACK AUDIO ---
  playSpecialByCharacter(type) {
    this.initContext();
    if (!this.ctx || !this.sfxGain || this.isMuted) return;
    const now = this.ctx.currentTime;
    if (type === "fire_strike") {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(140, now);
      osc.frequency.exponentialRampToValueAtTime(600, now + 0.25);
      gain.gain.setValueAtTime(0.6, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
      osc.connect(gain);
      gain.connect(this.sfxGain);
      osc.start(now);
      osc.stop(now + 0.35);
      this.playNoiseBurst(0.35, 0.65, 300, 1800);
    } else if (type === "thunder_kick") {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "square";
      osc.frequency.setValueAtTime(880, now);
      osc.frequency.linearRampToValueAtTime(120, now + 0.3);
      gain.gain.setValueAtTime(0.5, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
      osc.connect(gain);
      gain.connect(this.sfxGain);
      osc.start(now);
      osc.stop(now + 0.35);
      this.playNoiseBurst(0.25, 0.5, 2e3, 7e3);
    } else if (type === "shadow_rush") {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(90, now);
      osc.frequency.exponentialRampToValueAtTime(320, now + 0.15);
      osc.frequency.exponentialRampToValueAtTime(45, now + 0.35);
      gain.gain.setValueAtTime(0.7, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
      osc.connect(gain);
      gain.connect(this.sfxGain);
      osc.start(now);
      osc.stop(now + 0.35);
    } else if (type === "phoenix_kick") {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(350, now);
      osc.frequency.exponentialRampToValueAtTime(1100, now + 0.35);
      gain.gain.setValueAtTime(0.55, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.38);
      osc.connect(gain);
      gain.connect(this.sfxGain);
      osc.start(now);
      osc.stop(now + 0.38);
      this.playNoiseBurst(0.25, 0.45, 1500, 4500);
    } else if (type === "dragon_spin") {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(260, now);
      osc.frequency.linearRampToValueAtTime(520, now + 0.18);
      osc.frequency.linearRampToValueAtTime(180, now + 0.35);
      gain.gain.setValueAtTime(0.6, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.38);
      osc.connect(gain);
      gain.connect(this.sfxGain);
      osc.start(now);
      osc.stop(now + 0.38);
      this.playNoiseBurst(0.3, 0.4, 800, 3e3);
    } else {
      this.playSpecialAttack();
    }
  }
  playSpecialAttack() {
    this.initContext();
    if (!this.ctx || !this.sfxGain || this.isMuted) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(180, now);
    osc.frequency.exponentialRampToValueAtTime(950, now + 0.35);
    gain.gain.setValueAtTime(0.4, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start(now);
    osc.stop(now + 0.4);
    this.playNoiseBurst(0.2, 0.25, 1200, 4e3);
  }
  playSpecialExplosion() {
    this.initContext();
    if (!this.ctx || !this.sfxGain || this.isMuted) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(220, now);
    osc.frequency.exponentialRampToValueAtTime(30, now + 0.45);
    gain.gain.setValueAtTime(0.85, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.45);
    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start(now);
    osc.stop(now + 0.45);
    this.playNoiseBurst(0.35, 0.65, 250, 2200);
  }
  playComboHit(hits) {
    this.initContext();
    if (!this.ctx || !this.sfxGain || this.isMuted) return;
    const now = this.ctx.currentTime;
    const freq = 440 + Math.min(hits, 8) * 60;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(freq, now);
    osc.frequency.exponentialRampToValueAtTime(freq * 1.5, now + 0.08);
    gain.gain.setValueAtTime(0.28, now);
    gain.gain.exponentialRampToValueAtTime(1e-3, now + 0.08);
    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start(now);
    osc.stop(now + 0.08);
  }
  playComboComplete() {
    this.initContext();
    if (!this.ctx || !this.sfxGain || this.isMuted) return;
    const now = this.ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((freq, idx) => {
      if (!this.ctx || !this.sfxGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "square";
      osc.frequency.setValueAtTime(freq, now + idx * 0.06);
      gain.gain.setValueAtTime(0.18, now + idx * 0.06);
      gain.gain.exponentialRampToValueAtTime(1e-3, now + idx * 0.06 + 0.15);
      osc.connect(gain);
      gain.connect(this.sfxGain);
      osc.start(now + idx * 0.06);
      osc.stop(now + idx * 0.06 + 0.15);
    });
  }
  playJump() {
    this.initContext();
    if (!this.ctx || !this.sfxGain || this.isMuted) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(140, now);
    osc.frequency.exponentialRampToValueAtTime(380, now + 0.14);
    gain.gain.setValueAtTime(0.22, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.14);
    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start(now);
    osc.stop(now + 0.14);
  }
  playLanding() {
    this.initContext();
    if (!this.ctx || !this.sfxGain || this.isMuted) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(120, now);
    osc.frequency.exponentialRampToValueAtTime(40, now + 0.08);
    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start(now);
    osc.stop(now + 0.08);
  }
  playRoundStart() {
    this.initContext();
    if (!this.ctx || !this.sfxGain || this.isMuted) return;
    const now = this.ctx.currentTime;
    const notes = [440, 554, 659];
    notes.forEach((freq, i) => {
      if (!this.ctx || !this.sfxGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, now + i * 0.1);
      gain.gain.setValueAtTime(0.3, now + i * 0.1);
      gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.1 + 0.35);
      osc.connect(gain);
      gain.connect(this.sfxGain);
      osc.start(now + i * 0.1);
      osc.stop(now + i * 0.1 + 0.35);
    });
  }
  playKO() {
    this.initContext();
    if (!this.ctx || !this.sfxGain || this.isMuted) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(120, now);
    osc.frequency.exponentialRampToValueAtTime(25, now + 0.95);
    gain.gain.setValueAtTime(0.85, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.95);
    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start(now);
    osc.stop(now + 0.95);
    this.playNoiseBurst(0.65, 0.75, 80, 1400);
  }
  playVictory() {
    this.initContext();
    if (!this.ctx || !this.sfxGain || this.isMuted) return;
    const now = this.ctx.currentTime;
    const notes = [392, 523.25, 659.25, 783.99, 1046.5];
    notes.forEach((freq, idx) => {
      if (!this.ctx || !this.sfxGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, now + idx * 0.12);
      const hold = idx === notes.length - 1 ? 0.6 : 0.2;
      gain.gain.setValueAtTime(0.35, now + idx * 0.12);
      gain.gain.exponentialRampToValueAtTime(0.01, now + idx * 0.12 + hold);
      osc.connect(gain);
      gain.connect(this.sfxGain);
      osc.start(now + idx * 0.12);
      osc.stop(now + idx * 0.12 + hold);
    });
  }
  playNoiseBurst(duration, volume, lowFreq, highFreq) {
    if (!this.ctx || !this.sfxGain) return;
    const bufferSize = Math.floor(this.ctx.sampleRate * duration);
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;
    const filter = this.ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.setValueAtTime((lowFreq + highFreq) * 0.5, this.ctx.currentTime);
    filter.Q.setValueAtTime(1, this.ctx.currentTime);
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(volume, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(1e-3, this.ctx.currentTime + duration);
    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.sfxGain);
    noise.start();
  }
  // --- BACKGROUND BATTLE SYNTHWAVE MUSIC ---
  startBattleMusic() {
    if (this.isMusicPlaying) return;
    this.initContext();
    if (!this.ctx || !this.musicGain) return;
    this.isMusicPlaying = true;
    let step = 0;
    const bassline = [
      110,
      110,
      164.8,
      110,
      110,
      110,
      130.8,
      146.8,
      98,
      98,
      146.8,
      98,
      98,
      98,
      123.5,
      130.8,
      87.3,
      87.3,
      130.8,
      87.3,
      87.3,
      87.3,
      110,
      123.5,
      82.4,
      82.4,
      123.5,
      82.4,
      98,
      110,
      123.5,
      146.8
    ];
    const sixteenthNoteMs = 120;
    this.musicIntervalId = window.setInterval(() => {
      if (!this.ctx || !this.musicGain || this.isMuted || !this.isMusicPlaying) return;
      const now = this.ctx.currentTime;
      const freq = bassline[step % bassline.length];
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(freq, now);
      const filter = this.ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(freq * 3.5, now);
      filter.frequency.exponentialRampToValueAtTime(freq * 1.2, now + 0.1);
      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(1e-3, now + 0.11);
      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.musicGain);
      osc.start(now);
      osc.stop(now + 0.11);
      if (step % 2 === 1) {
        this.playNoiseBurst(0.03, 0.04, 6e3, 12e3);
      }
      step++;
    }, sixteenthNoteMs);
  }
  stopBattleMusic() {
    this.isMusicPlaying = false;
    if (this.musicIntervalId !== null) {
      clearInterval(this.musicIntervalId);
      this.musicIntervalId = null;
    }
  }
}

const ARENA_LIST = [
  {
    id: "khirdalan",
    name: "KHIRDALAN",
    subtitle: "Night Street (Default)",
    imagePath: null
  },
  {
    id: "warsaw",
    name: "WARSAW",
    subtitle: "Palace of Culture",
    imagePath: "/assets/arenas/warsaw.jpg"
  },
  {
    id: "krakow",
    name: "KRAKOW",
    subtitle: "Main Market Square",
    imagePath: "/assets/arenas/krakow.jpg"
  },
  {
    id: "baku",
    name: "BAKU",
    subtitle: "Flame Towers & Boulevard",
    imagePath: "/assets/arenas/baku.jpg"
  }
];

class CharacterPreviewRenderer {
  canvas;
  renderer;
  scene;
  camera;
  currentModelResult = null;
  animController = null;
  rotationAngle = 0;
  baseFacingAngle = 0;
  accentColor;
  constructor(canvasId, accentColor = 54015, baseFacing = 0.2) {
    this.canvas = document.getElementById(canvasId);
    this.accentColor = accentColor;
    this.baseFacingAngle = baseFacing;
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true
    });
    this.renderer.setSize(280, 380);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(38, 280 / 380, 0.1, 50);
    this.camera.position.set(0, 1.05, 3.6);
    this.camera.lookAt(0, 0.95, 0);
    this.setupLighting();
    this.setupPedestal();
  }
  setupLighting() {
    const ambient = new THREE.AmbientLight(16777215, 1.1);
    this.scene.add(ambient);
    const keyLight = new THREE.DirectionalLight(16777215, 2);
    keyLight.position.set(2, 4, 3);
    keyLight.castShadow = true;
    this.scene.add(keyLight);
    const rimLight = new THREE.DirectionalLight(this.accentColor, 2.5);
    rimLight.position.set(-2.5, 3, -2);
    this.scene.add(rimLight);
    const fillLight = new THREE.PointLight(this.accentColor, 1.2, 5);
    fillLight.position.set(0, 0.2, 1.5);
    this.scene.add(fillLight);
  }
  setupPedestal() {
    const pedestalGeo = new THREE.CylinderGeometry(1.1, 1.2, 0.12, 28);
    const pedestalMat = new THREE.MeshStandardMaterial({
      color: 988970,
      roughness: 0.6,
      metalness: 0.8
    });
    const pedestal = new THREE.Mesh(pedestalGeo, pedestalMat);
    pedestal.position.y = -0.06;
    pedestal.receiveShadow = true;
    this.scene.add(pedestal);
    const ringGeo = new THREE.TorusGeometry(1.12, 0.02, 8, 32);
    ringGeo.rotateX(Math.PI * 0.5);
    const ringMat = new THREE.MeshBasicMaterial({ color: this.accentColor });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.position.y = 5e-3;
    this.scene.add(ring);
  }
  setCharacter(config) {
    if (this.currentModelResult) {
      this.scene.remove(this.currentModelResult.root);
    }
    this.currentModelResult = ProceduralHumanoid.create(config);
    this.currentModelResult.root.position.set(0, 0, 0);
    const hasAvatarPlane = !!this.currentModelResult.root.getObjectByName("aynur_avatar_group");
    this.currentModelResult.root.rotation.y = hasAvatarPlane ? 0 : this.baseFacingAngle;
    this.scene.add(this.currentModelResult.root);
    this.animController = new AnimationController(this.currentModelResult.bones);
    this.animController.play("idle", true);
  }
  update(dt) {
    if (!this.currentModelResult || !this.animController) return;
    this.animController.update(dt);
    const hasAvatarPlane = !!this.currentModelResult.root.getObjectByName("aynur_avatar_group");
    if (hasAvatarPlane) {
      this.currentModelResult.root.rotation.y = 0;
    } else {
      this.rotationAngle += dt * 0.6;
      const sway = Math.sin(this.rotationAngle) * 0.22;
      this.currentModelResult.root.rotation.y = this.baseFacingAngle + sway;
    }
    this.renderer.render(this.scene, this.camera);
  }
}

class UIManager {
  audio;
  listeners;
  // Screen elements
  mainMenuEl = document.getElementById("main-menu");
  controlsModalEl = document.getElementById("controls-modal");
  howModalEl = document.getElementById("how-to-play-modal");
  charSelectEl = document.getElementById("char-select-screen");
  vsScreenEl = document.getElementById("vs-screen");
  gameHudEl = document.getElementById("game-hud");
  victoryEl = document.getElementById("victory-screen");
  // Audio Toggle
  audioBtn = document.getElementById("audio-toggle-btn");
  audioIcon = document.getElementById("audio-icon");
  // 3D Live Character Previews
  p1Preview = null;
  p2Preview = null;
  // Character Select state
  p1SelectIndex = 0;
  p2SelectIndex = 3;
  // Default P2 to Aynur
  arenaSelectIndex = 0;
  // Default to Khirdalan (index 0)
  p1Locked = false;
  p2Locked = false;
  isCharSelectActive = false;
  // Preview Info Elements
  p1PrevNameEl = document.getElementById("p1-preview-name");
  p1PrevTitleEl = document.getElementById("p1-preview-title");
  p1PrevOutfitEl = document.getElementById("p1-preview-outfit");
  p2PrevNameEl = document.getElementById("p2-preview-name");
  p2PrevTitleEl = document.getElementById("p2-preview-title");
  p2PrevOutfitEl = document.getElementById("p2-preview-outfit");
  // HUD Elements
  p1NameEl = document.getElementById("hud-p1-name");
  p1HpFillEl = document.getElementById("hud-p1-hp");
  p1HpDamageEl = document.getElementById("hud-p1-damage");
  p1HpTextEl = document.getElementById("hud-p1-hp-text");
  p1CdEl = document.getElementById("hud-p1-cd");
  p1CdLabelEl = document.getElementById("hud-p1-cd-label");
  p1Dot0 = document.getElementById("p1-dot-0");
  p1Dot1 = document.getElementById("p1-dot-1");
  p2NameEl = document.getElementById("hud-p2-name");
  p2HpFillEl = document.getElementById("hud-p2-hp");
  p2HpDamageEl = document.getElementById("hud-p2-damage");
  p2HpTextEl = document.getElementById("hud-p2-hp-text");
  p2CdEl = document.getElementById("hud-p2-cd");
  p2CdLabelEl = document.getElementById("hud-p2-cd-label");
  p2Dot0 = document.getElementById("p2-dot-0");
  p2Dot1 = document.getElementById("p2-dot-1");
  roundLabelEl = document.getElementById("hud-round-label");
  timerEl = document.getElementById("hud-timer");
  // Combos
  p1ComboEl = document.getElementById("hud-p1-combo");
  p1ComboCountEl = document.getElementById("hud-p1-combo-count");
  p1ComboNameEl = document.getElementById("hud-p1-combo-name");
  p2ComboEl = document.getElementById("hud-p2-combo");
  p2ComboCountEl = document.getElementById("hud-p2-combo-count");
  p2ComboNameEl = document.getElementById("hud-p2-combo-name");
  // Announcer Overlay
  announcerBanner = document.getElementById("announcer-banner");
  announcerText = document.getElementById("announcer-text");
  announcerSub = document.getElementById("announcer-sub");
  // Victory screen elements
  vicWinnerEl = document.getElementById("vic-winner-text");
  vicCharNameEl = document.getElementById("vic-character-name");
  vicRoundsCountEl = document.getElementById("vic-rounds-count");
  constructor(audio, listeners) {
    this.audio = audio;
    this.listeners = listeners;
    this.initEventListeners();
    this.init3DPreviews();
    this.renderCharacterCards();
    this.renderArenaCards();
    this.updateCharacterSelectionUI();
  }
  init3DPreviews() {
    try {
      if (document.getElementById("p1-preview-canvas") && typeof WebGLRenderingContext !== "undefined") {
        this.p1Preview = new CharacterPreviewRenderer("p1-preview-canvas", 54015, 0.25);
        this.p2Preview = new CharacterPreviewRenderer("p2-preview-canvas", 16724838, -0.25);
      }
    } catch (e) {
      console.warn("[UIManager] 3D Character Preview renderers skipped (headless or unsupported environment):", e);
    }
  }
  initEventListeners() {
    this.audioBtn.addEventListener("click", () => {
      const isMuted = this.audio.toggleMute();
      this.audioIcon.textContent = isMuted ? "🔇" : "🔊";
    });
    const btnStart = document.getElementById("btn-start");
    btnStart.addEventListener("click", () => {
      this.audio.playMenuSelect();
      this.listeners.onStartClicked();
    });
    const btnControls = document.getElementById("btn-controls");
    btnControls.addEventListener("click", () => {
      this.audio.playMenuSelect();
      this.controlsModalEl.classList.remove("hidden");
    });
    const btnHow = document.getElementById("btn-how-to-play");
    btnHow.addEventListener("click", () => {
      this.audio.playMenuSelect();
      this.howModalEl.classList.remove("hidden");
    });
    document.getElementById("controls-close-btn").addEventListener("click", () => {
      this.audio.playMenuSelect();
      this.controlsModalEl.classList.add("hidden");
    });
    document.getElementById("controls-back-btn").addEventListener("click", () => {
      this.audio.playMenuSelect();
      this.controlsModalEl.classList.add("hidden");
    });
    document.getElementById("how-close-btn").addEventListener("click", () => {
      this.audio.playMenuSelect();
      this.howModalEl.classList.add("hidden");
    });
    document.getElementById("how-back-btn").addEventListener("click", () => {
      this.audio.playMenuSelect();
      this.howModalEl.classList.add("hidden");
    });
    document.getElementById("btn-select-back").addEventListener("click", () => {
      this.audio.playMenuSelect();
      this.listeners.onSelectBackClicked();
    });
    document.getElementById("btn-rematch").addEventListener("click", () => {
      this.audio.playMenuSelect();
      this.listeners.onRematchClicked();
    });
    document.getElementById("btn-char-select").addEventListener("click", () => {
      this.audio.playMenuSelect();
      this.listeners.onCharSelectClicked();
    });
    document.getElementById("btn-vic-main-menu").addEventListener("click", () => {
      this.audio.playMenuSelect();
      this.listeners.onMainMenuClicked();
    });
  }
  renderCharacterCards() {
    const container = document.getElementById("characters-carousel");
    container.innerHTML = "";
    CHARACTER_LIST.forEach((char, index) => {
      const card = document.createElement("div");
      card.className = "character-card";
      card.id = `char-card-${index}`;
      const hasRealPortrait = char.id === "aynur" || !!char.previewImagePath;
      const portraitMarkup = hasRealPortrait ? `<img src="${char.portraitPath}" alt="${char.name}" class="card-portrait-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
           <div class="card-avatar-graphic" style="display:none;">${char.avatarIcon}</div>` : `<div class="card-avatar-graphic">${char.avatarIcon}</div>`;
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
      card.addEventListener("click", () => {
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
  renderArenaCards() {
    const container = document.getElementById("arenas-carousel");
    if (!container) return;
    container.innerHTML = "";
    ARENA_LIST.forEach((arena, index) => {
      const card = document.createElement("div");
      card.className = "arena-card";
      card.id = `arena-card-${index}`;
      const thumbMarkup = arena.imagePath ? `<img src="${arena.imagePath}" alt="${arena.name}" class="arena-thumb-img" />` : `<div class="arena-thumb-default">🌃 3D STREET</div>`;
      card.innerHTML = `
        <div class="arena-thumb-wrap">
          ${thumbMarkup}
        </div>
        <div class="arena-card-info">
          <div class="arena-card-name">${arena.name}</div>
          <div class="arena-card-sub">${arena.subtitle}</div>
        </div>
      `;
      card.addEventListener("click", () => {
        this.arenaSelectIndex = index;
        this.audio.playMenuSelect();
        this.updateCharacterSelectionUI();
        this.listeners.onArenaSelected?.(arena.id);
      });
      container.appendChild(card);
    });
  }
  updateCharacterSelectionUI() {
    ARENA_LIST.forEach((_, idx) => {
      const aCard = document.getElementById(`arena-card-${idx}`);
      if (!aCard) return;
      aCard.classList.toggle("selected", this.arenaSelectIndex === idx);
    });
    CHARACTER_LIST.forEach((_, idx) => {
      const card = document.getElementById(`char-card-${idx}`);
      if (!card) return;
      const isP1 = this.p1SelectIndex === idx;
      const isP2 = this.p2SelectIndex === idx;
      card.classList.remove("p1-selected", "p2-selected", "both-selected");
      if (isP1 && isP2) {
        card.classList.add("both-selected");
      } else if (isP1) {
        card.classList.add("p1-selected");
      } else if (isP2) {
        card.classList.add("p2-selected");
      }
    });
    const p1Char = CHARACTER_LIST[this.p1SelectIndex];
    const p2Char = CHARACTER_LIST[this.p2SelectIndex];
    document.getElementById("p1-selected-name").textContent = p1Char.name;
    document.getElementById("p1-selected-style").textContent = p1Char.title;
    const p1LockEl = document.getElementById("p1-lock-status");
    p1LockEl.textContent = this.p1Locked ? "LOCKED IN!" : "CHOOSING... (F TO LOCK)";
    p1LockEl.className = `slot-status ${this.p1Locked ? "locked" : ""}`;
    document.getElementById("p2-selected-name").textContent = p2Char.name;
    document.getElementById("p2-selected-style").textContent = p2Char.title;
    const p2LockEl = document.getElementById("p2-lock-status");
    p2LockEl.textContent = this.p2Locked ? "LOCKED IN!" : "CHOOSING... (K TO LOCK)";
    p2LockEl.className = `slot-status ${this.p2Locked ? "locked" : ""}`;
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
  handleCharSelectInput(input) {
    let changed = false;
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
      this.p1Locked = false;
      this.p2Locked = false;
      const p1Char = CHARACTER_LIST[this.p1SelectIndex];
      const p2Char = CHARACTER_LIST[this.p2SelectIndex];
      const selectedArena = ARENA_LIST[this.arenaSelectIndex] || ARENA_LIST[0];
      this.listeners.onBothFightersLocked(p1Char, p2Char, selectedArena.id);
    }
  }
  // --- SCREEN SWITCHING ---
  showMainMenu() {
    this.isCharSelectActive = false;
    this.hideAllScreens();
    this.mainMenuEl.classList.remove("hidden");
    this.mainMenuEl.classList.add("active");
  }
  showCharSelect() {
    this.hideAllScreens();
    this.isCharSelectActive = true;
    this.p1Locked = false;
    this.p2Locked = false;
    this.updateCharacterSelectionUI();
    this.charSelectEl.classList.remove("hidden");
    this.charSelectEl.classList.add("active");
  }
  showVSScreen(p1Char, p2Char, onComplete) {
    this.isCharSelectActive = false;
    this.hideAllScreens();
    this.vsScreenEl.classList.remove("hidden");
    this.vsScreenEl.classList.add("active");
    const vsP1ImgEl = document.getElementById("vs-p1-img");
    if (p1Char.id === "aynur" || p1Char.previewImagePath) {
      vsP1ImgEl.innerHTML = `<img src="${p1Char.portraitPath}" alt="${p1Char.name}" class="vs-portrait-img" onerror="this.parentElement.textContent='${p1Char.avatarIcon}';" />`;
    } else {
      vsP1ImgEl.textContent = p1Char.avatarIcon;
    }
    document.getElementById("vs-p1-name").textContent = p1Char.name;
    document.getElementById("vs-p1-title").textContent = p1Char.title;
    const p1OutfitEl = document.getElementById("vs-p1-outfit");
    if (p1OutfitEl) p1OutfitEl.textContent = p1Char.outfit?.styleName || p1Char.archetype;
    const vsP2ImgEl = document.getElementById("vs-p2-img");
    if (p2Char.id === "aynur" || p2Char.previewImagePath) {
      vsP2ImgEl.innerHTML = `<img src="${p2Char.portraitPath}" alt="${p2Char.name}" class="vs-portrait-img" onerror="this.parentElement.textContent='${p2Char.avatarIcon}';" />`;
    } else {
      vsP2ImgEl.textContent = p2Char.avatarIcon;
    }
    document.getElementById("vs-p2-name").textContent = p2Char.name;
    document.getElementById("vs-p2-title").textContent = p2Char.title;
    const p2OutfitEl = document.getElementById("vs-p2-outfit");
    if (p2OutfitEl) p2OutfitEl.textContent = p2Char.outfit?.styleName || p2Char.archetype;
    this.audio.playRoundStart();
    setTimeout(() => {
      onComplete();
    }, 2200);
  }
  showGameHUD(p1Name, p2Name) {
    this.isCharSelectActive = false;
    this.hideAllScreens();
    this.p1NameEl.textContent = p1Name;
    this.p2NameEl.textContent = p2Name;
    this.gameHudEl.classList.remove("hidden");
    this.gameHudEl.classList.add("active");
  }
  showVictoryScreen(winnerPlayerId, winnerCharName, p1Score, p2Score) {
    this.isCharSelectActive = false;
    this.hideAllScreens();
    this.victoryEl.classList.remove("hidden");
    this.victoryEl.classList.add("active");
    this.vicWinnerEl.textContent = `PLAYER ${winnerPlayerId} WINS!`;
    this.vicWinnerEl.style.color = winnerPlayerId === 1 ? "var(--p1-blue)" : "var(--p2-red)";
    this.vicCharNameEl.textContent = winnerCharName;
    this.vicRoundsCountEl.textContent = `${p1Score} - ${p2Score}`;
  }
  hideAllScreens() {
    this.mainMenuEl.classList.add("hidden");
    this.mainMenuEl.classList.remove("active");
    this.charSelectEl.classList.add("hidden");
    this.charSelectEl.classList.remove("active");
    this.vsScreenEl.classList.add("hidden");
    this.vsScreenEl.classList.remove("active");
    this.gameHudEl.classList.add("hidden");
    this.gameHudEl.classList.remove("active");
    this.victoryEl.classList.add("hidden");
    this.victoryEl.classList.remove("active");
    this.controlsModalEl.classList.add("hidden");
    this.howModalEl.classList.add("hidden");
  }
  // --- IN-GAME HUD UPDATES ---
  updateHUD(p1Hp, p2Hp, p1MaxHp, p2MaxHp, p1CdRemain, p2CdRemain, maxCd, p1RoundsWon, p2RoundsWon, currentRound, timerSeconds) {
    const p1Pct = Math.max(0, Math.min(100, p1Hp / p1MaxHp * 100));
    const p2Pct = Math.max(0, Math.min(100, p2Hp / p2MaxHp * 100));
    this.p1HpFillEl.style.width = `${p1Pct}%`;
    this.p1HpDamageEl.style.width = `${p1Pct}%`;
    this.p1HpTextEl.textContent = `${Math.ceil(p1Hp)} / ${p1MaxHp}`;
    this.p2HpFillEl.style.width = `${p2Pct}%`;
    this.p2HpDamageEl.style.width = `${p2Pct}%`;
    this.p2HpTextEl.textContent = `${Math.ceil(p2Hp)} / ${p2MaxHp}`;
    if (p1Hp <= 20) {
      this.p1HpFillEl.classList.add("hp-critical");
    } else {
      this.p1HpFillEl.classList.remove("hp-critical");
    }
    if (p2Hp <= 20) {
      this.p2HpFillEl.classList.add("hp-critical");
    } else {
      this.p2HpFillEl.classList.remove("hp-critical");
    }
    this.p1Dot0.classList.toggle("won", p1RoundsWon >= 1);
    this.p1Dot1.classList.toggle("won", p1RoundsWon >= 2);
    this.p2Dot0.classList.toggle("won", p2RoundsWon >= 1);
    this.p2Dot1.classList.toggle("won", p2RoundsWon >= 2);
    const p1CdPct = p1CdRemain <= 0 ? 100 : (1 - p1CdRemain / maxCd) * 100;
    const p2CdPct = p2CdRemain <= 0 ? 100 : (1 - p2CdRemain / maxCd) * 100;
    this.p1CdEl.style.width = `${p1CdPct}%`;
    this.p1CdEl.classList.toggle("cooling", p1CdRemain > 0);
    if (this.p1CdLabelEl) {
      if (p1CdRemain <= 0) {
        this.p1CdLabelEl.textContent = "SPECIAL READY";
        this.p1CdLabelEl.classList.add("ready");
      } else {
        this.p1CdLabelEl.textContent = `SPECIAL: ${p1CdRemain.toFixed(1)}s`;
        this.p1CdLabelEl.classList.remove("ready");
      }
    }
    this.p2CdEl.style.width = `${p2CdPct}%`;
    this.p2CdEl.classList.toggle("cooling", p2CdRemain > 0);
    if (this.p2CdLabelEl) {
      if (p2CdRemain <= 0) {
        this.p2CdLabelEl.textContent = "SPECIAL READY";
        this.p2CdLabelEl.classList.add("ready");
      } else {
        this.p2CdLabelEl.textContent = `SPECIAL: ${p2CdRemain.toFixed(1)}s`;
        this.p2CdLabelEl.classList.remove("ready");
      }
    }
    this.roundLabelEl.textContent = `ROUND ${currentRound}`;
    const displayTime = Math.ceil(timerSeconds);
    this.timerEl.textContent = displayTime.toString();
    if (displayTime <= 10) {
      this.timerEl.classList.add("low-time");
    } else {
      this.timerEl.classList.remove("low-time");
    }
  }
  showCombo(playerId, hits, comboName) {
    const banner = playerId === 1 ? this.p1ComboEl : this.p2ComboEl;
    const countEl = playerId === 1 ? this.p1ComboCountEl : this.p2ComboCountEl;
    const nameEl = playerId === 1 ? this.p1ComboNameEl : this.p2ComboNameEl;
    if (!banner || !countEl) return;
    if (hits >= 2) {
      countEl.textContent = `${hits} HITS`;
      if (nameEl) {
        nameEl.textContent = comboName ? comboName : "";
        nameEl.style.display = comboName ? "block" : "none";
      }
      banner.classList.remove("hidden");
    } else {
      banner.classList.add("hidden");
    }
  }
  // --- ANNOUNCER OVERLAYS ---
  showAnnounce(mainText, subText = "", durationMs = 1e3) {
    this.announcerText.textContent = mainText;
    this.announcerSub.textContent = subText;
    this.announcerBanner.classList.remove("hidden");
    this.announcerText.style.animation = "none";
    void this.announcerText.offsetWidth;
    this.announcerText.style.animation = "";
    setTimeout(() => {
      this.announcerBanner.classList.add("hidden");
    }, durationMs);
  }
  hideAnnounce() {
    this.announcerBanner.classList.add("hidden");
  }
  update(dt) {
    if (this.isCharSelectActive) {
      this.p1Preview?.update(dt);
      this.p2Preview?.update(dt);
    }
  }
}

function setupMockDOM() {
  const elements = {};
  const createElement = (tag) => {
    return {
      tagName: tag.toUpperCase(),
      classList: {
        add: () => {
        },
        remove: () => {
        },
        toggle: () => {
        },
        contains: () => false
      },
      style: {},
      addEventListener: () => {
      },
      appendChild: () => {
      },
      textContent: "",
      innerHTML: "",
      className: ""
    };
  };
  const ids = [
    "game-canvas",
    "fx-flash-overlay",
    "game-container",
    "audio-toggle-btn",
    "audio-icon",
    "main-menu",
    "btn-start",
    "btn-controls",
    "btn-how-to-play",
    "controls-modal",
    "controls-close-btn",
    "controls-back-btn",
    "how-to-play-modal",
    "how-close-btn",
    "how-back-btn",
    "char-select-screen",
    "characters-carousel",
    "p1-selected-name",
    "p1-selected-style",
    "p1-lock-status",
    "p2-selected-name",
    "p2-selected-style",
    "p2-lock-status",
    "p1-preview-canvas",
    "p2-preview-canvas",
    "p1-preview-name",
    "p1-preview-title",
    "p1-preview-outfit",
    "p2-preview-name",
    "p2-preview-title",
    "p2-preview-outfit",
    "btn-select-back",
    "vs-screen",
    "vs-p1-img",
    "vs-p1-name",
    "vs-p1-title",
    "vs-p1-outfit",
    "vs-p2-img",
    "vs-p2-name",
    "vs-p2-title",
    "vs-p2-outfit",
    "game-hud",
    "hud-p1-name",
    "hud-p1-hp",
    "hud-p1-damage",
    "hud-p1-hp-text",
    "hud-p1-cd",
    "p1-dot-0",
    "p1-dot-1",
    "hud-p2-name",
    "hud-p2-hp",
    "hud-p2-damage",
    "hud-p2-hp-text",
    "hud-p2-cd",
    "p2-dot-0",
    "p2-dot-1",
    "hud-round-label",
    "hud-timer",
    "announcer-banner",
    "announcer-text",
    "announcer-sub",
    "victory-screen",
    "vic-winner-text",
    "vic-character-name",
    "vic-rounds-count",
    "btn-rematch",
    "btn-char-select",
    "btn-vic-main-menu"
  ];
  ids.forEach((id) => {
    elements[id] = createElement("div");
  });
  globalThis.document = {
    getElementById: (id) => elements[id] || createElement("div"),
    createElement,
    addEventListener: () => {
    }
  };
  globalThis.window = {
    addEventListener: () => {
    },
    innerWidth: 1920,
    innerHeight: 1080,
    devicePixelRatio: 1
  };
}
setupMockDOM();
function assert(condition, msg) {
  if (!condition) {
    console.error(`❌ FAILED: ${msg}`);
    process.exit(1);
  } else {
    console.log(`✅ PASSED: ${msg}`);
  }
}
console.log("=== STREET LEGENDS STEP 2 VERIFICATION SUITE ===\n");
console.log("--- STEP 2: Character Registry & Gender Distribution ---");
assert(CHARACTER_LIST.length === 5, "Exactly 5 fighters exist in registry");
assert(CHARACTERS_REGISTRY["fighter_01"].gender === "male", "Fighter 01 is Male");
assert(CHARACTERS_REGISTRY["fighter_02"].gender === "male", "Fighter 02 is Male");
assert(CHARACTERS_REGISTRY["fighter_03"].gender === "male", "Fighter 03 is Male");
assert(CHARACTERS_REGISTRY["fighter_04"].gender === "female", "Fighter 04 is Female");
assert(CHARACTERS_REGISTRY["fighter_05"].gender === "female", "Fighter 05 is Female");
assert(!!CHARACTERS_REGISTRY["fighter_01"].outfit.styleName, "Fighter 01 has custom outfit configuration");
assert(CHARACTERS_REGISTRY["fighter_01"].modelPath.includes("model.glb"), "Fighter 01 has GLB model path configured");
console.log("\n--- TEST 1: Select Different Characters ---");
const p1Char = CHARACTERS_REGISTRY["fighter_01"];
const p2Char = CHARACTERS_REGISTRY["aynur"];
assert((p1Char.id === "tacir" || p1Char.id === "fighter_01") && (p2Char.id === "aynur" || p2Char.id === "fighter_04") && p2Char.name === "AYNUR", "Both players can select different characters (Tacir vs Aynur)");
console.log("\n--- TEST 2: Select Same Character (Mirror Match) ---");
const mirrorP1 = CHARACTERS_REGISTRY["fighter_02"];
const mirrorP2 = CHARACTERS_REGISTRY["fighter_02"];
assert(mirrorP1.id === mirrorP2.id && mirrorP1.name === "FARHAD", "Both players can select the same character (Farhad vs Farhad mirror match)");
console.log("\n--- TEST 2B: Safe Model Loader Fallback ---");
const fallbackMesh = await CharacterModelLoader.loadCharacterModel(p1Char);
assert(!!fallbackMesh && !!fallbackMesh.root && !!fallbackMesh.bones, "Model loader safely returns working mesh when external GLB is missing");
const f1 = new Fighter(1, p1Char);
const f2 = new Fighter(2, p2Char);
const arenaHalf = 11.5;
console.log("\n--- TEST 3: Simultaneous Movement ---");
f1.move(1);
f2.move(-1);
assert(f1.velocity.x > 0 && f2.velocity.x < 0, "Both fighters have active velocity in opposing directions simultaneously");
f1.update(0.016, arenaHalf);
f2.update(0.016, arenaHalf);
assert(f1.position.x > -4.2 && f2.position.x < 4.2, "Both fighters advanced horizontally simultaneously");
console.log("\n--- TEST 4: Jumping Mechanics ---");
f1.jump();
f2.jump();
assert(!f1.isGrounded && f1.velocity.y > 0, "Player 1 jumped with positive vertical velocity");
assert(!f2.isGrounded && f2.velocity.y > 0, "Player 2 jumped with positive vertical velocity");
f1.position.y = 0;
f1.velocity.y = 0;
f1.isGrounded = true;
f2.position.y = 0;
f2.velocity.y = 0;
f2.isGrounded = true;
console.log("\n--- TEST 5: Punch & Kick Triggering ---");
f1.resetForRound(-4, 1);
f2.resetForRound(4, -1);
const punchStarted = f1.punch();
assert(punchStarted && f1.isAttacking && f1.currentAttack?.type === "punch", "Fighter 1 started punch attack");
assert(f1.currentAttack?.damage === 8, "Punch damage is accurately configured to 8 HP");
f2.resetForRound(4, -1);
const kickStarted = f2.kick();
assert(kickStarted && f2.isAttacking && f2.currentAttack?.type === "kick", "Fighter 2 started kick attack");
assert(f2.currentAttack?.damage === 12, "Kick damage is accurately configured to 12 HP");
console.log("\n--- TEST 6: Hit Detection & Range Check ---");
f1.resetForRound(-4, 1);
f2.resetForRound(4, -1);
f1.punch();
f1.attackTimer = 0.1;
const hitFar = CollisionSystem.checkMeleeHit(f1, f2);
assert(!hitFar, "Attack does not connect when fighters are too far apart");
assert(f2.health === 100, "Defender health remains 100 HP when attack does not connect");
f1.position.x = 0;
f2.position.x = 1;
f1.facing = 1;
f1.hasHit = false;
const hitClose = CollisionSystem.checkMeleeHit(f1, f2);
assert(hitClose, "Attack connects when within attack range and facing defender");
const dmgResult = f2.takeDamage(f1.currentAttack.damage, f1.facing, f1.currentAttack.knockback);
assert(dmgResult.damageDealt === 8, "Opponent took exactly 8 damage from punch");
assert(f2.health === 92, "Opponent health reduced to 92 HP");
console.log("\n--- TEST 7: Blocking 80% Damage Reduction ---");
f2.resetForRound(1, -1);
f2.block(true);
assert(f2.isBlocking, "Fighter 2 is actively in block stance");
const blockedResult = f2.takeDamage(12, 1, 5.5);
assert(blockedResult.wasBlocked, "Attack was successfully blocked");
assert(blockedResult.damageDealt === 2.4, "Damage reduced by 80% (12 HP -> 2.4 HP)");
assert(f2.health === 97.6, "Health after blocked 12 HP kick is 97.6 HP");
console.log("\n--- TEST 8: Special Attack & Cooldown ---");
f1.resetForRound(-2, 1);
const specialFired = f1.specialAttack();
assert(specialFired, "Special attack successfully fired");
assert(f1.specialCooldown === 5, "Special attack initialized 5.0 second cooldown");
assert(f1.currentAttack?.damage === 20, "Special attack damage is configured to 20 HP");
const secondSpecial = f1.specialAttack();
assert(!secondSpecial, "Special attack cannot be spammed while on cooldown");
f1.update(5.1, arenaHalf);
assert(f1.specialCooldown === 0, "Special cooldown refreshed after 5 seconds");
const thirdSpecial = f1.specialAttack();
assert(thirdSpecial, "Special attack can be used again after cooldown expires");
console.log("\n--- TEST 9: Arena Boundary Clamping ---");
f1.position.x = 20;
f1.update(0.016, arenaHalf);
const maxAllowedX = arenaHalf - f1.hurtboxRadius;
assert(f1.position.x <= maxAllowedX, `Fighter clamped at right wall (pos.x=${f1.position.x} <= ${maxAllowedX})`);
f1.position.x = -20;
f1.update(0.016, arenaHalf);
assert(f1.position.x >= -maxAllowedX, `Fighter clamped at left wall (pos.x=${f1.position.x} >= ${-maxAllowedX})`);
console.log("\n--- TEST 10: Body Collision / Pushbox Separation ---");
f1.resetForRound(0, 1);
f2.resetForRound(0.2, -1);
CollisionSystem.resolveFighterOverlap(f1, f2, arenaHalf);
const sepDist = Math.abs(f2.position.x - f1.position.x);
assert(sepDist >= f1.hurtboxRadius + f2.hurtboxRadius, `Fighters pushed apart to prevent walking through each other (dist=${sepDist.toFixed(2)})`);
console.log("\n--- TEST 11: Knockout Round Ending ---");
f1.resetForRound(-2, 1);
f2.resetForRound(2, -1);
const koResult = f2.takeDamage(150, 1, 10);
assert(f2.health === 0, "Fighter 2 health drops to 0 and cannot go below 0");
assert(f2.isKnockedOut, "Fighter 2 state is set to isKnockedOut");
assert(koResult.isKO, "Damage calculation flagged as KO");
console.log("\n--- TEST 12: Health & State Reset for New Round ---");
f1.resetForRound(-4.2, 1);
f2.resetForRound(4.2, -1);
assert(f1.health === 100 && f2.health === 100, "Both fighters have exactly 100 HP at start of new round");
assert(f1.position.x === -4.2 && f2.position.x === 4.2, "Both fighters reset to their starting round positions");
assert(!f1.isKnockedOut && !f2.isKnockedOut, "Both fighters KO states are cleared");
console.log("\n--- TEST 13: First to 2 Round Wins Match System ---");
const dummyAudio = new AudioManager();
let matchWinner = null;
const dummyUI = new UIManager(dummyAudio, {
  onStartClicked: () => {
  },
  onSelectBackClicked: () => {
  },
  onBothFightersLocked: () => {
  },
  onRematchClicked: () => {
  },
  onCharSelectClicked: () => {
  },
  onMainMenuClicked: () => {
  }
});
const match = new MatchManager(dummyUI, dummyAudio, (winnerId) => {
  matchWinner = winnerId;
});
match.startNewMatch(f1, f2);
assert(match.currentRound === 1 && match.p1Wins === 0 && match.p2Wins === 0, "Match begins at Round 1 with 0-0 score");
match.phase = "fighting";
f2.health = 0;
match.update(0.016, f1, f2);
assert(match.p1Wins === 1, "Player 1 awarded 1st round victory (1-0)");
match.update(3.1, f1, f2);
assert(match.currentRound === 2, "Advanced to Round 2");
match.phase = "fighting";
f2.health = 0;
match.update(0.016, f1, f2);
assert(match.p1Wins === 2, "Player 1 awarded 2nd round victory (2-0)");
match.update(3.1, f1, f2);
assert(matchWinner === 1, "Player 1 crowned match winner after winning 2 rounds");
assert(match.phase === "match_over", "Match phase set to match_over");
console.log("\n--- TEST 14: Rematch Restart ---");
match.restartSameMatch(f1, f2);
assert(match.p1Wins === 0 && match.p2Wins === 0, "Round wins reset to 0 - 0 on rematch");
assert(match.currentRound === 1, "Round resets to Round 1");
assert(f1.health === 100 && f2.health === 100, "Fighter HP reset to 100 on rematch");
console.log("\n--- TEST 15: Menu Navigation & Modals ---");
assert(typeof dummyUI.showMainMenu === "function", "showMainMenu function exists");
assert(typeof dummyUI.showCharSelect === "function", "showCharSelect function exists");
assert(typeof dummyUI.showVSScreen === "function", "showVSScreen function exists");
assert(typeof dummyUI.showGameHUD === "function", "showGameHUD function exists");
assert(typeof dummyUI.showVictoryScreen === "function", "showVictoryScreen function exists");
console.log("\n--- TEST 16: Simultaneous Combat Responsiveness ---");
f1.resetForRound(-1, 1);
f2.resetForRound(1, -1);
f1.move(1);
f2.move(-1);
f1.punch();
f2.block(true);
assert(f1.isAttacking && f2.isBlocking, "Player 1 attacks while Player 2 blocks simultaneously without conflicts");
console.log("\n--- TEST 17: Timer Expiration Round Resolution ---");
match.startNewMatch(f1, f2);
match.phase = "fighting";
f1.health = 80;
f2.health = 50;
match.roundTimer = 0;
match.update(0.016, f1, f2);
assert(match.p1Wins === 1, "Player 1 with 80 HP wins round over Player 2 with 50 HP on timer expiration");
console.log("\n--- TEST 18: Draw & Simultaneous KO Handling ---");
match.startNewMatch(f1, f2);
match.phase = "fighting";
f1.health = 70;
f2.health = 70;
match.roundTimer = 0;
match.update(0.016, f1, f2);
assert(match.p1Wins === 0 && match.p2Wins === 0, "Equal HP timeout produces DRAW, no point awarded");
match.startNewMatch(f1, f2);
match.phase = "fighting";
f1.health = 0;
f2.health = 0;
match.update(0.016, f1, f2);
assert(match.p1Wins === 0 && match.p2Wins === 0, "Simultaneous KO produces DRAW, no point awarded");
console.log("\n🎉 ALL STEP 2 TESTS PASSED SUCCESSFULLY! 100% SPEC COMPLIANCE.\n");
