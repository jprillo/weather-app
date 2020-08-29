import React, { Component } from "react"
import { Helmet } from 'react-helmet';
import "./style/main.scss"
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
    return this.state.hourly.slice(0, 8).map((reading, index) => <Hour reading={reading} key={index} />)
  }
  formatMoreHours = () => {
    return this.state.hourly.slice(8, 16).map((reading, index) => <Hour reading={reading} key={index} />)
  }
  formatDayCards = () => {
    return this.state.daily.slice(1, 6).map((reading, index) => <Day reading={reading} key={index} />)
  }

  handleToggleVisib = () => {
    this.setState({ visib : !this.state.visib })
  }

  render() {
   
    const {  currentWeather } = this.state
    const {  current } = this.state
    
   

    return (
      <div>
        <Helmet>
     <title>Jason Weather</title>     
    <meta property="og:url" content="https://jason-weather.netlify.app"/>
    <meta property="og:type" content="website"/>
    <meta property="og:title" content="Find out the weather where Jason is."/>
    <meta property="og:image" content="https://jasonweather.netlify.app/static/media/jason.f4f1ee9a.png"/>
    <meta property="og:description" content="There are lots of websites that can tell you the weather where you are but only one that can tell you the weather where I am. Sometimes it isn't all about you."/>
    <meta property="og:site_name" content="jason-weather.netlify.app"/>
    <meta property="article:author" content="jasonprillo"/>

    <meta name="twitter:card" content="summary"/>
    <meta name="twitter:site" content="@site_account"/>
    <meta name="twitter:creator" content="@individual_account"/>
    <meta name="twitter:url" content="https://jasonweather.netlify.app"/>
    <meta name="twitter:title" content="Find out the weather where Jason is."/>
    <meta name="twitter:description" content="There are lots of websites that can tell you the weather where you are but only one that can tell you the weather where I am. Sometimes it isn't all about you."/>
    <meta name="twitter:image" content="https://jasonweather.netlify.app/static/media/jason.f4f1ee9a.png"></meta>
        </Helmet>
        <Current main={currentWeather.main} temp={current.temp} feels={current.feels_like} />
        <div style={{textAlign: "center", padding: "100px 0"}}>
   
        
        <h2>This is what Jason has to expect in the coming hours</h2> 
          <div className="hourWrap" style={{display: "flex", justifyContent: "center", flexWrap: "wrap"}}>     
             
          {this.formatHourCards()}
         
      
             
            
             {this.state.visib && this.formatMoreHours()}
         
          </div>
          <button onClick={this.handleToggleVisib}>
          {this.state.visib ? 'Show Less' : 'Show More'}
          </button> 

          <div style={{paddingTop: "100px"}}>
          <h2>Here is how the rest of Jason's week is stacking up.</h2>  
          <div className="dayWrap" style={{display: "flex",flexWrap: "wrap", justifyContent: "center"}}>
          
          {this.formatDayCards()}
          </div> 
          </div>    
            </div>
          <h3>Want to know what the weather is like where you are? <br></br>Open a window Bozo. This is Jason weather. Sometimes it isn't all about you.  </h3>
        </div>
    )
  }
}

export default App
