/* eslint-disable react/prop-types */

import { useGithubUser } from "./useGithubUser";

export function GithubUser({ username }) {
  const { userdata, loading, error, onFetchUser } = useGithubUser(username);
  return (
    <>
      {error && <p>Something went wrong: {error.message}</p>}
      {loading && <p>Loading...</p>}
      {userdata && (
        <div>
          <button onClick={onFetchUser}>Refresh user data</button>
          <h2>{userdata.name}</h2>
          <p>Github username: {userdata.login}</p>
          <img width="300" src={userdata.avatar_url} />
        </div>
      )}
    </>
  );
}
