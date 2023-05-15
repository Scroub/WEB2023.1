import { useEffect } from "react"

function Questao01B ({alunos}, {enviarMedia}) {

    useEffect(
        () => {
            let media = 0
            for (let i = 0; alunos.lenght; i++) media += alunos[i]
            enviarMedia(media/alunos.lenght)
        }

    ),
    []
    
    return (
        <div>
            <h1> </h1>
        </div>
    )
}

export default Questao01B