import { Counter } from "./components/Counter"
import { FocusableInput } from "./components/FocusableInput"

function App() {
  return (
    <>
      <FocusableInput/>
      <Counter increment={1} decrement={1} initialValue={0}/>
    </>
  )
}

export default App