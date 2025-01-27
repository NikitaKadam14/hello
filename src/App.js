import { useState } from 'react';
import './App.css';

function App() {
  const [species, setSpecies] = useState("");
  const [age, setAge] = useState("");
  const [check, setCheck] = useState("");
  const PetFoodReccomendation = () => {
    if (age <=2) {
      setCheck("puppy food");
    }
    else if (age > 5) {
      setCheck("senior cat food");
    }
  }
  const food = (event) => {
    setSpecies(event.target.value);
  }
  const petFood = (event) => {
    setAge(event.target.value);
  }
  return (
    <div>
      <h1>pet Food Reccomendation</h1>
      <select value={species} onChange={food}>
        <option value="">select</option>
        <option value={"dog"}>Dog</option>
        <option value={"cat"}>Cat</option>
      </select>
      <input type="number" value={age} onChange={petFood} />
      <button onClick={PetFoodReccomendation}>check</button>
      <p>{check}</p>


    </div>
  );
}

export default App;
