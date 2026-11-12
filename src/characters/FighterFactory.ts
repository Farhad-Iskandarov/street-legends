import { Fighter } from './Fighter';
import { CharacterConfig, CHARACTERS_REGISTRY } from './CharacterConfig';
import { CharacterModelLoader } from './CharacterModelLoader';

export class FighterFactory {
  public static createFighter(playerId: 1 | 2, characterId: string): Fighter {
    const config = CHARACTERS_REGISTRY[characterId] || CHARACTERS_REGISTRY['fighter_01'];
    return new Fighter(playerId, config);
  }

  public static createFromConfig(playerId: 1 | 2, config: CharacterConfig): Fighter {
    return new Fighter(playerId, config);
  }

  public static async createFighterAsync(playerId: 1 | 2, config: CharacterConfig): Promise<Fighter> {
    const meshResult = await CharacterModelLoader.loadCharacterModel(config);
    return new Fighter(playerId, config, meshResult);
  }
}
