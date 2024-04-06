/*
Implement an UncontrolledLogin component that implements all the operations of the Login component, but does so using uncontrolled components. 
Attempt to access the values of the form using the DOM API by reading the event.target of the onSubmit event handler.
*/

export function UncontrolledLogin() {
  
  function handleLogin(e) {
    e.preventDefault();
    
    const userdata = {
      username: e.target.elements.username.value,
      password: e.target.elements.password.value,
      remember: e.target.elements.username.checked,
    };

    console.log(userdata);
  }

  return (
    <form onSubmit={handleLogin}>
      <h3>Uncontrolled Form using the DOM API</h3>
      <label htmlFor="username">Insert the username:</label>
      <input type="text" name="username" id="username" required/>
      <br />
      <label htmlFor="password">Insert the password:</label>
      <input type="text" name="password" id="password" required/>
      <br />
      <label htmlFor="remember">Remember me</label>
      <input type="checkbox" name="remember" id="remember" />
      <br />
      <button>Login</button>
      <button type="reset">Reset</button>
    </form>
  );
}
