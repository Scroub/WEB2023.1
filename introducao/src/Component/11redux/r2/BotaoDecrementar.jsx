import { useDispatch } from "react-redux"
import { decrementar, diminuirValor } from "./slice/Idslice"

const BotaoDecrementar = () => {

    const dispatch = useDispatch()
    let valor = 10

    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <button onClick={() => dispatch(decrementar())}>
                            Decrementar ID
                        </button>
                    </tr>

                    <tr>
                        <button onClick={() => dispatch(diminuirValor(valor))}>
                            Decrementar Valor em ID {valor}
                        </button>
                    </tr>
                </tbody>
            </table>
            
        </>
    )
}

export default BotaoDecrementar