import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import { FaWhatsapp} from "react-icons/fa";
function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/radhika-nagori-a6b039202/' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/Radhika-Nagori1' target='_blank'><BsGithub/></a>
        <a href='https://wa.me/+919358273243?text=Hello%20there!' target='_blank'><FaWhatsapp /></a>
    </div>
  )
}

export default HeaderSocials