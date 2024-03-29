/*
Add a "login" button to the Login component. This button should be disabled as long as the username and password inputs are empty.
When clicked, the event handler attached to the button should call an onLogin function passed as a prop to the Login component, 
passing it the state, that will print the state value.
*/

import { useState } from "react";

export function Login({loginFunction}) {
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

  function handleLoginButton() {
    loginFunction(username, password);
  }

  return (
    <>
      <input
        onChange={handleUsernameInputChange}
        type="text"
        name="username"
        value={username}
      />
      <input
        onChange={handlePasswordInputChange}
        type="password"
        name="password"
        value={password}
      />
      <button onClick={handleLoginButton} disabled={!username || !password}>
        Login
      </button>
    </>
  );
}
