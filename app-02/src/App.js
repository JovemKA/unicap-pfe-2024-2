import "./App.css";
import { useState } from "react";
import "./DiceRoller.css";

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
  const [message, setMessage] = useState("Vamos Jogar!");
  const [wins, setWins] = useState(0); // Contador de vitórias
  const [totalRolls, setTotalRolls] = useState(0); // Contador de jogadas

  // Função para rolar os dados e atualizar o estado
  const rollDice = () => {
    const newDice1 = Math.floor(Math.random() * 6) + 1;
    const newDice2 = Math.floor(Math.random() * 6) + 1;
    const newMessage =
      newDice1 + newDice2 === 7 || newDice1 + newDice2 === 11
        ? "Você ganhou!"
        : "Você perdeu!";

    setDice1(newDice1);
    setDice2(newDice2);
    setMessage(newMessage);

    setTotalRolls(totalRolls + 1);

    if (newDice1 + newDice2 === 7 || newDice1 + newDice2 === 11) {
      setWins(wins + 1);
    }
  };

  const winPercentage =
    totalRolls > 0 ? ((wins / totalRolls) * 100).toFixed(2) : 0;

  return (
    <div className="dice-roller">
      <h1>Dice Roller</h1>
      <p>Para ganhar, você precisa tirar um 7 ou um 11.</p>
      <h2>{message}</h2>
      <div className="dice-container">
        <div className="dice">{dice1}</div>
        <div className="dice">{dice2}</div>
      </div>
      <button onClick={rollDice}>Roll Dice</button>

      <div className="score">
        <h2>Score</h2>
        <p>Vitórias: {wins}</p>
        <p>Total de Jogadas: {totalRolls}</p>
        <p>Percentual de Vitórias: {winPercentage}%</p>
      </div>
    </div>
  );
}

export default App;
