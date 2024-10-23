export interface IConspiracy {
  id: number,
  name: string,
  cost: number
}

export class Conspiracy implements IConspiracy {
  id: number;
  name: string;
  cost: number;
  description: string;

  constructor(name: string, cost: number, id: number, description: string) {
    this.id = id
    this.name = name;
    this.cost = cost;
    this.description = description;
  }
}
