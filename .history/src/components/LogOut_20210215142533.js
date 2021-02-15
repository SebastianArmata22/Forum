import React from 'react'
import {auth} from '../firebase/auth'

const LogOut= ()=>{
    const logout=()=>{
        auth.currentUser && auth.signOut()
    }
    return(
        <button onClick={logout}>Logout</button>
    )
}
export default LogOut