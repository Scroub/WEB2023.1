// --- Versão 01 --- //

/* const MyProps = (props) => {

        const renderizarMeuNome = () => {
            return (
                <span>Iury</span>
            )
        }    
    
    return (
        <div>
            <h1>O meu nome é: {renderizarMeuNome()}</h1>
            <h1>O meu nome com props é: {props.nome}</h1>
            <h1>A minha idade é: {props.idade}</h1>
            <h1>O meu curso é: {props.curso}</h1>
        </div>
    )
}*/

// --- Versão 02 --- // 

/* const MyProps = (props) => {
    const{nome, idade, curso} = props
    return(
        <div>
            <h1>O meu nome é: {nome}</h1>
            <h1>O minha idade é: {idade}</h1>
            <h1>O meu curso é: {curso}</h1>
        </div>
    )
}*/

// --- Versão 03 --- // 

const MyProps = ({nome, idade, curso, Semestre}) => {
    return(
        <div>
            <h1>O meu nome é: {nome}</h1>
            <h1>O minha idade é: {idade}</h1>
            <h1>O meu curso é: {curso}</h1>
            <h1>O meu Semestre é: {Semestre}</h1>
        </div>
    )
}

export default MyProps;