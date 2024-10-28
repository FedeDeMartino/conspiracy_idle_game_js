
import { GameState } from '../types/GameState';

const STORAGE_KEY = 'conspiracyIdleGameState';

export const saveGameState = (state: GameState): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
};

export const loadGameState = (): GameState | null => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) as GameState : null;
};
