import { useContext } from "react"
import FuncaoD from "./FuncaoD"
import CorContexto from "./MeuContexto"

// Versão indicada // 
const FuncaoC =() => {

    const objeto = useContext(CorContexto)
    const {cor, nome} = objeto

    return (
        <div>
            <h1 style={{backgroundColor:cor}}>Função C</h1>
            <h2 style={{color:cor}}>Teste  de {nome}</h2>
            <FuncaoD />
        </div>
    )
}

export default FuncaoC