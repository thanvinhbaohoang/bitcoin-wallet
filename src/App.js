import logo from './logo.svg';
import './App.css';
import Wallet from './components/Wallet';
import NavBar from './components/NavBar';
import Receive from './components/Receive';
import Send from './components/Send';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <Receive/>
        <Send/>

        {/* <Wallet/> */}
  
      </header>
    </div>
  );
}

export default App;
