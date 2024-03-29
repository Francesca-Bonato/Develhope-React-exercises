/*
Create a Login component containing three inputs: a username input, a password input and a remember checkbox. 
All three inputs should be controlled components.
*/

import { useState } from "react";

export function Login() {
  const [userdata, setUserdata] = useState({
    username: '',
    password: '',
    remember: false,
  });

  function handleInputChange(event) {
    if (event.target.checked) {
      const remember = event.target.checked;
      setUserdata((data) => {
        return {
          ...data,
          remember,
        };
      });
    } else {
      const name = event.target.name;
      const value = event.target.value;
      setUserdata((data) => {
        return {
          ...data,
          [name]: value,
        };
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(userdata);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Insert the username:</label>
      <input
        onChange={handleInputChange}
        type="text"
        name="username"
        id="username"
        value={userdata.username}
      />
      <label htmlFor="password">Insert the password:</label>
      <input
        onChange={handleInputChange}
        type="text"
        name="password"
        id="password"
        value={userdata.password}
      />
      <label htmlFor="remember">Remember me</label>
      <input
        onChange={handleInputChange}
        type="checkbox"
        name="remember"
        id="remember"
        checked={userdata.remember}
      />
      <button>Send</button>
    </form>
  );
}
