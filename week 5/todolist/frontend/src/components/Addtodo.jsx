import { useState } from "react";

export function Createtodo() {
    const [title , setTitle] = useState("");
    const [description , setDescription] = useState("");
    return (
        <div>
            <input type="text" placeholder="title"
                style={{
                    padding: 10,
                    margin: 10
                }}
                 onChange={function(e){
                    const value=e.target.value;
                    setTitle(value);
                    
                }}
                >
            </input><br></br>
            <input
                style={{
                    padding: 10,
                    margin: 10
                }}
                onChange={function(e){
                    const value=e.target.value;
                    setDescription(value);
                    
                }}
                type="text" placeholder="description"></input><br></br>

            <button style={{
                padding: 10,
                margin: 10
            }}
            onClick={ function(){
                fetch("http://localhost:3000/todo",{
                    method: "POST",
                    body: JSON.stringify({
                        title:title,
                        description:description
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            }}
            >
                Add task
            </button>
        </div>
    )
}