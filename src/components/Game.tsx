import React, { useCallback } from 'react';
import StatsDisplay from './StatsDisplay';
import ClickButton from './ClickButton';
import ConspiracyDescription from './ConspiracyDescription';
import ConspiracyList from './ConspiracyList';
import { useGameState, useConspiracyManager } from '../utils/hooks';


const Game: React.FC = () => {
  const { gameState, setGameState } = useGameState();
  const {
    warningMessage,
    activeConspiracyDescription,
    activeConspiracyName,
    handleNewConspiracyClick,
  } = useConspiracyManager();

  const handleClick = useCallback(() => {
    setGameState((prevState) => ({
      ...prevState,
      followers: prevState.followers + prevState.followersPerClick,
      donations: prevState.donations + prevState.followersPerClick,
    }));

    if (gameState.followers === 10) {
      setGameState((prevState) => ({
        ...prevState,
        followersPerSecond: 1,
      }));
    }
  }, [gameState.followers, setGameState]);

  return (
    <div className="App">
      <h1>Conspiracy Idle Game</h1>
      <ConspiracyDescription conspiracyText={activeConspiracyDescription} conspiracyName={activeConspiracyName} />
      <StatsDisplay />
      <ClickButton text='Click me!' onClick={handleClick} />
      <ClickButton text='Buy new Conspiracy' onClick={handleNewConspiracyClick} />
      {warningMessage && <h2>{warningMessage}</h2>}
      <h2>Active Conspiracies</h2>
      <ConspiracyList conspiracies={gameState.conspiracies} />
    </div>
  );
};


export default Game;
