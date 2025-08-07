const BASE_URL="https://api.openweathermap.org/data/2.5"
const API_KEY="5924d3b28988d5596883f7005ad47d93"

export const weatherfetcher = async (city) => {
  const response = await fetch(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}`)
  const data = await response.json()
  console.log(data)
  return data;
}
