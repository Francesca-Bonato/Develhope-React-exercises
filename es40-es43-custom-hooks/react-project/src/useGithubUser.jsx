/* Extract the logic to fetch a Github user's data from the GithubUser component 
from the third exercise of Context into a custom hook called useGithubUser. */import { useEffect } from "react";
import { useState } from "react";

export function useGithubUser(username) {
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

  //A second useEffect is used to log the updated value of userdata
  useEffect(() => {
    console.log(userdata);
  }, [userdata]);

  return {userdata, loading, error, fetchUserdata}
}