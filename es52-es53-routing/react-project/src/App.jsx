/* 
- Add three Links within the main App component and use them to navigate to all three routes.
*/

import {Link} from "react-router-dom";

function App() {
  return (
    <div>
      <h1>My App</h1>
      <Link to="/welcome/:name">Welcome to the app!</Link>
      <br/>
      <Link to="/users/:username">Search Github user</Link> 
      <br/>
      <Link to="/counter">Use our counter</Link> 
    </div>
    
  );
}

export default App;
