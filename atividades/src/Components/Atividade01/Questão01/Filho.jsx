const Filho = ({peso, altura}) => {

    const IMC = (peso, altura) => {
        return peso/(altura*altura)
    }

    const Msg = () => {
        if (IMC < 18) return <h3>Abaixo do Peso</h3>
        else if (IMC > 25) return <h3>Acima do Peso</h3>
        else return <h3>Peso ideal</h3>
    }

    const ImcCalculado = IMC(peso, altura)

    return (
        <div>
           <h1>O peso do Filho é {peso} e a Altura é {altura} e o seu IMC resultante é {ImcCalculado.toFixed(2)}</h1>
           {Msg(ImcCalculado)}
           
        </div>
    )
}

export default Filho