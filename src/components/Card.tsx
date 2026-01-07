import { cva, cx, type VariantProps } from "class-variance-authority"
import type { ReactNode } from "react"
import type { Period } from "../models/period.enum"
import { usePeriod } from "../hooks/usePeriod"

export const cardVariants = cva(
  "rounded-md bg-[#2E2C30] border border-gray-700 p-4",
  {
    variants: {
      size: {
        sm: "text-sm",
        md: "text-base",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
)

export interface CardProps
  extends VariantProps<typeof cardVariants> {
  period:Period
  children?: ReactNode
  className?: string
}

export function Card({
  period,
    children,
  size,
  className,
}: CardProps) {

    const { label, icon, time } = usePeriod(period)


  return (
    <section className={cx(cardVariants({ size }), className)}>
      <header className="flex items-center justify-between text-zinc-400">
        <span className="flex items-center gap-2">
          {icon}
          <span>{label}</span>
        </span>

        <span>{time}</span>
      </header>

      {children ? (
        <p className="mt-2 text-zinc-500 text-sm">
          {children}
        </p>
      ): <p className="mt-2 text-zinc-500 text-sm">Nenhum agendamento marcado para este período</p> }
    </section>
  )
}
