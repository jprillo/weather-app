// example of async handler using async-await
// https://github.com/netlify/netlify-lambda/issues/43#issuecomment-444618311

import axios from "axios"




export async function handler(event, context) {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=28.0285828&lon=-80.6140221&units=imperial&appid=${process.env.REACT_APP_APIKEY}`, { headers: { Accept: "application/json" } })
    const data = response.data
    
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    
    }
  } catch (err) {
    console.log(err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
     
    }
  }
}


