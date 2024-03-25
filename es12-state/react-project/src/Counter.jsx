/* eslint-disable react/prop-types */
import { CounterDisplay } from "./CounterDisplay";
import { useState } from "react";

export function Counter(props) {
  const { initialValue = 0, increment = 1, decrement = 1} = props;
  
  const [counter, setCounter] = useState(initialValue);

  function handleIncrementCounter() {
    return setCounter((c) => c + increment);
  }

  function handleDecrementCounter() {
    return setCounter((c) => c - decrement);
  }

  function handleResetCounter() {
    return setCounter(initialValue);
  }

  return (
    <>
      <CounterDisplay count = {counter}/>
      <button onClick={handleIncrementCounter}>Increment</button>
      <button onClick={handleDecrementCounter}>Decrement</button>
      <button onClick={handleResetCounter}>Reset</button>
    </>
  );
}
