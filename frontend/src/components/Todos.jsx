

export function Todos({todos}){
    const markCompleted = async (id) => {
        const response = await fetch("http://localhost:3000/completed", {
            method: "PUT",
            body: JSON.stringify({ id }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        
    };
    return <div>
        {todos.map(function(todo) {
            return <div>
                <h2>{todo.title}</h2>
                <h3>{todo.description}</h3>
                <button onClick={()=>markCompleted(todo._id)} >{todo.completed == true?"completed":"Mark as completed"}</button>
            </div>
        })}
    </div>
    
    
}