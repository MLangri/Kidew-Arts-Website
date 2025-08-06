import React from 'react'
import './contact.css';
import msgIcon from '../../assets/msg1.jpg';
import emailIcon from '../../assets/msg1.jpg';
import phoneIcon from '../../assets/phone.jpg';
import locationIcon from '../../assets/location.jpg';
import rightArrow from '../../assets/rightarrow.png';

const contact = () => {
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send Us A Message<img src={msgIcon} alt=""/></h3>
            <p><br />We’d love to hear from you! Whether you have a question about our exhibitions, want to book a private tour, or are interested in collaborating, our team is ready to assist. You can reach us by phone, email, or by visiting our gallery in Migori, Kenya. We’re open Sunday to Friday, and always happy to welcome art lovers, collectors, and curious visitors. Let’s connect and keep the conversation about African culture and creativity alive!</p>
            <ul>
                <li><img src={emailIcon} alt=""/>kidewarts@gmail.com</li>
                <li><img src={phoneIcon} alt=""/>+254 700000000</li>
                <li><img src={locationIcon} alt=""/>Kidew Centre, Migori <br />Kenya</li>
            </ul>
        </div>
        <div className="container">
            <div className="contact-col">
            <form>
                <label>Full Name</label>
                <input type="text" name='name' placeholder='Enter your full name' required/>
                <label>Email</label>
                <input type="email" name='email' placeholder='Enter your email' required/>
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your phone number' required/>
                <label>Message</label>
                <textarea rows="5" name='message' placeholder='Type your message here...' required></textarea>
                <button type='submit' className='btn'>Send Message<img src={rightArrow} alt=""/></button>
                <p className='privacy'>By clicking send, you agree to our <a href="/privacy-policy">Privacy Policy</a>.</p>
            </form>
           </div>
        </div>
    </div>
  )
}

export default contact