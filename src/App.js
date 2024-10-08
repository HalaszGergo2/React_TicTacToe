import './App.css';
import Jatekter from './components/Jatekter';

export const LISTA = ["O", " ", "X", " ", "O", "O", " ", "X", "X"]

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>TicTacToe</h1>
      </header>
      <article>
        <Jatekter LISTA={LISTA}/>
      </article>
    </div>
  );
}

export default App;
