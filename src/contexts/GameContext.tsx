import { ReactNode, createContext, useState } from 'react';
import { GameState, initialGameState } from '../models/GameState';

interface GameContextType {
  gameState: GameState;
  setGameState: React.Dispatch<React.SetStateAction<GameState>>;
}

const GameContext = createContext<GameContextType>({
  gameState: initialGameState,
  setGameState: () => {},
});

const GameContextProvider = ({ children }: { children: ReactNode }) => {
  const [gameState, setGameState] = useState<GameState>(initialGameState);

  return (
    <GameContext.Provider value={{ gameState, setGameState }}>
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameContextProvider };
