/*
Create a Login component containing three inputs: a username input, a password input and a remember checkbox. 
All three inputs should be controlled components.
*/

import { useState } from "react";

export function LoginExtendedVersion() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState("");

  function handleUsernameInputChange(event) {
    const username = event.target.value;
    setUsername(username);
  }

  function handlePasswordInputChange(event) {
    const password = event.target.value;
    setPassword(password);
  }

  function handleRememberInputChange(event) {
    const remember = event.target.checked;
    setRemember(remember);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(username, password, remember);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Insert the username:</label>
      <input
        onChange={handleUsernameInputChange}
        type="text"
        name="username"
        id="username"
        value={username}
      />
      <label htmlFor="password">Insert the password:</label>
      <input
        onChange={handlePasswordInputChange}
        type="text"
        name="password"
        id="password"
        value={password}
      />
      <label htmlFor="remember">Remember me</label>
      <input
        onChange={handleRememberInputChange}
        type="checkbox"
        name="remember"
        id="remember"
        value={remember}
      />
      <button>Send</button>
    </form>
  );
}
