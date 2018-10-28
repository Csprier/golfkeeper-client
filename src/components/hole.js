import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addStrokeToTotal, removeStrokeToTotal, addStrokeToHole, removeStrokeFromHole } from '../actions/scoreActions';
import '../css/hole.css';


class Hole extends Component {
  addScoreToTotal = () => {
    console.log('One stroke added.');
    this.props.dispatch(addStrokeToTotal());
    this.props.dispatch(addStrokeToHole(this.props.hole));
    console.log(this.props.hole, this.props.score);
  }

  subScoreToTotal = () => {
    console.log('One stroke deducted.');
    this.props.dispatch(removeStrokeToTotal());
    this.props.dispatch(removeStrokeFromHole(this.props.hole));
    console.log(this.props.hole, this.props.score);
  }

  render() {
    console.log(this.props);
    return (
      <div className="hole-container">
        <h3>{this.props.hole}</h3>
        <div className="score-display">
          <p>{this.props.score}</p>
          <button className="score-button" onClick={this.addScoreToTotal}>+</button>
          <button className="score-button" onClick={this.subScoreToTotal}>-</button>
        </div>
      </div>
    );
  }
}

export default connect()(Hole);