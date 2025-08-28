import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Createtodo } from './components/Addtodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]);
    
  fetch("http://localhost:3000/")
      .then(async function (response) {
        const json = await response.json()
        setTodos(json.todos)
      })
  

  return (
    <div>
      <Createtodo />
      <Todos todos={todos} />
    </div>
  )
}

export default App
