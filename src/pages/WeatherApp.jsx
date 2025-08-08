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
      {/* <form>
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
      </form> */}
      <form
        onSubmit={handelSearch}
        className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6"
      >
        <input
          type="text"
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}
          placeholder="Enter city name..."
          className="w-72 p-3 rounded-lg bg-[#181818] text-white border border-gray-600 focus:outline-none focus:border-blue-500 transition"
        />
        <button
          type="submit"
          className="px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition text-white font-semibold"
        >
          Search
        </button>
      </form>

      {weatherData && <WeatherCard weatherData={weatherData} />}
    </div>
  );
}

export default WeatherApp;
