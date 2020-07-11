import React from 'react';
var moment = require('moment');

const Day = ({ reading }) => {
  let newDate = new Date();
  const weekday = reading.dt * 1000
  newDate.setTime(weekday)

 

  return (
    <div className="col-sm-2">
      <div className="card" style={{backgroundColor: "white", padding: "1em", width: "150px", border: "2px solid blue", textAlign: "center"}}>
        <h3 className="card-title">{moment(newDate).format('dddd')}</h3>
         <img width="80%" src= {(() => {
        switch (reading.weather[0]) {
          case "Rain":   return "https://image.flaticon.com/icons/svg/861/861056.svg";
          case "Clear": return "https://image.flaticon.com/icons/svg/3050/3050031.svg";
          case "Mist":  return "https://image.flaticon.com/icons/svg/2675/2675962.svg";
          case "Clouds":  return "https://image.flaticon.com/icons/svg/1163/1163624.svg";
          default:      return "https://image.flaticon.com/icons/svg/3050/3050031.svg";
        }
      })()} alt="" />
        <h2>{Math.round(reading.temp.min)}/{Math.round(reading.temp.max)}  °F</h2>
 
      </div>
    </div>
  )
}

export default Day;