import React from 'react'
import { useParams } from 'react-router-dom' //returns obj of key-value pairs by reading dynamic url parameters
function User() {
    const {userid}=useParams() //userid is variable whichv must be of same name as that while defining its route in main.jsx
  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>User Id:{userid}</div>
  )
}

export default User