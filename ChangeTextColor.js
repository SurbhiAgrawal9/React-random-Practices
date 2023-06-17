//App.js on sandbox
import { useState } from "react";

export default function App() {
  const [textInput, updateInput] = useState(" enter the text");
  const [color, setColor] = useState("black");

  function changecolortoRed() {
    setColor("red");
  }

  function changetexttoBlue() {
    setColor("blue");
  }

  return (
    <div className="App">
      <input onChange={(e) => updateInput(e.target.value)} />
      <br />

      <br />
      <h1 style={{ color: color }}>{textInput}</h1>
      <button onClick={changecolortoRed}>red</button>
      <button onClick={changetexttoBlue}>blue</button>
    </div>
  );
}
