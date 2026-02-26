import React, {useState} from 'react'

const developmentCards = [
  {
    title: 'Web Development',
    desc: 'Get design your own website or Application',
    features: [
      'React/Next.js applications',
      'Node.js backends',
      'Performance optimization',
      'API integrations',
      'E-commerce solutions',
      'Fully personalized Home Page Design'
    ]
  },
  {
    title: 'Mobile Apps',
    desc: 'Build modern mobile experiences',
    features: [
      'Native iOS/Android',
      'Cross-platform (Flutter)',
      'App Store optimization',
      'Push notifications',
      'Offline capabilities',
      'Biometric authentication'
    ]
  },
  {
    title: 'Integrations',
    desc: 'Connect services and data pipelines',
    features: ['APIs','Payment gateways','Third-party SaaS','Webhooks']
  }
]

const designCards = [
  {
    title: 'UI/UX Design',
    desc: 'Human-centered product design',
    features: ['User research','Prototyping','High-fidelity mockups','Design systems']
  },
  {
    title: 'Graphic Design',
    desc: 'Branding & visuals',
    features: ['Logo design','Marketing assets','Social creatives','Print-ready files']
  }
]

export default function TechServices(){
  const [tab,setTab] = useState('Development')
  const pick = tab === 'Development' ? developmentCards : designCards

  return (
    <section className="tech container">
      <h2>Comprehensive tech services</h2>
      <p style={{color:'#6b7280'}}>We combine engineering excellence with design thinking to deliver measurable impact.</p>

      <div className="tech-grid" style={{marginTop:18}}>
        <div className="small-tabs">
          <div className={`tab ${tab==='Development'?'active':''}`} onClick={()=>setTab('Development')}>Development</div>
          <div className={`tab ${tab==='Design'?'active':''}`} onClick={()=>setTab('Design')}>Design</div>
        </div>

        <div className="cards">
          {pick.map(c=>(
            <div key={c.title} className="card">
              <h3>{c.title}</h3>
              <p style={{color:'#6b7280'}}>{c.desc}</p>
              <div className="key">Key Feature:</div>
              <ul>
                {c.features.map(f=> <li key={f}>{f}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
