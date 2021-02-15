import React from 'react'
import {auth} from '../firebase/auth'

const LogOut= ()=>{
    const logout=()=>{
        auth.currentUser && auth.signOut()
    }
    return(
        <button onClick={logout}></button>
    )
}
export default LogOut