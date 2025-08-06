import React from 'react'
import './gallery.css';
import img1 from '../../assets/gallery1.jpeg.webp';
import img2 from '../../assets/gallery2.jpg';
import img3 from '../../assets/gallery3.jpg';
import img4 from '../../assets/gallery4.jpg';
import img5 from '../../assets/gallery5.jpg';
import img6 from '../../assets/gallery6.jpg';
import rightArrow from '../../assets/rightarrow.png';

const gallery = () => {
  return (
    <div className='gallery'>
        <div className="images">
            <img src= {img1} alt=""/>
            <img src= {img2} alt=""/>
            <img src= {img3} alt=""/>
            <img src= {img4} alt=""/>
            <img src= {img5} alt=""/>
            <img src= {img6} alt=""/>
        </div>
        <button className='btn'>More Images <img src={rightArrow} alt=""/></button>
    </div>
  )
}

export default gallery