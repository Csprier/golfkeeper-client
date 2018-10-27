import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Board from './components/board';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>Golf Score Keeper</h1>
          {/* <Navbar /> */}
          <Board />
        </div>
      </Provider>
    );
  }
}

export default App;
