import { useReducer } from 'react';
import './Counter.css';

type State = {
  count: number;
}

type Action = { type: "increment" } | { type: "decrement" } | { type: "reset" };

const reducer = (state: State, action: Action): any => {

  switch (action.type) {
    case "increment":
      return { count: state.count + 1};
    case "decrement":
      return { count: state.count - 1};
    case "reset":
      return { count: 0};
    default:
      return state;
  }
};

function Counter() {

  const [state, dispatch] = useReducer(reducer, {count: 0})

  return (
    <>
    {state.count}
    <br/>
    <button onClick={() => dispatch({ type: "increment" })}>Incrementar</button>
    <button onClick={() => dispatch({ type: "decrement" })}>Decrementar</button>
    <button onClick={() => dispatch({ type: "reset" })}>Resetar</button>
    </>
  )
}

export default Counter