import React from 'react';
import {useState} from "react";

const Counter = () => {
    const [counter, setCounter] = useState(1);
    const handleIncrease = ()=>{
        setCounter(prev => prev + 1);
    }
    console.log("re-render");
    return (
        <div>
            <h1>Counter</h1>
            <h1>{counter}</h1>
            <button onClick={handleIncrease}>Increase</button>
            
        </div>
    );
}


export default Counter;
