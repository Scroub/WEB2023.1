import MyColors from "./MeuContexto"

const FuncaoD = () => {
    return (
        <MyColors.Consumer>
            {
                ({bkgD}) => {
                    return (
                        <div>
                            <h1 style={{backgroundColor:bkgD}}>Função D</h1>
                        </div>
                    )
                }
            }
        </MyColors.Consumer>
    )
}
export default FuncaoD
