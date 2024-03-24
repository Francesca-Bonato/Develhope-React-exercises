import Hello from "./Hello";
import Message from "./Message";

function App() {
  return (
    <div>
      <Hello/>
      <Hello/>
      <Message/>
    </div>
  );
}

export default App;

// As expected, it's possible to insert multiple Hello components or insert the Message component within the App component
// The components are repeated in the rendered web page accordingly.