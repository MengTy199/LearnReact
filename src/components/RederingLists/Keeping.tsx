import React from "react";

interface Unque{
    num : number;
}


const keeping: React.FC<Unque> = (props)=>{
    return(
        <div>
            <h1> Hello : {props.num}</h1>
        </div>
    )
}

export default keeping;