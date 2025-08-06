import React, {useRef} from 'react'
import './artists.css';
import img1 from '../../assets/artist1.jpg';
import img2 from '../../assets/artist2.webp';
import img3 from '../../assets/artist3.avif';
import leftbtn from '../../assets/left.png';
import rightbtn from '../../assets/rightarrow.png';

const artists = () => {
    const slider =useRef();
    let tx =0;
    const slideForward = () => {
        if(tx > -50){
            tx -=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    const slideBackward = () => {
        if(tx < 0){
            tx +=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

  return (
    <div className='artists'>
        <img src={leftbtn} alt="" className='left-btn' onClick={slideBackward}/>
        <img src={rightbtn} alt="" className='right-btn' onClick={slideForward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className='artist-info'>
                            <img src={img1} alt=""/>
                            <h3>John Doe</h3>
                            <span>Painter</span>
                        </div>
                         <p>Specializes in abstract art, bringing emotions to life through vibrant colors and bold strokes.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className='artist-info'>
                            <img src={img2} alt=""/>
                            <h3>John Doe</h3>
                            <span>Sculptor</span>
                        </div>
                        <p>Specializes in abstract art, bringing emotions to life through vibrant colors and bold strokes.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className='artist-info'>
                            <img src={img3} alt=""/>
                            <h3>John Doe</h3>
                            <span>Photographer</span>
                        </div>
                        <p>Specializes in abstract art, bringing emotions to life through vibrant colors and bold strokes.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default artists