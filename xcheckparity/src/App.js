import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleCheck = () => {
    const trimmed = value.trim();

    // Accept only whole numbers (optionally negative); everything else is invalid
    if (!/^-?\d+$/.test(trimmed)) {
      setMessage("Not a valid number!");
      setIsError(true);
      return;
    }

    const n = Number(trimmed);
    if (n % 2 === 0) {
      setMessage(`The number ${n} is even!`);
      setIsError(false);
    } else {
      setMessage(`Oops, ${n} is odd!`);
      setIsError(true);
    }
  };

  return (
    <main className="app">
      <h1 className="title">Even or odd?</h1>

      <div className="controls">
        <input
          type="text"
          name="number"
          inputMode="numeric"
          placeholder="Enter a number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleCheck()}
        />
        <button type="button" onClick={handleCheck}>
          Check
        </button>
      </div>

      {message && (
        <p className={`result ${isError ? "error" : "success"}`} role="status">
          {message}
        </p>
      )}
    </main>
  );
}

export default App;