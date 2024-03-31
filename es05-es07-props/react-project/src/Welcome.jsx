/* eslint-disable react/prop-types */

/*
1. Create a Welcome function component that receives a name prop and renders the Welcome, {name}! message within a p tag.
Render this component to you App component, passing it a name prop of your choosing.
What happens if no name prop is passed to the Welcome component? Can you set a default value for the name prop?

2. Modify the Welcome component so that it receives a second prop called age and renders it below the 'welcome' message, 
within a p tag after the message "Your age is ".
Modify the value passed to the name prop so that it's contained within a strong tag.

3. Extract the "Your age is " message into a new component called Age and render it within the Welcome component.
Pass to the Age component the age prop that Welcome is receiving from the App component.
*/

import Age from "./Age";

function Welcome({ name, age }) {
  return (
    <>
      <p>Welcome, {name}!</p>
      <Age age={age}/>
    </>
  );
}

Welcome.defaultProps = {
  name: "user",
  age: ">18",
};

export default Welcome;
