import type { ElementType, ReactNode } from "react"

export interface ContainerProps {
    as?: ElementType
    className?:string
    children: ReactNode
}

export function Container({ as:Component="div", className, children,...props }:ContainerProps){
    return(
        <Component className="p-[80px] flex items-center" >
            {children}
        </Component>
    )
}