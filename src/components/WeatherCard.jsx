import React from "react";

function WeatherCard({ weatherData }) {
  const cityName = weatherData.name;
  const cityTemp = weatherData.main.temp;
  const citySky = weatherData.weather[0].description;
  const iconCode = weatherData.weather[0].icon;

  return (
    <div className="max-w-sm mx-auto mt-6 bg-[#181818] rounded-xl shadow-lg p-6 text-center text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30">
      {/* Weather Icon */}
      <img
        src={`https://openweathermap.org/img/wn/${iconCode}@2x.png`}
        alt={citySky}
        className="mx-auto w-24 h-24"
      />

      {/* City Name */}
      <h2 className="text-2xl font-bold mt-2">{cityName}</h2>

      {/* Temperature */}
      <p className="text-5xl font-semibold text-blue-400 mt-2">
        {Math.round(cityTemp)}°C
      </p>

      {/* Sky Condition */}
      <p className="capitalize text-gray-400 mt-1">{citySky}</p>
    </div>
  );
}

export default WeatherCard;
