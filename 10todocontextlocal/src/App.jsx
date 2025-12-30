import { useEffect, useState } from 'react'
import './App.css'
import "tailwindcss";
import { Todoprovider } from './Contexts';
import TodoForm from './Components/TodoForm';
import TodoItem from './Components/TodoItem';
function App() {
  const [todos,setTodo]=useState([]) //this state has array of all todo
  const addTodo=(todo)=>{
    setTodo((prev)=>[{id:Date.now(),...todo},...prev]) //prev is most recent array of todo
  }
  const updatedTodo=(id,todo)=>{
    setTodo((prev)=>prev.map((prevTodo)=>(prevTodo.id===id?todo:prevTodo)))//here prev is array of todo ..and we have to update todo with id given...so map is for looping on all todo array..prevtodo is 1 element of prev array now its id is matched with id provided and if true then update that todo else leave it as it is
  }

  const deleteTodo=(id)=>{
    setTodo((prev)=>prev.filter((prevtodo)=>prevtodo.id!==id)) //here we have to delete only 1 todo item with id and returns rest of the todo so map method is not efficient for this type of task..hence filter is used now prev.filter will loop across prev array and returns all those values ie prevtodo which have id not equal to provided id
  }

  const toggleComplete=(id)=>{
    setTodo((prev)=>prev.map((prevtodo)=>prevtodo.id===id?{...prevtodo,completed:!prevtodo.completed}:prevtodo)) //if id matches then take it todo using spread operator(...) then overwrite the completed key to !completed else don't do any change
  }
  //local storage..remains in browerser even after pg reload..as react is client side hence localStorage can be directly called
  useEffect(()=>{
    const todos=JSON.parse(localStorage.getItem("todos"))//read operation ..returns key's value in json in string format with key todos or null if key not exist..parse will convert it to json
    if(todos&&todos.length>0){
      setTodo(todos) //now that todos from local storage is set to state todos
    }
  },[]) //means runs once when page load
  //saving todos to local storage
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos)) //overwrites todos key with the json data provided ...convert it to string before writing hence stringify
  },[todos]) //everytime when todos state change
  return (
    <Todoprovider value={{todos,addTodo,updatedTodo,deleteTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
              <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
              <div className="mb-4">
                  {/* Todo form goes here */} 
                  <TodoForm />
              </div>
              <div className="flex flex-wrap gap-y-3">
                  {/*Loop and Add TodoItem here */}
                  {todos.map((todo)=>(
                    <div key={todo.id} className='w-full'>
                      <TodoItem todo={todo} /> {/* as todoitem fn requires todo for its working */}
                    </div>
                  ))}
              </div>
          </div>
      </div>
    </Todoprovider>
  )
}

export default App
