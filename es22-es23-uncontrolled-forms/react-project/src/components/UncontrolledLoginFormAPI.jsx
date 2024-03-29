/*
Attempt to access the values of the form by using the FormData API. 
What are the advantages? What are the disadvantages?
*/

export function UncontrolledLoginFormAPI() {
  function handleLogin(e) {
    e.preventDefault();

    const formData = new FormData(e.target)
    const userdata = {
      username: formData.get('username'),
      password: formData.get('password'),
      remember: formData.get('remember') === 'on' ? true : false,
    };

    console.log(userdata);
  }

  return (
    <form onSubmit={handleLogin}>
      <h3>Uncontrolled Form using the Form API</h3>
      <label htmlFor="username">Insert the username:</label>
      <input required type="text" name="username" id="username" />
      <br />
      <label htmlFor="password">Insert the password:</label>
      <input required type="text" name="password" id="password" />
      <br />
      <label htmlFor="remember">Remember me</label>
      <input type="checkbox" name="remember" id="remember" />
      <br />
      <button>Login</button>
      <button type="reset">Reset</button>
    </form>
  );
}
