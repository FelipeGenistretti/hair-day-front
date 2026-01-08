import useLocalStorage from "use-local-storage"
import { AGENDAMENTO_KEY, type Agendamento } from "../models/agendamento"
import { useState } from "react"
import type { Period } from "../models/period.enum"

export type AgendamentoDraftType = {
  date?: string
  hour?: string
  name?: string
  period?: Period
}

export function useAgenda() {
  const [agenda, setAgenda] = useLocalStorage<Agendamento[]>(
    AGENDAMENTO_KEY,
    []
  )

  const [draft, setDraft] = useState<AgendamentoDraftType>({})

  function setDate(date: string) {
    setDraft((prev) => ({
      ...prev,
      date,
      period: undefined,
      hour: undefined,
    }))
  }

  function selectPeriodHour(hour: string, period: Period) {
    setDraft((prev) => ({
      ...prev,
      hour,
      period,
    }))
  }

  function selectName(name: string) {
    setDraft((prev) => ({
      ...prev,
      name,
    }))
  }

  function canSubmit() {
    return Boolean(
      draft.date &&
        draft.period &&
        draft.hour &&
        draft.name?.trim()
    )
  }

  function isSlotOccupied(period: Period, hour: string) {
    if (!draft.date) return false

    return agenda.some((agendamento) => {
        return (
        agendamento.date === draft.date &&
        agendamento.period === period &&
        agendamento.hour === hour
        )
    })
    }



  function submit() {
    if (!canSubmit()) return

    const novo: Agendamento = {
      id: crypto.randomUUID(),
      date: draft.date!,
      period: draft.period!,
      hour: draft.hour!,
      cliente: {
        id: crypto.randomUUID(),
        nome: draft.name!.trim(),
      },
    }

    setAgenda((prev) => [...prev, novo])
    
    
    setDraft({})
  }

  return {
    agenda,
    draft,
    setDate,
    selectPeriodHour,
    selectName,
    canSubmit,
    submit,
    isSlotOccupied
  }
}
