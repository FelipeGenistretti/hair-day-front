import { InputData } from "./components/InputData"
import { MiniCards } from "./components/MiniCards"

function App() {

  return (
    <div>
      <InputData/>
      <MiniCards state="selected">10:00</MiniCards>
      <MiniCards state="default">10:00</MiniCards>
      <MiniCards disabled >10:00</MiniCards>
    </div>
  )
}

export default App
