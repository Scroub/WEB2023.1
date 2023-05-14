const FilhoA = ({meuVetor, enviarMaior}) => {

    const maiorElemento = () => {
        const maior = Math.max(...meuVetor)
        enviarMaior(maior)
    }

    return (
        <div>
            <button onClick={maiorElemento}>
                Calcular Maior: 
            </button>
        </div>
    )
} 

export default FilhoA