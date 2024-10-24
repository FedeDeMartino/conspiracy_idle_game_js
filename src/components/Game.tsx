import React from 'react';
import StatsDisplay from './StatsDisplay';
import ClickButton from './ClickButton';
import ConspiracyDescription from './ConspiracyDescription';
import ConspiracyList from './ConspiracyList';
import { useConspiracyManager } from '../utils/hooks';
import { useGameState } from '../utils/hooks';

const Game: React.FC = () => {
  const { gameState, setGameState } = useGameState();
  const {
    warningMessage,
    handleNewConspiracyClick
  } = useConspiracyManager();

  const handleClick = () => {
    setGameState((prevState) => ({
      ...prevState,
      followers: prevState.followers + prevState.followersPerClick,
      donations: prevState.donations + prevState.followersPerClick,
    }));
  };

  return (
    <div className="App">
      <h1>Conspiracy Idle Game</h1>
      <ConspiracyDescription conspiracyText={gameState.activeConspiracy?.description} conspiracyName={gameState.activeConspiracy?.name} />
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
