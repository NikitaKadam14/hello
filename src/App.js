import { useState } from 'react';
import './App.css';

function App() {
  const [distance, setDistance] = useState();
  const [result, setResult] = useState();
  const onTranspotClick = () => {
    if (distance < 3) {
      setResult("walk")

    }
    else if (distance >= 3 && distance <= 15) {
      setResult("Bike")

    }
    else if (distance > 15) {
      setResult("Car")
    }
  }
  const mode = (event) => {
    setDistance(event.target.value);
  }
  return (
    <div>
      <h1>Transportation Mode Selection</h1>
      <input type="text" value={distance} onChange={mode} />
      <button onClick={onTranspotClick}>check</button>
      <p>{result}</p>

    </div>
  );
}

export default App;
