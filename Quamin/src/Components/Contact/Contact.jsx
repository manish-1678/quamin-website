import React, { useState, useEffect } from 'react';
import "./Contact.css";

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending...");
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
        <p>At Quamin, we deliver tailored IT solutions designed to meet the specific needs of each client. With over two decades of industry expertise, our founder, Manish K, leads a skilled team specializing in cloud engineering, cybersecurity, DevOps, generative AI, and database administration.</p>
        <ul>
          <li><i className="fa-solid fa-envelope"></i>info@quamin.in</li>
          <li><i className="fa-solid fa-phone"></i>+91 999 1115 557</li>
          <li><i className="fa-solid fa-location-dot"></i>153-155 Franklin Street, New York, New York</li>
          <li>
            <a href="https://www.linkedin.com/company/quamin/posts/?feedView=all" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
            <a href="" target="_blank"><i class="fa-brands fa-facebook"></i></a>
            <a href="" target="_blank"><i class="fa-brands fa-github"></i></a>
            <a href="" target="_blank"><i class="fa-brands fa-youtube"></i></a>
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Name</label>
            <input type="text" name="Name" placeholder="Enter your name" required />
            <label>Contact Number</label>
            <input type="tel" name="Phone" placeholder="Enter your contact number" required />
            <label>Email</label>
            <input type="email" name="Email" placeholder="Enter your email ID" required />
            <label>Message</label>
            <textarea name="Message" rows="6" placeholder="Enter your message" required></textarea>

            <div class="h-captcha" data-captcha="true"></div>

            <button type="submit" className="btn blue-btn">Submit</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
