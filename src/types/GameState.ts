import { Conspiracy } from './Conspiracy';
import { Upgrade } from './Upgrade';
import { UPGRADES } from '../data/upgrades';

export interface GameState {
  followers: number,
  followersPerClick: number,
  followersPerSecond: number,
  donations: number,
  conspiracies: Conspiracy[];
  upgrades: Upgrade[];
  activeConspiracy: Conspiracy | null;
  followersPerSecondModifier: number;
  followersPerClickModifier: number;
}

const CreateUpgrades = () => {
  return UPGRADES.map((upgrade) => {
    return {
      name: upgrade.name,
      initialCost: upgrade.initialCost,
      id: upgrade.id,
      description: upgrade.description,
      costModifier: upgrade.costModifier,
      timesPurchased: upgrade.timesPurchased,
      modifierType: upgrade.modifierType,
      buffPercentage: upgrade.buffPercentage
    };
  });
};

export const initialGameState: GameState = {
  followers: 0,
  followersPerClick: 1,
  followersPerSecond: 0,
  followersPerSecondModifier: 1,
  followersPerClickModifier: 1,
  donations: 0,
  conspiracies: [],
  upgrades: CreateUpgrades(),
  activeConspiracy: null,
};
