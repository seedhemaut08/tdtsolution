import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechServices from './components/TechServices'
import StatsCards from './components/StatsCards'
import WhyChoose from './components/WhyChoose'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <TechServices />
        <StatsCards />
        <WhyChoose />
        <section className="extra-section">
          <div className="container">
            <h2>How we work</h2>
            <p>TDTS follows a clear 4-step delivery model: Discover → Design → Develop → Deploy & Monitor. We combine human-centered design with modern engineering practices to ship fast and reliable products.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
