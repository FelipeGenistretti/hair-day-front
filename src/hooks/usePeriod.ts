import { PERIOD_CONFIG } from "../models/period-config";
import type { Period } from "../models/period.enum";

export function usePeriod(period:Period){
    return PERIOD_CONFIG[period]
}