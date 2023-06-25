import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"

const PokemonAxios = () => {

    const [id,setId] = useState(1)
    const [nome,setNome] = useState ("")
    const [imagem,setImagem] = useState ("")
    const [imagem2, setImagem2] = useState ("")

    useEffect (
        () => {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(
                (response) => {
                    // console.log(response.data)
                    setNome(response.data.name)
                    setImagem(response.data.sprites.front_default)
                    setImagem2(response.data.sprites.back_default)
                }
            )
            .catch((error) => console.log(error))

        },
        [id]
    )

    return (
        <div>
            <h3>Nome: {nome}</h3>
            <h3>Id: {id}</h3>
            <button onClick={
                () => setId((prev) => prev-1)
            }>
                Pokemon Anterior
            </button>
            <img src={imagem} style={{width:"400px"}}/>
            <img src={imagem2} style={{width:"400px"}}/>
            <button onClick={
                () => setId((prev) => prev+1) 
            }>
                Proximo Pokemon
            </button>
        </div>
    )
}

export default PokemonAxios