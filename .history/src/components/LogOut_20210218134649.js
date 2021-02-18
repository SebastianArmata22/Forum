import React from 'react'
import {auth} from '../firebase/auth'
import powerOff from '../icons/power-off.svg'

const LogOut= ()=>{
    const logout=()=>{
        auth.currentUser && auth.signOut()
    }
    return(
        <input type="image" src={powerOff} />
    )
}
export default LogOut