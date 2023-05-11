import { Children, cloneElement } from "react"

// Versão 01 // 

/*const Supermercado = ({children ,nome}) => {
    return (
        <div>
            <h1>Supermercado {nome}</h1>
            {children}
        </div>
    )
}*/

// Versão 02 //

/*const Supermercado = ({children ,nome}) => {
    return (
        <div>
            <h1>Supermercado {nome}</h1>
            {
                Children.map(
                    children, (filho) => {
                        return (
                            <div style={{backgroundColor:"red"}}>
                                {filho}
                            </div>
                        )
                    }
                ) 
            }
        </div>
    )
}*/

const Supermercado = ({children ,nome}) => {
    return (
        <div>
            <h1>Supermercado {nome}</h1>
            {
                Children.map(
                    children, filho => 
                        cloneElement(filho, {supermercado:nome})
                ) 
            }
        </div>
    )
}

const Legume = ({nome, supermercado}) => 
    <div style={{backgroundColor:"green"}}>
        <h3>Legume: {nome} do Supermercado: {supermercado}</h3>
    </div>

const Fruta = ({nome, supermercado}) => 
    <div style={{backgroundColor:"red"}}>
        <h3>Fruta: {nome} do Supermercado: {supermercado}</h3>
    </div>

const Bebida = ({nome}) => 
    <div style={{backgroundColor:"blue"}}>
        <h3>Bebida: {nome}</h3>
    </div>

export { Supermercado, Legume, Fruta, Bebida }