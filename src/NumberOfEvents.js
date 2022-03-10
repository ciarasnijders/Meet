import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {

  render() {
    return(
      <div className="NumberOfEvents">
        
        <p>Number of Events</p>
        <input 
          type="number" 
          className="numberOfEvents"
          value={this.props.numberOfEvents} 
          onChange={(e) => this.props.updateNumberOfEvents(e.target.value)}
        />
        <ErrorAlert text={this.props.errorText} />
      </div>
    )
  }
};

export default NumberOfEvents;