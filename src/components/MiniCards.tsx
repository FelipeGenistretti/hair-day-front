import { cva, cx, type VariantProps } from "class-variance-authority"
import type {
  ButtonHTMLAttributes,
  ReactNode,
  ElementType,
} from "react"
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
        true: "pointer-events-none opacity-50",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      state: "default",
      size: "md",
      disabled: false,
    },
  }
)

export type CardAs = ElementType

export interface MiniCardsProps
  extends VariantProps<typeof miniCardsVariants>,
    Omit<
      ButtonHTMLAttributes<HTMLButtonElement>,
      "size" | "disabled"
    > {
  as?: CardAs
  children: ReactNode
  disabled?: boolean
  className?: string
}

export function MiniCards({
  as: Component = "button",
  variant,
  state,
  size,
  disabled = false,
  className,
  children,
  ...props
}: MiniCardsProps) {
  return (
    <Component
      type={Component === "button" ? "button" : undefined}
      disabled={Component === "button" ? disabled : undefined}
      className={cx(
        miniCardsVariants({
          variant,
          state,
          size,
          disabled,
        }),
        className
      )}
      {...props}
    >
      <Text
        className={
          disabled
            ? "text-gray-500"
            : "group-[.selected]:text-[#B8952E]"
        }
      >
        {children}
      </Text>
    </Component>
  )
}
