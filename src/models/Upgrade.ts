import { ModifierType } from '../enums/modifierTypeEnum'

export interface IUpgrade {
  id: number,
  name: string,
  initialCost: number,
  description: string,
  costModifier: number,
  timesPurchased: number,
  modifierType: ModifierType,
  buffPercentage: number
}

export class Upgrade implements IUpgrade {
  id: number;
  name: string;
  initialCost: number;
  description: string;
  costModifier: number;
  timesPurchased: number;
  modifierType: ModifierType;
  buffPercentage: number;

  constructor(name: string, initialCost: number, id: number, description: string, costModifier: number, timesPurchased: number, modifierType: ModifierType, buffPercentage: number) {
    this.id = id
    this.name = name;
    this.initialCost = initialCost;
    this.description = description;
    this.costModifier = costModifier;
    this.timesPurchased = timesPurchased;
    this.modifierType = modifierType
    this.buffPercentage = buffPercentage;
  }
  
  currentCost(): number {
    return this.initialCost * this.costModifier * this.timesPurchased;
  }
}
