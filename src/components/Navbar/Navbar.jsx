import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets/assets'
import './Navbar.css'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/Storecontext';



const Navbar = ({setLoginpop}) => {

  const {total} = useContext(StoreContext);


   
    const[menuline, setMenuline] = useState("Home");


  return (
    <div className='nav'>
       <Link to='/' ><img className='logo' src={assets.logo} alt="logo" /></Link>
        <ul className='nav-menu'>
            <Link to='/' onClick={()=>{return setMenuline("Home")}} className={menuline==="Home"? "active" :""}  >Home</Link>
            <a href='#explore-menu' onClick={()=>{return setMenuline("Menu")}} className={menuline==="Menu"? "active" :""}  >Menu</a>
            <a href='#appdownload' onClick={()=>{return setMenuline("Mobile App")}} className={menuline==="Mobile App"? "active" :""}>Mobile App</a>
            <a href='#footer' onClick={()=>{return setMenuline("Contact Us")}} className={menuline==="Contact Us"? "active" :""} >Contact Us</a>
        </ul>
        <div className="nav-right">
            <img  src={assets.search_icon} alt="" />
            <div className="cartpic-dot">
               <Link to='/cart' ><img src={assets.basket_icon} alt="" /></Link>
                {total===0?  <></> :<div className="dot"> </div>}
               
            </div>
            <button onClick={()=>setLoginpop(true)}>Sign in</button>

        </div>
        
      
    </div>
  )
}

export default Navbar


