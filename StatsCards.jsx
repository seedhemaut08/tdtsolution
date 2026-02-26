import React from 'react'

export default function StatsCards(){
  return (
    <section className="container" style={{marginTop:24}}>
      <div className="stats">
        <div className="stat fade-up">
          <h3>500+</h3>
          <p>Projects completed across 30+ industries</p>
        </div>
        <div className="stat fade-up delay-1">
          <h3>96%</h3>
          <p>Client satisfaction rating</p>
        </div>
        <div className="stat fade-up delay-2">
          <h3>24/7</h3>
          <p>Support & availability</p>
        </div>
      </div>
    </section>
  )
}
