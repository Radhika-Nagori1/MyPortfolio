import ReactDOM from 'react-dom'
import './footer.css'
import { FaWhatsapp} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
function Footer() {
  return (
    <footer>
    <a className='footer__logo'>Love burgers as much as I do?Lets talk about how awesome they are!We can code while we eat burgers!</a>
    <ul className='permalinks'>
      <li><a href='#'>Home</a></li>
      <li><a href='#about'>About</a></li>
      <li><a href='#experience'>Experience</a></li>
      <li><a href='#portfolio'>Portfolio</a></li>
      <li><a href='#contact'>Contact</a></li>
    </ul>
    <div className='footer__socials'>
      <a href='https://github.com/Radhika-Nagori1' target='_blank'><FaGithub /></a>
      <a href='https://www.linkedin.com/in/radhika-nagori-a6b039202/' target='_blank'><FaLinkedin /></a>
      <a href='https://wa.me/+919358273243?text=Hello%20there!' target='_blank'><FaWhatsapp /></a>
    </div>

    <div className='footer__copyright'>
      <small>&copy; Radhika Nagori</small>
    </div>
    </footer>
  )
}

export default Footer