import React, { useContext } from 'react';
import { formatNumber } from '../utils/number_helpers';
import { GameContext } from '../contexts/GameContext';

interface StatsDisplayProps {

}

const StatsDisplay: React.FC<StatsDisplayProps> = ({ }) => {
  const gameContect = useContext(GameContext);
  return (
    <div className="stats-display">
      <p>Followers: {formatNumber(gameContect.gameState.followers)}</p>
      <p>Followers per Click: {formatNumber(gameContect.gameState.followersPerClick)}</p>
      <p>Followers per Second: {formatNumber(gameContect.gameState.followersPerSecond)}</p>
      <p>Donations: {formatNumber(gameContect.gameState.donations)} $</p>
    </div>
  );
};

export default StatsDisplay;
