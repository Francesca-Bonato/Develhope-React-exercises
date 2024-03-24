import Age from "./Age";
import React from "react";

function Welcome({ name, age }) {
  return (
    <>
      <p>Welcome, {name}!</p>
      <Age age={age}/>
      { age>18  && <Age age={age}/>}
      { age && <Age age={age}/>}
      { age>18 && age<65 && <Age age={age}/>}
      { age>18 && age<65 && name === "John" && <Age age={age}/>}
    </>
  );
}

export default Welcome;
