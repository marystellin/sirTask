import React from 'react'
const App2 = () => {
    const [limit, setlimit] = React.useState('0')
    const [result, setResult] = React.useState([])
    const putLimit = (e) => {
        setlimit(e.target.value)
    }
    const getFibo = () => {
        let a = 0;
        let b = 1;

        for (let i = 0; i <= limit; i++) {
            let c = a + b;
            if (c % 2 === 0) {
                setResult(c * 2);
                a = b;
                b = c;
                c = result;
            }
            else {
                setResult(data => data.concat(c));
                //setResult(result.push(c));
                a = b;
                b = c;
                c = result;
            }
        }
    }
    return (
        <div>
            <b>Enter Limit:</b><input type="text" onChange={putLimit}></input>
            <button onClick={getFibo}>Enter</button>
            {
                <ul>
                    {
                        result.map((list) => {
                            return (
                                <li> {list}</li>
                            )
                        })
                    }
                </ul>
            }
        </div>
    )
}
export default App2;