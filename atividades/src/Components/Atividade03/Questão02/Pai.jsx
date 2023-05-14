import { useState } from "react"
import FilhoA from "./FilhoA"
import FilhoB from "./FilhoB"
import FilhoC from "./FilhoC"


const Pai = () => {

    const [maior, setMaior] = useState(0)
    const [media, setMedia] = useState(0)
    const [menor, setMenor] = useState(0)

    const meuVetor = [7 , 6 , 2 , 3, 4]

    const enviarMaior = (maior) => {
        setMaior(maior)
    }

    const enviarMenor = (menor) => {
        setMenor(menor)
    }

    const enviarMedia = (media) => {
        setMedia(media)
    }

    return (
        <div>
            <h1>Calcular Vetor</h1>
            <h2>Maior: {maior}</h2>
            <h2>Menor: {menor}</h2>
            <h2>Média: {media}</h2>
            <FilhoA meuVetor={meuVetor} enviarMaior={enviarMaior}/>
            <FilhoB meuVetor={meuVetor} enviarMenor={enviarMenor}/>
            <FilhoC meuVetor={meuVetor} enviarMedia={enviarMedia}/>
        </div>
    )
}

export default Pai