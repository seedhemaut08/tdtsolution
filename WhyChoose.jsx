import React from 'react'

export default function WhyChoose(){
  return (
    <section className="why">
      <div className="container why-grid">
        <div className="fade-up">
          <h2>Why choose TDTS?</h2>
          <p className="text-muted">We focus on measurable outcomes, cross-disciplinary teams, and a culture of continuous improvement. Our remote-first model helps us hire the best talent across multiple locations.</p>

          <div style={{marginTop:18}}>
            <div className="feature"><div className="dot"></div><div><b>Expert teams</b><div className="text-muted">Designers, engineers, and data scientists under one roof.</div></div></div>
            <div className="feature"><div className="dot"></div><div><b>Security first</b><div className="text-muted">Secure development, encryption, and compliance minded processes.</div></div></div>
            <div className="feature"><div className="dot"></div><div><b>Outcome oriented</b><div className="text-muted">We measure success by business impact.</div></div></div>
          </div>
        </div>

        <div className="fade-up delay-1">
          <h3>Our approach</h3>
          <ol className="text-muted">
            <li>Discovery & strategy</li>
            <li>Design & prototyping</li>
            <li>Development & testing</li>
            <li>Deployment & monitoring</li>
          </ol>
        </div>
      </div>
    </section>
  )
}
