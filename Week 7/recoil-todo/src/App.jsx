import { useState } from 'react'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import './App.css'
import { todosAtomFamily } from './atom';

function App() {

  return <RecoilRoot>
    <Todo id={1} />
    <Todo id={2} />
    <Todo id={1} />
    <Todo id={2} />
    <Todo id={1} />
    <Todo id={2} />
  </RecoilRoot>
}
function Todo({id}) {
  const currentTodo = useRecoilValue(todosAtomFamily(id));
  return (
    <>
      title: {currentTodo.title} <br />
      description: {currentTodo.description}

      <br /> --------------------------------- <br />
    </>
  )
}

export default App
