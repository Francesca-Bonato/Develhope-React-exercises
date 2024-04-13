/* Add an index route to the GithubUserList route that shows the "Add a user and select it" message */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Welcome from "./components/Welcome";
import { Counter } from "./components/Counter";
import { GithubUserList } from "./components/GithubUserList";
import { ShowGithubUser } from "./components/ShowGithubUser";
import { NotFound } from "./components/NotFound";

function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/welcome/:name" element={<Welcome />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users" element={<GithubUserList/>}>
          <Route path=":username" element={<ShowGithubUser/>}/>
          <Route index element={<h3>Add a user and select it</h3>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Root;
