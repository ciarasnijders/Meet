import React, { Component } from 'react';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents } from './api';
import './App.css';
import './nprogress.css';
import { WarningAlert } from './Alert';


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
          events,
          locations: extractLocations(events) 
        });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') 
      ? events  
      : events.filter((event) => event.location === location);  
      console.log(locationEvents, "locationEvents!!!!!!")
      console.log(locationEvents.slice(0, this.state.NumberOfEvents), "!!!!!!!")      
      this.setState({ 
        events: locationEvents.slice(0, this.state.NumberOfEvents), 
        currentLocation: location, 
      })
    })

  };

  updateNumberOfEvents = (numberOfEvents) => {
    this.setState(
      {
        NumberOfEvents: numberOfEvents,
        errorText: numberOfEvents >= 32 ? 'Please select a number from 1 to 32' : ''
      },
    );
    this.updateEvents(this.state.currentLocation)
  };


  render() {
    console.log(this.state.events, "this.state.events!!!")
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
          errorText={this.state.errorText}
        />
        <EventList 
          events={this.state.events}
          numberOfEvents={this.state.NumberOfEvents} 
        />
        {
          !navigator.onLine && <WarningAlert />
        }
      </div>
    );
  }
}

export default App;