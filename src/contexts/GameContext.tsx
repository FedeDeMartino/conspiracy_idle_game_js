import { ReactNode, createContext, useState } from 'react';
import { GameState, initialGameState } from '../models/GameState';

interface GameContextType {
  gameState: GameState;
  setGameState: React.Dispatch<React.SetStateAction<GameState>>;
  getEffectiveFollowersPerSecond: (state: GameState) => number;
}

const GameContext = createContext<GameContextType>({
  gameState: initialGameState,
  setGameState: () => {},
  getEffectiveFollowersPerSecond: () => 0,
});

const GameContextProvider = ({ children }: { children: ReactNode }) => {
  const [gameState, setGameState] = useState<GameState>(initialGameState);

  const getEffectiveFollowersPerSecond = (state: GameState) => {
    return state.followersPerSecond * state.followersPerSecondModifier;
  };

  return (
    <GameContext.Provider value={{ gameState, setGameState, getEffectiveFollowersPerSecond }}>
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameContextProvider };
