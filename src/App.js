import React, { Component } from 'react';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents, checkToken, getAccessToken } from './api';
import './App.css';
import './nprogress.css';
import WelcomeScreen from './WelcomeScreen';



class App extends Component {
  state = {
    events: [],
    locations: [], 
    NumberOfEvents: 32,
    currentLocation:"all",
    errorText: '',
    showWelcomeScreen: undefined
  }

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({ events, locations: extractLocations(events) });
        }
      });
    }
  }
  

  componentWillUnmount(){
    this.mounted = false;
  }

  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') 
      ? events  
      : events.filter((event) => event.location === location);     
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
    
    if (this.state.showWelcomeScreen === undefined) return 
    <div
      className="App" 
    />

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
        <WelcomeScreen 
          showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => { getAccessToken() }} 
        />
      </div>
    );
  }
}

export default App;