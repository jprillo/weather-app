import React from 'react';
import sun from "./sunIcon.png"
import clouds from './clouds.png'
import rain from './rain.png'
import drop from './drop.png'
var moment = require('moment');


const Day = ({ reading }) => {
  let newDate = new Date();
  const weekday = reading.dt * 1000
  newDate.setTime(weekday)

 

  return (
    <div className="flex">
      <div className="day" style={(() => {
        
        switch (reading.weather[0].main) {
          case "Rain":   return {background: "#24165A"};
          case "Clear": return {background: "#2A02C9"};
          case "Mist":  return {background: "red"};
          case "Clouds":  return {background: "#6047C5"};
          case "Drizzle":  return {background: "red"};
          default:      return {background: "#2A02C9"};
        }
      })()}>
        <div className="cardHeader flex" style={{justifyContent: "space-between"}}>
        <h5 className="card-title">{moment(newDate).format('dddd')}</h5> <p>{moment(newDate).format('MMM Do ')}</p>
        </div>
        <div className="cardImage">
         <img  src= {(() => {
        switch (reading.weather[0].main) {
          case "Rain":   return rain;
          case "Clear": return sun;
          case "Mist":  return "https://image.flaticon.com/icons/svg/2675/2675962.svg";
          case "Clouds":  return clouds;
          default:      return sun;
        }
      })()} alt="" />
      </div>
      <p>{reading.weather[0].description}</p>
        <p>{Math.round(reading.temp.max)}<span>&#176;</span> /  {Math.round(reading.temp.min)}<span>&#176;</span>  </p>
       <div style={{display: "flex", justifyContent: "center"}}> <p style={{padding: "0 .5em 0 0" }}>{Math.round(reading.pop *100)}%</p><img className= "rainDrop" src={drop} alt="rain drop"/></div>
        
       
 
      </div>
    </div>
  )
}

export default Day;