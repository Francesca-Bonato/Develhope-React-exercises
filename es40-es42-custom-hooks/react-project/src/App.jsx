import { Counter } from "./Counter";
import { GithubUsers } from "./GithubUsers";
import { Login } from "./Login";

export function App() {

  return (
    <div>
      <Counter/>
      <br/>
      <br/>
      <Login/>
      <br/>
      <br/>
      <GithubUsers/>
    </div>
  );
}

