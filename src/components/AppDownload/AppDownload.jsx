import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets/assets'

const AppDownload = () => {





  return (
    <div className='appdownload' id='appdownload'>
        <div className='contappdow'><h2>For Better Experience Download <br />  </h2><h2>Our App</h2></div>
        <div className="appdownload-images">
            <img src={assets.play_store}alt="" />
            <img src={assets.app_store} alt="" />
        </div>
      
    </div>
  )
}

export default AppDownload
