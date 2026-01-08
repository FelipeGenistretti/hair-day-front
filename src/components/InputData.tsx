import { cva, cx, type VariantProps } from "class-variance-authority"
import type { Component, ComponentProps, ReactNode } from "react"
import type React from "react"
import { textVariants } from "./Text"

export const inputVariants = cva(`p-[12px] rounded-md mr-auto flex items-center border border-gray-500   transition-colors
  focus:outline-none
  focus:border-[#B8952E]
  focus:ring-1
  focus:ring-[#B8952E]`,{
    variants:{
        size:{
            md:"h-[48px] w-full",
            sm: "h-[40px] w-[150px]"
        },
        isDisabled:{
            true:"pointer-events-none"
        },
    },
    defaultVariants:{
        size:"md",
        isDisabled:false,

    }
})


export interface InputDataProps extends VariantProps<typeof inputVariants>, Omit<ComponentProps<"input">, "size"|"disabled"> {
    className?:string
    isDisabled?:boolean
    label?:string
}

export function InputData({
  isDisabled,
  size,
  className,
  label,
  id,
  ...props
}: InputDataProps) {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label
          htmlFor={id}
          className={textVariants({ variant:"body-md" })}
        >
          {label}
        </label>
      )}

      <input
        id={id}
        type="date"
        disabled={isDisabled}
        className={cx(
          inputVariants({ size, isDisabled }),
          className
        )}
        {...props}
      />
    </div>
  )
}
