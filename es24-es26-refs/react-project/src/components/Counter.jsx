/* eslint-disable react/prop-types */
/*
Modify the Counter component so that whenever the value of the counter changes, the value of a ref is updated 
to contain the direction of the change (i.e. "up" or "down") relative to the initialValue prop.
Print the value of the ref to the console only when it's different from the previous value.
*/

import { useEffect, useRef, useState } from "react";

export function Counter({ increment, decrement, initialValue }) {
  const [counter, setCounter] = useState(initialValue);

  const directionRef = useRef(null);

  useEffect(() => {
    if (counter > initialValue && directionRef.current !== "up") {
      directionRef.current = "up";
      console.log(directionRef.current);
    } else if (counter < initialValue && directionRef.current !== "down") {
      directionRef.current = "down";
      console.log(directionRef.current);
    } 
  }, [counter]);

  function handleIncrementButton() {
    setCounter((c) => c + increment);
  }

  function handleDecrementButton() {
    setCounter((c) => c - decrement);
  }

  function handleReset() {
    setCounter(initialValue);
  }

  return (
    <>
      <p>The current value of the counter {counter}</p>
      <button onClick={handleIncrementButton}>Increment</button>
      <button onClick={handleDecrementButton}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}
