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
}

export function InputData({isDisabled, size,className, ...props }:InputDataProps){
    return (
        <input type="date" 
            className={cx(inputVariants({size,isDisabled, className}),textVariants())}
            disabled={isDisabled}
            {...props}
        />
    )
}