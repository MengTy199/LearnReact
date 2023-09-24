import './components/Greeting/index'
import './components/TestProps/index'
import './components/TestProps/index2'
import './components/TestProps/index3'
import './components/TestProps/index4'
import './components/Conditional_Rendering/index'
import './components/RederingLists/index'
import Item from './components/Conditional_Rendering/index'
// import People from './components/RederingLists/index'
// import Student from './components/RederingLists/Student'
// import FilterStudent from './components/RederingLists/FilterStudent'
import Keeping from './components/RederingLists/Keeping'
import Article from './components/Article'
import Images from './components/Article/index2'
import Button from './components/state'
import Count from './components/state/index2'
import Work from './components/state/index3'
import InputText from './components/state/index4'
import Send from './components/state/index5'
import ActionClick, { UploadButton } from './components/Resposnding'
import PlayButton from './components/Resposnding'
import Toolbar from './components/Resposnding/index3'
import ToolbarP from './components/Propagation/index2'
// import Greeting ,{Greeting1} from './components/Greeting/index'
// import TestProps from './components/TestProps/index'
// import TestProps2 from './components/TestProps/index2'
// import TestProps3 from './components/TestProps/index'
// import Button from './components/TestProps/index4'
function App() {

  return (
    <div>
     {/* <Greeting/>
     <Greeting1/> */}
     {/* <TestProps hDescription={'Hello world'}/>
     <TestProps hDescription={'Hello Guys'}/> */}
     {/* <TestProps2/> */}
     {/* <TestProps3 title={"Article 1"} css={{color:'red'}}>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, dolorum quo aut doloremque laudantium officia quos! Debitis perspiciatis fugit enim facere accusantium fugiat praesentium? Inventore qui eos blanditiis saepe ullam?</p>
     </TestProps3>
     <TestProps3 title={"Article 2"}>
      <p>quos! Debitis perspiciatis fugit enim facere accusantium fugiat praesentium? Inventore qui eos blanditiis saepe ullam?</p>
     </TestProps3>
     <TestProps3 title={"Article 3"}>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, tenetur!</p>
     </TestProps3> */}
     {/* <Button css={{backgroundColor: "red", padding: '20px', borderRadius: '10px', border: '1px solid red', width: '200px', cursor:'pointer'}}/>
     <Button css={{backgroundColor: "red", padding: '20px', borderRadius: '10px', border: '1px solid red', width: '200px', cursor:'pointer', margin : '10px'}}/> */}
      {/* <ul>
        <Item name='Mengty 1' isPacked ={false}/>
        <Item name='Mengty 2 ' isPacked={true}/>
        <Item name='Mengty 3 ' isPacked={true}/>
      </ul> */}

      {/* <People/> */}

      {/* <Student/> */}

      {/* <FilterStudent/> */}
      {/* <Keeping num={1}/>
      <Keeping num={2}/>
      <Keeping num={3}/> */}
{/* 
      <Article title='Article 1' titleCss={{color: 'blue'}} descitpitonCss={{fontSize: '3rem'}}>
        <span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, adipisci?
        </span>
      </Article>
      <Article title='Article 2' titleCss={{color: 'Yellow'}}>
        <span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, adipisci?
        </span>
      </Article>
      <Article title='Article 3' titleCss={{color: 'red'}}>
        <span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, adipisci?
        </span>
      </Article>
      <Images/>
      <Images ig={'https://images.pexels.com/photos/12596469/pexels-photo-12596469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}/> */}

      {/* <Button/> */}
      {/* <Count/>
      <Work/> */}

      {/* <InputText/> */}
      {/* <Send/> */}

      {/* <PlayButton movieName={"kiki's Delivery Service"}/>
      <UploadButton/> */}

      {/* <Toolbar onPlayMovie={() => alert('Playing!')} onUpaodImage={() => alert('Uplaoding!')} /> */}
        
      <ToolbarP></ToolbarP>
    </div>
  )
}

export default App
