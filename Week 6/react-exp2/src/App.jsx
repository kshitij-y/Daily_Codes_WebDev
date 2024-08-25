import { useState, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [n, setn] = useState(1);

  let sum = useMemo(()=>{
    let c =0;
    for(let i=0; i<=n; i++){
      c += i;
    }
    return c;
  },[n]);
  
  return (
    <>
      <input onChange={(e)=>{
        setn(e.target.value)
      }} placeholder='Enter a number'></input><br /> <br />

      <div>Sum is {sum}</div><br />
    
      <button onClick={()=>{
        setCount(count + 1)
      }}>Count ({count})</button>
    </>
  )
}

export default App
