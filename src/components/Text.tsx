import { cva, type VariantProps } from "class-variance-authority"
import type { ElementType, ReactNode } from "react"

export const textVariants = cva("text-gray-300", {
    variants:{
        variant:{
            "body-sm":"text-sm leading-5",
            "body-md":"text-gray-200 text-semibold text-md",
            "body-title":"text-gray-100 text-lg text-bold"
    },
    defaultVariants:{
        variant:"body-sm"
    }
}
})

export type TextAs =
 | "h1"
  | "h2"
  | "h3"
  | "p"
  | "span"
  | "label"
  | "strong";

export interface TextProps extends VariantProps<typeof textVariants>{
    as?:TextAs
    children?:ReactNode
    className?:string

}

export function Text({as:Component="p", variant, children, className, ...props}:TextProps){
    return (
        <Component className={textVariants({variant, className})} {...props}>
            {children}
        </Component>
    )
}