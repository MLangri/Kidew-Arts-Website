import React from 'react'
import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero';
import Services from './components/services/services';
import Title from './components/title/title';
import About from './components/about/about';
import Gallery from './components/gallery/gallery';
import Booking from './components/booking/booking';
const App = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <div className="container">
          <About/>
          <Title subTitle='OUR SERVICES' title= 'What We Offer'/>
          <Services/>
          <Booking/>
          <Title subTitle='GALLERY' title= 'Artist Designs'/>
          <Gallery/>
        </div>
    </div>
  )
}

export default App