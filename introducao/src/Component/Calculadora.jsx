const Calculadora = () => {

    const somar = (x,y) => {
        return x + y
    }

    const subtrair = (x,y) => {
        return x - y
    }

    function multiplicar(x,y){
        return x * y
    }
    
    let dividir = (x,y) => x/y

    const chamarDivisao = (divisao) => {
        return divisao(30,5)
    }
    

    return (

        <div>
            <h1>O resultado da soma é: {somar(30, 6)}</h1>
            <h1>O resultado da subtração é: {subtrair(30,6)}</h1>
            <h1>O resultado da multiplicação é: {multiplicar(30,6)}</h1>
            <h1>O resultado da Divisão é: {chamarDivisao(dividir)}</h1>
            <h1>O resultado da Divisão let é: {
                chamarDivisao(
                    (x,y) => {
                        return x/y
                    }
                )
            }
            {
                // mudando o valor da variável dividir
                dividir = (x,y) => x**y
            }
            </h1>

            <h1>O resultado potência é: {dividir(2,3)}</h1>
        </div> 
    )
}

export default Calculadora;