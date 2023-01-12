import { useState } from "react";
import { WEATHER_API_URL} from "./api";
import Search from "./components/search/Search";
import CurrentWeather from "./components/current-weather/CurrentWeather";
import Forecast from "./components/forecast/Forecast";
import GoogleMaps from "./components/google-maps/GoogleMaps";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);


  const handleSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
    );

    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="max-w-[1080px] m-auto">
      <h1 className="text-center text-5xl font-bold shadow p-4 bg-gray-300 rounded-full  capitalize">
        City Weather
      </h1>
      <Search onSearchChange={handleSearchChange} />
      <h2 className="text-center text-sm mt-2 text-red-900">
        {" "}
      </h2>
      <div>
        {currentWeather && (
          <div className="md:flex mt-8 gap-8">
            <div className="grow">
              {" "}
              <GoogleMaps data={forecast} />
            </div>
            <div>
              <CurrentWeather data={currentWeather} />
            </div>
          </div>
        )}
      </div>
      <Forecast data={forecast} />
    </div>
  );
}

export default App;
