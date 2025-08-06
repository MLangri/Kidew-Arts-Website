import React from 'react'
import './booking.css';
import rightArrow from '../../assets/rightarrow.png';
import booking_img from '../../assets/booking.jpg';
const booking = () => {
  return (
    <div className='booking'>
        <div className="about-left" >
                    <img src={booking_img} className='booking-img' />
                </div>
                <div className="about-right" >
                    <h3>SIP & PAINT</h3>
                    <h2>An Evening of Art, Wine & Laughter</h2>
                    <p>
                        <br />Join us for a relaxing and inspiring Sip & Paint session at our Kidew Arts, where creativity meets fun in a warm and welcoming atmosphere. Whether you’re a seasoned artist or a complete beginner, this event is the perfect opportunity to unwind, connect, and express yourself on canvas. Guided step-by-step by one of our talented local artists, you’ll create your own masterpiece while enjoying a selection of refreshing drinks and light snacks.
                    </p>
                    <p>
                        <br />No experience is needed — just bring your curiosity, a smile, and your friends! All painting materials will be provided, and at the end of the session, you’ll take home your artwork as a beautiful reminder of the evening. Spaces are limited to ensure a personal and engaging experience, so be sure to book your spot early.
                    </p>
                    <br /><button className='btn'>Book Now <img src={rightArrow} alt=""/></button>
                </div>
    </div>
    
  )
}

export default booking