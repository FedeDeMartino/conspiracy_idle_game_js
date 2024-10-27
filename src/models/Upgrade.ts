import { ModifierType } from '../enums/modifierTypeEnum'

export interface IUpgrade {
  id: number,
  name: string,
  initialCost: number,
  description: string,
  costModifier: number,
  timesPurchased: number,
  modifierType: ModifierType,
}

export class Upgrade implements IUpgrade {
  id: number;
  name: string;
  initialCost: number;
  description: string;
  costModifier: number;
  timesPurchased: number;
  modifierType: ModifierType;

  constructor(name: string, initialCost: number, id: number, description: string, costModifier: number, timesPurchased: number, modifierType: ModifierType) {
    this.id = id
    this.name = name;
    this.initialCost = initialCost;
    this.description = description;
    this.costModifier = costModifier;
    this.timesPurchased = timesPurchased;
    this.modifierType = modifierType
  }
}
