import { Conspiracy } from '../models/Conspiracy';
import ConspiracyDescription from './ConspiracyDescription';
import './ConspiracyList.css';

interface ConspiracyListProps {
  conspiracies: Conspiracy[];
}

const ConspiracyList: React.FC<ConspiracyListProps> = ({ conspiracies }) => (
  <ul>
    {conspiracies.map((conspiracy) => (
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
  </ul>
);

export default ConspiracyList;
