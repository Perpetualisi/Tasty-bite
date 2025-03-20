import React from 'react'
import HeroSection from './Components/Hero/Hero'
import About from './Components/About/About'
import Menu from './Components/Menu/Menu'
import TestimonialSlider from './Components/Testimonials/Testimonials'
import Bookings from './Components/Bookings/Bookings'
import Contact from './Components/Contacts/Contacts'
import Gallery from './Components/Gallery/Gallery'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <Menu />
      <TestimonialSlider />
      <Bookings />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
