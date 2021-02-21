import '../styles/register.scss'
import React, { useState } from 'react'
import {auth} from '../firebase/auth'

const Register= () =>{
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [repeatPasword,setRepeatPassword]=useState('')
    const changeEmail=(email)=>{
        setEmail(email)
    }
    const changePassword=(password)=>{
        setPassword(password)
    }
    const changeRepeatPassword=(password)=>{
        setRepeatPassword(password)
    }
    const addUser=async (e)=>{
        e.preventDefault()
         await auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(userCredential.user)
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log("error code: ", errorCode)
          const errorMessage = error.message;
          console.log("error message: ", errorMessage)
        })
    }
return(
    <div>
        <form onSubmit={addUser}>
            <input type='email' className='' value={email} onChange={e=>changeEmail(e.target.value)} placeholder='email...'></input>
            <input type='password' value={password} onChange={e=>changePassword(e.target.value)} placeholder='password...'></input>
            <input type='password' value={repeatPasword} onChange={e=>changeRepeatPassword(e.target.value)} placeholder='repeat password...'></input>
            <input type='submit' value='Create'></input>
        </form>
    </div>
)
}
export default Register