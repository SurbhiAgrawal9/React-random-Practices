//App.js
import { useState } from "react";

export default function App() {
  const [myName, setMyName] = useState("");
  const changeName = () => {
    if (myName !== "") {
      setMyName("");
    } else {
      setMyName("I am the best");
    }
  };
  return (
    <div className="App">
      <h1>{myName}</h1>
      <button onClick={changeName}>click me </button>
    </div>
  );
}
