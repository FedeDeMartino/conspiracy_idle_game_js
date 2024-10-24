import { Conspiracy } from './Conspiracy';

export interface GameState {
  followers: number,
  followersPerClick: number,
  followersPerSecond: number,
  donations: number,
  conspiracies: Conspiracy[];
  activeConspiracy: Conspiracy | null;
  followersPerSecondModifier: number;
}

export const initialGameState: GameState = {
  followers: 0,
  followersPerClick: 1,
  followersPerSecond: 0,
  followersPerSecondModifier: 1,
  donations: 0,
  conspiracies: [],
  activeConspiracy: null,
};
