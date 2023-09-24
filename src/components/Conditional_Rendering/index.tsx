import React from 'react'

interface ItemProps{
    name : string;
    isPacked? : boolean;
}

// using if else statement 
// const Item: React.FC<ItemProps> =(props)=>{
//     const {name, isPacked} = props;
//     if (isPacked){
//         return(
//             <li>
//                 {name} ispack
//             </li>
//         )
//     }
//     return(
        
//         <li>
//             {name}
//         </li>
//     )


// //using if else statement and if true reture null
// const Item: React.FC<ItemProps> =(props)=>{
//     const {name, isPacked} = props;
//     if (isPacked){
//         return null
//     }
//     return(
        
//         <li>
//             {name}
//         </li>
//     )
// }

// //using tenery operator and if true reture null
// const Item: React.FC<ItemProps> =(props)=>{
//     const {name, isPacked} = props;

//     return(<li>{name} {isPacked ? "is" : ""}</li>)
// }
//using tenery operator and if true reture null
// const Item: React.FC<ItemProps> =(props)=>{
//     const {name, isPacked} = props;

//     return isPacked ? null : <li>{name}</li>
// }
// using logical And Operator (&&)
const Item: React.FC<ItemProps> =(props)=>{
    const {name, isPacked} = props;

    // return <li>{name} {isPacked && "Done"}</li>
    // return isPacked ? null : <li>{name}</li>

    return <>
    {
        !isPacked && <li>{name}</li>
    }
    </>
}


export default Item;