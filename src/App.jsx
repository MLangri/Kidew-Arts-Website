import React from 'react'
import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero';
import Services from './components/services/services';
import Title from './components/title/title';
import About from './components/about/about';
import Gallery from './components/gallery/gallery';
import Booking from './components/booking/booking';
import Artists from './components/artists/artists';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
const App = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <div className="container">
          <About/>
          <Title subTitle='OUR SERVICES' title= 'What We Offer'/>
          <Services/>
          <Title subTitle='EVENTS' title= 'Upcoming Events'/>
          <Booking/>
          <Title subTitle='GALLERY' title= 'Artist Designs'/>
          <Gallery/>
          <Title subTitle='OUR ARTISTS' title= 'Meet our talented Artists'/>
          <Artists/>
          <Title subTitle='CONTACT US' title= 'Get In Touch'/>
          <Contact/>
          <Footer/>
        </div>
    </div>
  )
}

export default App