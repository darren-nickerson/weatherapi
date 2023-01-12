import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../../api";

function Search({ onSearchChange }) {
  const [search, setSearch] = useState(null);

  const loadOptions = async (inputValue) => {
    try {
      const response = await fetch(
        `${GEO_API_URL}/cities?minPopulation=50000&namePrefix=${inputValue}`,
        geoApiOptions
      );
      const response_1 = await response.json();
      return {
        options: response_1.data.map((city) => {
          return {
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name}, ${city.countryCode}`,
          };
        }),
      };
    } catch (err) {
      return console.error(err);
    }
  };


  const handleOnchange = (searchData) => {
    onSearchChange(searchData);
    setSearch(searchData);
  };

  return (
    <div className="mt-20 bg-gray-900 h-20 pt-5 rounded-xl shadow-xl">
      <AsyncPaginate
        placeholder="search for City"
        debounceTimeout={600}
        value={search}
        onChange={handleOnchange}
        loadOptions={loadOptions}
        className="mx-4"
      />
    </div>
  );
}

export default Search;
