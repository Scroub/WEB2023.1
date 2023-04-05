import { useState } from "react"
import Pai from "./Pai"
import PokemonContexto from "./PokemonContexto"

const Avo = () => { 
    
    const [numero, setNumero] = useState(10)
    const acaobutton = () => {
        setNumero(numero + 1)
    }
    
    return (
        <PokemonContexto.Provider value={numero}> 
            <div>
                <h1>Avô</h1>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero}.png`}
                     alt="Pokemon"
                     style={{width: "400px"}}/>
                <button onClick={acaobutton}>Me Aperte!!!</button>
                <Pai />
            </div>
        </PokemonContexto.Provider>
    )
}


export default Avo