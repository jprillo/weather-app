import React from 'react';
var moment = require('moment');

const Hour = ({ reading }) => {
  let newDate = new Date();
  const weekday = reading.dt * 1000
  newDate.setTime(weekday)

 

  return (
    <div className="col-sm-2" >
      <div className="card" style={{backgroundColor: "white", padding: ".5em", width: "80px",  textAlign: "center"}}>
       
        <p className="text-muted">{moment(newDate).format(' h:mm a')}</p>
        <img width="80%" src= {(() => {
        switch (reading.weather[0].main) {
          case "Rain":   return "https://image.flaticon.com/icons/svg/861/861056.svg";
          case "Clear": return "https://image.flaticon.com/icons/svg/3050/3050031.svg";
          case "Mist":  return "https://image.flaticon.com/icons/svg/2675/2675962.svg";
          case "Clouds":  return "https://image.flaticon.com/icons/svg/1163/1163624.svg";
          default:      return "https://image.flaticon.com/icons/svg/3050/3050031.svg";
        }
      })()} alt="" />
        <h2>{Math.round(reading.temp)} °F</h2>      
      </div>
    </div>
  )
}

export default Hour;