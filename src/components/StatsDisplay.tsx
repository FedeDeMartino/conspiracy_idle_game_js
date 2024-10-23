import React from 'react';
import { IGameState } from '../models/GameState';
import { formatNumber } from '../utils/number_helpers';

interface StatsDisplayProps {
  gameState: IGameState;
}

const StatsDisplay: React.FC<StatsDisplayProps> = ({ gameState }) => {
  return (
    <div className="stats-display">
      <p>Followers: {formatNumber(gameState.followers)}</p>
      <p>Followers per Click: {formatNumber(gameState.followersPerClick)}</p>
      <p>Followers per Second: {formatNumber(gameState.followersPerSecond)}</p>
      <p>Donations: {formatNumber(gameState.donations)} $</p>
    </div>
  );
};

export default StatsDisplay;
