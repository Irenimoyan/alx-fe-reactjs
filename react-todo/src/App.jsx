import { useState } from 'react'
import TodoList from './components/ToDoList'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
     <div>
      <h1>My Todo App</h1>
      <TodoList />   {/* 👈 renders your TodoList component */}
    </div>
  )
}

export default App
