import { useState } from "react";
import { GithubUser } from "./GithubUser";

export function GithubUsers() {
const [username, setUsername] = useState('')
  const [usernames, setUsernames] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    // if (username) {
        setUsernames([...usernames, username]);
        setUsername('')
    // } 
  }

  function handleInputChange(event) {
    setUsername(event.target.value)
  }
  
  return (
    <><form onSubmit={handleSubmit}>
      <label htmlFor="username">Search a Github username:</label>
      <input type="text" name="username" id="username" value={username} onChange={handleInputChange}/>
      <br/>
      <button type="submit">Submit</button>
    </form>
    <ul>
        {usernames.map((element, index) => (
          <li key={index}>
            <GithubUser username={element} />
          </li>
        ))}
      </ul>
    </>
    
  );
}