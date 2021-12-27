import React, { useEffect, useState } from 'react';

const Timer = () => {
    const [counter, setCounter] = useState(180);
    const [start, setStart] = useState(false);
    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setCounter(prev => prev - 1);
        },1000)
        if(!start) clearInterval(intervalId);
        return ()=>{
            clearInterval(intervalId);
        }
    },[start])
    return (
        <div>
            <h1>Counting down</h1>
            <h2 style={{textAlign: "center"}} >{counter}</h2>
            <button onClick={()=>setStart(true)}>Start</button>
            <button onClick={()=>setStart(false)}>Stop</button>
        </div>
    );
}

export default Timer;
