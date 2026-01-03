import React from 'react'
import { useState,useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
export default function Protected({children,authentication=true}) {
    const navigate=useNavigate()
    const [loader,setLoader]=useState(true)
    const authStatus=useSelector(state=>state.auth.status) //reads  data from store
    useEffect(()=>{
        if(authentication && authStatus !== authentication){
            navigate("/login") //runs when authstatus is false n authentication true
        } else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
        setLoader(false)
    },[authStatus,navigate,authentication])
  return (
    loader?<h1>Loading...</h1>:<>{children}</>
  )
}
//this is required to decide whether show a pg or redirect based on authentication from redux
//children is component/pg we want to protect
//if authentication is true then route reuires login else route must be accesses pnly when logged out
//true means logged in
// if authentication === false (public-only route, like login/signup)