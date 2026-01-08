import { cva, cx, type VariantProps } from "class-variance-authority"
import type { ReactNode } from "react"

export const buttonVariants = cva(
  "flex items-center justify-center rounded-md transition group gap-3 duration-300",
  {
    variants: {
      variant: {
        primary: "bg-[#B8952E] hover:bg-[#DBC170]",
      },
      size: {
        md: "h-14 px-4",
      },
      isDisabled: {
        true: "pointer-events-none opacity-50",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      isDisabled: false, // ✅ default habilitado
    },
  }
)

export const buttonTextVariants = cva("font-bold uppercase", {
  variants: {
    variant: {
      primary: "text-black",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
})

export interface ButtonProps
  extends VariantProps<typeof buttonVariants> {
  children: ReactNode
  className?: string
}

export function Button({
  variant,
  size,
  isDisabled,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      disabled={isDisabled} 
      className={cx(
        buttonVariants({ variant, size, isDisabled }),
        className
      )}
      {...props}
    >
      <span className={buttonTextVariants({ variant })}>
        {children}
      </span>
    </button>
  )
}
