import { useState, useEffect } from "react"

const Cidades = () => {

    const [quixada, setQuixada] = useState(0)
    const [fortaleza, setFortaleza] = useState(0)
    const [quixere, setQuixere] = useState(0)
    const [boaviagem, setBoaviagem] = useState(0)

    const[mais, setMais] = useState("")
    const[menos, setMenos] = useState("")

   useEffect(
    () => {
        let cidades = [quixada, fortaleza, quixere, boaviagem]
        let nomes = ["Quixada", "Fortaleza", "Quixere", "Boa Viagem"]
        let maior = cidades[0]
        let menor = cidades[0]

        for(let i=0; i < cidades.length; i++){
            if(cidades[i] > maior) maior = cidades[i]
            if(cidades[i] < menor) menor = cidades[i]
        }

        setMais("") // Vai zerar toda vez antes de entrar no laço
        setMenos("") // Vai zerar toda vez antes de entrar no laço
        for(let i=0;  i < cidades.length; i++){
            if(cidades[i]===maior) setMais((anterior)=>anterior + " " + nomes[i])
            if(cidades[i]===menor) setMenos((anterior)=>anterior + " " + nomes[i])
        }
    }
    ,
    [quixada, fortaleza, quixere, boaviagem]
   )

    return (
        <div>
            <h1>Votação Cidades</h1>
            <h3>Quixada: {quixada}</h3>
            <button onClick={
                () => setQuixada(quixada + 1)
            }>
                Votar
            </button>
            <h3>Fortaleza: {fortaleza}</h3>
            <button onClick={
                () => setFortaleza(fortaleza + 1)
            }>
                Votar
            </button>
            <h3>Quixere: {quixere}</h3>
            <button onClick={
                () => setQuixere(quixere + 1)
            }>
                Votar
            </button>
            <h3>Boa Viagem: {boaviagem}</h3>
            <button onClick={
                () => setBoaviagem(boaviagem + 1)
            }>
                Votar
            </button>
            <hr />
            <h2>A(s) cidade(s) mais Votada(s): {mais}</h2>
            <h2>A(s) cidade(s) menos Votada(s): {menos}</h2>
        </div>
    )
}

export default Cidades