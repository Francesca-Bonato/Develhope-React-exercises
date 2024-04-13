/* 
Create a GithubUserList component that fetching from https://api.github.com/users shows a list of links of github usernames.
By clicking on a username, the ShowGithubUser component will be displayed. 
Add a Route to the users path that shows the GithubUserList component. 
In doing so, remove the /users/:username route from the App component, and add a new nested route within the /users route.
 */

import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

export function GithubUserList() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      setLoading(true);
      setError(false);
      const response = await fetch("https://api.github.com/users");
      const json = await response.json();
      console.log(json);
      setData(json);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {loading && <h3>Loading...</h3>}
      {error && <h3>Something went wrong.</h3>}
      {data && (
        <div>
          {data.map((user) => (
            <li key={user.id}>
              <Link to={`/users/${user.login}`}>{user.login}</Link>
            </li>
          ))}
        </div>
      )}
      <Outlet />
    </>
  );
}
