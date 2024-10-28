import React, { useEffect, useContext } from 'react';
import StatsDisplay from '../StatsDisplay';
import ClickButton from '../ClickButton';
import ConspiracyDescription from '../ConspiracyDescription';
import ConspiracyList from '../ConspiracyList';
import UpgradeList from '../UpgradeList';
import ResetGameButton from '../ResetGameButton';
import { useConspiracyManager } from '../../utils/hooks';
import { loadGameState, saveGameState } from '../../utils/storage';
import { initialGameState } from '../../types/GameState';
import { GameContext } from '../../contexts/GameContext';
import './Game.css';

const Game: React.FC = () => {
  const { setGameState, getEffectiveFollowersPerSecond, getEffectiveClicksPerSecond  } = useContext(GameContext);
  const {
    warningMessage,
    handleNewConspiracyClick
  } = useConspiracyManager();

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

  const handleClick = () => {
    setGameState((prevState) => ({
      ...prevState,
      followers: prevState.followers + getEffectiveClicksPerSecond(prevState),
      donations: prevState.donations + getEffectiveClicksPerSecond(prevState),
    }));
  };

  return (
    <div className="game">
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
