import React, { useState } from 'react';
import { useEffect } from 'react';

const DOMEvents = () => {
    const [size, setSize] = useState(window.innerWidth)
    useEffect(()=>{
        window.addEventListener('resize',()=>{
            setSize(window.innerWidth);
        })
        return ()=>{
            window.removeEventListener("resize", ()=>{
            })
            console.log("Remove Listener")

        }
    },[])
    return (
        <div>
            <h1>DOM Events</h1>
            <h1>{size}</h1>
        </div>
    );
}

export default DOMEvents;
