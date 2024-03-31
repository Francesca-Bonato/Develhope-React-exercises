/* eslint-disable react/prop-types */
import Age from "./Age";

function Welcome({ name, age }) {
  return (
    <div className="welcome">
      <p>Welcome, {name}!</p>
      {age>18? <Age age={age}/> : 'You are very young!'}
    </div>
  );
}

Welcome.defaultProps = {
  name: "user",
  age: ">18",
};

export default Welcome;
