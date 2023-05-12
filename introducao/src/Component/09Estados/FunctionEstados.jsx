import { useState, useEffect } from "react"

const FunctionEstados = () => {

    //let contador = 0
    const [contador, setContador] = useState(0)
    const [Par, setPar] = useState(true)

    useEffect(
        () => {
            if(contador%2 === 0) setPar(true)
            else setPar(false)
        }
        , 
        [contador]
    )

    const acaoBotao = () => {
        setContador(contador + 1)
    }

    return (
        <>
            <h1>Contador: {contador}</h1>
            <h1>É par: {"" + Par}</h1>
            <button onClick={acaoBotao}>
                Aumentar Contador
            </button>
        </>
    )
}

export default FunctionEstados