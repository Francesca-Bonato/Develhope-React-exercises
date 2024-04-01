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
    <form onSubmit={handleLogin} className="bg-white p-5 m-5 w-[500px] rounded-xl">
      <h3 className="text-black text-center">Uncontrolled Form using the DOM API</h3>
      <div className="text-slate-500 mt-5 ">
      <label htmlFor="username" className="m-5">Insert the username:</label>
      <input type="text" name="username" id="username" required className="border border-slate-400 rounded-xl m-2"/>
      <br />
      <label htmlFor="password" className="m-5">Insert the password:</label>
      <input type="text" name="password" id="password" required className="border border-slate-400 rounded-xl m-2"/>
      <br />
      <label htmlFor="remember" className="m-5">Remember me</label>
      <input type="checkbox" name="remember" id="remember" className="accent-indigo-600"/>
      <br />
      <button className="m-5 p-1 border-2">Login</button>
      <button type="reset" className="m-5 p-1 border-2">Reset</button>
      </div>
    </form>
  );
}
