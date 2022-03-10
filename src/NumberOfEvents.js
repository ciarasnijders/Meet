import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: '32',
    infoText:''
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    this.setState({
      numberOfEvents: value,
      infoText:''
    });

    this.props.updateNumberOfEvents(value);
  }

  render() {
    return(
      <div className="NumberOfEvents">
        <ErrorAlert text={this.props.errorText} />
        <p>Number of Events</p>
        <input 
          type="number" 
          className="numberOfEvents"
          value={this.state.numberOfEvents} 
          onChange={this.handleInputChange}
        />
      </div>
    )
  }
};

export default NumberOfEvents;