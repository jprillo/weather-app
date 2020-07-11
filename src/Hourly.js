import React from 'react';




class Hourly extends React.Component {


  
  constructor(props){
    super(props);
    this.handleToggleVisib = this.handleToggleVisib.bind(this);
    this.state = {
      fullData: [],
      daily: [],
      current: [],
      visib : false 
    }
}



  componentDidMount = () => {
  
  

    fetch("/.netlify/functions/" + api)
    .then(res => res.json())
    .then(data => {
     
      this.setState({
        fullData: data.hourly,
        current: data.current,
        daily: data.daily,
        test: data.current.weather[0].main


        
      }, () => console.log(this.state))
    })
  }

 
  render() {
    return (
      <div style={{textAlign: "center"}}>

  
    
    
        <div style={{backgroundColor: "red", padding: "2% 20% 0" }}>
      <h1>Jason Weather</h1>  
        <div style={{display: "flex", padding: "5% 0 0"}}>
          <div style={{textAlign:" center", width: "50%", padding: "50px 0"}}>
            <div style={{backgroundColor: "white", padding: "5%"}}>
          <h1>Current</h1>
        <p> Hi I’m Jason and right now {(() => {
        switch (this.state.test) {
          case "Clear":   return "it is all clear.";
          case "Rain": return "it is raining. Don't have to water the plants today.";
          case "Thunderstorm": return "there is a thunderstorm. Very Scary.";
          case "Clouds":  return "it is cloudy.";
          default:      return "...loading";
        }
      })()} The tempuraure is {this.state.current.temp} but it feels more like {this.state.current.feels_like}. Check back to see how it all plays out. </p>
      </div></div>
       <div style={{textAlign:" center", display: "flex", justifyContent: "flex-end", width: "60%"}}>
       
        </div>
        </div>
        </div>
       
   
       
     
         
          
        
      </div>
    )
  }
 
}

export default Hourly;