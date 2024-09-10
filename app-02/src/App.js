import './App.css';
import { useState } from 'react';
import './DiceRoller.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <MyComponent />
      </header>
    </div>
  );
}

function MyComponent() {
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);

  const rollDice = () => {
    const newDice1 = Math.floor(Math.random() * 6) + 1;
    const newDice2 = Math.floor(Math.random() * 6) + 1;
    setDice1(newDice1);
    setDice2(newDice2);
  }

  return (
    <div className="dice-roller">
      <h1>Dice Roller</h1>
      <div className="dice-container">
        <div className="dice">{dice1}</div>
        <div className="dice">{dice2}</div>
      </div>
      <button onClick={rollDice}>Roll Dice</button>
    </div>
  )
}

export default App;
