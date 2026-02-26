import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const services = [
  'UI/UX Design',
  'Website development',
  'Software development',
  'Application development',
  'Chat-bot development & integration',
  'AI Integration',
  'Data analytics',
  'Cloud computing',
  'API integration'
]

export default function Navbar(){
  const navigate = useNavigate()
  return (
    <nav className="navbar">
      <div className="nav-inner">
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <div style={{display:'flex',flexDirection:'column'}}>
            <div className="brand">TDTS</div>
            <div className="brand-sub">TODAY'S DATA · TOMORROW'S SOLUTION</div>
          </div>
        </div>

        <div className="nav-links" role="navigation">
          <Link to="/" className="nav-link">HOME</Link>

          <div className="services-dropdown">
            <div className="nav-link dropdown-btn" onClick={()=>navigate('/services')}>
              SERVICES <span style={{fontSize:11}}>▾</span>
            </div>

            <div className="dropdown-menu" aria-hidden>
              <h4>Our services</h4>
              <div className="service-list">
                {services.map(s=> <div key={s} className="service-item">{s}</div>)}
              </div>
              <div style={{marginTop:12,display:'flex',gap:8}}>
                <button className="btn" onClick={()=>navigate('/services')}>View all</button>
                <button className="muted-btn" onClick={()=>navigate('/contact')}>Contact</button>
              </div>
            </div>
          </div>

          <Link to="/about" className="nav-link">ABOUT</Link>
          <Link to="/contact" className="nav-link">CONTACT</Link>
        </div>
      </div>
    </nav>
  )
}
