import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About(){
  return (
    <div>
      <Navbar />
      <div className="container" style={{paddingTop:24}}>
        <h1 className="fade-up">About TDTS</h1>
        <p className="text-muted fade-up delay-1">TDTS operates across USA, CANADA & INDIA with distributed teams and offices. We specialize in product design, engineering, AI, and business process services. Our global footprint helps us deliver localized solutions with international quality.</p>

        <h3 style={{marginTop:18}} className="fade-up delay-2">Our values</h3>
        <ul className="text-muted fade-up delay-3">
          <li>Deliver value quickly</li>
          <li>Respect and collaboration</li>
          <li>Security and privacy</li>
        </ul>
      </div>
      <Footer />
    </div>
  )
}
