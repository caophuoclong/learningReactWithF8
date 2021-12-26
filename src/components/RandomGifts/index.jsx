import React from 'react';
import { useState } from 'react';

const gifts = [
    "Man",
    "Money",
    "House",
    "Knowledge"
]

const randomGift = (gifts)=>{
    const len = gifts.length;
    return gifts[Math.floor(Math.random()*len)];
}

const RandomGifts = () => {
    const [gift, setGift] = useState("You have not gift!!!!!")
    const handleGetGift = ()=>{
        setGift(randomGift(gifts));
    }
    return (
        <div>
            <h1>{gift}</h1>
            <button onClick={handleGetGift}>Get gift</button>
        </div>
    );
}

export default RandomGifts;
