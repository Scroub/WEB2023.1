import './App.css';
import HelloWorld from "./Component/HelloWorld";
import Calculadora from "./Component/Calculadora";
import MyProps from "./Component/MyProps";


function App() {
  return (
    <div>
      1. <HelloWorld />
      2. <Calculadora />
      3. <MyProps nome="Iury de Oliveira" 
                  idade={18}
                  curso="Sistemas de informação"
                  Semestre={9} />
    </div>
  );
}

export default App;
