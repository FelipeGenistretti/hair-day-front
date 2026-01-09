import { Card } from "../components/Card"
import { RenderAgenda } from "../components/RenderAgendas"
import { useAgenda } from "../hooks/useAgenda"
import { Period } from "../models/period.enum"
import { HeaderListAgenda } from "./HeaderListAgenda"

export function AgendaList() {

    const { setFilterDate } = useAgenda()

  return (
    <div className="p-[80px] w-full">
      <HeaderListAgenda onDateChange={setFilterDate} />

      <div className="space-y-5 mt-[40px]">

        <Card period={Period.MANHA}>
          <RenderAgenda period={Period.MANHA} />
        </Card>

        <Card period={Period.TARDE}>
          <RenderAgenda period={Period.TARDE} />
        </Card>

        <Card period={Period.NOITE}>
          <RenderAgenda period={Period.NOITE} />
        </Card>

      </div>
    </div>
  )
}
