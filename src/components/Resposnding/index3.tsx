import React from "react";
import Button from "./index2";


type ToolbarProps={
    onPlayMovie: ()=>void;
    onUpaodImage: ()=>void;
}
const Toolbar: React.FC<ToolbarProps> =(props) =>{
    const {onPlayMovie, onUpaodImage} = props;
    return(
        <>
            <Button onClick={onPlayMovie}>Play Movie</Button>
            <Button onClick={onUpaodImage}>Uplod Image</Button>

        </>
    )
}

export default Toolbar;