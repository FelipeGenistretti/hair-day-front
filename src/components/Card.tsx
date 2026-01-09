import { cva, cx, type VariantProps } from "class-variance-authority"
import type { ReactNode } from "react"
import type { Period } from "../models/period.enum"
import { usePeriod } from "../hooks/usePeriod"

export const cardVariants = cva(
  `
  rounded-xl
  border border-white/5
  bg-gradient-to-b from-[#1a1a1a] to-[#141414]
  backdrop-blur
  shadow-sm
  `,
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
  period: Period
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

  const hasContent = Boolean(children)

  return (
    <section className={cx(cardVariants({ size }), className)}>
      
      {/* HEADER */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-white/5">
        <span className="flex items-center gap-2 text-sm text-zinc-300">
          {icon}
          <span>{label}</span>
        </span>

        <span className="text-xs text-zinc-500">
          {time}
        </span>
      </header>

      {/* CONTENT */}
      <div className="px-6 py-3">
        {hasContent ? (
          <div className="space-y-1">
            {children}
          </div>
        ) : (
          <p className="text-sm text-zinc-500 italic">
            Nenhum agendamento marcado para este período
          </p>
        )}
      </div>
    </section>
  )
}
