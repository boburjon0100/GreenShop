import React from 'react'
import "./Login1.scss"
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const Login = ({login , setLogin}) => {
  const [openLog , setOpenLog] = useState(true)
  const [openLog1 , setOpenLog1] = useState(false)
  return (
    <div className={login ? "login active" : "login"}>
      <div className='login1'>
      <i class="fa-solid fa-circle-xmark" onClick={() => setLogin(!login)}></i>
        <div className="text">
          <ul>
          <li><NavLink onClick={()=> {setOpenLog(true) ; setOpenLog1(false)}}>Login</NavLink></li>
          <p>|</p>
          <li><NavLink onClick={()=> {setOpenLog(false); setOpenLog1(true)}}>Registar</NavLink></li>
          </ul>
          
        </div>
        <div className={openLog ? "parol activeL" : "parol"}>
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Password" />
          <p><NavLink >Forget Password ?</NavLink></p>
          <button>Login</button>
         
        </div>
        <div className={openLog1 ? "parol1 activeL1" : "parol1"}>
          <input type="text" placeholder="User name" />
          <input type="email" placeholder="Enter your email address" />
          <input type="text" placeholder="Password" />
          <input type="text" placeholder="Confirm Password" />
          <p><NavLink >Forget Password ?</NavLink></p>
          <button>Login</button>
         
        </div>
        <div className="gugl">
          <p>Or login with</p>
          <div className="button">
            <img src="/images/google.png" alt="" />
            <p>Login with Google</p>
          </div>
          <div className="button">
            <img src="/images/facebook.png" alt="" />
            <p>Login with Facebook</p>
          </div>
        </div>
       </div>
  
    </div>
  )
}

export default Login