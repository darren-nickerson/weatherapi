import React from "react";

function CurrentWeather({ data }) {
  return (
    <div className="w-[300px] h-[200px] shadow-xl bg-gray-500 text-white px-4 mt-10 rounded-xl m-auto">
      <div className="flex justify-between">
        <div className="flex flex-col justify-center">
          <p className=" font-bold">{data.city}</p>
          <p className="text-xs">{data.weather[0].description}</p>
        </div>
        <div className="flex justify-center flex-col">
          <img
            src={`icons/${data.weather[0].icon}.png`}
            alt="weather icon"
            className="h-16 w-16"
          />
        </div>
      </div>
      <div className="flex justify-between items-center leading-loose">
        <p className="text-[50px] font-bold">{Math.round(data.main.temp)}°C</p>
        <div className="text-xs flex flex-col justify-between w-full pl-4">
          <div className="flex justify-between">
            <span className="">Details</span>
          </div>
          <div className="flex justify-between">
            <span className="">Feels Like</span>
            <span className="font-bold">
              {Math.round(data.main.feels_like)}°C
            </span>
          </div>
          <div className="flex justify-between">
            <span className="">Wind</span>
            <span className="font-bold">{data.wind.speed} m/s</span>
          </div>
          <div className="flex justify-between">
            <span className="">Humidity</span>
            <span className="font-bold">{data.main.humidity}%</span>
          </div>
          <div className="flex justify-between">
            <span className="">Preasure</span>
            <span className="font-bold">{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
