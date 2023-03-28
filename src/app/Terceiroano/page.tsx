import { Card } from "@/components/card";
import { Content } from "@/components/Content";


export default function Terceiroano() {
    return (
    
      <main>
        <div className="
         flex items-center
         justify-center
         bg-[url('/spacecampo.jpeg')]
         bg-cover h-96 sm:h-[500px]         
         ">
            <h1 className="font-bold text-6xl text-slate-200  drop-shadow-[0px_1px_2px_#c402ff] ">Terceiro Ano</h1>  
        </div>
        <Content titulo="Terceiro Ano"> 
          <Card
          link={'https://scratch.mit.edu/projects/826077281'}
          titulo={'Matemática'}
          desenvolvedor={'Roberto Barbosa Neto'}/>

           
          <Card
          link={'https://scratch.mit.edu/projects/827345161'}
          titulo={'Matemática'}
          desenvolvedor={'João Arthur Oliveira Pereira'}/>  

           <Card
          link={'https://scratch.mit.edu/projects/827346076'}
          titulo={'Nave'}
          desenvolvedor={'Samuel Oliviera Martins'}/>   
        </Content>
         
      </main>
    )
  }