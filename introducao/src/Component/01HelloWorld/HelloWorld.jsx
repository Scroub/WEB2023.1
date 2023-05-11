import React from "react";

// --- Const Function --- //

// function HelloWorld () {
//     return (
//         <div>
//             <h1>Iury de Oli eira</h1>
//             <h2>Sistemas de Informação</h2>
//         </div>
//     )
// }

// --- Arrow Function --- //

// const HelloWorld = () => {
//     return (
//         <div>
//             <h1>Iury de Oliveira</h1>
//             <h2>Sistemas de Informação</h2>
//         </div>
//     )
// }

// --- Arrow Function v2 --- //

// const HelloWorld = () =>
//     <div>
//         <h1>Iury de Oliveira</h1>
//         <h2>Sistemas de Informação</h2>
//     </div>

// --- V3 com classes --- //

class HelloWorld extends React.Component{
    render() {
      return (
        <div>
          <h1>Iury de Oliveira</h1>
          <h2>Sistemas de informação</h2>
        </div>
      );
    }
  }

export default HelloWorld;