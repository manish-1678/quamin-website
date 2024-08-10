import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
    <div className="contact">
        <div className="contact-col">
            <h3>Send us a Message<i class="fa-solid fa-message"></i></h3>
            <p>At Quamin, we provide customized, scalable IT solutions for businesses of all sizes. Whether you need cloud computing, cybersecurity, or software development, our expert team is here to help. Leverage advanced technology, including AI/ML, to drive your business forward with our comprehensive services.</p>
            <ul>
                <li><i class="fa-solid fa-envelope"></i>info@quamin.in</li>
                <li><i class="fa-solid fa-phone"></i>+91 999 1115 557</li>
                <li><i class="fa-solid fa-location-dot"></i>153-155 Franklin Street, New York, New York</li>
                <li><i class="fa-brands fa-linkedin"></i></li>
            </ul>
        </div>
        <div className="contact-col">
            <form>
                <label>Name</label>
                <input type="text" name='name' placeholder='Enter your name' required/>
                <label>Contact Number</label>
                <input type="tel" name='phone' placeholder='Enter your contact number' required/>
                <label>Email</label>
                <input type="email" name='email' placeholder='Enter your email ID' required/>
                <label>Message</label>
                <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn blue-btn'>Submit</button>
            </form>
            <span></span>
        </div>
    </div>
  )
}

export default Contact