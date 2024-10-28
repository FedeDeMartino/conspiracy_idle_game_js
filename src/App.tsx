import Game from './components/Game';
import { GameContextProvider } from './contexts/GameContext';

const App: React.FC = () => {
  
  return (
    <GameContextProvider>
      <Game />
    </GameContextProvider>
  );
};

export default App;
