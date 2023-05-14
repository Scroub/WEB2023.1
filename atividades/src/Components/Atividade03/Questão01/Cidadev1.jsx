import { useState, useEffect } from "react"

const Cidadev1 = () => {

    const [cidades,setCidades] = useState(
        [
            {nome:"Quixada", votos:0}, 
            {nome:"Fortaleza", votos:0}, 
            {nome:"Quixere", votos:0},  
            {nome:"Boa Viagem", votos:0},
        ]
    )

    const [objeto, setObjeto] = useState({nome: "Rio de Janeiro", votos:0})

    const [flag, setFlag] = useState(false)

    const votarCidade = (nome) => {
        /*for(let i = 0; i < cidades.length; i++){
            if(cidades[i].nome === nome){
                cidades[i].votos = cidades[i].votos + 1
            }
        }*/
        
        const index = cidades.findIndex(
            (cidade) => cidade.nome === nome
        )
        cidades[index].votos = cidades[index].votos + 1
        //setCidades(cidades)
        setFlag((prev) =>! prev)
    }

    const votarCidadeV2 = (nome) => {
        const newCidades = cidades.map(
            (cidade) => {
                if(cidade.nome === nome) return {...cidade, votos: cidade.votos + 1}
                return {...cidade}
            }
        )
        setCidades(newCidades)
    }

    return (
        <div>
            <h1>Votação Cidades</h1>
            <h3>{cidades[0].nome} : {cidades[0].votos} </h3>
            <button onClick={() => votarCidadeV2("Quixada")}>
                Votar
            </button>
            <h3>{cidades[1].nome} : {cidades[1].votos} </h3>
            <button onClick={() => votarCidadeV2("Fortaleza")}>
                Votar
            </button>
            <h3>{cidades[2].nome} : {cidades[2].votos}</h3>
            <button onClick={() => votarCidadeV2("Quixere")}>
                Votar
            </button>
            <h3>{cidades[3].nome} : {cidades[3].votos} </h3>
            <button onClick={() => votarCidadeV2("Boa Viagem")}>
                Votar
            </button>
            <h3>{objeto.nome} : {objeto.votos}</h3>
            <button onClick={
                () => {
                    const newObjeto = {...objeto, votos: objeto.votos + 1}
                    setObjeto(newObjeto)
                }
            }>
                Votar
            </button>
            <hr />

            <h2>A(s) cidade(s) mais Votada(s): </h2>
            <h2>A(s) cidade(s) menos Votada(s): </h2>

        </div>
    )
}

export default Cidadev1