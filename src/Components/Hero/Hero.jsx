import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
    return (
        <div className='hero container'>
            <div className="hero-text">
                <h1>Creating a Foundation for Lifelong Success</h1>
                <p>Join us to unlock your potential,knowledge and experience and achieve your dreams with our comprehensive educational programs.</p>
                <button className="btn">Explore More <img src={dark_arrow} alt="" /></button>
            </div>
        </div>
    )
}

export default Hero
