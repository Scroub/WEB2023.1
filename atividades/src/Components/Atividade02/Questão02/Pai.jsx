import Neto from "./Neto"
import { useContext } from "react"
import PokemonContexto from "./PokemonContexto"

const Pai = () => {

    const numero = useContext(PokemonContexto)
    
    return (
            <div>
                <h1>Filho</h1>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero+1}.png`}
                     alt="Pokemon"
                     style={{width: "400px"}}/>
                <Neto />
            </div>
    )
}

export default Pai