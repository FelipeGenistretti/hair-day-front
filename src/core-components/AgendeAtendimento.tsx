import type React from "react"
import { Button } from "../components/Button"
import { InputData } from "../components/InputData"
import { InputText } from "../components/InputText"
import { Text } from "../components/Text"
import { useAgenda } from "../hooks/useAgenda"
import { Period } from "../models/period.enum"
import { HorariosCards } from "./HorariosCards"

export function AgendeAtendimento() {
  const {
    selectName,
    selectPeriodHour,
    setDate,
    draft,
    canSubmit,
    submit,
    isSlotOccupied
  } = useAgenda()

  function handleSelectName(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    selectName(e.target.value)
  }

  function handleSetDate(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setDate(e.target.value)
  }

  function handleSubmit(
    e: React.MouseEvent<HTMLButtonElement>
  ) {
    e.preventDefault()
    submit()
  }

  return (
    <div className="flex flex-col bg-gray-700 p-[80px] rounded-md h-full">
      <form>
        <div>
          <Text variant="body-title" className="text-2xl">Agende um atendimento</Text>
          <Text>
            Selecione data, horário e informe o nome do cliente
            para criar o agendamento
          </Text>
        </div>

        <div className="mt-[40px]">
          <InputData
          className="mb-[40px]"
            label="Data"
            value={draft.date ?? ""}
            onChange={handleSetDate}
          />

          <Text>Horarios</Text>
          <HorariosCards
            horario="manha"
            isSlotOccupied={(hour) =>
              isSlotOccupied(Period.MANHA, hour)
            }
            onSelect={(hour) =>
              selectPeriodHour(hour, Period.MANHA)
            }
            />

          <HorariosCards
            horario="tarde"
            isSlotOccupied={(hour) =>
              isSlotOccupied(Period.TARDE, hour)
            }
            onSelect={(hour) =>
              selectPeriodHour(hour, Period.TARDE)
            }
          />

          <HorariosCards
            horario="noite"
            isSlotOccupied={(hour) =>
                isSlotOccupied(Period.NOITE, hour)
            }
            onSelect={(hour) =>
              selectPeriodHour(hour, Period.NOITE)
            }
          />
        </div>

        <div>
          <InputText
            label="Cliente"
            value={draft.name ?? ""}
            onChange={handleSelectName}
          />
        </div>

        <div>
          <Button
          className="mt-[40px] w-full"
            isDisabled={!canSubmit()}
            onClick={handleSubmit}
          >
            Agendar
          </Button>
        </div>
      </form>
    </div>
  )
}
