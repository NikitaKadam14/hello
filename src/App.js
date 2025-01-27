import { useState } from 'react';
import './App.css';

function App() {
  const [password, setPassword] = useState();
  const [check, setCheck] = useState();
  const onPasswordCheckClick = () => {
    if (password.length < 6) {
      setCheck("Weak");
    }
    else if (password.length >= 6 && password.length <= 10) {
      setCheck("Medium");
    }
    else {
      setCheck("strong");
    }
  }
  const strength = (event) => {
    setPassword(event.target.value);
  }
  return (
    <div>
      <h1>Password Strength checker</h1>
      <input type="text" value={password} onChange={strength} />
      <button onClick={onPasswordCheckClick}>Check</button>
      <p>{check}</p>
    </div>
  );
}

export default App;
