
import { ReactNode } from "react";


type contentProps = {

    titulo:string;
    children: ReactNode
}

export function Content({children, titulo}: contentProps){
    return(
<div>

        <h2 className="p-6 text-3xl">{titulo}</h2>
        <div className=" grid sm:grid-cols-2  md:grid-cols-3  gap-4 p-6 bg-slate-300"> 
            {children}                
        </div>
</div>
    )
}