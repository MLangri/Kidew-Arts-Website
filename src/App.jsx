import React from 'react'
import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero';
import Services from './components/services/services';
import Title from './components/title/title';
import About from './components/about/about';
const App = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <div className="container">
          <Title subTitle='OUR SERVICES' title= 'What We Offer'/>
          <Services/>
          <About/>
          <Title subTitle='GALLERY' title= 'Artist Designs'/>
        </div>
    </div>
  )
}

export default App