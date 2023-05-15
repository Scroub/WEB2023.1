import Questao01B from "./Questão01B"

const Questao01A = () => {

    const [alunos, setAlunos] = [ {nome: "Iury", notas: {ap1: 8.4, ap2: 5.4}},
                                  {nome: "Aluizio", notas: {ap1: 6.7, ap2: 3.5}},
                                  {nome: "Peaga", notas: {api1: 7.3, ap2: 9.2}}
    ]
    
    const enviarMedia = (media) => {
        setAlunos(media)
    }

    return (
        <div>
            <h1>Os alunos: </h1>
            <Questao01B alunos={alunos} enviarMedia={enviarMedia}/>
        </div>
    )
}

export default Questao01A