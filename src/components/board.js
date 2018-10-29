import React, { Component } from 'react';
import { connect } from 'react-redux';
import Hole from './hole';

import '../css/board.css';

class Board extends Component {
  render() {
    return (
      <div className='board-container'>
        <h2>Score Board</h2>
        {this.props.course.map((hole, i) => <Hole key={i} hole={hole.hole} score={hole.score} />)}
        <span className="total-score">Total Score: {this.props.total}</span>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  course: state.course,
  total: state.total
});

export default connect(mapStateToProps)(Board);