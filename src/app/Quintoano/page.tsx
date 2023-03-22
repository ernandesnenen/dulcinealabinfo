import { Card } from "@/components/card";
import { Content } from "@/components/Content";


export default function Quartoano() {
    return (
    
      <main>
        <div className=" flex items-center justify-center bg-[url('/spacecampo.jpeg')] bg-cover h-96 sm:h-[500px] ">
            <h1 className="font-bold text-6xl text-slate-200  drop-shadow-[0px_1px_2px_#c402ff]  ">Quinto Ano</h1>  
        </div>
        <Content titulo="Quinto Ano A" >
          <Card
          link={'https://scratch.mit.edu/projects/822658527'}
          titulo={'Labirinto'}
          descricao={''}
          desenvolvedor={'Ybson Falcão Felix Soares'}/>           
        </Content>

        <Content titulo="Quinto Ano B" >
          <Card
          link={'https://scratch.mit.edu/projects/823940555'}
          titulo={'Labirinto'}
          descricao={''}
          desenvolvedor={'Maria Clara de Castro Silva'}/>  

          
        </Content>
         
      </main>
    )
  }
  