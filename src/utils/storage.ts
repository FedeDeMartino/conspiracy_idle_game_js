
import { IGameState } from '../models/GameState';

const STORAGE_KEY = 'conspiracyIdleGameState';

export const saveGameState = (state: IGameState): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
};

export const loadGameState = (): IGameState | null => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) as IGameState : null;
};
