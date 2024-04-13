/* 
Modify the useCounter custom hook from the of Data Fetching - 1 exercise with fetch and useEffect 
to use the useCallback to memoize the functions used to increment, decrement and reset the counter.
*/

import { useCallback } from "react";
import { useState } from "react";

export function useCounter( initialValue = 0, increment = 1, decrement = 1 ) {
  const [counter, setCounter] = useState(initialValue);

  const handleIncrement = useCallback(function handleIncrementCounter() {
    setCounter((c) => c + increment)
  }, [])

  const handleDecrement = useCallback(function handleDecrementCounter() {
   setCounter((c) => c - decrement);
  }, []);

  const handleReset = useCallback(function handleResetCounter () {
    setCounter(initialValue);
  }, []);

  return {
    counter,
    onIncrement: handleIncrement,
    onDecrement: handleDecrement,
    onReset: handleReset,
  }
}