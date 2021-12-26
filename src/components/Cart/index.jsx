import React from 'react';
import { useState } from 'react';
const order = [100,200,300];
const Cart = () => {
    const [value, setValue] = useState(()=>{
        return order.reduce((value, cur)=> value + cur)
    })
    const [inpValue, setInpValue] = useState("");
    function handleSetInputValue (event){
        const value = event.currentTarget.value;
        setInpValue(value);
    }
    const sumCart = ()=>{
        setValue(prev => isNaN(inpValue) || inpValue === "" ? prev : prev + parseInt(inpValue) );
    }
    const subCart = ()=>{
        setValue(prev => prev - inpValue <= 0 ? 0 : prev - inpValue);
    }

    return (
        <div>
            <h1>Cart</h1>
            <h1>{value}</h1>
            <input type="text" value={inpValue} onChange={handleSetInputValue} />
            <br />
            <button onClick={sumCart}>Sum</button>
            <button onClick={subCart}>Sub</button>

        </div>
    );
}

export default Cart;
