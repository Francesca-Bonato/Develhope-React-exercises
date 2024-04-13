/* 
- Add three Links within the main App component and use them to navigate to all three routes.
*/

import { useState } from "react";
import { Link } from "react-router-dom";

function App() {
  const [username, setUsername] = useState("");

  function handleInputChange(e) {
    setUsername(e.target.value);
  }
  return (
    <div>
      <h1>My App</h1>
      <label htmlFor="username">Please insert your name:</label>
      <input
        type="text"
        name="username"
        id="username"
        onChange={handleInputChange}
      />
      <br/>
      <Link to={`/welcome/${username}`}>Welcome to the App</Link>
      <br />
      <Link to={`/users`}>Search Github user</Link>
      <br />
      <Link to="/counter">Use our counter</Link>
    </div>
  );
}

export default App;
