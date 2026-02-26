import React, {useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const DETAILS = {
  'ui-ux-design': {title:'UI/UX Design', icon:'🎨', desc:'User-centered design services.'},
  'website-development': {title:'Website development', icon:'💻', desc:'Modern responsive websites and SPAs.'},
  'software-development': {title:'Software development', icon:'🧩', desc:'Custom software solutions.'},
  'application-development': {title:'Application development', icon:'📱', desc:'Mobile and desktop apps.'},
  'chat-bot-development-integration': {title:'Chat-bot development & integration', icon:'🤖', desc:'Conversational AI and chatbots.'},
  'ai-integration': {title:'AI Integration', icon:'🧠', desc:'Integrate ML models and automation.'},
  'data-analytics': {title:'Data analytics', icon:'📊', desc:'Insights from your data.'},
  'cloud-computing': {title:'Cloud computing', icon:'☁️', desc:'Scalable cloud infrastructure.'},
  'api-integration': {title:'API integration', icon:'🔗', desc:'Connect services and automate workflows.'},
  'lead-generation': {title:'Lead generation', icon:'📣', desc:'Qualified lead pipelines.'},
  'account-handling': {title:'Account handling', icon:'📂', desc:'Professional account management.'},
  'customer-service': {title:'Customer service', icon:'🎧', desc:'24/7 support teams.'},
  'sales-marketing': {title:'Sales & Marketing', icon:'📈', desc:'Growth-focused marketing and sales.'}
}

export default function ServiceDetail(){
  const { slug } = useParams()
  const info = DETAILS[slug] || {title:slug, icon:'ℹ️', desc:'Service details coming soon.'}

  const [mounted, setMounted] = useState(false)
  useEffect(()=>{ setMounted(true) },[])

  // ⭐ FIX: Smooth scroll function
  const scrollToOffer = () => {
    const el = document.getElementById("offer")
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <div>
      <Navbar />

      <div className="container" style={{paddingTop:24}}>

        <Link to="/services" style={{color:'var(--accent)'}}>← Back to services</Link>

        <div className={`service-hero ${mounted ? 'fade-up delay-1' : ''}`} style={{marginTop:12}}>
          <div className={`big-icon ${mounted ? 'pulse' : ''}`}>{info.icon}</div>
          <div>
            <h1 style={{margin:0}}>{info.title}</h1>
            <p className="text-muted" style={{marginTop:6}}>{info.desc}</p>

            <div style={{marginTop:10}}>
              {/* ⭐ BUTTON FIXED TO WORK 100% */}
              <button className="btn" onClick={scrollToOffer}>
                Get consultation
              </button>
            </div>
          </div>
        </div>

        <section id="offer" className={`fade-up delay-2`} style={{marginTop:20}}>
          <h3>What we offer</h3>
          <ul className="text-muted">
            <li>Consultation and scoping</li>
            <li>Roadmap, MVP, and delivery</li>
            <li>Maintenance and scaling</li>
          </ul>
        </section>

        <section className={`fade-up delay-3`} style={{marginTop:20}}>
          <h3>Why choose this service</h3>
          <p className="text-muted">
            We bring domain expertise, practical roadmaps, and a delivery approach that reduces risk and time-to-value.
          </p>
        </section>

      </div>

      <Footer />
    </div>
  )
}
