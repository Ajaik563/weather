import './App.css';
import axios from "axios";
import { useEffect, useState } from 'react';
import Header from './Component/header';
import Search from './Component/search';
import weather from './data/weather.json';
import Content from './Component/Content';
function App(){
  const [data,setData] = useState(weather["Chennai"]);
  const [error, setError] = useState("");
  
const handleSearch= async(city)=>{
  city = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();
  const result=await getWeatherData(city);
 if (result) {
  setData(result);
  setError("");
} else {
  setError("City not found");
}
}
  const getWeatherData = async (city) => {
    try {
     const response = await axios.get( "http://localhost:5000/api/weather",{params: {city: city }});
      return response.data;
    } catch (error) {
      console.log("no backend");
      return weather[city];
    }
  };
useEffect(()=>{
  handleSearch("chennai");
},[])

  return(
    <div className="App">
    <Header data={data} />
    <Search onSearch={handleSearch} />
   {error ? <p className='error'>City not found</p> : <Content data={data} />}
    </div>
  );
}
export default App;