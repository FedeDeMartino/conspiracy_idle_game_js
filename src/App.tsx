import Game from './components/Game';
import { GameContextProvider } from './contexts/GameContext';

const App: React.FC = () => {
  
  return (
    <div className="App">
      <GameContextProvider>
        <Game />
      </GameContextProvider>
    </div>
  );
};

export default App;
