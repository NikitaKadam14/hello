import { useState } from 'react';
import './App.css';

function App() {
  const [leapyear, setLeapyear] = useState();
  const [check, setCheck] = useState();
  const onLeapYearClick = () => {
    if (leapyear % 4 === 0 && leapyear % 100 !== 0 || leapyear % 400 === 0) {
      setCheck("leap year");
    }
    else {
      setCheck("not leap year");
 
    }

  }
  const year = (event) => {
    setLeapyear(event.target.value);
  }


  return (
    <div>
      <h1>Leap Year Checker</h1>
      <input type='text' value={leapyear} onChange={year} />
      <button onClick={onLeapYearClick}>Check</button>
      <p>{check}</p>

    </div>
  );
}

export default App;
