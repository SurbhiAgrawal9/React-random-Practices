import "./styles.css";
import React, { useEffect, useState } from "react";

export default function App() {
  const [screenWidth, setScreenWidth] = useState(window.screen.width);

  const actualWidth = () => {
    console.log(window.innerWidth);
    setScreenWidth(window.innerWidth);
  };
  useEffect(() => {
    console.log("adding");
    window.addEventListener("resize", actualWidth);

    return () => {
      console.log("remove");
      window.removeEventListener("resize", actualWidth);
    };
  });
  return (
    <div className="App">
      <h1>The actual size of the Window</h1>
      <h1>{screenWidth}</h1>
    </div>
  );
}
