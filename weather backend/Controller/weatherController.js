const weatherService = require("../Services/weatherService");

const Weather = async (req, res) => {
 try{
    const city =req.query.city;
    const currentData = await weatherService.Weather(city);
    const forecastData = await weatherService.Forecast(city);
    const data = {
      city: currentData.city,
      country: currentData.country,
      current: currentData.current,
      forecast: forecastData.forecast
    };  
    res.status(200).json(data);
 }
 catch (error) {
    res.status(500).json({
      message: "not found"
    });

  }

};


module.exports = { Weather };