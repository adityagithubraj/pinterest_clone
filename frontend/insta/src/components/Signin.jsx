import React, {useEffect,useState} from 'react'
import logo from "../assets/react.svg";
import { Link , useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';

import "./signin.css"

function Signin() {

  const navigate = useNavigate()

  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //.....notify toster npm 
const notifyA =(message)=>toast.error(message)
const notifyB =(message)=>toast.success(message)

//....emailRegex
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;


const postData = ()=>{
  //...check email
  if(!emailRegex.test(email)){
    notifyA("Invalid email")
    return
  }
  
  
  
   fetch("http://localhost:7070/signin",{
    method : "post",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
 
  email:email,
  password:password 
   })
   })
   .then(res=>res.json())
   .then(data=>{ 
    if(data.error){
      notifyA(data.error)
  
    }
    else{
      notifyB(data.message)
      navigate("/profile")
    }
    
    console.log(data) })
  }

  return (
    <div className='signup'>

      <div className='form'>

        <img className='sigin-logo' src={logo} alt="logo" />
        <p className='sig-para'>SignIn to shee photot and video</p>

        <div>
        <input type="email"name='email' id='email'
           placeholder='Email' value={email}
          onChange={(e)=>{setEmail(e.target.value)}} />
        </div>

  
        <div>
        <input type="password"name='password' id='password' placeholder='password' 
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}/>
        </div>

        <p className='login-para'>
          By signin up, you agree to out Terms 
        </p>

        <input type="submit" id="submit-btn" value="Sign In" onClick={()=>{
          postData()}
        } />
      </div>
    </div>
  )
}

export default Signin