import React, { Component } from "react"
import "./App.css"
import Hour from "./Hour"
import Current from './Current'
import Day from './Day'




class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      current: [], 
      currentWeather: [],
      hourly: [],
      daily: [],
      visib : false 
    }
  }

  componentDidMount = () => {

    this.setState({ loading: true })
    fetch("/.netlify/functions/reading")
      .then(response => response.json())
      .then(json => this.setState({ currentWeather: json.current.weather[0], current: json.current, hourly: json.hourly, daily: json.daily   }))
  }
  formatHourCards = () => {
    return this.state.hourly.slice(0, 9).map((reading, index) => <Hour reading={reading} key={index} />)
  }
  formatMoreHours = () => {
    return this.state.hourly.slice(10, 19).map((reading, index) => <Hour reading={reading} key={index} />)
  }
  formatDayCards = () => {
    return this.state.daily.slice(1, 6).map((reading, index) => <Day reading={reading} key={index} />)
  }

  handleToggleVisib = () => {
    this.setState({ visib : !this.state.visib })
  }

  render() {
    const {  current } = this.state
    const {  currentWeather } = this.state
   

    return (

      <div>
   
  

        <Current main={currentWeather.main} />
        <h1>Hourly</h1>
          <button onClick={this.handleToggleVisib}>
           show more
            </button>
       
          <div style={{padding:"5% 20%",display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
          
         
          {this.formatHourCards()}
          {this.state.visib && this.formatMoreHours()}
          <div style={{display: "flex", justifyContent: "center"}}>
          {this.formatDayCards()}
          </div>
          
         
          
          
           
            </div>
        </div>
    )
  }
}



export default App
