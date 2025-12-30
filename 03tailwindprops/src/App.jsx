import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "tailwindcss";
import Card from './Components/card'

function App() {
  
  let myobj={
    name:"Yash",
    age:21
  }

  return (
    <>
      <h1 className='bg-green-400 text-white p-4 rounded-xl mb-4'>Tailwind css </h1>
      <Card username={myobj.name} Title="hello coders"/>
    </>
  )
}

export default App
