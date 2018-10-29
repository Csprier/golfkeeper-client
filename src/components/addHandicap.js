import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addHandicap } from '../actions/scoreActions';
import '../css/addHandicap.css';


class AddHandicap extends Component {
  constructor(props) {
    super(props);
    this.submitHandicap = this.submitHandicap.bind(this);
    this.handleHandicapChange = this.handleHandicapChange.bind(this);

    this.state = {
      handicapValue: ''
    }
  }

  handleHandicapChange = (e) => {
    console.log(`Handicap: ${e.target.value}`);
    this.setState({
      handicapValue: e.target.value
    });
  }

  submitHandicap = (e) => {
    e.preventDefault();
    console.log('Submitting Handicap: ', this.state.handicapValue);
    this.props.dispatch(addHandicap(parseInt(this.state.handicapValue)));
  }

  render() {
    console.log(this.state);
    return (
      <div className="handicap-module">
        <form onSubmit={(e) => this.submitHandicap(e)}>
          <label>
            Add Handicap: 
            <input 
              className="handicap-module-input" 
              placeholder="Submit a handicap" 
              type="text" 
              name="add-handicap" 
              onChange={this.handleHandicapChange} 
              value={this.state.handicapValue}
            />
          </label>
          <button 
            className="handicap-module-button" 
            type="submit" 
            value="Submit" 
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(AddHandicap);