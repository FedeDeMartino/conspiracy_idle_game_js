import { useContext } from 'react';
import { GameContext } from '../../contexts/GameContext';
import ConspiracyDescription from '../ConspiracyDescription';
import './ConspiracyList.css';

const ConspiracyList = ({}) => {
  const { gameState } = useContext(GameContext);

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
