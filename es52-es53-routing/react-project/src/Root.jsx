import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Welcome from "./components/Welcome";
import { Counter } from "./components/Counter";
import { GithubUser } from "./components/GithubUser";

function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/welcome/:name" element={<Welcome />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users/:username" element={<GithubUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Root;
