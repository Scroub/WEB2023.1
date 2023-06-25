import { useState } from "react"
import { useEffect } from "react"


const meuGet = (url) => {
    // fiz aluma coisa com a url (passei pra promessa, por exemplo)
    //console.log(url)
    const minhaPromise = new Promise(
        (resolve, reject) => {
            // alguma logica que está produzindo algo e que demora algum tempo
            //console.log("Iniciando a logica")
            setTimeout(
                () => {
                    //console.log("logica terminada")
                    const meuInt = Math.floor((Math.random() *10)) + 1
                    //console.log(meuInt)
                    if(meuInt%2 === 0) resolve ({numero:meuInt, msg:"Deu certo!!!"})
                    else reject({numero:meuInt, msg:"Não deu -_'-'_-"})
                }, 3000           
            )
        }
    )

    return minhaPromise
}

const MinhaPromise = () => {

    const [loading, setLoading] = useState(false)

    useEffect(
        () => {
            /*meuGet("http://faker")
            .then((response) => console.log(response))
            .catch((error) => console.log(error) )*/
            console.log("Inicio....")
            setLoading(true)
            meuGet("http:...")
            .then(
                (response) =>{
                    console.log("Resposta Okay: ")
                    console.log(response.numero)
                    console.log(response.msg)
                }
            )
            .catch(
                (error) => {
                    console.log(error.numero)
                    console.log(error.msg)
                }
            )
            .finally(
                () => {
                    console.log("Fim...")
                    setLoading(false)
                }
            )
        },
        []
    )

    function render(){
        if(loading) return (
            <>
                <h1>Loading...</h1>
            </>
        )
        return (
            <>
               <h1>Testando a Promise!!</h1>                
            </>
        )
    }

    return (
        <>
            {render()}
        </>
    )
}

export default MinhaPromise