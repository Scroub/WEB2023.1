import FuncaoD from "./FuncaoD"
import MyColors from "./MeuContexto"
import { useContext } from "react"

const FuncaoC = () => {
    const {bkgC} = useContext(MyColors)
    return (
        <div>
            <h1 style={{backgroundColor:bkgC}}>Função C</h1>
            <FuncaoD/>
        </div>
    )
}
export default FuncaoC