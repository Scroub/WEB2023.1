import CorContexto from "./MeuContexto"

// Versão Legado //
const FuncaoD =() => {
    return (
        <CorContexto.Consumer>
            {
                ({cor2, nome}) =>
                    <div> 
                        <h1 style={{backgroundColor:cor2}}>Função D de {nome}</h1>
                        <h2 style={{color:cor2}}>Teste  de {nome}</h2>
                    </div>
            }
        </CorContexto.Consumer>
    )
}

export default FuncaoD