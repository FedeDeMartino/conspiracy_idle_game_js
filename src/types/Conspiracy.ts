export interface Conspiracy {
  id: number,
  name: string,
  description: string,
  cost: number
}

export const initialGameState: Conspiracy = {
  id: 0,
  name: '',
  description: '',
  cost: 0,
};
