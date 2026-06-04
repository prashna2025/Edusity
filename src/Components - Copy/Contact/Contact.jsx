import React, { useEffect, useState } from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'


const Contact = () => {


  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a463a178-aa05-4a8b-8f61-5f77eceed7bc");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Email Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send Message <img src={msg_icon} alt="" /></h3>
        <p>Have any questions or inquiries? <br></br>Feel free to reach out to us! We are here to assist you and provide the information you need. Whether you want to learn more about our programs, campus life, or anything else, don't hesitate to contact us. We look forward to hearing from you!</p>
        <ul>
          <li><img src={mail_icon} alt="" /> Contact @learninghub26@gmail.com</li>
          <li><img src={phone_icon} alt="" /> 02598453, +977-9845375424</li>
          <li><img src={location_icon} alt="" />Halgada Itahari-4 Sunsari<br/> Koshi Province, Nepal</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name </label>
          <input type="text" name="name" placeholder='Enter your name' required />

          <label>Phone Number </label>
          <input type="text" name="phone" placeholder='Enter your phone number' required />
          
          <label>Your Message </label>
          <textarea name="message"  rows="6" placeholder='Enter your message' required></textarea>
          <button type="submit" className="btn dark-btn">Submit Now
          <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result} </span>
      </div>
    </div>
  )
}

export default Contact
