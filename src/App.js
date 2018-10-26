import React, { Component } from 'react';

import Board from './components/board';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Golf Score Keeper</h1>
        <Board />
      </div>
    );
  }
}

export default App;
