import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets/assets'

const LoginPopup = ({setLoginpop}) => {

    const [signup, setSignup] = useState(false)



  return (
    <div className='loginpopup'>
        <form className='loginpop-form'>
            <div className="loginpop-title">
                <h2>{signup===true?"Sign Up":"Login"  }</h2>
                <img onClick={()=>{setLoginpop(false)}} src={assets.cross_icon} alt="" />
            </div>
            <div className="loginpop-inputs">
                {signup===true? <input type="text" placeholder='Your Name' required /> : <></> }
                <input type="email" placeholder='Your email' required />
                <input type="password" placeholder='Password' required />
            </div>
            <button className="login-butt">{signup===true?"Sign Up":"Login"  }</button>
            <div className="checkterms">
                <input type="checkbox" required />
                <p>By continuing, i agree to the terms of use & privacy policy</p>
            </div>
            <p className='paralog'>{signup===true?"Already have an account?":"Don't have an account?" } <span onClick={()=>setSignup((prev)=>prev===false?true:false)}>{signup===true?"Login here":"Sign Up here" }</span></p>
        </form>

      
    </div>
  )
}

export default LoginPopup
