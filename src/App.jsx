import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import WeatherApp from "./pages/WeatherApp";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <WeatherApp />
        <h1 className="text-3xl font-bold underline text-amber-200 p-1">
          Hello world!
        </h1>
      </div>
    </>
  );
}

export default App;
