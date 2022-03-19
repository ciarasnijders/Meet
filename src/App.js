import React, { Component } from 'react';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents, checkToken, getAccessToken } from './api';
import './App.css';
import './nprogress.css';
import WelcomeScreen from './WelcomeScreen';
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip
} from 'recharts';



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

  getData = () => {
    const {locations, events} = this.state;
    const data = locations.map((location)=>{
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return {city, number};
    })
    return data;
  };


  render() {
    if (this.state.showWelcomeScreen === undefined) return 
    <div
      className="App" 
    />
    const { locations, numberOfEvents } = this.state;

    return (
      <div className="App">
        <h1>Meet App</h1>
        <h4>Choose your nearest city</h4>
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

        <h4>Events in each city</h4>

        <ScatterChart
        width={400}
        height={400}
        margin={{
          top: 20, right: 20, bottom: 20, left: 20,
        }}
        >
        <CartesianGrid />
        <XAxis type="category" dataKey="city" name="City" />
        <YAxis type="number" dataKey="number" name="Number of Events"/>
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Scatter data={this.getData()} fill="#8884d8" />
        </ScatterChart>

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