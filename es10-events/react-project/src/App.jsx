import { AlertClock } from "./AlertClock";

export function App() {

  function handleShowTime() {
    const now = new Date();
    alert(`The current time is ${now.toLocaleTimeString()}`)
  }

  return (
    <>
      <h1>Clock App</h1>
      <p>Click on the button below to see the current time</p>
      <AlertClock onClick={handleShowTime} label="Click Me!"/>
    </>
  );
}

