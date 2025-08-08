import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import WeatherApp from "./pages/WeatherApp";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="text-2xl text-gray-400">Weather Search App </div>
        <WeatherApp />
      </div>
    </>
  );
}

export default App;
