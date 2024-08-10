import React from 'react'
import "./Careers.css"
import gallery_1 from "../../assets/salesmanager.png"
import gallery_2 from "../../assets/cybersecurity.png"
import gallery_3 from "../../assets/enterprisearchitect.png"
import gallery_4 from "../../assets/accountmanager.png"

const jobData = [
    {
        img: gallery_1,
        title: "IT Sales Manager",
        description: "Oversee sales operations and develop strategies to drive sales growth."
    },
    {
        img: gallery_2,
        title: "Cybersecurity Specialist",
        description: "Protect our digital assets and ensure the security of our systems."
    },
    {
        img: gallery_3,
        title: "Enterprise Architect",
        description: "Design and manage our enterprise infrastructure and technology solutions."
    },
    {
        img: gallery_4,
        title: "Account Manager",
        description: "Maintain client relationships and manage accounts to meet sales targets."
    }
];

const Careers = () => {
  return (
    <div className='careers'>
        <div className="gallery">
            {jobData.map((job, index) => (
                <div className="gallery-item" key={index}>
                    <img src={job.img} alt={job.title} />
                    <div className="overlay">
                        <h3>{job.title}</h3>
                        <p>{job.description}</p>
                    </div>
                </div>
            ))}
        </div>
        <button className='btn blue-btn'>Apply Now</button>
    </div>
  )
}

export default Careers
