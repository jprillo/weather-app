import React from 'react';
import sun from './sunIcon.png'
import clouds from './clouds.png'



var moment = require('moment');




const Hour = ({ reading }) => {
  let newDate = new Date();
  const weekday = reading.dt * 1000
  newDate.setTime(weekday)

 

  return (
  
      <div className="hourCard">
       
        <p >{moment(newDate).format(' h:mm')}<span style={{fontSize: ".75em"}}>{moment(newDate).format('a')}</span></p>
        <img   src= {(() => {
        switch (reading.weather[0].main) {
          case "Rain":   return "https://image.flaticon.com/icons/svg/861/861056.svg";
          case "Clear": return sun;
          case "Mist":  return "https://image.flaticon.com/icons/svg/2675/2675962.svg";
          case "Clouds":  return clouds;
          default:      return {sun};
        }
      })()} alt="" />
       <p>{reading.weather[0].description}</p>
        <p>{Math.round(reading.temp)}°F</p> 
        <p>{(reading.pop)* 100}%</p>     
      </div>
    
  )
}

export default Hour;