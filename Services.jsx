import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const IT_SERVICES = [
  {slug:'ui-ux-design', title:'UI/UX Design', icon:'🎨'},
  {slug:'website-development', title:'Website development', icon:'💻'},
  {slug:'software-development', title:'Software development', icon:'🧩'},
  {slug:'application-development', title:'Application development', icon:'📱'},
  {slug:'chat-bot-development-integration', title:'Chat-bot development & integration', icon:'🤖'},
  {slug:'ai-integration', title:'AI Integration', icon:'🧠'},
  {slug:'data-analytics', title:'Data analytics', icon:'📊'},
  {slug:'cloud-computing', title:'Cloud computing', icon:'☁️'},
  {slug:'api-integration', title:'API integration', icon:'🔗'}
]

const NON_IT = [
  {slug:'lead-generation', title:'Lead generation', icon:'📣'},
  {slug:'account-handling', title:'Account handling', icon:'📂'},
  {slug:'customer-service', title:'Customer service', icon:'🎧'},
  {slug:'sales-marketing', title:'Sales & Marketing', icon:'📈'}
]

export default function ServicesPage(){
  const [mounted, setMounted] = useState(false)
  useEffect(()=>{ setMounted(true) },[])
  return (
    <div className="services-page">
      <Navbar />
      <div className="container" style={{paddingTop:24}}>
        <h1 className="fade-up">Services</h1>
        <p className="text-muted fade-up delay-1">Explore our IT and Non-IT offerings. Click any card for details.</p>

        <h3 className="fade-up delay-2" style={{marginTop:18}}>IT Services</h3>
        <div className="cards-grid" style={{marginTop:12}}>
          {IT_SERVICES.map((s, idx)=> (
            <Link
              key={s.slug}
              to={'/services/'+s.slug}
              className={`service-card ${mounted ? 'fade-up delay-'+(Math.min(4, idx+1)) : ''}`}
              style={{textDecoration:'none', color:'inherit'}}
            >
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'start',gap:12}}>
                <div>
                  <h4 style={{margin:'0 0 8px 0'}}>{s.title}</h4>
                  <p className="text-muted" style={{margin:0}}>Professional {s.title} tailored to your business goals.</p>
                </div>
                <div className="icon" aria-hidden>{s.icon}</div>
              </div>
            </Link>
          ))}
        </div>

        <h3 className="fade-up delay-2" style={{marginTop:18}}>Non-IT Services</h3>
        <div className="cards-grid" style={{marginTop:12}}>
          {NON_IT.map((s, idx)=> (
            <Link
              key={s.slug}
              to={'/services/'+s.slug}
              className={`service-card ${mounted ? 'fade-up delay-'+(Math.min(4, idx+1)) : ''}`}
              style={{textDecoration:'none', color:'inherit'}}
            >
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'start',gap:12}}>
                <div>
                  <h4 style={{margin:'0 0 8px 0'}}>{s.title}</h4>
                  <p className="text-muted" style={{margin:0}}>Dedicated {s.title} services with measurable outcomes.</p>
                </div>
                <div className="icon" aria-hidden>{s.icon}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}
