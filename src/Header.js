import React from 'react';
import './index.css';
import pic from './media/pic1.jpg'

function Header() {
  return (
    <div className="Header">
      <img src={pic} alt='' id='main_img'/>
    </div>
  );
}

export default Header;
