import React , {useEffect,useState} from 'react'
import logo from "../assets/react.svg";
import "./signup.css"
import { Link , useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';


function Signup() {

  const navigate = useNavigate()

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [userName, setUserName] = useState("");
const [password, setPassword] = useState("");

//.....notify toster npm 
const notifyA =(msg)=>toast.error(msg)
const notifyB =(msg)=>toast.success(msg)


//....emailRegex
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
//....passwordRegex
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;



const postData = ()=>{
//...check email
if(!emailRegex.test(email)){
  notifyA("Invalid email")
  return
}else if(!passwordRegex.test(password)){
  notifyA("Password  most contant 1,A,a,#")
  return
}



 fetch("http://localhost:7070/signup",{
  method : "post",
  headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify({
name:name,
userName:userName,
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
    notifyB(data.msg)
    navigate("/signin")
  }
  
  console.log(data) })
}

  return (
    <div className='signup'>

      <div className='form-container'>

        <img className='sigin-logo' src={logo} alt="logo" />
        <p className='sig-para'>SignUp to shee photot and video</p>

        <div>
          <input type="email"name='email' id='email'
           placeholder='Email' value={email}
          onChange={(e)=>{setEmail(e.target.value)}} />
        </div>

        <div>
          <input type="text"name='name' id='name' placeholder='full name' 
          value={name}
          onChange={(e)=>{setName(e.target.value)}}/>
        </div>

        <div>
          <input type="text"name='username' id='username' placeholder='username' 
          value={userName}
          onChange={(e)=>{setUserName(e.target.value)}}/>
        </div>

        <div>
          <input type="password"name='password' id='password' placeholder='password' 
          
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}/>
        </div>

        <p className='login-para'>
          By signin up, you agree to out Terms 
        </p>

        <input type="submit" id="submit-btn" value="Sign up" onClick={()=>{
          postData()
        }} />
      </div>

      <div>
      <Link to="/signin">SignIn</Link>
      </div>
    </div>
  )
}

export default Signup