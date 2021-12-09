import React from 'react'
import jason from './jason.png';
import sun from './sunIcon.png';
import moon from './moon.png'
import clouds from './clouds.png'


export default function Current(props) {

    return (
        <div className="current flex" style={{ backgroundImage: (() => {          
            switch (props.night) { 
              case "night":   return 'url("https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80")';
              case "Clear":   return 'url("https://images.unsplash.com/photo-1609376224342-8902c39a3675?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2xlYXIlMjBibHVlJTIwc2t5fGVufDB8fDB8fA%3D%3D&w=1000&q=80")';
              case "Rain": return 'url("https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80")';
              case "Thunderstorm": return 'url("https://images.unsplash.com/photo-1561485132-59468cd0b553?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=948&q=80")';
              case "Clouds":  return 'url("https://images.unsplash.com/photo-1541119638723-c51cbe2262aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80")';
              case "Mist":  return 'url("https://images.unsplash.com/photo-1520813834020-abe3df10aab4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80")';
             
              default:      return "https://images.unsplash.com/photo-1529126894674-8dd7cb884766?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80";
            }
          })() }}>
      
         
            <div className ="col-6 heroText" >
          
              <h1>Jason Weather</h1>  
        <h2>There are lots of sites that tell you the weather where you are but only one that tells you what the weather is like where I am.</h2>
        <div className="currentContainer">
        <p className="currentDescription">{props.main}</p>
        <img className="currentImage" alt= "weather icon" src = { (() => {          
            switch (props.night) { 
              case "night":   return moon;
              case "Clear":   return sun;
              case "Rain": return 'url("https://images.unsplash.com/photo-1561485132-59468cd0b553?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=948&q=80")';
              case "Thunderstorm": return 'url("https://images.unsplash.com/photo-1561485132-59468cd0b553?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=948&q=80")';
              case "Clouds":  return clouds;
              case "Mist":  return 'url("https://images.unsplash.com/photo-1520813834020-abe3df10aab4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80")';
             
              default:      return "https://images.unsplash.com/photo-1529126894674-8dd7cb884766?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80";
            }
          })() }/>
          </div>   
     
       <div className="currentContainer">
        <p className = "currentTemp"> {Math.round(props.temp)}
       
<span>&#176;</span></p> <p className="feelsLike"> It feels like {Math.round(props.feels)} <span>&#176;</span>. </p>
</div> 
        </div>
       <div className="heroImage col=6"> <img  src= {jason} alt="jason"></img></div>
         
          
          </div>
         
    )
}
