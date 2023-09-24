import React from  'react'
import {useState} from 'react'


const Work: React.FC =() =>{

    const [walk, setWalk] = useState(Boolean);
    console.log(walk);
    const handleClick =() =>{
        setWalk(!walk);
    }
    return(
        <>
            <button onClick={handleClick}> change to {walk? 'walk': 'stop'} </button>
            <h1 style={{color: walk? 'red': 'blue'}}>{walk? 'Stop': 'Walk'}</h1>
        </>
    )
}

export default Work;