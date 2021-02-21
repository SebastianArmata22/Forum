import '../styles/register.scss'
import React, { useState } from 'react'
import {auth} from '../firebase/auth'
import arrowLeft from '../icons/left-arrow.svg'
const Register= ({setIsRegister}) =>{
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [repeatPasword,setRepeatPassword]=useState('')
    const [errorText,setErrorText]=useState('')

    const changeEmail=(email)=>{
        setEmail(email)
    }
    const changePassword=(password)=>{
        setPassword(password)
    }
    const changeRepeatPassword=async(value)=>{
        await setRepeatPassword(value)
        password===repeatPasword ? setErrorText('') : setErrorText('The passwords differ')
    }
    const addUser=async (e)=>{
        e.preventDefault()
        await password===repeatPasword ? auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(userCredential.user)
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log("error code: ", errorCode)
          const errorMessage = error.message;
          console.log("error message: ", errorMessage)
        }) : setErrorText('The passwords differ')
    }
return(
    <div className='register'>
        <div className='back'>
            <img src={arrowLeft} alt='back' onClick={()=>setIsRegister(false)}></img>
        </div>
        <h2>Create an account</h2>
        <form onSubmit={addUser}>
            <input type='email' className='' value={email} onChange={e=>changeEmail(e.target.value)} placeholder='email...'></input>
            <input type='password' value={password} onChange={e=>changePassword(e.target.value)} placeholder='password...'></input>
            <input type='password' value={repeatPasword} onChange={e=>changeRepeatPassword(e.target.value)} placeholder='repeat password...'></input>
            <input type='submit' value='Create'></input>
        </form>
        <p className='error-info'>{errorText}</p>
    </div>
)
}
export default Register