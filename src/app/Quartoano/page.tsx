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
          link={'https://scratch.mit.edu/projects/826078497'}
          titulo={'Pulo'}          
          desenvolvedor={'Geanderson Azevedo Barbosa'}/>

        <Card
          link={'https://scratch.mit.edu/projects/827355505'}
          titulo={'Matemática'}          
          desenvolvedor={'Geanderson Azevedo Barbosa'}/>
        </Content>

        <Content titulo="Quarto Ano B">
          <Card
          link={'https://scratch.mit.edu/projects/826079395'}
          titulo={'Matemática'}          
          desenvolvedor={'Esther Pereira de Almeida'}/>  
        </Content>

        <Content titulo="Quarto Ano C">
          <Card
          link={'https://scratch.mit.edu/projects/826079395'}
          titulo={'Pulo'}          
          desenvolvedor={'Edson Douglas Silva Costa'}/>  
        </Content>
      </main>
    )
  }
  