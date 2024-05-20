import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css"

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    let navigate = useNavigate()

    const handleLogin = (e)=>{
        e.preventDefault()
        let user ={
            username,
            password
        }
    }
  return (
   <div className="login__body">
     <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Login</h2>
        <input type="text"  value={username} onChange={e=> setUsername(e.target.value)}/>
        <input type="password"  value={password} onChange={e=> setPassword(e.target.value)} />
        <button type="submit" >Log in</button>
        <button type="button" onClick={()=> navigate(-1)} >Go back</button>
      </form>
    </div>
   </div>
  );
};

export default Login;
