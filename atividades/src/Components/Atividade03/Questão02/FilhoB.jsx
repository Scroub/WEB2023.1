const FilhoB = ({meuVetor, enviarMenor}) => {

    const menorElemento = () => {
        const menor = Math.min(...meuVetor)
        enviarMenor(menor)
    }
    return (
        <div>
            <button onClick={menorElemento}>
                Calcular Menor: 
            </button>
        </div>
    )
} 

export default FilhoB