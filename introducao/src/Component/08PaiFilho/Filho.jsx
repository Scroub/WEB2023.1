const Filho = ({falarComPai}) => {

    const acaoBotao = () => {
        falarComPai("Oi Pai!")
    }

    return (
        <div>
            <h1>Filho</h1>
            <button onClick={acaoBotao}>
                Enviar Mensagem para o meu Pai 
            </button>
        </div>
    )
}

export default Filho