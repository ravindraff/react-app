import { TextField } from '@material-ui/core';
import React,{useState} from 'react';
function Increment(){
  /*   const [counter, setCounter] = useState(1);
    const incrementCounter = () => setCounter(counter + 1);
    let decrementCounter = () => setCounter(counter - 1);
    if(counter<=0) {
      decrementCounter = () => setCounter(1);
    }
    return (
            <section className="container">
                <div>Hello</div>
                    <div> 
                        <button className="btn btn-primary btn-sm" onClick={incrementCounter}>+</button>
                        <TextField type="text" variant="outlined" value={counter}/> 
                        &nbsp;
                        <button className="btn btn-danger btn-sm" onClick={decrementCounter}>-</button>
                    </div>
            </section>
        ) */
        const [count, setCount] = useState(0);
        return (
            <section className="container">
            <div className="App">
            <button onClick={() => setCount(count + 1)}>+</button>
            <TextField variant="outlined" value={count>0?count:0} />
            <button onClick={() => setCount(count - 1)}>-</button>
            </div>
            </section>
        );
}
export default Increment;