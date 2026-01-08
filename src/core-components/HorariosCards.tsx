import { MiniCards } from "../components/MiniCards"
import { Text } from "../components/Text"
import { useAgenda } from "../hooks/useAgenda"
import { HORARIOS } from "../models/horarios"

export type Horario = "manha" | "tarde" | "noite"

export interface HorariosCardsProps {
    className?:string
    horario: Horario
    onSelect: (hour: string) => void
    isSlotOccupied: (hour: string) => boolean

}

export function HorariosCards({
  horario,
  onSelect,
  isSlotOccupied,
}: HorariosCardsProps) {
  return (
    <div className="flex flex-col">
      <Text>{horario}</Text>

      <div className="flex gap-3">
        {HORARIOS[horario].map((h) => (
          <MiniCards
            key={h}
            disabled={isSlotOccupied(h)}  
            onClick={() => onSelect(h)}
          >
            {h}
          </MiniCards>
        ))}
      </div>
    </div>
  )
}
