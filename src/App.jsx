import { useState } from "react";
import "./App.css";
import "./Layout/mainBackGround.css";
import { weatherApiKey, weatherApiUrl } from "./components/APIs/Geo/geoApi";
import Search from "./components/SearchBar/search";
import CurrentWeather from "./components/current-weather/currentWeather";
import Map from "./components/Map/Map";
import { useState } from "react";

function App() {
<<<<<<< Updated upstream
  const [longitude, setLongitude] = useState("-75.1732");
  const [latitude, setLatitude] = useState("39.9448");

  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
    const [lati, long] = searchData.value.split(" ");
    setLongitude(long);
    setLatitude(lati);
=======
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split("");

    const currentWeatherFetch = fetch(
      `${weatherApiUrl}/weather?lat=${lat}&lon=${lon}&appid=${weatherApiKey}`
    );
    const forecastFetch = fetch(
      `${weatherApiUrl}/forecast?lat=${lat}&lon=${lon}&appid=${weatherApiKey}`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
>>>>>>> Stashed changes
  };

  console.log(currentWeather);
  console.log(forecast);

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWeather />
      <Map
        longitude={longitude}
        latitude={latitude}
        zoom={11}
        mapType="streetView"
      />
    </div>
  );
}

export default App;
