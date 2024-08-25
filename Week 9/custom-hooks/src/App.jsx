// import { useState, useEffect } from 'react'
 import './App.css'
// import React from 'react'
// import { Component } from 'react'

// function App() {
//   const [render, setRender] = useState(true);

//   useEffect(() => {
//     setTimeout(() => {
//       setRender(r => !r)
//     }, 100000)
//   },[render])

//   return (
//     <>
//       {render ? <MyComponent /> : <div></div>}
//     </>
//   )
// }
// // class MyComponent extends React.Component {
  
// //   constructor(props){
// //     super(props);
// //     this.state = { count: 1}
// //   }

// //   incCount = () => {
// //     this.setState({count: this.state.count * 2});
// //   }
// //   render() {
// //     return (
// //       <div>
// //         <p> {this.state.count }</p>
// //         <button onClick={this.incCount}>Increament</button>
// //       </div>
// //     )
// //   }
// // }
// function MyComponent() {
//   useEffect(()=> {
//     console.error("completed mount") //componentDidMount

//     return () => { //componentDidUnMount
//       console.log("completed unmount");
//     }
//   }, []);

//   return <div>
//     From inside my comp
//   </div>
// }

// export default App


import { useEffect, useState } from 'react'
import axios from 'axios'

function useTodos(n) {
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState([])

  function getData() {
    axios.get("https://sum-server.100xdevs.com/todos")
      .then(res => {
        setTodos(res.data.todos);
        setLoading(false);
      })
  }

  useEffect(() => {
    setInterval(() => {
      getData();
    }, n * 1000)
    getData();
  }, [n])

  return {
    todos: todos,
    loading: loading
  };
}

function App() {
  const { todos, loading } = useTodos(1);

  if (loading) {
    return <div>
      Loading...
    </div>
  }

  return (
    <>
      {todos.map(todo => <Track todo={todo} />)}
    </>
  )
}

function Track({ todo }) {
  return <div>
    {todo.title}
    <br />
    {todo.description}
  </div>
}

export default App