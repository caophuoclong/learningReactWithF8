import React from 'react';

// Init state
const initState = 0;

// Init Action

const UP_ACTION = "up";
const DOWN_ACTION = "down";

// Init reducer;

const reducer = (state, action) => {
    switch(action){
        case UP_ACTION:
            return state + 1;
        case DOWN_ACTION:
            return state - 1;
        default:
            throw new Error("Invalid action!!!")
    }
}


const Index = () => {
    const [count, dispatch] = React.useReducer(reducer, initState);
    return (
        <div>
            <h1>Counter</h1>
            <h2>{count}</h2>
            <button onClick={
                ()=>{
                    dispatch(UP_ACTION);
                }
            }>Up</button>
            <button onClick={
                ()=>{
                    dispatch(DOWN_ACTION);
                }
            }>Down</button>
        </div>
    );
}

export default Index;
