import React, { useState } from "react";

const Count: React.FC =()=>{
    const [count , setCount] = useState(Number);
    const handleCount =()=>{
        // setCount+=count;
        setCount(count+1)
        console.log('hi' , count)
        
    }
    
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={handleCount}>+</button>
        </div>
    )
};
export default Count;