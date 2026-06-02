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
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Learn More About Our Institution</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim ullam eaque sapiente libero voluptatum dolor, aut est aspernatur consectetur provident cum quam mollitia voluptatem similique debitis modi non inventore molestiae commodi recusandae et rerum quibusdam facere. Itaque dolorum ducimus labore quod adipisci eaque consequatur sit non cumque ipsa quas, voluptatibus nesciunt corrupti perferendis reiciendis exercitationem accusamus autem provident similique earum fuga explicabo a voluptates sunt. Error explicabo dignissimos obcaecati rerum..</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p>Our university is committed to providing a supportive and inclusive environment for all students. We offer a wide range of programs and resources to help you succeed academically and personally.</p>
            </div>

        </div>
    )
}

export default About
