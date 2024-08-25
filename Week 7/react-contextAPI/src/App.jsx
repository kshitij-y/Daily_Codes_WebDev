import { useState } from 'react'
import './App.css'
import { CountContext } from './assets/components/context'
import { useContext } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CountContext.Provider value={{count, setCount}}>
        <Count/>
      </CountContext.Provider>
    </>
  )
}
/* 
  Here count is teleported through ContextAPI
*/
function Count(){
  return <div>
    <Countrenderer/>
    <Buttons/>
  </div>
}

function Countrenderer(){
  const { count } = useContext(CountContext);
  return <div>
    Count is {count}
  </div>
  
}

function Buttons(){
  const { count, setCount } = useContext(CountContext);

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
