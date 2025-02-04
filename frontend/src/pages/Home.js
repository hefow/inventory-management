import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import PricePlan from '../components/PricePlan'
import Direction from '../components/Direction'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
      <Hero/>
      <Features/>
      <PricePlan/>
      <Direction/>
      <Footer/>
    </div>
  )
}

export default Home