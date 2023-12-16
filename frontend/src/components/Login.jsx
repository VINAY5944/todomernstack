import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {


  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
 const [login,setLogin]=useState([])


  const navigate=useNavigate()
    const submit=async(e)=>{

      e.preventDefault();
      const display=await axios.post('http://localhost:5000/login',{email,password}).then((response)=>{
     setLogin(response.data)
     localStorage.setItem("currentUserInfo", JSON.stringify(response.data));
     if(response.data){
      navigate('/alltask')
    
       
       }
      }
      )
      
    
        }


  
     
  
  return (



    <div>
login
<form  onSubmit={submit}><label>EMAIL:<input value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='email' type="email"></input></label>


<label>PASSWORD:<input value={password} onChange={(e)=>{setPassword(e.target.value)}}   placeholder="password"  type='text'></input></label>
<button type='submit'>login</button>
</form>
<Link to="/signup">signup</Link>
    </div>



  )
}

export default Login