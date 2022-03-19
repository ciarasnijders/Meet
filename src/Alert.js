import React, { Component } from 'react';

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
  }

  getStyle = () => {
    return {
      color: this.color,
    };
  }

  render() {
    return (
      <div className="Alert">
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'blue';
  }

  getStyle = () => {
   
    return {
      color: this.color,
      position: 'relative',
    };
  }
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'red';
  }

  getStyle = () => {
    return {
      color: this.color,
      position: 'relative',
    };
  }
}

class WarningAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'orange';
  }

  getStyle = () => {
    return {
      color: this.color,
      position: 'relative',
    };
  }
  render() {
    return(
      <h3>{this.props.text}</h3>
    )
  }
}

export { InfoAlert, ErrorAlert, WarningAlert };