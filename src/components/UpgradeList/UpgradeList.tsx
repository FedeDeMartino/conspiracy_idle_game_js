import { useGameState } from '../../utils/hooks';
import ConspiracyDescription from '../ConspiracyDescription';
import './UpgradeList.css';

const UpgradeList = ({}) => {
  const { gameState } = useGameState();

  return (
    <div className="upgrade-list-container">
      <h3>Upgrades</h3>
      <ul>
        {gameState.upgrades.map((upgrade) => (
          <li key={upgrade.name}>
            <div>
              <p>{upgrade.name}</p>
              <ConspiracyDescription
                conspiracyText={upgrade.description}
                conspiracyName={upgrade.name}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpgradeList;
