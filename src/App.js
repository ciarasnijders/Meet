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
    currentLocation:"all"
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
    console.log(locations, "location")

    getEvents().then((events) => {
      console.log(events);
      const locationEvents = (locations === 'all') 
      ? events  
      : events.filter((event) => locations.includes(event.location));
      console.log(locationEvents, "locationsEvents")
      this.setState({ 
        events: locationEvents.slice(0, this.state.NumberOfEvents), 
        locations: locations, 
      })
    })

  };

  updateNumberOfEvents = (NumberOfEvents) => {
    this.setState(
      {
        NumberOfEvents
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