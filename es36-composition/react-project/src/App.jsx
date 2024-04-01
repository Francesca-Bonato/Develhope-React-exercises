import {Container} from "./components/Container"
import Welcome from "./components/Welcome"

function App() {
  
  return (
    <Container title={<h1>My Application</h1>}>
      <Welcome name="Francesca" age={29}/>
    </Container>
  )
}

export default App
