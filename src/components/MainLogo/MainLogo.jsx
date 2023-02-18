import React from 'react'
import './MainLogo.css'

import Logo from '../../images/Logo.svg';
import Laptop from '../../images/Laptop.svg';


const MainLogo = () => {
  return (
    <div className="mainlogo">
            <img src={Logo} className="logo" id="logo" alt="" />
        
            <img src={Laptop} className="laptop" id="laptop" alt="" />
    </div>
  )
}

export default MainLogo