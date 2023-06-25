import TelaPrincipal from "./TelaPrincipal"
import { store } from "./store"
import { Provider } from "react-redux"

const Meuindex = () => {
    return (
        <>
            <Provider store={store}>
                <TelaPrincipal />
            </Provider>        
        </>
    )
}

export default Meuindex 