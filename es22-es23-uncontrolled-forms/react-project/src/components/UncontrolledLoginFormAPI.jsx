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
    <form onSubmit={handleLogin} className="bg-white p-5 m-5 w-[500px] rounded-xl">
      <h3 className="text-black text-center">Uncontrolled Form using the Form API</h3>
      <div className="text-slate-500 mt-5 ">
      <label htmlFor="username" className="m-5">Insert the username:</label>
      <input required type="text" name="username" id="username" className="border border-slate-400 rounded-xl m-2"/>
      <br />
      <label htmlFor="password" className="m-5">Insert the password:</label>
      <input required type="text" name="password" id="password" className="border border-slate-400 rounded-xl m-2"/>
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
