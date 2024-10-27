import { ReactNode, createContext, useState } from 'react';
import { GameState, initialGameState } from '../models/GameState';
import { Upgrade } from '../models/Upgrade';

interface GameContextType {
  gameState: GameState;
  setGameState: React.Dispatch<React.SetStateAction<GameState>>;
  getEffectiveFollowersPerSecond: (state: GameState) => number;
  restoreUpgrades: (state: GameState) => Upgrade[];
}

const GameContext = createContext<GameContextType>({
  gameState: initialGameState,
  setGameState: () => {},
  getEffectiveFollowersPerSecond: () => 0,
  restoreUpgrades: () => [],
});

const GameContextProvider = ({ children }: { children: ReactNode }) => {
  const [gameState, setGameState] = useState<GameState>(initialGameState);

  const getEffectiveFollowersPerSecond = (state: GameState) => {
    return state.followersPerSecond * state.followersPerSecondModifier;
  };

  const restoreUpgrades = (state: GameState): Upgrade[] => {
    return state.upgrades.map((upgrade) =>
        new Upgrade(
          upgrade.name,
          upgrade.initialCost,
          upgrade.id,
          upgrade.description,
          upgrade.costModifier,
          upgrade.timesPurchased,
          upgrade.modifierType
        )
    );
  };

  return (
    <GameContext.Provider value={{ gameState, setGameState, getEffectiveFollowersPerSecond, restoreUpgrades }}>
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameContextProvider };
