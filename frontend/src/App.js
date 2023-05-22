import './App.css';
import AppTopBar from './components/AppBar';
import { useState } from 'react';
import LoginScreen from './components/LoginScreen';



function App() {
  let loggedin = useState(false);

  return (
    <div className="App">
      <header className="App-header">
       { loggedin?
        <>
        <AppTopBar />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </>
        : 
        <>
          <LoginScreen/>
        </>
        }
      </header>
    </div>
  );
}

export default App;
