import { useEffect, useState } from 'react'
import './App.css'
import "tailwindcss";
import { Themeprovider } from './Contexts/theme';
import ThemeBtn from './Components/ThemeBtn';
import Card from './Components/Card';
function App() {
  const [themeMode,setthemeMode]=useState("light")
  const lighttheme=()=>{ //now lighttheme fn is updated globally
    setthemeMode("light")
  }
  const darktheme=()=>{
    setthemeMode("dark")
  }
  //actual ui change
  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])
  return (
    <Themeprovider value={{themeMode,lighttheme,darktheme}}> {/* now all chilren will have access to these 3 variable or fn */}
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                <ThemeBtn />
            </div>

            <div className="w-full max-w-sm mx-auto">
                <Card />
            </div>
        </div>
      </div>
    </Themeprovider>
  )
}

export default App
