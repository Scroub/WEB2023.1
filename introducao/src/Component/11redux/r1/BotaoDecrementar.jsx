const BotaoDecrementar = ({decrementar}) => {
    return (
        <>
            <button onClick={() => decrementar()}>
                Decrementar ID
            </button>
        </>
    )
}

export default BotaoDecrementar