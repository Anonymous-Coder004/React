import { createSlice,nanoid } from "@reduxjs/toolkit"; //create slice generate reducer,action creators,action type automatically

const initialState={
    todos:[{id:1,text:"hello world"}] //heere initial redux state is defined
}
export const todoslice=createSlice({
    name:'todo', //prefix for action type
    initialState:initialState, //Redux will initialize this slice with that data
    reducers:{
        addTodo:(state,action)=>{ //addTodo is key which represents action..also state is same thing as that of {state,setstate}=usestate()..means state part has array of all todo stored in todos
            const todo={
                id:nanoid(), //instead of date.now()..generates unique id 
                text:action.payload //action is msg ..payload stores that data for adding (here)or any other type of msg
            }
            state.todos.push(todo) // internally converted to this return{...state,todos: [...state.todos, todo]}
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload) //here payload contains id 
        }
    }
})

export const {addTodo,removeTodo}=todoslice.actions //action creators 
export default todoslice.reducer //exports the reducer fn

//action is plain obj that describes what happened
//reducers is fn that decided how state changes in response to an action...it decides Given the current state and an action, what should the next state be
//syntax of state in addtodo part is same as that of initial state...store holds the state 
//just like settodo is used to update todo in usestate..here reducer will do update 