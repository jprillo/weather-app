import React from 'react';
var moment = require('moment');


const Hour = ({ reading }) => {
  let newDate = new Date();
  const weekday = reading.dt * 1000
  newDate.setTime(weekday)

 

  return (
    <div className="col-sm-2" >
      <div className="hourCard">
       
        <p className="text-muted">{moment(newDate).format(' h:mm')}<span style={{fontSize: ".75em"}}>{moment(newDate).format('a')}</span></p>
        <img width="80%" src= {(() => {
        switch (reading.weather[0].main) {
          case "Rain":   return "https://image.flaticon.com/icons/svg/861/861056.svg";
          case "Clear": return "https://image.flaticon.com/icons/svg/3050/3050031.svg";
          case "Mist":  return "https://image.flaticon.com/icons/svg/2675/2675962.svg";
          case "Clouds":  return "https://image.flaticon.com/icons/svg/1163/1163624.svg";
          default:      return "https://image.flaticon.com/icons/svg/3050/3050031.svg";
        }
      })()} alt="" />
        <p>{Math.round(reading.temp)} °F</p>      
      </div>
    </div>
  )
}

export default Hour;