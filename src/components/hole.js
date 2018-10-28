import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addStrokeToTotal, removeStrokeToTotal } from '../actions/scoreActions';
import '../css/hole.css';


class Hole extends Component {
  constructor(props) {
    super(props);
  }

  addScore = () => {
    console.log('One stroke added.');
    this.props.dispatch(addStrokeToTotal());
  }

  subScore = () => {
    console.log('One stroke deducted.');
    this.props.dispatch(removeStrokeToTotal());
  }

  render() {
    console.log(this.props);
    return (
      <div className="hole-container">
        <h3>{this.props.hole}</h3>
        <div className="score-display">
          <p>{this.props.score}</p>
          <button className="score-button" onClick={this.addScore}>+</button>
          <button className="score-button" onClick={this.subScore}>-</button>
        </div>
      </div>
    );
  }
}

export default Hole;
// const mapStateToProps = state => ({
//  course: state.course
// });

// export default connect(mapStateToProps)(Hole);