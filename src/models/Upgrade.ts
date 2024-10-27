import { ModifierType } from '../enums/modifierTypeEnum'
import { GameState } from './GameState'

export interface IUpgrade {
  id: number,
  name: string,
  initialCost: number,
  description: string,
  costModifier: number,
  timesPurchased: number,
  modifierType: ModifierType,
  buy(gameState: GameState): void
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

  buy(gameState: GameState): void {
    gameState.donations -= this.currentCost();
    this.timesPurchased++;
  }
  
  currentCost(): number {
    return this.initialCost * this.costModifier * this.timesPurchased;
  }
}
