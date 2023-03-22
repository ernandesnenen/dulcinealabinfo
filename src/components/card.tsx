import Link from "next/link";

type CardProps= {
    
    titulo:string;
    descricao?:string;
    link:string;
    desenvolvedor:string
}
export function Card({titulo, descricao, link, desenvolvedor}:CardProps){
    return(
        <Link href={link} target='_blank'>
            <div className="max-w-2xl p-4  border-violet-500 border-l-2 drop-shadow-xl text-slate-800 hover:border-l-4">
                <h2 className="text-xl font-bold text-violet-900  ">{titulo}</h2>
                <p>{descricao}</p>
                <p>Desenvolvedor(a): <strong>{desenvolvedor}</strong></p>               
            </div>
        </Link>
    )
}