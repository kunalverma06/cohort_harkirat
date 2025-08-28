//this is a file to render todos 
// we are taking todos as input which will array of objects
// we will map over the todos and render each todo

export function Todos({todos}) {

    return (
        <div>
            {todos.map(function(todo){
                return (
                    <div key={todo.id}>
                        <h1>{todo.title}</h1>
                        <p>{todo.description}</p>
                        <button
                        
                        >{todo.completed==true ? "completed":"Mark as completed"}
                            
                        </button>
                    </div>
                )
            })}
        </div>
    )
}