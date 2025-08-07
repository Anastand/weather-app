import React, { useEffect, useState } from "react";
import { weatherfetcher } from "../services/api";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";
import WeatherCard from "../components/WeatherCard";

function WeatherApp() {
  const [cityName, setCityName] = useState([]);
  const [weatherData, setWeatherData] = useState(null);
  const [searchCity, setSearchCity] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadweatherData = async () => {
    try {
      const fetchdata = await weatherfetcher(searchCity);
      setWeatherData(fetchdata);
    } catch (error) {
      console.log(error);
      setError("there was some error");
    } finally {
      setLoading(false);
    }
  };

  const handelSearch = async (e) => {
    e.preventDefault(); // this stops the page from reloading and allows us to use js for defining the functions
    loadweatherData();

    console.log("hello form handle search button");
  };
  return (
    <div>
      <form>
        <input
          type="text"
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}
          placeholder="enter city name"
          className="outline-2 outline-amber-100 p-2 m-2"
        />
        <button
          type="submit"
          className="p-2 border-2 border-blue-300 active:border-amber-200 active:text-gray-500"
          onClick={handelSearch}
        >
          Search
        </button>
      </form>

      {weatherData && <WeatherCard weatherData={weatherData} />}
    </div>
  );
}

export default WeatherApp;
