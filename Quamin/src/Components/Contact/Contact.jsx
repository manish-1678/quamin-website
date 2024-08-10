import React, { useState, useEffect } from 'react';
import "./Contact.css";

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "898132f3-a83d-42d1-abf3-fa49a88a4cb7");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send us a Message<i className="fa-solid fa-message"></i></h3>
        <p>At Quamin, we provide customized, scalable IT solutions for businesses of all sizes...</p>
        <ul>
          <li><i className="fa-solid fa-envelope"></i>info@quamin.in</li>
          <li><i className="fa-solid fa-phone"></i>+91 999 1115 557</li>
          <li><i className="fa-solid fa-location-dot"></i>153-155 Franklin Street, New York, New York</li>
          <li><i className="fa-brands fa-linkedin"></i></li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Name</label>
            <input type="text" name="name" placeholder="Enter your name" required />
            <label>Contact Number</label>
            <input type="tel" name="phone" placeholder="Enter your contact number" required />
            <label>Email</label>
            <input type="email" name="email" placeholder="Enter your email ID" required />
            <label>Message</label>
            <textarea name="message" rows="6" placeholder="Enter your message" required></textarea>

            <div class="h-captcha" data-captcha="true"></div>

            <button type="submit" className="btn blue-btn">Submit</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
