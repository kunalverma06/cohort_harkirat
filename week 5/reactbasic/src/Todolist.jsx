import { useState } from "react";



function Todo() {
    const [todo, update] = useState([
        {
            title: "study",
            description: "9am to 11am"

        },
        {
            title: "talk",
            description: " 11am to 12am"

        },
    ]);


    function Childvar() {
        return (
            <div>
                <h1>child</h1>
            </div>
        )
    }



    function addtodo() {
        update([...todo, {  //this ...todo is used to copy the previous todo list and then add the new todo in front of it
            title: "sleep",
            description: "12am to 9am"
        }])
    }


    //  anytime a parent rerender the child component will also rerender no matter if the child component is using the state or not 
    return (
        <div>
            {todo.map(function (todo) {
                return (
                    <div>

                        <h1>{todo.title}</h1>
                        <p>{todo.description}</p>

                        <div>
                            <button onClick={addtodo}>Add Todo</button>
                        </div>
                        <Childvar />
                        {/* this is a outside child component which will rerender when the parent component rerender  */}
                    </div>
                )
            })}

        </div>
    )
}
export default Todo;