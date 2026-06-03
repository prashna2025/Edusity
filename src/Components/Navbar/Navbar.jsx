import React, { useEffect, useState } from 'react'
import './Navbar.css'

const Navbar = () => {

  const [sticky, setsticky] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 500 ? setsticky(true) : setsticky(false);

    })


  }, []);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <div className="brand-wrap">
        <span className="brand-name">Learninghub</span>
      </div>
      <ul>
        <li>Home</li>
        <li>Program</li>
        <li>About us</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li><button className="btn">Contact us</button></li>
      </ul>
    </nav>
  )
}

export default Navbar
