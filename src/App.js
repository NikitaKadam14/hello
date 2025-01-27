import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState("");
  const [check, setCheck] = useState("");
  const onFruitChecker = () => {
    if (color === "green") {
      setCheck("Unripe");
    }
    else if (color === "yellow") {
      setCheck("ripe");
    }
    else if (color === "brown") {
      setCheck("Overripe");
    }

  }
  const banana = (event) => {
    setColor(event.target.value);

  }


  return (
    <div>
      <h1>Fruit Ripeness Checker</h1>
      <select value={color} onChange={banana}>
        <option value="">select</option>
        <option value={"green"}>green</option>
        <option value={"yellow"}>yellow</option>
        <option value={"brown"}>brown</option>
      </select>
      <button onClick={onFruitChecker}>Check</button>
      <p>{check}</p>

    </div>
  );
}

export default App;
