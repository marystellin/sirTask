import React from 'react'



const App = () => {
    const [input1,setInput1] = React.useState(0);
    const [input2,setInput2] = React.useState(0);
    const [input3,setInput3] = React.useState(0);
    const [numerator,setNumerator] = React.useState("");
    const [denominator,setDenominator] = React.useState("");
    const [root1,setRoot1] = React.useState("");
    const [root2,setRoot2] = React.useState("");
    const getInput1=(e)=>{
        setInput1(e.target.value)
    }
    const getInput2=(e1)=>{
        setInput2(e1.target.value)
    }
    const getInput3=(e2)=>{
        setInput3(e2.target.value)
    } 
    const getVal=(input1,input2,input3)=>{
        setNumerator((Math.abs(input2*input2-(4*input1*input3)))**(1/2));
        setDenominator(2*input1)
        if(numerator>=0)
        {
           setRoot1(parseInt(-input2+numerator)/denominator);
           setRoot2(parseInt(-input2-numerator)/denominator);
           console.log(root1,root2);
        }
        else if(numerator===0)
        {
            setRoot1(parseInt(-input2/denominator));
            setRoot2(parseInt(root1));
            console.log(root1,root2);
        }
        else
        {
            setRoot1(parseInt(-input2/denominator));
            setRoot2(parseInt(numerator/denominator));
            console.log(root1,root2);
        }
    // setInput1=" ";
    // setInput2=" ";
    // setInput3=" ";

    }
    
    return(
        <div>
            {"Enter root:"}<input type="text" onChange={getInput1} value={input1}></input>
            {"Enter root1"}<input type="text" onChange={getInput2} value={input2}></input>
            {"Enter root2"}<input type="text" onChange={getInput3} value={input3}></input>
            <button onClick={()=>{getVal(input1,input2,input3);}}>submit</button><br></br>
            <span><b>Numerator is:</b> {numerator}</span><br></br>
            <span><b>Denominator is:</b> {denominator}</span><br></br>
            <span ><b>Expression is:{input1}x2+{input2}x+{input3}=0</b></span><br></br>
            <span><b>Root1:{root1}</b></span><br></br>
            <span><b>Root2:{root2}</b></span>
        </div>
    )
}
export default App;