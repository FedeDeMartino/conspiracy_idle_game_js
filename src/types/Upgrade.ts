import { ModifierType } from '../enums/modifierTypeEnum'

export interface Upgrade {
  id: number,
  name: string,
  initialCost: number,
  description: string,
  costModifier: number,
  timesPurchased: number,
  modifierType: ModifierType,
  buffPercentage: number
}

export const initialGameState: Upgrade = {
  id: 0,
  name: '',
  initialCost: 0,
  description: '',
  costModifier: 0,
  timesPurchased: 0,
  modifierType: ModifierType.clicksPerSecond,
  buffPercentage: 0
};
