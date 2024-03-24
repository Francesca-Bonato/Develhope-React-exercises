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
