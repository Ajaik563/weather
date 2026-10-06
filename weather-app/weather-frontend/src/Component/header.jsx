import img from "../assets/image.png";
function header({data}){
    return(
        <div className="header">
            <h1> <img src={img} alt="Weather Icon" /> WeatherApp</h1>

            <div className="location"> <i className="fa-solid fa-map-pin"></i> {data.city}, {data.country}</div>
          
        </div>
    );
}
export default header;