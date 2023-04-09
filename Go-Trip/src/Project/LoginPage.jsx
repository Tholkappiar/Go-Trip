import { Email } from '@mui/icons-material'
import { Link } from '@mui/material'
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import './LoginStyles.css';


function Login() {

    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[error,setError]=useState(false)
    const navigate=useNavigate();
    
    
    const formHandler=(event)=>{
        event.preventDefault()

        if(email.length===0 && password.length===0)
        {
            setError(true)
        }
        if((email=== "admin@gmail.com"&& password==="admin" )||( email==="gotrip@gmail.com" && password==="gotrip" )||(email==="trip1@gmail.com" && password==="trip")||(email=== "travel@gmail.com"&& password==="travel")||( email==="skct@gmail.com"&&password==="skct")){  
            navigate('/home')
        }
    }
    
  return (
    <div className='loginback'>
        <center>
        <div className='container'>

           <img className='web-logo' src='ImageOne.png' alt="not  img" />
        </div>
        <div className='container1'>
            <div>
                <p className='sign-in'>Sign in</p>
            </div>
            <div>
            <p className='header-intro'>
                Start sign in and start managing your trips!
            </p>
            </div>
            <form onSubmit={formHandler}>
            <div>
                <input className='email-box' type='email' placeholder='joes@email.com' label="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
                
                <div> {error && email.length===0?
                    <label style ={{color:'red'}}>Email id required*</label> :""}
                </div>
                <input className='password-box' type='password' placeholder='Password' label="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>
                <div>
                    {error && password.length===0?
                    <label style ={{color:'red'}}>password id required*</label> :""}
                </div>
            </div>
            <div>
                <button className='login-box' type='submit' >
                    Login
                </button>
            </div>
            </form>
            
        </div>
        </center>
        
    </div>
)
}
                

export default Login