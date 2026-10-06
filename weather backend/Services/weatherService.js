const axios = require("axios");

const url =
  "https://api.openweathermap.org/data/2.5";

const Weather = async (city) => {

  const apiKey = process.env.WEATHER_API_KEY;

  if (!apiKey) {
    throw new Error("API_KEY_NOT_CONFIGURED");
  }

  const response = await axios.get(`${url}/weather`, { params: { q: city, units: "metric", appid: apiKey  } });

  const data = response.data;
return{
    city: data.name,
    country:data.sys.country,
    current: {
      temperature: Math.round(data.main.temp),
 feelsLike: Math.round(data.main.feels_like),
humidity: data.main.humidity,
pressure: data.main.pressure,
 windSpeed: data.wind.speed,
 cloudiness: data.clouds.all,
condition: data.weather[0].main,
 description:data.weather[0].description,
 icon:data.weather[0].icon
    }

}

};

const Forecast = async (city) => {

  const apiKey = process.env.WEATHER_API_KEY;

  if (!apiKey) {
    throw new Error("API_KEY_NOT_CONFIGURED");
  }

 const response = await axios.get(`${url}/forecast`, { params: { q: city, units: "metric", appid: apiKey  } });

  const data = response.data;

  const today = new Date();

  const todayDate = today.toLocaleDateString("en-CA", {timeZone: "Asia/Kolkata"});

  const todayforecasts = data.list.filter((item) => {
    return item.dt_txt.startsWith(todayDate);
  });


  let todayforecast = null;
if (todayforecasts.length > 0) {
  let closest = todayforecasts[0];
  todayforecasts.forEach((item) => {
    const currentTime = Math.abs( item.dt * 1000 - today.getTime() );
  const closestTime = Math.abs(closest.dt * 1000 - today.getTime());
    if (currentTime < closestTime) {
      closest = item;
    }
  });

  todayforecast = closest;
}
const dates = data.list.map((item) => {
  return item.dt_txt.split(" ")[0];
});

const uniqueDates = [...new Set(dates)];

const futureDates = uniqueDates.filter((date) => date !== todayDate).slice(0, 4);

const futureForecasts = [];

futureDates.forEach((date) => {

  const forecast = data.list.find((item) => {
    return item.dt_txt.startsWith(date);
  });

  if (forecast) {
    futureForecasts.push(forecast);
  }

});

const selectedForecasts = [todayforecast, ...futureForecasts];
const forecast = selectedForecasts.map((item) => {

  const date = item.dt_txt.split(" ")[0];

  const day = new Date(date).toLocaleDateString("en-US", {
    weekday: "long"
  });

  return {
    date: date,
    day: day,
    temperature: Math.round(item.main.temp),
    condition: item.weather[0].main,
    description: item.weather[0].description,
    icon: item.weather[0].icon
  };

});

  return {
    forecast: forecast
  };
};


module.exports = {Weather, Forecast};