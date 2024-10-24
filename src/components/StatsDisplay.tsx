import React, { useContext } from 'react';
import { formatNumber } from '../utils/number_helpers';
import { GameContext } from '../contexts/GameContext';

interface StatsDisplayProps {

}

const StatsDisplay: React.FC<StatsDisplayProps> = ({ }) => {
  const gameContext = useContext(GameContext);

  return (
    <div className="stats-display">
      <p>Followers: {formatNumber(gameContext.gameState.followers)}</p>
      <p>Followers per Click: {formatNumber(gameContext.gameState.followersPerClick)}</p>
      <p>Followers per Second: {formatNumber(gameContext.getEffectiveFollowersPerSecond(gameContext.gameState))}</p>
      <p>Donations: {formatNumber(gameContext.gameState.donations)} $</p>
    </div>
  );
};

export default StatsDisplay;
