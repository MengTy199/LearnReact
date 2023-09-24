import React from "react";
import Button from ".";

const ToolbarP : React.FC =() =>{
    return(
        <div style={{padding:'20px', backgroundColor: 'brown'}} onClick={() => alert("You click on  the Toolbar! ")}>
            <Button onClick={()=> alert('Playing!')}>
                Play Movie
            </Button>
            <Button onClick={()=>alert('Uplaoding!')}>
                Upload Image
            </Button>
        </div>
    )
}

export default ToolbarP;