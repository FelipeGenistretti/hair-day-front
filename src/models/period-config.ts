import { Period } from "./period.enum"

export const PERIOD_CONFIG = {
  [Period.MANHA]: {
    label: "Manhã",
    icon: "🌤️",
    time: "9h–12h",
  },
  [Period.TARDE]: {
    label: "Tarde",
    icon: "🌇",
    time: "13h–18h",
  },
  [Period.NOITE]: {
    label: "Noite",
    icon: "🌙",
    time: "19h–23h",
  },
} as const