/* eslint-disable react/prop-types */

import { useParams } from "react-router-dom";

function Welcome() {
  const {name} = useParams()
  return (
    <>
      <p>Welcome, {name}!</p>
    </>
  );
}

export default Welcome;
