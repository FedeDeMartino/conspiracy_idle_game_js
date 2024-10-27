import React, { useContext } from 'react';
import { GameContext } from '../../contexts/GameContext';
import { Upgrade } from '../../models/Upgrade';

interface BuyUpgradeButtonProps {
  upgrade: Upgrade;
}

const BuyUpgradeButton: React.FC<BuyUpgradeButtonProps> = ({ upgrade }) => {
  const { gameState } = useContext(GameContext);

  const buyUpgrade = () => {
    upgrade.buy(gameState);
  };
  
  const isDisabled = upgrade.currentCost() > gameState.donations;

  return (
    <button onClick={buyUpgrade} disabled={isDisabled} style={{ opacity: isDisabled ? 0.5 : 1 }}>
      Buy This Upgrade
    </button>
  );
};

export default BuyUpgradeButton;
