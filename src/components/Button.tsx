import { cva, cx, type VariantProps } from "class-variance-authority"
import type { ReactNode } from "react"
import { Text } from "./Text"

export const buttonVariants = cva("flex items-center justify-center rounded-md cursor-pointer transition group gap-3 duration-300",{
    variants:{
        variant:{
             primary:"bg-[#B8952E] hover:bg-[#DBC170]"
        },
        size:{
            md:"h-14 px-4 "
        },
        isDisabled:{
            true:"pointer-events-none"
        }
    },
    defaultVariants:{
        variant:"primary",
        size:"md",
        isDisabled:false
    }
})


export const buttonTextVariants =cva("", {
    variants :{
        variant:{
            primary: "text-black font-bold uppercase"
        }
    },
    defaultVariants:{
        variant:"primary"
    }

})


export interface ButtonProps extends VariantProps<typeof buttonVariants> {
    children?: ReactNode
    className?:string
}

export function Button({variant, children, className, isDisabled, size,...props}:ButtonProps){
    return (
        <button type="button" className={buttonVariants({variant, isDisabled, size, className})} {...props}>
            <Text className={buttonTextVariants({variant})}>{children}</Text>
        </button>
    )
}