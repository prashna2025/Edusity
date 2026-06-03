import React, { useRef } from 'react'
import './Testimonial.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonial = () => {

    const slider = useRef();
    let tx = 0;


    const slideForward = () => {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }


    const slideBackward = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    return (
        <div className='testimonials'>
            <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
            <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="" />
                                <div>
                                    <h3>Saraswoti Koirala</h3>
                                    <span>LearningHub, Nepal</span>
                                </div>
                            </div>
                            <p> "LearningHub made learning simple and enjoyable. The lessons were well-structured, and the instructors explained concepts clearly. My confidence and grades improved significantly" </p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="" />
                                <div>
                                    <h3>Anish Pathak</h3>
                                    <span>LearningHub, Nepal</span>
                                </div>
                            </div>
                            <p> "I really enjoyed studying through LearningHub. The practical examples and interactive sessions helped me understand difficult topics much faster and easier  than before ever." </p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="" />
                                <div>
                                    <h3>Sara Limbu</h3>
                                    <span>LearningHub, Nepal</span>
                                </div>
                            </div>
                            <p> "Thanks alot to LearningHub, I was able to strengthen my skills , knowledge and prepare effectively for my exams. The support shown  from tutors was always helpful and encouraging." </p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="" />
                                <div>
                                    <h3>Pratik Thapa</h3>
                                    <span>LearningHub,Sunsari</span>
                                </div>
                            </div>
                            <p> "LearningHub provided a great learning experience with quality resources and easy-to-follow lessons. I would highly recommend it to any student looking to improve their knowledge." </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Testimonial
