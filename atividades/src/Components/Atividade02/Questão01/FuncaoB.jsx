import MyColors from "./MeuContexto"
import { useContext } from "react"

const FuncaoB = () => {
    const {bkgB} = useContext(MyColors)
    return (
        <div>
            <h1 style={{backgroundColor:bkgB}}>Função B</h1>
        </div>
    )
}
export default FuncaoB 