import React from 'react'
import './Testimonial.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'






const Testimonial = () => {
    return (
        <div className='testimonials'>
            <img src={back_icon} alt="" className='back-btn' />
            <img src={next_icon} alt="" className='next-btn' />
            <div className="slider">
                <ul>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="" />
                                <div>
                                    <h3>Saraswoti Koirala</h3>
                                    <span>Educity,USA</span>
                                </div>
                            </div>
                            <p> "This is the best learning platform I have ever used. The courses are well-structured and the instructors are knowledgeable." </p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="" />
                                <div>
                                    <h3>John Doe</h3>
                                    <span>Educity,USA</span>
                                </div>
                            </div>
                            <p> "This is the best learning platform I have ever used. The courses are well-structured and the instructors are knowledgeable." </p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="" />
                                <div>
                                    <h3>Sarah Johnson</h3>
                                    <span>Educity,USA</span>
                                </div>
                            </div>
                            <p> "This is the best learning platform I have ever used. The courses are well-structured and the instructors are knowledgeable." </p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="" />
                                <div>
                                    <h3>Pratiksha Thapa</h3>
                                    <span>Educity,USA</span>
                                </div>
                            </div>
                            <p> "This is the best learning platform I have ever used. The courses are well-structured and the instructors are knowledgeable." </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Testimonial
