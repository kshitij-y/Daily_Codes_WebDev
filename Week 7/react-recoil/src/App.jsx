import { useState, useContext } from 'react'
import './App.css'
import { useRecoilValue, useRecoilState, RecoilRoot, useSetRecoilState } from 'recoil'
import { countAtom, evenSelector } from './store/atoms/count'

/* 
  Here count is teleported through recoil
  recoilroot
  useRecoilState
  useRecoilValue
  usesetRecoilValue
  selector
*/

function App() {

  return (
    <>
      <RecoilRoot>
        <Count/>
      </RecoilRoot>
    </>
  )
}
function Count(){
  console.log("re-rendered")
  return <div>
    <Countrenderer/>
    <Buttons/>
    <EvenSelector />
  </div>
}

function Countrenderer(){
  const count = useRecoilValue(countAtom);
  return <div>
    Count is {count}
  </div>
  
}

function Buttons(){
  const setCount = useSetRecoilState(countAtom);

  return(
    <>
      <button onClick={()=>{
        setCount(count => count + 1);
      }}>increase</button>
      <button onClick={()=>{
        setCount(count => count - 1);
      }}>decrease</button>
    </>
  )
}

function EvenSelector(){
  const isEven = useRecoilValue(evenSelector);
  return <div>
    {isEven ? "EVEN" : null}
  </div>
}

export default App
