import React from 'react'
import './portfolio.css';
import img1 from '../../assets/Screenshot (143).png';
import img2 from '../../assets/Screenshot (144).png';
import img3 from '../../assets/Screenshot (145).png';
import img4 from '../../assets/Screenshot (112).png';
import img5 from '../../assets/Screenshot (109).png';
import img6 from '../../assets/Screenshot (111).png';

export const data=[
  {
    id:1,
    Image:img1,
    title:'Social Media WebSite',
    github:"https://github.com/Radhika-Nagori1/SocialMediaWebsite"
  },
  {
    id:2,
    Image:img2,
    title:'Keeper App',
    github:"https://github.com/Radhika-Nagori1/KeeperApp"
  },
  {
    id:3,
    Image:img3,
    title:'Emojipedia Website',
    github:"https://github.com/Radhika-Nagori1/Emojipedia"
  },
  {
    id:4,
    Image:img4,
    title:'Drum Kit Website',
    github:"https://github.com/Radhika-Nagori1/Emojipedia"
  },
  {
    id:5,
    Image:img5,
    title:'TinDog WebSite',
    github:"https://github.com/Radhika-Nagori1/Tindog"
  },
  {
    id:6,
    Image:img6,
    title:'Dice Game',
    github:"https://github.com/Radhika-Nagori1/Dice_Game"
  }
];

export function Box(props){
  return(
    <article className='portfolio__item'>
      <div className='portfolio__item-image'>
        <img src={props.Image} ></img>
          </div>
            <h3>{props.title}</h3>
            <div className='portfolio__item-cta'>
            <a href={props.github} className='btn' target='_blank'>Github</a>
          </div>
    </article>
  )
}

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Projects</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
      {data.map((dataItem)=>{
        return(
          <Box
            Image={dataItem.Image}
            title={dataItem.title}
            github={dataItem.github}
          />
        )
      })}
      </div>
    </section>
  )
}

export default Portfolio;