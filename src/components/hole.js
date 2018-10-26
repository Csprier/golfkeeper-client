import React, { Component } from 'react';
import '../css/hole.css';


class Hole extends Component {
  constructor(props) {
    super(props);
    this.addScore = this.addScore.bind(this);
    this.subScore = this.subScore.bind(this);
    this.state = {
      score: 0
    }
  }

  addScore = () => {
    console.log('One stroke added.');
    this.setState({ score: this.state.score + 1 })
  }

  subScore = () => {
    console.log('One stroke deducted.');
    this.setState({ score: this.state.score - 1 });
  }

  render() {
    return (
      <div className="hole-container">
        <h3>{this.props.hole}</h3>
        <div className="score-display">
          <p>{this.state.score}</p>
          <button className="score-button" onClick={this.addScore}>+</button>
          <button className="score-button" onClick={this.subScore}>-</button>
        </div>
      </div>
    );
  }
}

export default Hole;