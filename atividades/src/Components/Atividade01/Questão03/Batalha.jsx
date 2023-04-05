import { Children, cloneElement } from "react"

const Hero = ({nome, nomeDaArena}) => {
    return (
        <div>
            <h2>o Nome do meu Heroi é: {nome} estou lutando na Arena: {nomeDaArena}</h2>
            <img scr=""
                 alt="Meu Heroi!"
                 style={{width:"100px"}}/>
        </div>
    )
} 

const Enemy = ({nome, nomeDaArena}) => {
    return (
        <div>
            <h2>O Nome do meu Vilão é: {nome} estou lutando na Arena: {nomeDaArena}</h2>
            <img scr=""
                 alt="Vilão!!"
                 style={{width:"100px"}}/>
        </div>
    )
}

const Batalha = ({nome, children}) => {
    return (
        <div>
            <h1>A Grande Batalha se inicia na Arena {nome}</h1>
            {
                Children.map (children, (filho) => {
                    return cloneElement(filho,{nomeDaArena:nome})
                } 
                )
            }
        </div>
    )
}

const World = ({children}) => {
    return (
        <div>
            {children}
        </div>
    )
}

export {Batalha, Hero, Enemy, World}