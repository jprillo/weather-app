import React from 'react'
import jason from './jason.png';

export default function Current(props) {
    return (
        <div style={{backgroundColor: "red", padding: "2% 20% 0" }}>
        <h1>Jason Weather</h1>  
          <div style={{display: "flex", padding: "5% 0 0"}}>
            <div style={{textAlign:" center", width: "50%", padding: "50px 0"}}>
              <div style={{backgroundColor: "white", padding: "5%"}}>
            <h1>Current</h1>
          <p> Hi I’m Jason and right now {(() => {
          switch (props.main) {
            case "Clear":   return "it is all clear.";
            case "Rain": return "it is raining. Don't have to water the plants today.";
            case "Thunderstorm": return "there is a thunderstorm. Very Scary.";
            case "Clouds":  return "it is cloudy.";
            default:      return "...loading";
          }
        })()} The tempuraure is {props.main} but it feels more like {props.main}. Check back to see how it all plays out. </p>
        </div></div>
         <div style={{textAlign:" center", display: "flex", justifyContent: "flex-end", width: "60%"}}>
          <img width= "110%" src= {jason} alt="jason"></img>
          </div>
          </div>
          </div>
    )
}
