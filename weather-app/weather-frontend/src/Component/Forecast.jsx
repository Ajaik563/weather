function Forecast({ data }) {

  const weatherIcons = {
    Clear: "fa-sun",
    Clouds: "fa-cloud",
    Rain: "fa-cloud-rain",
    Haze: "fa-smog",
    Snow: "fa-snowflake",
    Thunderstorm: "fa-cloud-bolt"
  };

  return (
    <div className="forecast">

      <h1 style={{ textAlign: 'center' }}>5 Day Forecast</h1>

      <div className="forecast-list">

        {data.forecast.map((item) => (

          <div
            className={`forecast-card ${item.day.toLowerCase()} ${item.condition.toLowerCase()}`}
            key={item.date}
          >

            <p className="day">
              {item.day}
            </p>

            <i
              className={`fa-solid ${weatherIcons[item.condition]}`}
            ></i>

            <h3>
              {item.temperature}°C
            </h3>

            <p>
              {item.description}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Forecast;