import '../styles/signin.scss'
import React from 'react'
import {auth, providerFacebook, providerGithub, providerGoogle} from '../firebase/auth'

const SignIn= () =>{
    const signInWithGoogle=()=>{
        auth.signInWithPopup(providerGoogle)
    }
    const signInWithGitHub=()=>{
        auth.signInWithPopup(providerGithub)
    }
    const signInWithFacebook=()=>{
        auth.signInWithPopup(providerFacebook)
    }
    return(
        <div className='signin-container'>
            <div>
                <div className='welcome-container'>
                    <h1>Welcome in IT Forum</h1>
                </div>
                <div className='buttons-container'>
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