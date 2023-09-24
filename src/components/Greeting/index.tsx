const  Greeting = () =>{
    return(
       <div>
         <h1>Hello</h1>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
        </ul>
       </div>
    )
}
interface MyObject{
    id: number,
    name: string,
    position ?: string
}
const myObject: MyObject ={
    name:"Kok",
    id: 1,
    position : "WebDevloper"
}



export function Greeting1(){
    return(
        <>
        <h1>Hello Guys</h1>
        <ul>
            <li>
                <p>D:{myObject.id} </p>
            </li>
            <li>
                <p>ID:{myObject.name} </p>
            </li>
            <li>
                <p>ID:{myObject.position} </p>
            </li>
        </ul>
        </>
    )
}


export default Greeting;