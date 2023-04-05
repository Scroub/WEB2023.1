import FuncaoB from "./FuncaoB"
import FuncaoC from "./FuncaoC"
import MyColors from "./MeuContexto"

const FuncaoA = () => {
    const cores = {bkgA:"yellow",bkgB:"red",bkgC:"green",bkgD:"gray"}

    return (
        <MyColors.Provider value={cores}>
            <div>
                <h1 style={{ backgroundColor: cores.bkgA}}>Função A</h1>
                <FuncaoB />
                <FuncaoC />
            </div>
        </MyColors.Provider>
    )
}
export default FuncaoA 