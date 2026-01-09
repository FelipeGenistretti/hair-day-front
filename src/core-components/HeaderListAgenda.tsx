import type { ElementType } from "react"
import { Text } from "../components/Text"
import { InputData } from "../components/InputData"

export interface HeaderListAgendaProps {
    className?:string
    as?: ElementType
    onDateChange: (date: string)=>void
}

export function HeaderListAgenda({as:Component="div", onDateChange,className, ...props}:HeaderListAgendaProps){
    return (
        <Component className="flex justify-between" >
            <div className="flex flex-col">
                <Text variant="body-title" >Sua agenda</Text>
                <Text >Consulte os seus cortes de cabelo agendados por dia</Text>
            </div>

            <div>
                <InputData  onChange={e => onDateChange(e.target.value)} size="sm"/>
            </div>
        </Component>
    )
}