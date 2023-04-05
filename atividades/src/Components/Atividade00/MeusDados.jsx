import React from "react"

// Function //

/* function MeusDados({nome, curso, universidade}){
    return (
        <div>
            <h1>Meus nome via props: é {nome}</h1>
            <h1>Meu curso via props: é {curso}</h1>
            <h1>Minha universidade via props: é {universidade}</h1>
        </div>
      );
}*/

// Arrow Function com Return //

const MeusDados = ({nome, curso, universidade}) => {

    return(
        <div>
            <h1>Meus nome via props: é {nome}</h1>
            <h1>Meu curso via props: é {curso}</h1>
            <h1>Minha universidade via props: é {universidade}</h1>
        </div>
    )
}

// Arrow Function sem Return // 

/*const MeusDados = ({nome, curso, universidade}) => <div><h1>Meus nome via props: é {nome}</h1>
                                                        <h1>Meu curso via props: é {curso}</h1>
                                                        <h1>Minha universidade via props: é {universidade}</h1></div>
*/

// Classe //

/*class MeusDados extends React.Component{
    render ({nome, curso, universidade}) {
        return(
            <div>
                <h1>Meus nome via props: é {nome}</h1>
                <h1>Meu curso via props: é {curso}</h1>
                <h1>Minha universidade via props: é {universidade}</h1>
            </div>
        )
    }
}*/

export default MeusDados