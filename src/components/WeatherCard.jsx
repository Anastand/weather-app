import React from "react";

function WeatherCard({ weatherData }) {
  const cityname = weatherData.name;
  const citytemp = weatherData.main.temp;
  const citySky = weatherData.weather[0].description;
  return (
    <div>
      <h3>
        The temperature in {cityname} is {citytemp} with sky as{citySky}{" "}
      </h3>
    </div>
  );
}

export default WeatherCard;
