import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer(){
  return (
    <footer>
      <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:12,flexWrap:'wrap'}}>
        <div>
          <div style={{fontWeight:700}}>TDTS</div>
          <div style={{color:'#6b7280'}}>USA · CANADA · INDIA</div>
        </div>
        <div style={{display:'flex',gap:12,alignItems:'center'}}>
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>
      </div>
    </footer>
  )
}
