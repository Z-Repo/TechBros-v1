import "./App.css";
import "./Layout/mainBackGround.css";
import Search from "./components/SearchBar/search";
import CurrentWeather from "./components/current-weather/currentWeather";
import Map from "./components/Map/Map";
import { useState } from "react";

function App() {
  const [position, setPosition] = useState(null);

  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
    setPosition(searchData.value);
  };

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWeather />
      <Map position={[37.77493, -122.41944]} zoom={10} mapType="roadMap" />
    </div>
  );
}

export default App;
