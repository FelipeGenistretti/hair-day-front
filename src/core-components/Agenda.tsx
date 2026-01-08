import { Card } from "../components/Card";
import { InputData } from "../components/InputData";
import { Text } from "../components/Text";
import { Period } from "../models/period.enum";


export function Agenda(){
    return (
        <div>
            <header className="flex justify-between">
                <div className="flex flex-col">
                    <Text variant="body-title">Sua agenda</Text>
                    <Text>Consulte os seus cortes de cabelo agendados por dia</Text>
                </div>

                <div>
                    <InputData size="sm" />
                </div>
            </header>
            <div className="gap-3">
                <Card period={Period.MANHA}></Card>
                <Card period={Period.TARDE}></Card>
                <Card period={Period.NOITE}></Card>
            </div>
        </div>
    )
}