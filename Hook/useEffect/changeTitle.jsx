import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `chat(${count})`;
  });
  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>click me</button>
      </div>
    </>
  );
}

export default App;
