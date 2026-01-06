import { cva, cx, type VariantProps } from "class-variance-authority"
import type { ReactNode } from "react"
import { Text } from "./Text"


export const miniCardsVariants = cva(
  `
  flex items-center justify-center
  rounded-md
  relative
  group
  border
  transition-colors
  bg-gray-600
  `,
  {
    variants: {
      variant: {
        default: "border-gray-500 text-gray-200",
      },
      state: {
        default: "",
        selected: "border-[#B8952E]",
      },
      size: {
        md: "h-[40px] px-4",
      },
      disabled: {
        true: "pointer-events-none border border-gray-500 bg-gray-600",
      },
    },
    defaultVariants: {
      variant: "default",
      state: "default",
      size: "md",
    },
  }
)


export type CardAs = "div" | "article" | "section" | "button"

export interface MiniCardsProps
  extends VariantProps<typeof miniCardsVariants> {
  children?: ReactNode
  as?: CardAs
  className?: string
  disabled?: boolean
}


export function MiniCards({
  as: Component = "button",
  variant,
  state,
  size,
  disabled,
  className,
  children,
  ...props
}: MiniCardsProps) {
  return (
    <Component
      type={Component === "button" ? "button" : undefined}
      disabled={Component === "button" ? disabled : undefined}
      className={cx(
        miniCardsVariants({ variant, state, size, disabled }),
        className
      )}
      {...props}
    >
        {!disabled ?
      <Text  className="group-[.selected]:text-[#B8952E]">
        {children}
      </Text>:
      <Text className="text-gray-500">
        {children}
      </Text>
        }
    </Component>
  )
}