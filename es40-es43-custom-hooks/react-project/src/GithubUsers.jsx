/* Starting from the previous exercise, create a new GithubUsers component that has a form with a text input and a submit button.
The input will be used for searching a user by providing their username.
Each user will be displayed in a list, where each list item is a GithubUser component.
These components will take username as a prop. */

import { useState } from "react";
import { GithubUser } from "./GithubUser";

export function GithubUsers() {
const [username, setUsername] = useState('')
  const [usernames, setUsernames] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    if (username) {
        setUsernames([...usernames, username]);
        setUsername('')
    } 
  }

  function handleInputChange(event) {
    setUsername(event.target.value)
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" id="username" value={username} onChange={handleInputChange}/>
      <button type="submit">Submit</button>
      <ul>
        {usernames.map((element, index) => (
          <li key={index}>
            <GithubUser username={element} />
          </li>
        ))}
      </ul>
    </form>
  );
}