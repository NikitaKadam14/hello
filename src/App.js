import { useState } from 'react';
import './App.css';

function App() {
  const [age, setAge] = useState(0);
  const [price, setPrice] = useState(0);
  const onMovieTicketPricingCheck = () => {
    const toDaysDate = new Date();
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const todaysDay = toDaysDate.getDay();
    console.log(todaysDay);
    let tempPrice = 0;
    if (age <= 18) {
      tempPrice = 8;
    }
    else if (age >= 18) {
      tempPrice = 12;
    }
    if (weekDays[todaysDay]==="Saturday") {
      setPrice(tempPrice - 2);
    }
    else {
      setPrice(tempPrice);
    }
  }
  const check = (event) => {
    setAge(event.target.value);

  }
  return (
    <div>
      <h1>Movie Ticket Pricing</h1>
      <input type="number" value={age} onChange={check} />
      <button onClick={onMovieTicketPricingCheck}>Check</button>
      <p>{price}</p>
    </div>


  );
}

export default App;
