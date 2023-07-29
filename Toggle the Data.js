//App.js


import { uneState, useState } from "react";

export default function App() {
  const [myName, setMyName] = useState("Surbhi");
  const ChangeName = () => {
    let newOne = myName;
    newOne === "Surbhi" ? setMyName("I am the best ...") : setMyName("Surbhi");
  };
  return (
    <div className="App">
      <h1>{myName} </h1>
      <button onClick={ChangeName}>Click me</button>
    </div>
  );
}
