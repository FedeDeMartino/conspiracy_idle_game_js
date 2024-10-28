import React, { useContext } from 'react';
import { GameContext } from '../../contexts/GameContext';
import { Upgrade } from '../../models/Upgrade';
import { ModifierType } from '../../enums/modifierTypeEnum';
import { roundToTwoDecimals } from '../../utils/number_helpers';

interface BuyUpgradeButtonProps {
  upgrade: Upgrade;
}

const BuyUpgradeButton: React.FC<BuyUpgradeButtonProps> = ({ upgrade }) => {
  const { gameState, setGameState } = useContext(GameContext);

  const buyUpgrade = () => {
    const currentCost = upgrade.currentCost();

    if (currentCost > gameState.donations) {
      return;
    }

    const updatedUpgrade: Upgrade = {
      ...upgrade,
      timesPurchased: upgrade.timesPurchased + 1,
      currentCost: upgrade.currentCost,
    };

    const updatedUpgrades = gameState.upgrades.map((u) =>
      u.id === upgrade.id ? updatedUpgrade : u
    );

    let updatedGameState = {
      ...gameState,
      donations: gameState.donations - currentCost,
      upgrades: updatedUpgrades,
    };

    if (upgrade.modifierType === ModifierType.clicksPerSecond) {
      updatedGameState.followersPerClickModifier = roundToTwoDecimals(updatedGameState.followersPerClickModifier + upgrade.buffPercentage);
    } else {
      updatedGameState.followersPerSecondModifier = roundToTwoDecimals(updatedGameState.followersPerSecondModifier + upgrade.buffPercentage);
    }

    setGameState(updatedGameState);
  };

  const isDisabled = upgrade.currentCost() > gameState.donations;

  return (
    <button onClick={buyUpgrade} disabled={isDisabled}>
      Buy This Upgrade
    </button>
  );
};

export default BuyUpgradeButton;
