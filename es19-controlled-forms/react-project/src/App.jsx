import { Login } from "./components/Login";

function App() {
  function onLogin(u, p) {
    console.log(u);
    console.log(p);
  }

  return (
    <>
      <Login loginFunction={onLogin} />
    </>
  );
}

export default App;
