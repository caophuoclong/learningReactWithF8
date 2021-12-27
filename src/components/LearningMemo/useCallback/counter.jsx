import React, { memo } from 'react';

const Counter = ({onCounter}) => {
    return (
        <div>
            {console.log("re-render")}
            <button onClick={onCounter}>Run</button>
        </div>
    );
}

export default memo(Counter);
