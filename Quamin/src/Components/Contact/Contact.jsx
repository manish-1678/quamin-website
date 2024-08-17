import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import "./Contact.css";

const Contact = () => {
    const [state, handleSubmit] = useForm("mzzpvwvl"); // Replace with your Formspree project ID

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
                        <a href="https://www.linkedin.com/company/quamin/posts/?feedView=all" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
                        <a href="" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
                        <a href="" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-youtube"></i></a>
                    </li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        required
                    />
                    <label htmlFor="phone">Contact Number</label>
                    <input
                        id="phone"
                        type="tel"
                        name="phone"
                        placeholder="Enter your contact number"
                        required
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Enter your email ID"
                        required
                    />
                    <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                    />
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="6"
                        placeholder="Enter your message"
                        required
                    />
                    <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                    />
                    <button className="btn" type="submit" disabled={state.submitting}>
                        Submit
                    </button>
                    {state.succeeded && <p>Form Submitted Successfully!</p>}
                </form>
            </div>
        </div>
    );
};

export default Contact;
