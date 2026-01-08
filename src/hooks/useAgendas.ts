import useLocalStorage from "use-local-storage";
import { AGENDAMENTO_KEY, type Agendamento } from "../models/agendamento";

export function useAgendas(){
    const [agendas] = useLocalStorage<Agendamento[]>(AGENDAMENTO_KEY,[])

    return {
        agendas,
        agendasCount: agendas.length
    }
}