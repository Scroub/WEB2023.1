import FuncaoB from "./FuncaoB"
import FuncaoC from "./FuncaoC"
import CorContexto from "./MeuContexto"

const FuncaoA =() => {

    const cor = "pink"

    return (
        <CorContexto.Provider value={{cor:"red", nome:"Iury", cor2:"green"}}>
            <div>
                <CorContexto.Consumer>
                {
                    ({nome})=>
                        <div> 
                            <h1 style={{backgroundColor:cor}}>Função A de {nome}</h1>
                        </div>
                }
                </CorContexto.Consumer>
                <FuncaoB />
                <FuncaoC />
            </div>
        </CorContexto.Provider>
    )
}

export default FuncaoA