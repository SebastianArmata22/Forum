import '../styles/signin.scss'
import React, { useState } from 'react'
import {auth, providerFacebook, providerGithub, providerGoogle} from '../firebase/auth'
import Register from './Register'
import googleImg from '../icons/google-icon.svg'
import fbImg from '../icons/fb-logo.png'
import githubImg from '../icons/GitHub-Mark-32px.png'

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
                    <div className='sign-in-email'>
                        <h2>Sign In</h2>
                        <form onSubmit={signIn}>
                            <input type='email' className='' value={email} onChange={e=>changeEmail(e.target.value)} placeholder='email...'></input>
                            <input type='password' value={password} onChange={e=>changePassword(e.target.value)} placeholder='password...'></input>
                            <input type='submit' value='Sign in'></input>
                        </form>
                    </div>
                    <div className='register-info'>
                        <p>You do not have an account?</p>
                        <p><span>Click</span> and create account</p>
                    </div>
                    <div className='additional-logging'>
                        <p>Create account with</p>
                        <img src={googleImg} alt='google' onClick={signInWithGoogle}>
                        </img>
                        <img src={githubImg} alt='gitHub' onClick={signInWithGitHub}>
                        </img>
                        <img src={fbImg} alt='facebook'  onClick={signInWithFacebook}>
                        </img>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SignIn