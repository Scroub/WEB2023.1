import CorContexto from "./MeuContexto"

// Versão Legado //
const FuncaoB =() => {
    return (
        <CorContexto.Consumer>
            {
                ({cor2, nome})=>
                    <div> 
                        <h1 style={{backgroundColor:cor2}}>Função B de {nome}</h1>
                    </div>
            }
        </CorContexto.Consumer>
    )
}

export default FuncaoB