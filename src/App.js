import { useState } from 'react';
import './App.css';

function App() {
  const [age,setAge]=useState(0);
  const [check,setCheck]=useState(0);
  const CalculateCheck=() =>{
    if(age<13){
      setCheck("child");
    }
    else if(age>13 && age<=19){
      setCheck("Teenager");

    }
    else if(age>20 && age <=59){
      setCheck("Adult");
    }
    else{
      setCheck("Senior");
    }
  }
  const handleAgeChange=(event)=>{
    setAge(event.target.value)

  }
 
return (
  <div>
    <h1>Age Group Categorization</h1>
    <input type='number' value={age} onChange={handleAgeChange}/>
    <button onClick={CalculateCheck}>Calculate</button>
    <p>result is{check}</p>

  </div>
   

  );
}

export default App;
