import { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState("")

  const handleClick = (e) =>{
    setResult(result.concat(e.target.name));
  }
  const clear = ()=>{
    setResult("")
  }

  const backspace = ()=>{
    setResult(result.slice(0,result.length - 1))
  }
  const calculate = ()=>{
    setResult(eval(result).toString())
  }

  return (
    <>
    {/* <h1>Calculator</h1> */}
    <div className="app">

      <div className="color">
        <div>
          <input type="text" value={result}/>
          <div>
            <button onClick={clear}>AC</button>
            <button onClick={backspace}>DC</button>
            <button name="." onClick={handleClick}>.</button>
            <button name="/" onClick={handleClick}>/</button>
          </div>
          <div>
            <button name="7" onClick={handleClick}>7</button>
            <button name="8" onClick={handleClick}>8</button>
            <button name="9" onClick={handleClick}>9</button>
            <button name="*" onClick={handleClick}>*</button>
          </div>
          <div>
            <button name="4" onClick={handleClick}>4</button>
            <button name="5" onClick={handleClick}>5</button>
            <button name="6" onClick={handleClick}>6</button>
            <button name="-" onClick={handleClick}>-</button>
          </div>
          <div>
            <button name="1" onClick={handleClick}>1</button>
            <button name="2" onClick={handleClick}>2</button>
            <button name="3" onClick={handleClick}>3</button>
            <button name="+" onClick={handleClick}>+</button>
          </div>
          <div>
            <button name="00" onClick={handleClick}>00</button>
            <button name="0" onClick={handleClick}>0</button>
            <button name="%" onClick={handleClick}>%</button>
            <button name="=" onClick={calculate}>=</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
