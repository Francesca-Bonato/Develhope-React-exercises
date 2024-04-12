/* eslint-disable react/prop-types */

import { Link, useParams } from "react-router-dom";

function Welcome() {
  const {name} = useParams()
  return (
    <>
      <p>Welcome, {name}!</p>
      <Link to="/">Homepage</Link>
    </>
  );
}

export default Welcome;
