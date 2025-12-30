import React from 'react'

const UserContext=React.createContext() //step1 ie context is created

export default UserContext;
//context api solves prop drilling problem
//context is like global data channel for subtree of component..any child can consume directly
