import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Count count={count} setCount={setCount}/>

    </>
  )
}
/*Count doesn't use setCount but it is beeing passed 
  it can be fixed using Context API*/
function Count({count, setCount}){
  return(
    <div>
      Count is {count} <br />
      <Buttons count={count} setCount={setCount} />
    </div>
  )
}

function Buttons({count, setCount}){
  return(
    <>
      <button onClick={()=>{
        setCount(count+1);
      }}>increase</button>
      <button onClick={()=>{
        setCount(count-1);
      }}>decrease</button>
    </>
  )
}
export default App
