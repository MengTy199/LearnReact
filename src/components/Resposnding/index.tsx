import React from "react";
import Button from "./index2";


type ButtonPlayProps={
    movieName?: string;
}
const PlayButton: React.FC<ButtonPlayProps> =(props)=>{
    const {movieName}= props;

    function handlePlayClick (){
        alert(`Playing ${movieName}`)
    }
    return(
        <div>
            <Button onClick={handlePlayClick} >Play {movieName} </Button>
        </div>
    )
}

 export const UploadButton: React.FC = ()=>{
    const handldeUpload =()=>{
        alert(`Uploading`);
    }
    return(
        <>
            <Button onClick={handldeUpload} children={"Upload"} ></Button>
        </>
    )
}

export default PlayButton;
