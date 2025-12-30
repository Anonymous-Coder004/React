import React, { useEffect, useState } from 'react'
import { useLoaderData} from 'react-router-dom' //this hook reads data returned by route's loader
function Github() {
    const data=useLoaderData() //when user navigates to /github then react runs githubinfoloader fn as it is specified in main.jsx using loader=..then returns its value to this data variable 
//     const [data,setdata]=useState([]) //no default value
//     useEffect(()=>{ //for api calling of github
//         fetch('https://api.github.com/users/Anonymous-Coder004').then(res=>res.json()).then(data=>{console.log(data);setdata(data)})

//     },[]) //means this fn is called once when this pg is loaded
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers +101}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
    
  )
}

export default Github
export const githubInfoLoader = async () => { //it will be called on github route is touched in ui 
    const response = await fetch('https://api.github.com/users/Anonymous-Coder004') //same task as useffect for api calling but in more optimized way
    return response.json()
}