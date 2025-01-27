import { useState } from 'react';
import './App.css';

function App() {
  const [check, setCheck] = useState("0");
  const [numbers, setNumbers] = useState("");
  const CountingPossitiveNumber = () => {
    const arr = numbers.split(',');
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (Number(arr[i]) > 0) {
        count++;
      }
    }
    setCheck(count);
  }
  const possitiveNumber = (event) => {
    setNumbers(event.target.value);
  }

  return (
    <div>
      <h1>Counting Possitive Number</h1>
      <input type="text" value={numbers} onChange={possitiveNumber} />
      <button onClick={CountingPossitiveNumber}>Calculate</button>
      <p>{check}</p>

    </div>
  );
}

export default App;
