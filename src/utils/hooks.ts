import { useState, useContext } from 'react';
import { Conspiracy } from '../types/Conspiracy';
import { CONSPIRACIES } from '../data/conspiracies';
import { GameContext } from '../contexts/GameContext';

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
        {
          name: nextConspiracy.name,
          cost: nextConspiracy.cost,
          id: nextConspiracy.id,
          description: nextConspiracy.description
        },
      ],
      activeConspiracy: nextConspiracy,
      donations: prevState.donations - nextConspiracy.cost,
      followersPerSecondModifier: prevState.followersPerSecondModifier * 1.5,
      followersPerSecond: 1,
    }));
  };

  return {
    warningMessage,
    handleNewConspiracyClick,
  };
};

export { useConspiracyManager };
