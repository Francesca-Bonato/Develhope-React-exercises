import { useState } from "react";

export function Counter({ initialValue = 0, increment = 1 }) {
  const [counter, setCounter] = useState(initialValue);

  function handleIncrementCounter() {
    return setCounter((c) => c + increment);
  }

  return (
    <>
      <h2>The counter is {counter}</h2>
      <button onClick={handleIncrementCounter}>Increment</button>
    </>
  );
}
