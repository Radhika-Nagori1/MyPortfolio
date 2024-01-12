import ReactDOM from 'react-dom';
import './contact.css';
import { MdOutlineMail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function Contact() {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>radhikanagori89@gmail.com</h5>
            <a href='mailto:radhikanagori89@gmail.com' target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <FaLinkedin />
            <h4>Linkedin</h4>
            <h5>Radhika Nagori</h5>
            <a href='https://www.linkedin.com/in/radhika-nagori-a6b039202/' target='_blank'>Send a message</a>
            </article>
          <article className='contact__option'>
            <FaWhatsapp />
            <h4>Whatsapp</h4>
            <h5>+919358273243</h5>
            <a href="https://wa.me/+919358273243?text=Hello%20there!" target='_blank'>Send a message</a>
          </article>
        </div>
        <form action=''>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;