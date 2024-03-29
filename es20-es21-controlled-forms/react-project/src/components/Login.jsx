/*
Add a "login" button to the Login component. This button should be disabled as long as the username and password inputs are empty.
When clicked, the event handler attached to the button should call an onLogin function passed as a prop to the Login component, 
passing it the state, that will print the state value.

Add a "reset" button to the Login component that clears the content of all three inputs when clicked.

Use the form element to handle the form's submission, and attach the handleLogin event handler to the onSubmit event of the form element. 
How do you prevent the default behavior of the form element?
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

  function handleLogin(e) {
    e.preventDefault();
    console.log(userdata);
  }

  function handleReset() {
    setUserdata({
      username: '',
      password: '',
      remember: false,
    })
    
  }

  return (
    <form onSubmit={handleLogin}>
      <label htmlFor="username">Insert the username:</label>
      <input
        onChange={handleInputChange}
        type="text"
        name="username"
        id="username"
        value={userdata.username}
      />
      <br/>
      <label htmlFor="password">Insert the password:</label>
      <input
        onChange={handleInputChange}
        type="text"
        name="password"
        id="password"
        value={userdata.password}
      />
      <br/>
      <label htmlFor="remember">Remember me</label>
      <input
        onChange={handleInputChange}
        type="checkbox"
        name="remember"
        id="remember"
        checked={userdata.remember}
      />
      <br/>
      <button disabled={!userdata.username || !userdata.password}>Login</button>
      <button type='button' onClick={handleReset}>Reset</button>
    </form>
  );
}
