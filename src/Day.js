import React from 'react';
var moment = require('moment');

const Day = ({ reading }) => {
  let newDate = new Date();
  const weekday = reading.dt * 1000
  newDate.setTime(weekday)

 

  return (
    <div className="flex">
      <div className="day" style={{backgroundColor: "white", padding: "1em",  border: "2px solid blue", textAlign: "center"}}>
        <h5 className="card-title">{moment(newDate).format('dddd')}</h5>
         <img width="80%" src= {(() => {
        switch (reading.weather[0]) {
          case "Rain":   return "https://image.flaticon.com/icons/svg/861/861056.svg";
          case "Clear": return "https://image.flaticon.com/icons/svg/3050/3050031.svg";
          case "Mist":  return "https://image.flaticon.com/icons/svg/2675/2675962.svg";
          case "Clouds":  return "https://image.flaticon.com/icons/svg/1163/1163624.svg";
          default:      return "https://image.flaticon.com/icons/svg/3050/3050031.svg";
        }
      })()} alt="" />
        <p>{Math.round(reading.temp.min)}/{Math.round(reading.temp.max)}  °F</p>
 
      </div>
    </div>
  )
}

export default Day;