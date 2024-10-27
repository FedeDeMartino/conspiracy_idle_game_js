import React from 'react';
import StatsDisplay from './StatsDisplay';
import ClickButton from './ClickButton';
import ConspiracyDescription from './ConspiracyDescription';
import ConspiracyList from './ConspiracyList';
import UpgradeList from './UpgradeList';
import ResetGameButton from './ResetGameButton';
import { useConspiracyManager } from '../utils/hooks';
import { useGameState } from '../utils/hooks';

const Game: React.FC = () => {
  const { setGameState } = useGameState();
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
      <ResetGameButton />
      <ConspiracyDescription conspiracyText="About This Game" conspiracyName="About This Game" />
      <StatsDisplay />
      <ClickButton text='Click me!' onClick={handleClick} />
      <ClickButton text='Buy new Conspiracy' onClick={handleNewConspiracyClick} />
      {warningMessage && <h2>{warningMessage}</h2>}
      <h2>Active Conspiracies</h2>
      <ConspiracyList />
      <UpgradeList />
    </div>
  );
};


export default Game;
