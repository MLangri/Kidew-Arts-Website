import React, { useState, useEffect } from 'react';
import './navbar.css';
import logo from '../../assets/art-gallery-logo-design_92167-618.avif';
const navbar = () => {

    const[sticky, setSticky] = useState(false);
    // Sticky navbar effect
    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        })
    },[]);
  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
        <img src={logo} alt ="" className='logo'/>
        <ul className="nav-links">
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/booking">Booking</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/artists">Artists</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><button className='btn'>Contact</button></li>
        </ul>
    </nav>
  )
}

export default navbar