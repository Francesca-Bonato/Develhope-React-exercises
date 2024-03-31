/* eslint-disable react/prop-types */

/*
Create a Counter function component and create a new state variable called counter initialized to 0. 
The Counter component should render the counter value within an h2 tag, and the counter value should be incremented 
every time the user clicks on a button.

Tip: use the useState hook. 
Make it so that the initial value of the counter and the increment amount are passed as props to the component. 
When calling "setter" function to increment the counter, should the parameter be a function or an immediate value? Why?
*/


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
