import type { Cliente } from "./cliente";
import type { Period } from "./period.enum";

export const AGENDAMENTO_KEY = "agenda"

export interface Agendamento{
     id?: string
  date: string
  period: Period
  hour: string 
  cliente: Cliente
}