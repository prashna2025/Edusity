import React from 'react'
import Hero from './Components/Hero/Hero.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import Program from './Components/Programs/Programs.jsx'
import Title from './Components/Title/Title.jsx'
import About from './Components/About/About.jsx'

const App = () => {
  return (

    <div>

      <Navbar />
      <Hero/>
      <div className="container">
        <Title subTitle='Our PROGRAM' title='What We Offer' />
        <Program />
        <About />
      </div>
    </div>
  )
}

export default App
