import { Card } from "@/components/card";
import { Content } from "@/components/Content";


export default function Quartoano() {
    return (
    
      <main>
        <div className=" flex items-center justify-center bg-[url('/spacecampo.jpeg')] bg-cover h-96 sm:h-[500px] ">
            <h1 className="font-bold text-6xl text-slate-200  drop-shadow-[0px_1px_2px_#c402ff]  ">Quarto Ano</h1>  
        </div>
        <Content titulo="Quarto Ano A">
          <Card
          link={'#'}
          titulo={'Labirinto'}
          descricao={'lorem mmirimimckmcnnjnjcsnjnjnncjnjsncjnsnjcnjdn'}
          desenvolvedor={'ernandes quarto ano'}/>  
        </Content>
         
      </main>
    )
  }
  