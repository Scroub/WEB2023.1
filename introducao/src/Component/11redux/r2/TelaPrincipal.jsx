import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector"
import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import Imagem from "./Imagem"
import BotaoDecrementar from "./BotaoDecrementar"
import BotaoIncrementar from "./BotaoIncrementar"

const TelaPrincipal = () => {

    const id = useSelector((state) => state.id.value)
    const [nome, setNome] = useState("")
    const [imagem, setImagem] = useState("")
    const [loading, setLoading] = useState (false)

    useEffect(
        () => {
            setLoading(true)
            axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(
                (response) => {
                    setNome(response.data.name) 
                    setImagem(response.data.sprites.front_default)
                    setLoading(false)
                }
            )
            .catch(error => {console.log(error); setLoading(false)})
        },
        [id]
    )

    const renderImagem = () => {

        if(loading) return (
            <h3>Carregando...</h3>
        )

        return(
            <Imagem id nome={nome} imagem={imagem}/>
        )
    }

    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <td>
                            {renderImagem()}
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <BotaoIncrementar />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <BotaoDecrementar />
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default TelaPrincipal