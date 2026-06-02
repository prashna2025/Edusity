import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'

const Contact = () => {
  return (
    <div className="Contact">
      <div className="contact-col">
        <h3>Send Message <img src={msg_icon} alt="" /></h3>
        <p>Have any questions or inquiries? Feel free to reach out to us! We are here to assist you and provide the information you need. Whether you want to learn more about our programs, campus life, or anything else, don't hesitate to contact us. We look forward to hearing from you!</p>
        <ul>
            <li>Contact @learninghub26@gmail.com </li>
             <li>02598453, +977-9845375424 </li>
            <li>Location: Itahari-4 Halgada,<br/> Sunsari, Nepal </li>

        </ul>
      </div>
     <div className="contact-col"></div>

    </div>
  )
}

export default Contact
