/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

export function Counter({ initialValue = 0, increment = 1 }) {
  const [counter, setCounter] = useState(initialValue);

  function handleIncrementCounter() {
    return setCounter((c) => c + increment);
  }

  useEffect(() => {
    console.log(`the value of the counter is ${counter}`)
  }, [counter])

  return (
    <>
      <h2>The counter is {counter}</h2>
      <button onClick={handleIncrementCounter}>Increment</button>
    </>
  );
}
