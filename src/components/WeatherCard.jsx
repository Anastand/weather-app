import React from "react";

function WeatherCard({ weatherData }) {
  const cityname = weatherData.name;
  const citytemp = weatherData.main.temp;
  const citySky = weatherData.weather[0].description;
  const iconCode = weatherData.weather[0].icon;

  return (
    <div className="max-w-md mx-auto mt-4 bg-{#0A0B0B} rounded-lg shadow-md p-6 text-center space-y-4">
      <img
        src={`https://openweathermap.org/img/wn/${iconCode}@2x.png`}
        alt={citySky}
        className="mx-auto w-20 h-20"
      />

      <h2 className="text-2xl font-semibold text-gray-200">{cityname}</h2>

      <p className="text-4xl font-bold text-blue-600">{citytemp}°C</p>

      <p className="capitalize text-gray-600">{citySky}</p>
    </div>
  );
}

export default WeatherCard;
