import Game from './components/Game';
import { MyGameContextProvider } from './contexts/GameContext';

const App: React.FC = () => {
  
  return (
    <div className="App">
      <MyGameContextProvider>
        <Game />
      </MyGameContextProvider>
    </div>
  );
};

export default App;
