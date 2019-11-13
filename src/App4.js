import React from 'react'
const App4=()=>{
    const[binary,setBinary]=React.useState()
    const[decimal,setDecimal]=React.useState()
    const[octal,setOctal]=React.useState()
    const[hexadecimal,setHexadecimal]=React.useState()
    return(
        <div>
            Enter binary:<input type="text" onChange={setBianry(e.target.value)}></input>
            <button onClick={getBinary}>Binary</button>
            <input type="text" onChange={e.target.value}></input>
            <button onClick={getDecimal}>Decimal</button>
            <input type="text" onChange={e.target.value}></input>
            <button onClick={getOctal}>Octal</button>
            <input type="text" onChange={e.target.value}></input>  
            <button onClick={getHexadecimal}>Hexadecimal</button>   
                 
        </div>
    )
}
export default App4;