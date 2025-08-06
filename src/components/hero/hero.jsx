import React from 'react'
import './hero.css';
import rightArrow from '../../assets/rightarrow.png'; //right arrow image
const hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
      <h1>Welcome to Kidew Arts</h1>
      <p>Explore the world of art and creativity</p>
      <button className='btn'>Get Started <img src={rightArrow} alt="right arrow" /></button>
      </div>
    </div>
  )
}

export default hero