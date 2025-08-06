import React from 'react'
import './navbar.css';
import logo from '../../assets/art-gallery-logo-design_92167-618.avif';
const navbar = () => {
  return (
    <nav className='container'>
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