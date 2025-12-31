import { useState } from 'react'
import './App.css'
import {useDispatch} from 'react-redux'
import { useEffect } from 'react'
import authService from './appwrite/auth'
import { login,logout } from './store/authslice'
import 'tailwindcss'
import { Header,Footer } from './components'
function App() {
  const [loading,setloading]=useState(true)
  const dispatch=useDispatch()

  useEffect(()=>{
    authService.getCurrrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      }
    }).finally(()=>{setloading(false)})
  },[]) //means runs only when pg is loaded
  return !loading?(
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>outlet</main>
        <Footer />
      </div>
    </div>
  ):null
}

export default App
