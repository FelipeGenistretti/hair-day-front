import { Button } from "./components/Button"
import { InputData } from "./components/InputData"
import { InputText } from "./components/InputText"
import { MiniCards } from "./components/MiniCards"

function App() {

  return (
    <div>
      <InputData/>
      <InputData size="sm"/>
      <MiniCards state="selected">10:00</MiniCards>
      <MiniCards state="default">10:00</MiniCards>
      <MiniCards disabled >10:00</MiniCards>
      <InputText/>
      <Button>agendar</Button>
    </div>
  )
}

export default App
