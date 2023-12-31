import "./styles.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>inc</button>
      <button
        onClick={() => {
          if (count > 0) {
            setCount(count - 1);
          }
        }}
      >
        Dec
      </button>
    </div>
  );
}
