import { useState } from 'react';
import './App.css';

function App() {
  const [selectedTodo, setSelectedTodo] = useState(null);

  const getOne = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/todos`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });


      const data = await res.json();
      setSelectedTodo(data.todos[id]); // Assuming you get an array of todos and want the first one
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <button onClick={() => getOne(0)}>1</button>
      <button onClick={() => getOne(1)}>2</button>
      <button onClick={() => getOne(2)}>3</button>
      <button onClick={() => getOne(3)}>4</button>
      {selectedTodo && (
        <div>
          <h2>{selectedTodo.title}</h2>
          <p>{selectedTodo.description}</p>
        </div>
      )}
    </>
  );
}

export default App;
