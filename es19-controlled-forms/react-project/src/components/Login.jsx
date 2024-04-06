/* eslint-disable react/prop-types */
/*
Add a "login" button to the Login component. This button should be disabled as long as the username and password inputs are empty.
When clicked, the event handler attached to the button should call an onLogin function passed as a prop to the Login component, 
passing it the state, that will print the state value.
*/

import { useState } from "react";

export function Login({ loginFunction }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleUsernameInputChange(e) {
    const usernameInput = e.target.value;
    setUsername(usernameInput);
  }

  function handlePasswordInputChange(e) {
    const passwordInput = e.target.value;
    setPassword(passwordInput);
  }

  return (
    <>
      <h2>My Login</h2>
      <label htmlFor="username">Username:</label>
      <br />
      <input
        onChange={handleUsernameInputChange}
        type="text"
        name="username"
        value={username}
        id="username"
      />
      <br />
      <label htmlFor="password">Password:</label>
      <br />
      <input
        onChange={handlePasswordInputChange}
        type="password"
        name="password"
        value={password}
        id="password"
      />
      <br />
      <br />
      <button onClick={() => loginFunction(username, password)} disabled={!username || !password}>
        Login
      </button>
    </>
  );
}
