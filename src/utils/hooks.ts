import { useState, useEffect, useContext } from 'react';
import { initialGameState } from '../models/GameState';
import { Conspiracy } from '../models/Conspiracy';
import { loadGameState, saveGameState } from './storage';
import { CONSPIRACIES } from '../data/conspiracies';
import { GameContext } from '../contexts/GameContext';

const useGameState = () => {
  const { gameState, setGameState, getEffectiveFollowersPerSecond  } = useContext(GameContext);

  useEffect(() => {
    const state = loadGameState();
    setGameState(state ?? initialGameState);
    
    const interval = setInterval(() => {
      setGameState((prevState) => {
        saveGameState(prevState);
        return {
          ...prevState,
          followers: prevState.followers + getEffectiveFollowersPerSecond(prevState),
          donations: prevState.donations + getEffectiveFollowersPerSecond(prevState)
        };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return { gameState, setGameState };
};

const useConspiracyManager = () => {
  const { gameState, setGameState } = useContext(GameContext);
  const [warningMessage, setWarningMessage] = useState<string | null>(null);

  const handleNewConspiracyClick = () => {
    const nextConspiracy = CONSPIRACIES[gameState.conspiracies.length];
    if (!nextConspiracy || nextConspiracy.cost > gameState.donations) {
      setWarningMessage(`Not enough donations to buy new conspiracy. You need a total of ${nextConspiracy.cost}$`);

      setTimeout(() => {
        setWarningMessage(null);
      }, 2000);

      return;
    }

    setGameState((prevState) => ({
      ...prevState,
      conspiracies: [
        ...prevState.conspiracies,
        new Conspiracy(nextConspiracy.name, nextConspiracy.cost, nextConspiracy.id, nextConspiracy.description),
      ],
      activeConspiracy: nextConspiracy,
      donations: prevState.donations - nextConspiracy.cost,
      followersPerSecondModifier: (prevState.conspiracies.length + 1) * 1.5,
      followersPerSecond: 1,
    }));
  };

  return {
    warningMessage,
    handleNewConspiracyClick,
  };
};

export { useGameState, useConspiracyManager };
