import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets/assets'



const Footer = () => {
    const currentYear = new Date().getFullYear();


  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-cont-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+19-50-45-655</li>
                    <li>loremdsas@tomato.com</li>
                </ul>
            </div>
            <div className="footer-cont-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
        
                </ul>
            </div>
            <div className="footer-cont-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae suscipit quo eos quae, iure ea earum, voluptatibus ipsum commodi cumque a provident laudantium totam ratione et cupiditate perspiciatis. Modi, nisi.</p>
                <div className="socila-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>

        </div>

        <hr />

        <div className="copy-right">

            <p>Copyright {currentYear} &copy; Tomato.com - All Right Reserved. </p>


        </div>
      
    </div>
  )
}

export default Footer
