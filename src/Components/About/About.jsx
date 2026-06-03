import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'


const About = () => {
    return (
        <div className='about'>
            <div className="about-left">
                <img src={about_img} alt="About Us" className="about-img" />
                <img src={play_icon} alt="Play Icon" className="play-icon" />

            </div>
            <div className="about-right">
                <h3>ABOUT LEARNINGHUB</h3>
                <h2>Learn More About Our Institution</h2>

                <p> LearningHub Institute is dedicated to providing quality education in a supportive and engaging environment. We believe that every student has the potential to succeed when given the right guidance and opportunities. Our programs are designed to combine theoretical knowledge with practical learning experiences. Through innovative teaching methods, we help students build strong academic and professional foundations.</p>

                <p> At LearningHub, we focus on developing skills that prepare students for both their studies and future careers. Our experienced instructors are committed to delivering personalized support and mentoring throughout the learning journey. We continuously update our courses to match current industry trends and educational standards. This approach ensures that students gain relevant knowledge and stay competitive in a rapidly changing world. </p>

                <p>Our mission is to create a community where learning inspires growth, creativity, and lifelong success. We strive to make education accessible, interactive, and meaningful for learners from diverse backgrounds. By fostering collaboration, critical thinking, and problem-solving abilities, we help students reach their full potential. LearningHub Institute aims to be a trusted partner in every student's path toward achievement and personal development.</p>
            </div>

        </div>
    )
}

export default About
