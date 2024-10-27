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
}

const CreateUpgrades = () => {
  return UPGRADES.map((upgrade) => {
    return new Upgrade(upgrade.name,
      upgrade.initialCost,
      upgrade.id,
      upgrade.description,
      upgrade.costModifier,
      upgrade.timesPurchased,
      upgrade.modifierType);
  });
};

export const initialGameState: GameState = {
  followers: 0,
  followersPerClick: 1,
  followersPerSecond: 0,
  followersPerSecondModifier: 1,
  donations: 0,
  conspiracies: [],
  upgrades: CreateUpgrades(),
  activeConspiracy: null,
};
