import React from 'react';
import logo from './logo.svg';
import './App.css';
import StateHook from './StateHook'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org/docs/hooks-intro.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Hooks
        </a>
      </header>
      <section>
        <StateHook />
      </section>
    </div>
  );
}

export default App;
