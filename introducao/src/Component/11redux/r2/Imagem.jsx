import { useSelector } from "react-redux/es/hooks/useSelector"

const Imagem = ({nome, imagem}) => {

    const id = useSelector((state) => state.id.value)

    return (
        <>
            <h1>O valor do ID: {id}</h1>
            <h1>{nome}</h1>
            <img src={imagem}
            style={{width:"400px"}}/>
        </>
    )
}

export default Imagem