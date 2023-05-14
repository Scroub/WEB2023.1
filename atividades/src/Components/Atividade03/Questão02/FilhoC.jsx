const FilhoC = ({meuVetor, enviarMedia}) => {

    const mediaAritmetica = () => {
        let media = 0
        for(let i=0; i < meuVetor.length; i++) media += meuVetor[i]
        enviarMedia(media/meuVetor.length)
    }

    return (
        <div>
            <button onClick={mediaAritmetica}>
                Calcular Média: 
            </button>
        </div>
    )
} 

export default FilhoC