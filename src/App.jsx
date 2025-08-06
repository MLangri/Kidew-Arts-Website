import React from 'react'
import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero';
import Services from './components/services/services';
import Title from './components/title/title';
const App = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <div className="container">
          <Title/>
          <Services/>
        </div>
    </div>
  )
}

export default App