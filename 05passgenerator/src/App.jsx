import { useState } from 'react'
import { useCallback,useRef,useEffect} from 'react';
import "tailwindcss";
function App() {
  const [length, setLength] = useState(8)
  const [numallow,setNumallow]=useState(false)
  const [charallow,setCharallow]=useState(false)
  const [password,setPassword]=useState("")
  const passwordRef = useRef(null)
  const genpass=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numallow)str+="0123456789"
    if(charallow)str+="@_-#!"
    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }
    setPassword(pass)

  },[length,numallow,charallow,setPassword])
  const copyPasswordclipboard=useCallback(()=>{ //this hook is used when same fn is required to called multiple times ...(fn,[dependencies])..optimize is goal here 
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,100 );
    window.navigator.clipboard.writeText(password)
  },[password])


  useEffect(()=>{
     genpass()
  },[length,numallow,charallow,genpass]) //jab bhi length,numallow ,charallow ya genpass me kuch change hoga to ye hook rerun hoga
  return (
     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 bg-white"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
        onClick={copyPasswordclipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>{setLength(e.target.value)}}
        />
        <label>Length:{length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input
           type="checkbox"
           defaultChecked={numallow}
           id='numberInput'
           onChange={()=>{
            setNumallow((prev)=>!prev);
           }}
        />
        <label>Numbers</label>
      </div>
       <div className='flex items-center gap-x-1'>
        <input
           type="checkbox"
           defaultChecked={charallow}
           id='charInput'
           onChange={()=>{
            setCharallow((prev)=>!prev);
           }}
        />
        <label>characterInput</label>
      </div>
    </div>
    </div>
  )
}

export default App
