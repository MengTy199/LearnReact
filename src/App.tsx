import './style.css'
import './components/Greeting/index'
import './components/Greeting/index.css'
import './components/TestProps/index'
import './components/TestProps/index2'
import './components/TestProps/index3'

// import Greeting ,{Greeting1} from './components/Greeting/index'
// import TestProps from './components/TestProps/index'
// import TestProps2 from './components/TestProps/index2'
import TestProps3 from './components/TestProps/index3'
function App() {

  return (
    <div>
     {/* <Greeting/>
     <Greeting1/> */}
     {/* <TestProps hDescription={'Hello world'}/>
     <TestProps hDescription={'Hello Guys'}/> */}
     {/* <TestProps2/> */}
     <TestProps3 title={"Article 1"}>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, dolorum quo aut doloremque laudantium officia quos! Debitis perspiciatis fugit enim facere accusantium fugiat praesentium? Inventore qui eos blanditiis saepe ullam?</p>
     </TestProps3>
     <TestProps3 title={"Article 2"}>
      <p>quos! Debitis perspiciatis fugit enim facere accusantium fugiat praesentium? Inventore qui eos blanditiis saepe ullam?</p>
     </TestProps3>
     <TestProps3 title={"Article 3"}>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, tenetur!</p>
     </TestProps3>
    </div>
  )
}

export default App
