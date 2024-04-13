/* eslint-disable react/prop-types */

import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

export function ShowGithubUser() {
  const { username } = useParams();

  const [userdata, setUserdata] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchUserdata(name) {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`https://api.github.com/users/${name}`);
      const user = await response.json();
      setUserdata(user);

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("User not found");
        } else {
          throw new Error("Server error");
        }
      }
    } catch (error) {
      setError(error);
      setUserdata(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUserdata(username);
  }, [username]);

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
