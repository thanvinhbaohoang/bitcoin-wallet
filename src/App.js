import logo from './logo.svg';
import './App.css';
import Wallet from './components/Wallet';
import {Helmet} from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
          <script src="bitcore/packages/bitcore-lib/bitcore-lib.js" 
          type="text/javascript" />
      </Helmet>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and <Wallet/>.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
