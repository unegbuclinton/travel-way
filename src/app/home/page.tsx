import React from 'react'
import HeroSection from './hero-seciton'
import Offer from './offer'
import AboutUs from './about-us'
import Visits from './visits'
import Destination from './destination'
import Testimonial from './testimonial'
import Footer from '@/components/footer'

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Offer />
      <AboutUs />
      <Visits />
      <Destination />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default HomePage
