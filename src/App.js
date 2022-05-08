import React, { Component } from "react"
import { Helmet } from 'react-helmet';
import "./style/main.scss"
import Hour from "./Hour"
import Current from './Current'
import Day from './Day'
import jason from './jason.jpg';
import intro from './intro.mp4'






class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      current: [],       
      currentWeather: [],
      hourly: [],
      daily: [],
      visib : false,
      night: false
    }
  }


  componentDidMount = () => {
 
  
    this.setState({ loading: true })
    fetch("/.netlify/functions/reading")
      .then(response => response.json())
      .then(json => this.setState({ currentWeather: json.current.weather[0], current: json.current, hourly: json.hourly, daily: json.daily  }))

  }
 
  
  formatHourCards = () => {
  
    return this.state.hourly.slice(1, 8).map((reading, index) => <Hour reading={reading} key={index} />)
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
    const { daily } = this.state
 
    console.log(daily)
    let hour = (new Date()).getHours() ;   
    let night = (hour >= 18 || hour <= 6) ? "night" :  currentWeather.main;
    


  

    return (
      <div>
        <Helmet>
     <title>Jason Weather</title>     
    <meta property="og:url" content="https://jason-weather.netlify.app"/>
    <meta property="og:type" content="website"/>
    <meta property="og:title" content="Find out the weather where Jason is."/>
    <meta property="og:image" content={jason}/>
    <meta property="og:description" content="There are lots of websites that can tell you the weather where you are but only one that can tell you the weather where I am. Sometimes it isn't all about you."/>
    <meta property="og:site_name" content="jason-weather.netlify.app"/>
    <meta property="article:author" content="jasonprillo"/>
    <link rel="apple-touch-icon" href="https://jasonweather.netlify.app/static/media/jason.7d438777.png"/>
    <meta name="twitter:card" content="summary"/>
    <meta name="twitter:site" content="@site_account"/>
    <meta name="twitter:creator" content="@individual_account"/>
    <meta name="twitter:url" content="https://jasonweather.netlify.app"/>
    <meta name="twitter:title" content="Find out the weather where Jason is."/>
    <meta name="twitter:description" content="There are lots of websites that can tell you the weather where you are but only one that can tell you the weather where I am. Sometimes it isn't all about you."/>
    <meta name="twitter:image" content={jason}></meta>
        </Helmet>
      
        <Current main={currentWeather.main}  temp={current.temp} night={night} feels={current.feels_like}  />
        <div >
   
        <div style={{display: "flex", justifyContent: "center", padding: "5em"}}>
        <video width="50%" height="auto" controls>
  <source src={intro} type="video/mp4"/>
 
Your browser does not support the video tag.
</video>
        </div>
        
          <div className="hourWrap" style={{paddingTop: "100px"}} >     
          <h2 style={{marginBottom: "60px"}}>This is what Jason has to expect in the coming hours</h2> 
          {this.formatHourCards()}
          {this.state.visib && this.formatMoreHours()}
          <button onClick={this.handleToggleVisib}>
          {this.state.visib ? 'Show Less' : 'Show More'}
          </button> 
         
          </div>
          

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
