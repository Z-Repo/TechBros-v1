import { useState } from "react";
import "./App.css";
import "./Layout/mainBackGround.css";
import {
  weatherApiKey,
  weatherApiUrl,
} from "./components/APIs/weather/weatherApi";
import Search from "./components/searchbar/search";
import CurrentWeather from "./components/current-weather/currentWeather";
import Map from "./components/map/map";
import Forecast from "./components/forecast/forecast";

function App() {
  const [longitude, setLongitude] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
    const [lati, long] = searchData.value.split(" ");
    setLongitude(long);
    setLatitude(lati);

    const currentWeatherFetch = fetch(
      `${weatherApiUrl}/weather?lat=${lati}&lon=${long}&appid=${weatherApiKey}&units=imperial`
    );
    const forecastFetch = fetch(
      `${weatherApiUrl}/forecast?lat=${lati}&lon=${long}&appid=${weatherApiKey}&units=imperial`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));

    console.log(currentWeather);
    console.log(forecast);
  };

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
      {currentWeather && forecast && longitude && latitude && (
        <Map
          longitude={longitude}
          latitude={latitude}
          zoom={11}
          mapType="streetView"
        />
      )}
    </div>
  );
}

export default App;
