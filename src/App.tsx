import { Button } from "./components/Button"
import { Card } from "./components/Card"
import { InputData } from "./components/InputData"
import { InputText } from "./components/InputText"
import { MiniCards } from "./components/MiniCards"
import { Agenda } from "./core-components/Agenda"
import { AgendeAtendimento } from "./core-components/AgendeAtendimento"
import { Period } from "./models/period.enum"


function App() {

  return (
    <div>

      <Agenda/>


      <AgendeAtendimento/>
      {/* <InputData/>
      <InputData size="sm"/>
      <MiniCards state="selected">10:00</MiniCards>
      <MiniCards state="default">10:00</MiniCards>
      <MiniCards disabled >10:00</MiniCards>
      <InputText/>
      <Button>agendar</Button>
      <Card period={Period.MANHA} ></Card>
      <Card period={Period.NOITE} ></Card>
      <Card period={Period.TARDE} ></Card> */}
    </div>
  )
}

export default App
