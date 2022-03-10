import React, { Component } from 'react';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents } from './api';
import './App.css';
import './nprogress.css';


class App extends Component {
  state = {
    events: [],
    locations: [], 
    NumberOfEvents: 32,
    currentLocation:"all",
    errorText: ''
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ 
          events: events.slice(0, this.state.NumberOfEvents), 
          locations: extractLocations(events) 
        });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  updateEvents = (locations) => {
    getEvents().then((events) => {
      const locationEvents = (locations === 'all') 
      ? events  
      : events.filter((event) => locations.includes(event.location));
      // console.log('location events ---->', locationEventslength)
      this.setState({ 
        events: locationEvents.slice(0, this.state.NumberOfEvents), 
        locations: locations, 
      })
    })

  };

  updateNumberOfEvents = (numberOfEvents) => {
    // console.log('app from tests --->', NumberOfEvents)
    this.setState(
      {
        NumberOfEvents: numberOfEvents,
        errorText: numberOfEvents >= 32 ? 'Please select a number from 1 to 32' : ''
      },
    );
    this.updateEvents(this.state.locations)
  };


  render() {
    return (
      <div className="App">
        <CitySearch 
          locations={this.state.locations} 
          updateEvents={this.updateEvents} 
          numberOfEvents={this.state.NumberOfEvents}
        />
        <NumberOfEvents 
          updateNumberOfEvents={this.updateNumberOfEvents}
          numberOfEvents={this.state.NumberOfEvents}
          errorText ={this.state.errorText}
        />
        <EventList 
          events={this.state.events}
          numberOfEvents={this.state.NumberOfEvents} 
        />
      </div>
    );
  }
}

export default App;