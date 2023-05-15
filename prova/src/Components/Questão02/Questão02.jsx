import { useState } from "react"

const Questão02 = () => {

    // Dada url da questão temos as imagens do Pokemon Frontal e Traseiro
    const Img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
    const ImgCosta = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png";

    const [costa, setCosta] = useState(false)

    // Aqui criamos uma função para girar o Pokemon onde ao ser executada o bollean se torna true 
    const acaoGirar = () => {
        setCosta(!costa)
    }

    // Ao verificar se caso for true o Pokemon é virado, utilizando a primeira url, se não utilizamos as costas
    return (
        <div>
            <img src={costa ? ImgCosta : Img} alt="Pokémon" />
            <button onClick={acaoGirar}>Girar Pokemon</button>
        </div>
    )
}

export default Questão02