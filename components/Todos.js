import React from 'react'
import Todo from './Todo'

function Todos(props) {
  const completedTodo = (id) => {
    props.onCheked(id)
  }
  return (
      <div >
          {props.todos.map((todo) => (
              
            <Todo title={todo.title} completed={todo.completed} id={todo.id} key={todo.id} work={ props.todos.length} onCheked={ completedTodo} />
              
          ))}
      <h1 className=' mt-4 text-yellow-500 bg-white  w-[50%] mx-auto rounded-full p-2 text-center'>you gotta {props.remainingworkd} work to do</h1>
    </div>
  )
}

export default Todos