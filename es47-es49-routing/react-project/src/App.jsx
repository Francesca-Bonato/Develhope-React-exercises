/* 
- Render the App component within a BrowserRouter component. 
- Modify App by wrapping it in a Routes component and add a Route to the / path that renders the Welcome component, passing it a name prop. 
- Add a new Route to the /counter path that renders the Counter component from the first state exercise.
- Add a new Route to the users/:username path that renders a ShowGithubUser component that receives the username as a path parameter.
  It should render the GithubUser component from the first Data Fetching with fetch and useEffect exercise by passing it the received username.
*/

import { Link, Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome";
import { Counter } from "./components/Counter";
import { GithubUser } from "./components/GithubUser";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");

  function handleInputChange(e) {
    setUsername(e.target.value);
  }

  return (
    <div>
      <h1>My App</h1>
      <label htmlFor="username">Please insert your name:</label>
      <input type="text" name="username" id="username" onChange={handleInputChange}/>
      <Link to={`/${username}`} >
        Go to the App
      </Link>
      <Routes>
        <Route path={`/:name`} element={<Welcome />} />
        <Route path="/Counter" element={<Counter />} />
        <Route path="/users/:username" element={<GithubUser />} />
      </Routes>
    </div>
  );
}

export default App;
