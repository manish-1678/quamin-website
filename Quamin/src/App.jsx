import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import AboutUs from './Components/AboutUs/AboutUs'
import Title from './Components/Title/Title'
import Book from './Components/Book/Book'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle="About Us" title="Who We Are"/>
        <AboutUs/>
        <Book/>
        <Title subTitle="Careers" title="Join Our Team"/>
      </div>
    </div>
  )
}

export default App