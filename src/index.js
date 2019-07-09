import React from 'react';
import ReactDOM from 'react-dom';

import config from './config'
// import SearchBar from './components/SearchBar'
import GameList from './components/GameList'

import './index.css';
import * as serviceWorker from './serviceWorker';

window.gl = config

function App() {
  return (
    <div>
      caca
    </div>

  );
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
