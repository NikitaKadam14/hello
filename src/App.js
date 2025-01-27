import { useState } from 'react';
import './App.css';

function App() {
  const [weather, setWeather] = useState();
  const [check, setCheck] = useState();
  const onWeatherClick = () => {
    if (weather === "sunny") {
      setCheck("Go for Walk");

    }
    else if (weather === "Rainy") {
      setCheck("Read a book");

    }
    else if (weather === "snowy") {
      setCheck("Build a snowman");

    }
}
  const season = (event) => {
    setWeather(event.target.value);


  }
return (
    <div>
      <h1>Weather Activity Suggestion</h1>
      <input type="text" value={weather} onChange={season} />
      <button onClick={onWeatherClick}>check</button>
      <p>{check}</p>
    </div>
  );
}

export default App;
