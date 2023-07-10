import "./App.css";
import "./Layout/mainBackGround.css";
import Search from "./components/SearchBar/search";
import CurrentWeather from "./components/current-weather/currentWeather";
import Map from "./components/Map/Map";
import { useState } from "react";

function App() {
  const [longitude, setLongitude] = useState("-75.1732");
  const [latitude, setLatitude] = useState("39.9448");

  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
    const [lati, long] = searchData.value.split(" ");
    setLongitude(long);
    setLatitude(lati);
  };

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
