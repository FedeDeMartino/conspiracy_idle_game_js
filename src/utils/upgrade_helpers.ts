import { Upgrade } from '../types/Upgrade';

export const upgradeCurrentCost = (upgrade: Upgrade) => {
  return upgrade.initialCost * upgrade.costModifier * upgrade.timesPurchased;
}
