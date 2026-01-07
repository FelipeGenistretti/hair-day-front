import type { Cliente } from "./cliente";
import type { Period } from "./period.enum";

export interface Agendamento{
     id?: string
  date: string
  period: Period
  hour: string 
  cliente: Cliente
}