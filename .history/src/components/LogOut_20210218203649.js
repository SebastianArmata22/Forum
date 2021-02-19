import React from 'react'
import {auth} from '../firebase/auth'
import powerOff from '../icons/turn-off.svg'

const LogOut= ()=>{
    const logout=()=>{
        auth.currentUser && auth.signOut()
    }
    return(
        <input type="image" src={powerOff} onClick={logout} />
    )
}
export default LogOut