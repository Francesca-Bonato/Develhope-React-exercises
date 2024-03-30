import { Counter } from "./components/Counter"

function App() {
  return (
    <>
      <Counter increment={1} decrement={1} initialValue={0}/>
    </>
  )
}

export default App