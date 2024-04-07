/* 
Create a custom hook useCounter that keeps track of the state of a counter, and returns the current value 
of the counter as well as three functions to increment, decrement and reset the counter.
*/

import { useState } from "react";

export function useCounter( initialValue = 0, increment = 1, decrement = 1 ) {
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

  return {
    counter,
    onIncrement: handleIncrementCounter,
    onDecrement: handleDecrementCounter,
    onReset: handleResetCounter,
  }
}