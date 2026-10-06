import Forecast from "./Forecast";

function Content({data}) {
    const weatherIcons = { Clear: "fa-sun", Clouds: "fa-cloud",Rain: "fa-cloud-rain",Haze: "fa-smog",Snow: "fa-snowflake", Thunderstorm: "fa-cloud-bolt" };
  return (
    <div className="content">
  <h1>Weather in {data.city} </h1>
        <div className="main">
            <div className="left">
            <div >    <div className={`cloud ${data.current.condition.toLowerCase()}`}>
        <i className={`fa-solid ${weatherIcons[data.current.condition]}`}></i>
      </div>
            <p style={{ fontSize: '24px', fontWeight: 'bold', paddingBottom:'5px', textAlign: 'center' }}>{data.city}</p>
            <p style={{ fontSize: '16px', paddingBottom: '5px', textAlign: 'center' }}>{data.current.description}</p>
                        <p style={{ fontSize: '16px', paddingBottom: '5px', textAlign: 'center' }}>{data.forecast[0].date}</p>
            </div> </div>
            <div className="right">
                    {data.current.temperature}°C
            </div>
       
    </div> 
    
    <div className="conditions">
        <div className="condition humidity">
      <i className="fa-solid fa-droplet"></i>
      <p>Humidity: {data.current.humidity}%</p>
    </div>

    <div className="condition wind">
      <i className="fa-solid fa-wind"></i>
      <p>Wind Speed: {data.current.windSpeed} m/s</p>
    </div>

    <div className="condition feels-like">
      <i className="fa-solid fa-temperature-half"></i>
      <p>Feels Like: {data.current.feelsLike}°C</p>
    </div>

    <div className="condition pressure">
      <i className="fa-solid fa-gauge"></i>
      <p>Pressure: {data.current.pressure} hPa</p>
    </div>

    </div>

    
    <Forecast data={data} />
      </div>
  );
}
export default Content;