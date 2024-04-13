/* eslint-disable react/prop-types */

import { useCounter } from "./useCounter";

export function Counter() {
  const {counter, onIncrement, onDecrement, onReset} = useCounter()
  
  return (
    <>
      <h2>The counter is {counter}</h2>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      <button onClick={onReset}>Reset</button>
    </>
  );
}


