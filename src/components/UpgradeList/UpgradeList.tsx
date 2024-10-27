import { useContext } from 'react';
import { GameContext } from '../../contexts/GameContext';
import ConspiracyDescription from '../ConspiracyDescription';
import BuyUpgradeButton from '../BuyUpgradeButton';
import './UpgradeList.css';

const UpgradeList = ({}) => {
  const { gameState, restoreUpgrades } = useContext(GameContext);

  return (
    <div className="upgrade-list-container">
      <h3>Upgrades</h3>
      <ul>
        {restoreUpgrades(gameState).map((upgrade) => (
          <li key={upgrade.name}>
            <div>
              <p>{upgrade.name}</p>
              <ConspiracyDescription
                conspiracyText={upgrade.description}
                conspiracyName={upgrade.name}
              />
              <BuyUpgradeButton upgrade={upgrade} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpgradeList;
