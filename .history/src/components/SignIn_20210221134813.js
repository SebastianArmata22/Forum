import '../styles/signin.scss'
import React, { useState } from 'react'
import {auth, providerFacebook, providerGithub, providerGoogle} from '../firebase/auth'
import Register from './Register'

const SignIn= () =>{
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const changeEmail=(email)=>{
        setEmail(email)
    }
    const changePassword=(password)=>{
        setPassword(password)
    }
    const signInWithGoogle=()=>{
        auth.signInWithPopup(providerGoogle)
    }
    const signInWithGitHub=()=>{
        auth.signInWithPopup(providerGithub)
    }
    const signInWithFacebook=()=>{
        auth.signInWithPopup(providerFacebook)
    }
    const signIn=async (e)=>{
        e.preventDefault()
        await auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            })
    }
    return(
        <div className='signin-container'>
            <div>
                <div className='welcome-container'>
                    <h1>Welcome in IT Forum</h1>
                    <Register />
                </div>
                <div className='sign-in-register'>
                    <div>
                        <h2>Sign In</h2>
                        <form onSubmit={signIn}>
                            <input type='email' className='' value={email} onChange={e=>changeEmail(e.target.value)} placeholder='email...'></input>
                            <input type='password' value={password} onChange={e=>changePassword(e.target.value)} placeholder='password...'></input>
                            <input type='submit' value='Sign in'></input>
                        </form>
                    </div>
                    <div>
                        <p>You do not have an account?</p>
                    </div>
                    <button  onClick={signInWithGoogle}>
                        <p>Sign in with Google</p>
                    </button>
                    <button  onClick={signInWithGitHub}>
                        <p>Sign in with GitHub</p>
                    </button>
                    <button  onClick={signInWithFacebook}>
                        <p>Sign in with Facebook</p>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default SignIn