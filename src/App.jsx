import React, { useState } from 'react'
import Hero from './Components/Hero/Hero.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import Program from './Components/Programs/Programs.jsx'
import Title from './Components/Title/Title.jsx'
import About from './Components/About/About.jsx'
import Campus from './Components/Campus/Campus.jsx'
import Testimonial from './Components/Testimonials/Testimonial.jsx'
import './index.css'
import Contact from './Components/Contact/Contact.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Videoplayer from './Components/VideoPlayer/Videoplayer.jsx'



const App = () => {
  const [playState, setPlayState] = useState(false)

  return (

    <div>

      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='Our PROGRAM' title='What We Provide' />
        <Program />
        <About setPlayState={setPlayState} />
        <Title subTitle='Gallery' title='Campus Life' />
        <Campus />
        <Title subTitle='Testimonials' title='Student Reviews' />
        <Testimonial />
        <Title subTitle='Contact Us' title='Stay Connected' />
        <Contact />
        <Footer />
      </div>
      <Videoplayer playState={playState} setPlayState={setPlayState} />
    </div>
  )
}

export default App

