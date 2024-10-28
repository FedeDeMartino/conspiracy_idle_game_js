import { useContext } from 'react';
import { GameContext } from '../../contexts/GameContext';
import { initialGameState } from '../../types/GameState';

const ResetGameButton = ({}) => {
  const { setGameState } = useContext(GameContext);

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
