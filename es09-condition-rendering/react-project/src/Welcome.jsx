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
