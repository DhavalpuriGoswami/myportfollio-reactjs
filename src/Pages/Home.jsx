import React from 'react'
import HeroSection from '../Components/HeroSection'
import AboutSection from '../Components/AboutSection'
import ProjectsSection from '../Components/ProjectSection'
import TestimonialsSection from '../Components/TestimonialsSection'
import ContactBanner from '../Components/ContactBanner'


const Home = () => {
  return (
    <div>
      <HeroSection/>
      <AboutSection/>
      <ProjectsSection/>
      <TestimonialsSection />
      <ContactBanner/> 
    </div>
  )
}

export default Home
