import { useState } from 'react';
import './App.css';

function App() {
  const [size, setSize] = useState();
  const [extrashot, setExtrashot] = useState();
  const [check, setCheck] = useState();

  const onCustomizeClick = () => {
    if (size === "small" && extrashot === "order") {
      setCheck("Small with an option for an extra shot of espresso");
    } else if (size === "medium" && extrashot === "order") {
      setCheck("Medium with an option for an extra shot of espresso");
    } else if (size === "large" && extrashot === "order") {
      setCheck("Large with an option for an extra shot of espresso");
    } else {
      setCheck("Please select a valid size and option for an extra shot");
    }
  }
  const customerOrder = (event) => {
    setSize(event.target.value);
  }

  const order = (event) => {
    setExtrashot(event.target.value);

  }
  return (
    <div>
      <h1>Coffee Custamization</h1>
      <select value={size} onChange={customerOrder}>
        <option value={""}>select</option>
        <option value={"small"}>Small</option>
        <option value={"medium"}>Medium</option>
        <option value={"large"}>Large</option>
      </select>
      <input type="text" value={extrashot} onChange={order} />
      <button onClick={onCustomizeClick}>check</button>
      <p>{check}</p>


    </div>
  );
}

export default App;
