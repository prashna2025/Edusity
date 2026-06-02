import React from 'react'
import Hero from './Components/Hero/Hero.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import Program from './Components/Programs/Programs.jsx'
import Title from './Components/Title/Title.jsx'
import About from './Components/About/About.jsx'
import Campus from './Components/Campus/Campus.jsx'
import Testimonial from './Components/Testimonials/Testimonial.jsx'
import './index.css'



const App = () => {
  return (

    <div>

      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='Our PROGRAM' title='What We Provide' />
        <Program />
        <About />
        <Title subTitle='Gallery' title='Campus Life' />
        <Campus />
        <Title subTitle='Testimonials' title='Student Reviews' />
        <Testimonial />

      </div>
    </div>
  )
}

export default App

