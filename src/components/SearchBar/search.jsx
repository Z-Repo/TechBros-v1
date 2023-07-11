import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, geoApiUrl } from "../APIs/geo/geoApi";

//This function configures the search bar
const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  //This function displays suggested cities in the search bar and makes an API call for the city data
  const loadOptions = (inputValue) => {
    return fetch(
      `https://${geoApiUrl}?minPopulation=1000000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  };

  //This function selects the chosen city for which the data should be returned
  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  //This return statement displays the search bar
  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={800}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
