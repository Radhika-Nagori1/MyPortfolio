import ReactDOM from 'react'
import './about.css'
import ME from '../../assets/img2.png'
import { FaGraduationCap } from "react-icons/fa";
import {FaAward} from 'react-icons/fa'
import { GiDiploma } from "react-icons/gi";
function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaGraduationCap className='about__icon'/>
              <h5>B.Tech AI</h5>
              <small>8.9 CGPA</small>
            </article>

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>12<sup>th</sup> CBSE</h5>
              <small>95.8%</small>
            </article>

            <article className='about__card'>
              <GiDiploma className='about__icon'/>
              <h5>10<sup>th</sup> CBSE</h5>
              <small>86.6%</small>
            </article>

          </div>

          <p>
          I am a software engineering student currently enrolled in B.Tech AI (4th Year, 8th Semester) with proficiency of Web
Development & Data Engineering along with the problem solving abilities using python programming language.Innovative optimized
solution seeker. I am ambitious, adventurous, ardent and attentive.I started coding in pressure but now it has become my best-friend because "Things aren’t always #000000 and #FFFFFF".
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About