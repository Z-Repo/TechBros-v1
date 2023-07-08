import "./App.css";
import "./Background/mainBackGround.css";
import Search from "./components/search";
import CurrentWeather from "./components/current-weather/currentWeather";

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWeather />
    </div>
  );
}

export default App;
