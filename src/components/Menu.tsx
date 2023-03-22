import Link from "next/link";

export function Menu(){
    return(
        <div className="flex items-center gap-8">
            <div>
                <Link href={"/Terceiroano"} className='hover:text-violet-800 hover:font-bold'>TERCEIRO ANO</Link>
            </div>
            <div>
                <Link href={"/Quartoano"} className='hover:text-violet-800 hover:font-bold'>QUARTO ANO</Link>
            </div>
            <div>
                <Link href={"/Quintoano"} className='hover:text-violet-800 hover:font-bold'>QUINTO ANO</Link>
            </div>
          
        </div>
    )
}