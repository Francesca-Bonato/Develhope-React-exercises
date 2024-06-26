/* eslint-disable react/prop-types */

/*Starting from the last props exercise, modify the Age component so that the "Your age is " message is rendered only 
if the age prop is greater than 18. Otherwise render the "You are very young!" message. */

import Age from "./Age";

function Welcome({ name, age }) {
  return (
    <>
      <p>Welcome, {name}!</p>
      {age>18? <Age age={age}/> : 'You are very young!'}
    </>
  );
}

Welcome.defaultProps = {
  name: "user",
  age: ">18",
};

export default Welcome;
