import axios from "axios";

export async function handler(event, context) {
  try {
    // (1) Define the latitude/longitude you want
    const lat = 28.0285828;
    const lon = -80.6140221;

    // (2) Get the grid info from /points (this tells you which forecast office handles your lat/lon)
    const pointsResponse = await axios.get(
      `https://api.weather.gov/points/${lat},${lon}`,
      {
        headers: {
          // Replace this with your own app name and contact info
          "User-Agent": "MyWeatherApp (myemail@example.com)",
          Accept: "application/json",
        },
      }
    );

    // Extract the daily & hourly forecast URLs
    const { forecast, forecastHourly } = pointsResponse.data.properties;

    // (3) Fetch the daily forecast
    const dailyResponse = await axios.get(forecast, {
      headers: {
        "User-Agent": "MyWeatherApp (myemail@example.com)",
        Accept: "application/json",
      },
    });

    // (4) Fetch the hourly forecast
    const hourlyResponse = await axios.get(forecastHourly, {
      headers: {
        "User-Agent": "MyWeatherApp (myemail@example.com)",
        Accept: "application/json",
      },
    });

    // Grab the arrays of forecast periods
    const dailyPeriods = dailyResponse.data.properties.periods;   // Typically ~14 periods (AM/PM for 7 days)
    const hourlyPeriods = hourlyResponse.data.properties.periods; // Typically ~156 hours

    // (5) Approximate "current" by taking the first hourly period
    const currentPeriod = hourlyPeriods[0];
    // Some folks also use the first daily period, but hourly is closer to a “current” condition

    // ---------------------------------------------------------------
    // (6) Transform NOAA’s format to mimic OWM’s structure
    // ---------------------------------------------------------------

    // OWM: current = { temp, feels_like, weather: [{ main, description }], ... }
    const transformedCurrent = {
      dt: new Date(currentPeriod.startTime).getTime() / 1000,
      temp: currentPeriod.temperature,               // NOAA temperature
      feels_like: currentPeriod.temperature,         // NOAA doesn’t provide “feels like”
      weather: [
        {
          main: currentPeriod.shortForecast,         // Example: "Partly Cloudy"
          description: currentPeriod.detailedForecast
        }
      ],
    };

    // OWM: hourly = [ { dt, temp, weather: [{ main, description }] }, ... ]
    const transformedHourly = hourlyPeriods.map((hr) => ({
      dt: new Date(hr.startTime).getTime() / 1000,
      temp: hr.temperature,
      weather: [
        {
          main: hr.shortForecast,
          description: hr.detailedForecast
        }
      ],
    }));

    // OWM: daily = [ { dt, temp: { day, min, max }, weather: [{ main, description }] }, ... ]
    // NOAA daily periods are ~12 hours each (daytime & nighttime). We’ll treat each as a “daily” block.
    const transformedDaily = dailyPeriods.map((day) => ({
      dt: new Date(day.startTime).getTime() / 1000,
      temp: {
        // NOAA lumps each period into a single “temperature” reading.
        // OWM has day/min/max. Here we’re using the same value for all.
        day: day.temperature,
        min: day.temperature,
        max: day.temperature,
      },
      weather: [
        {
          main: day.shortForecast,
          description: day.detailedForecast
        }
      ],
    }));

    // (7) Combine into a single JSON object
    const data = {
      current: transformedCurrent,
      hourly: transformedHourly,
      daily: transformedDaily,
    };

    // (8) Return it from the Netlify function
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }),
    };
  }
}
