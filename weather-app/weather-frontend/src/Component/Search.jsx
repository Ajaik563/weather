import {useState} from "react";
function Search({onSearch}){
    const [city,setCity] = useState("");
      const quickCities = [
        "Chennai",
        "Bangalore",
        "Mumbai",
        "Delhi",
        "Hyderabad"
    ];
    return(
        <div className="search-main">
            <div className="search">
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    onSearch(city);
                }}>
 <input type="text" placeholder="Search for city" value={city} onChange={(e)=>{setCity(e.target.value);}} />
                <button type="submit"><i className="fa-solid fa-magnifying-glass"></i> Search</button>
                </form>
               
            </div>
            <div className="quick-search-container">
                <h5>Quick Search:</h5>
                <div className="quick-search">
                    {quickCities.map((cityName)=>(
                        <button key={cityName} onClick={()=>{onSearch(cityName);}}>{cityName}</button>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Search;