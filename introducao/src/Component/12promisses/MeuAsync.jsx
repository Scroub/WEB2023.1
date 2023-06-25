import { useEffect } from "react"

const myPromise = new Promise(
    (resolve, reject) => {
        const x = false
        if (x) resolve({msg:"Deu Certo"})
        else reject({msg:"Deu Ruim!!!"})
    }
)

const MeuAsync = () => {

    useEffect(
        () => {
            getPromise()
            //getPromiseThen()
        },
        []
    )

    function getPromiseThen(){
        myPromise
            .then(
               (data) => { console.log(data.msg) }
            )
            .catch(
                (data) => { console.log(data.msg) }
            )
    }

    async function getPromise(){
        try{
        const data = await myPromise
        console.log(data.msg)
        }catch(erro){
            console.log(erro.msg)
        }
    }

    return (
        <>
            <h1>Testando o Async</h1>
        </>
    )
}

export default MeuAsync