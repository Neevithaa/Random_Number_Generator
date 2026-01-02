import { useState } from "react";
import "./App.css";

function App() {
  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandomNumber = () => {
    const number = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(number);
  };

  return (
    <div className="container">
      <h1>Random Number Generator</h1>

      <div className="display">
        {randomNumber === null ? (
          <p className="placeholder">No number generated yet</p>
        ) : (
          <h2 className="number">{randomNumber}</h2>
        )}
      </div>

      <button onClick={generateRandomNumber}>
        Generate Random Number
      </button>
    </div>
  );
}

export default App;
