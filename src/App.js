import logo from './logo.svg';
import './App.css';
import Wallet from './components/Wallet';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Wallet/>
        </p>
  
      </header>
    </div>
  );
}

export default App;
