import "./App.css";
import "./Layout/mainBackGround.css";
import Search from "./components/SearchBar/search";
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
