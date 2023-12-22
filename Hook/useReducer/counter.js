import "./styles.css";
import { useReducer } from "react";

const initialstate = 0;

const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
export default function App() {
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialstate);
  return (
    <div className="App">
      <p>{state}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>inc</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Dec</button>
    </div>
  );
}
