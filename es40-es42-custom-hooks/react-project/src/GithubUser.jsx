/* eslint-disable react/prop-types */
// Create a GithubUser component that receives a username prop and fetches the data of the corresponding Github user from the Github API.
// The component should render the user's name, login and avatar.

import { useGithubUser } from "./useGithubUser";


export function GithubUser({ username }) {
 const {userdata, loading, error} = useGithubUser(username)
  return (
    <>
      {error && <p>Something went wrong: {error.message}</p>}
      {loading && <p>Loading...</p>}
      {userdata && (
        <div>
          <h2>{userdata.name}</h2>
          <p>Github username: {userdata.login}</p>
          <img width="300" src={userdata.avatar_url} />
        </div>
      )}
    </>
  );
}
