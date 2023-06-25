import { useDispatch } from "react-redux"
import { incrementar, aumentarValor } from "./slice/Idslice"

const BotaoIncrementar = () => {

    const dispatch = useDispatch()
    let valor = 10

    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <button onClick={() => dispatch(incrementar())}>
                            Incrementar ID
                        </button>
                    </tr>

                    <tr>
                        <button onClick={() => dispatch(aumentarValor(valor))}>
                            Incrementar Valor em ID + {valor}
                        </button>
                    </tr>
                </tbody>
            </table>
            

            
        </>
    )
}

export default BotaoIncrementar