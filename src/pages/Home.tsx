import { Container } from "../components/Container";
import { AgendaList } from "../core-components/AgendaList";
import { AgendeAtendimento } from "../core-components/AgendeAtendimento";

export function Home(){
    return(
        <div className="bg-gray-900 h-screen w-full">

        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%]">
        
                <div className="p-5">
                    <AgendeAtendimento  />
                </div>

                <div>
                    <AgendaList/>
                </div>

        </div>
        </div>
    )
}