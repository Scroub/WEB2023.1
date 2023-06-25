const BotaoIncrementar = ({incrementar}) => {
    return (
        <>
            <button onClick={() => incrementar()}>
                Incrementar ID
            </button>
        </>
    )
}

export default BotaoIncrementar