import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
            <ul className="nav-bar">
            <li><a href="#">トップ</a></li>
            <li><a href="#">ログイン</a></li>
            <li><a href="#">ダッシュボード</a></li>
            <li><a href="#">お問い合わせ</a></li>
            </ul>
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
      </header>
    </div>
  );
}

export default App;
