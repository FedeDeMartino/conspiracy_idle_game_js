import { useState, useEffect, useContext, useCallback } from 'react';
import { initialGameState } from '../models/GameState';
import { Conspiracy } from '../models/Conspiracy';
import { loadGameState, saveGameState } from './storage';
import { CONSPIRACIES } from '../data/conspiracies';
import { GameContext } from '../contexts/GameContext';

const useGameState = () => {
  const { gameState, setGameState } = useContext(GameContext);

  useEffect(() => {
    const state = loadGameState();
    setGameState(state ?? initialGameState);

    const interval = setInterval(() => {
      setGameState((prevState) => {
        saveGameState(prevState);
        return {
          ...prevState,
          followers: prevState.followers + prevState.followersPerSecond,
          donations: prevState.donations + prevState.followersPerSecond,
        };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [setGameState]);

  return { gameState, setGameState };
};

const useConspiracyManager = () => {
  const { gameState, setGameState } = useContext(GameContext);
  const [warningMessage, setWarningMessage] = useState<string | null>(null);
  const [activeConspiracyDescription, setActiveConspiracyDescription] = useState<string | null>(initialGameState.activeConspiracyDescription ?? null);
  const [activeConspiracyName, setActiveConspiracyName] = useState<string | null>(initialGameState.activeConspiracyName ?? null);

  const handleNewConspiracyClick = useCallback(() => {
    const nextConspiracy = CONSPIRACIES[gameState.conspiracies.length];
    if (!nextConspiracy || nextConspiracy.cost > gameState.donations) {
      setWarningMessage(`Not enough followers to buy new conspiracy. You need a total of ${nextConspiracy.cost}$`);

      setTimeout(() => {
        setWarningMessage(null);
      }, 2000);

      return;
    }

    setActiveConspiracyDescription(nextConspiracy.description);
    setActiveConspiracyName(nextConspiracy.name);
    setGameState((prevState) => ({
      ...prevState,
      conspiracies: [
        ...prevState.conspiracies,
        new Conspiracy(nextConspiracy.name, nextConspiracy.cost, nextConspiracy.id, nextConspiracy.description),
      ],
      donations: prevState.donations - nextConspiracy.cost,
    }));
  }, [gameState, setGameState]);

  return {
    warningMessage,
    activeConspiracyDescription,
    activeConspiracyName,
    handleNewConspiracyClick,
  };
};

export { useGameState, useConspiracyManager };
