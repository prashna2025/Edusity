import React from 'react'
import Hero from './Components/Hero/Hero.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import Program from './Components/Programs/Programs.jsx'

const App = () => {
  return (

    <div>

      <Navbar />
      <Hero/>
      <div className="container">
        <Program/>
      </div>
    </div>
  )
}

export default App
