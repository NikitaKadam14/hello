import { useState } from 'react';
import './App.css';

function App() {
  const [score, setScore] = useState(0);
  const [check, setCheck] = useState(0);
  const onCalculateClick = () => {
    if (score >= 90) {
      setCheck("A");
    }
    else if (score >= 80) {
      setCheck("B");
    }
    else if (score >= 70) {
      setCheck("C");
    }
    else if (score >= 60) {
      setCheck("D");
    }
    else {
      setCheck("f");
    }
  }
  const grade = (event) => {
    setScore(event.target.value);
  }
  return (
    <div>
      <h1>Grade Calculator</h1>
      <input type="number" value={score} onChange={grade} />
      <button onClick={onCalculateClick}>Calculator</button>
      <p>{check}</p>


    </div>


  );
}

export default App;
