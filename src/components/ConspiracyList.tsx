import ConspiracyDescription from './ConspiracyDescription';
import './ConspiracyList.css';
import { useGameState } from '../utils/hooks';

const ConspiracyList = ({}) => {
  const { gameState } = useGameState();

  return (<ul>
    {gameState.conspiracies.map((conspiracy) => (
      <li key={conspiracy.name} className="conspiracy-item">
        <div className="conspiracy-item-content">
          <p>{conspiracy.name}</p>
          <ConspiracyDescription
            conspiracyText={conspiracy.description}
            conspiracyName={conspiracy.name}
          />
        </div>
      </li>
    ))}
  </ul>)
};

export default ConspiracyList;
