import { Conspiracy } from '../models/Conspiracy';

interface ConspiracyListProps {
  conspiracies: Conspiracy[];
}

const ConspiracyList: React.FC<ConspiracyListProps> = ({ conspiracies }) => (
  <ul>
    {conspiracies.map((conspiracy) => (
      <li key={conspiracy.name}>{conspiracy.name}</li>
    ))}
  </ul>
);

export default ConspiracyList;
