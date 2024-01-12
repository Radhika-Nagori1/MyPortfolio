import React from 'react'
import cv from '../../assets/RadhikaNagoriResume.pdf';

function CTA() {
  return (
    <div className='cta'>
        <a href={cv} target='_blank' className='btn'>Download Cv</a>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA