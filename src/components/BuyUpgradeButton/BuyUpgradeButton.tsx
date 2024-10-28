import React, { useContext } from 'react';
import { GameContext } from '../../contexts/GameContext';
import { Upgrade } from '../../types/Upgrade';
import { ModifierType } from '../../enums/modifierTypeEnum';
import { roundToTwoDecimals } from '../../utils/number_helpers';
import { upgradeCurrentCost } from '../../utils/upgrade_helpers';

interface BuyUpgradeButtonProps {
  upgrade: Upgrade;
}

const BuyUpgradeButton: React.FC<BuyUpgradeButtonProps> = ({ upgrade }) => {
  const { gameState, setGameState } = useContext(GameContext);

  const buyUpgrade = () => {
    const currentCost = upgradeCurrentCost(upgrade);

    if (currentCost > gameState.donations) {
      return;
    }

    const updatedUpgrade: Upgrade = {
      ...upgrade,
      timesPurchased: upgrade.timesPurchased + 1
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

  const isDisabled = upgradeCurrentCost(upgrade) > gameState.donations;

  return (
    <button onClick={buyUpgrade} disabled={isDisabled}>
      Buy This Upgrade
    </button>
  );
};

export default BuyUpgradeButton;
