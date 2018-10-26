import React, { Component } from 'react';

import Hole from './hole';

import '../css/board.css';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      course: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18 ]
    }
  }

  render() {
    return (
      <div className='board-container'>
        <h2>Score Board</h2>
        {this.state.course.map((hole, i) => <Hole key={i} hole={hole}/>)}
      </div>
    );
  }
}

export default Board;