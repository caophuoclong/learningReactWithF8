import React, { useCallback, useState } from 'react'
import Counter from './counter';

const UseCallback = () => {
    const [count, setCount] = useState(0)
    const handleCounter = useCallback(()=>{
        setCount(prev=>prev+1);
    },[])
    return (
        <div>
            <h2>Counter</h2>
            <h3>{count}</h3>
            <Counter onCounter={handleCounter}/>
        </div>
    );
}

export default UseCallback;
