import { useContext } from 'react';
import { formatNumber } from '../../utils/number_helpers';
import { GameContext } from '../../contexts/GameContext';

const StatsDisplay = ({ }) => {
  const gameContext = useContext(GameContext);

  return (
    <div className="stats-display">
      <p>Followers: {formatNumber(gameContext.gameState.followers)}</p>
      <p>Followers per Click: {formatNumber(gameContext.getEffectiveClicksPerSecond(gameContext.gameState))}</p>
      <p>Followers per Second: {formatNumber(gameContext.getEffectiveFollowersPerSecond(gameContext.gameState))}</p>
      <p>Donations: {formatNumber(gameContext.gameState.donations)} $</p>
    </div>
  );
};

export default StatsDisplay;
