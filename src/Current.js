import React from 'react'
import jason from './jason.png';


export default function Current(props) {
    return (
        <div className="current" style={{textAlign: "center",backgroundImage: (() => {
            switch (props.main) {
              case "Clear":   return 'url("https://images.unsplash.com/photo-1529126894674-8dd7cb884766?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80")';
              case "Rain": return 'url("https://images.unsplash.com/photo-1561485132-59468cd0b553?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=948&q=80")';
              case "Thunderstorm": return 'url("https://images.unsplash.com/photo-1561485132-59468cd0b553?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=948&q=80")';
              case "Clouds":  return 'url("https://images.unsplash.com/photo-1541119638723-c51cbe2262aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80")';
              default:      return "https://images.unsplash.com/photo-1529126894674-8dd7cb884766?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80";
            }
          })() }}>
        <h1>Jason Weather</h1>  
        <h2><span style={{color: "yellow"}}>There are lots of sites that tell you the weather where you are but only one that tells your what the weather is like where I am.</span></h2>
          <div className="flex currentBox" >
            <div className ="col-6" style={{textAlign:" center", padding: "50px 0"}}>
              <div className="currentReading">
            
          <p> Hi I’m Jason and right now {(() => {
          switch (props.main) {
            case "Clear":   return "it is all clear.";
            case "Rain": return "it is raining. Don't have to water the plants today.";
            case "Thunderstorm": return "there is a thunderstorm. Very Scary.";
            case "Clouds":  return "it is cloudy.";
            default:      return "...loading";
          }
        })()} The temperature is {props.temp} but it feels more like {props.feels}. Check back to see how it all plays out. </p>
        </div></div>
         <div  className="col-10" style={{textAlign:" center", display: "flex", justifyContent: "flex-end"}}>
          <img width= "80%" src= {jason} alt="jason"></img>
          </div>
          </div>
          </div>
    )
}
