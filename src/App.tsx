import React, { useState, useEffect } from 'react';
import './App.css';
import StatsDisplay from './components/StatsDisplay';
import ClickButton from './components/ClickButton';
import ConspiracyDescription from './components/ConspiracyDescription';
import { IGameState, initialGameState } from './models/GameState';
import { saveGameState } from './utils/storage';
import { Conspiracy } from './models/Conspiracy';
import { CONSPIRACIES } from './data/conspiracies';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<IGameState>(initialGameState);
  const [warningMessage, setWarningMessage] = useState<string | null>(null);
  const [activeConspiracyDescription, setActiveConspiracyDescription] = useState<string | null>(initialGameState.activeConspiracyDescription ?? null);
  const [activeConspiracyName, setActiveConspiracyName] = useState<string | null>(initialGameState.activeConspiracyName ?? null);

  useEffect(() => {
    saveGameState(gameState);
  }, [gameState]);

  useEffect(() => {
    const interval = setInterval(() => {
      setGameState((prevState) => ({
        ...prevState,
        followers: prevState.followers + prevState.followersPerSecond,
        donations: prevState.donations + prevState.followersPerSecond,
      }));
    }, 1000);
  
    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    setGameState((prevState) => ({
      ...prevState,
      followers: prevState.followers + prevState.followersPerClick,
      donations: prevState.donations + prevState.followersPerClick,
    }));
    if(gameState.followers == 10) {
      gameState.followersPerSecond = 1;
    }
  };

  const handleNewConspiracyClick = () => {
    const nextConspiracy = CONSPIRACIES[gameState.conspiracies.length];
    if(!nextConspiracy || nextConspiracy.cost > gameState.donations) {
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
  };

  return (
    <div className="App">
      <h1>Conspiracy Idle Game</h1>
      <ConspiracyDescription conspiracyText={activeConspiracyDescription} conspiracyName={activeConspiracyName} />
      <StatsDisplay gameState={gameState} />
      <ClickButton text='Click me!' onClick={handleClick} />
      <ClickButton text='Buy new Conspiracy' onClick={handleNewConspiracyClick} />
      <h2>{warningMessage}</h2>
      <h2>Active Conspiracies</h2>
      <ul>
        {gameState.conspiracies.map((conspiracy) => (
          <li key={conspiracy.name}>
            {conspiracy.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
