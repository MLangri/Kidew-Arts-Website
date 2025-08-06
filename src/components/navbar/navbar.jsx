import React, { useState, useEffect } from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

import './navbar.css';
import logo from '../../assets/art-gallery-logo-design_92167-618.avif';
import menuIcon from '../../assets/menu.png';

const Navbar = () => {

    const [sticky, setSticky] = useState(false);
    // Sticky navbar effect
    useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    // Toggle menu for mobile view
    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = () => {
        setMobileMenu(!mobileMenu);
    };
    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <img src={logo} alt="" className='logo' />
            <ul className={mobileMenu ? '' : 'mobile-menu'}>
                <ul className="nav-links">
                    <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
                    <li><Link to='about' smooth={true} offset={-260} duration={500}>About</Link></li>
                    <li><Link to='services' smooth={true} offset={-300} duration={500}>Services</Link></li>
                    <li><Link to='booking' smooth={true} offset={-350} duration={500}>Events</Link></li>
                    <li><Link to='gallery' smooth={true} offset={-300} duration={500}>Gallery</Link></li>
                    <li><Link to='artists' smooth={true} offset={-300} duration={500}>Artists</Link></li>
                    <li><Link to='contact' smooth={true} offset={0} duration={500} className='btn'>Contact</Link></li>
                </ul>
            </ul>
            <img src={menuIcon} alt='' className='menu-icon' onClick={toggleMenu} />
        </nav>
    );
}

export default Navbar;