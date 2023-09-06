import React from "react";

interface TestPrps2{
    source?: string;
}


const TestProps2: React.FC<TestPrps2> = (props) =>{
    const {source ='https://images.pexels.com/photos/5253690/pexels-photo-5253690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} = props;
    return(
        <div>
            <img style={{ display: 'block',width: '200px', borderRadius :'10px', alignSelf:'center'}} src={source} alt="Profile" />
        </div>
    )

}
export default TestProps2;