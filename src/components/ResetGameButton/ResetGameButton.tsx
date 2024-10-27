import { useGameState } from '../../utils/hooks';
import { initialGameState } from '../../models/GameState';

const ResetGameButton = ({}) => {
  const { setGameState } = useGameState();

  const resetGame = () => {
    setGameState(() => (initialGameState));
  };

  return (
    <button onClick={resetGame}>
      Reset Game
    </button>
  );
};

export default ResetGameButton;
