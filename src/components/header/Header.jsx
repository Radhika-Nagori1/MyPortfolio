import React from 'react';
import './header.css'
import img from '../../assets/img.png'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
function Header() {
  return (
    <header>
    <div className='container header__container'>
      <h5>Hello I'm</h5>
      <h1>Radhika Nagori</h1>
      <h5 className='text-light'>Software Engineer</h5>
      <CTA />
      <HeaderSocials />
      <div className='me'>
        <img src={img} />
      </div>
      <a href='#contact' className='scroll__down'>Scroll Down</a>
    </div>
    </header>
  )
}

export default Header