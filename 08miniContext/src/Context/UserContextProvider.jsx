import React from 'react'
import UserContext from './UserContext'
const UserContextProvider=({children})=>{
    const [user,setuser]=React.useState(null) //ascontext only transport data not stores state hence it must be inside component ....hence user,setuser becomes avl to all globally
    return(
        <UserContext.Provider value={{user,setuser}}> {/* now any component inside it can do ..const { user, setuser } = useContext(UserContext) */}
            {children} {/* means wahtever component is wrapped inside this provider */}
        </UserContext.Provider>
    )
}

export default UserContextProvider