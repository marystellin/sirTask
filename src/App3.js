import React from 'react'
const App3=()=>{
    const[input,setInput]=React.useState(" ");
    const[val,setval]=React.useState(" ");
    const getBinary=(e)=>{
            setInput(e.target.value)
    }
    const getResult=()=>{
        setval((input >>> 0).toString(2))
        setInput(" ");
    }
    return(
        <div>
            {"Enter number"}<input type="text" onChange={getBinary} value={input}></input> 
            <button onClick={getResult}>submit</button><br></br><br></br>
            <span><b>Binary Value is:{val}</b></span>
        </div>
    )
}
export default App3;