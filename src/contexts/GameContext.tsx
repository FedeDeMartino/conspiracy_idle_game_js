import { ReactNode, createContext, useState } from 'react';
import { GameState, initialGameState } from '../types/GameState';

interface GameContextType {
  gameState: GameState;
  setGameState: React.Dispatch<React.SetStateAction<GameState>>;
  getEffectiveFollowersPerSecond: (state: GameState) => number;
  getEffectiveClicksPerSecond: (state: GameState) => number;
}

const GameContext = createContext<GameContextType>({
  gameState: initialGameState,
  setGameState: () => {},
  getEffectiveFollowersPerSecond: () => 0,
  getEffectiveClicksPerSecond: () => 0,
});

const GameContextProvider = ({ children }: { children: ReactNode }) => {
  const [gameState, setGameState] = useState<GameState>(initialGameState);

  const getEffectiveFollowersPerSecond = (state: GameState) => {
    return state.followersPerSecond * state.followersPerSecondModifier;
  };

  const getEffectiveClicksPerSecond = (state: GameState) => {
    return state.followersPerClick * state.followersPerClickModifier;
  }

  return (
    <GameContext.Provider value={{ gameState, setGameState, getEffectiveFollowersPerSecond, getEffectiveClicksPerSecond }}>
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameContextProvider };
