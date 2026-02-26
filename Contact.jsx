import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact(){
  const [form, setForm] = useState({name:'',email:'',message:''})
  const [status, setStatus] = useState(null)

  async function submit(e){
    e.preventDefault()
    setStatus('sending')
    try{
      await fetch('/api/contact', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(form)
      })
      setStatus('sent')
    }catch(err){
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <div>
      <Navbar />
      <div className="container" style={{paddingTop:24}}>
        <h1 className="fade-up">Get in touch</h1>
        <p className="text-muted fade-up delay-1">Send us a message and we'll get back to you.</p>

        <form onSubmit={submit} style={{maxWidth:720,marginTop:12}} className="fade-up delay-2">
          <div style={{display:'grid',gap:12}}>
            <input required placeholder="Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} style={{padding:12,borderRadius:10,border:'1px solid #eee'}}/>
            <input required placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} style={{padding:12,borderRadius:10,border:'1px solid #eee'}}/>
            <textarea required placeholder="Message" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} style={{padding:12,borderRadius:10,border:'1px solid #eee',minHeight:140}}/>
            <div style={{display:'flex',gap:8,alignItems:'center'}}>
              <button className="btn" type="submit">Send message</button>
              <div className="text-muted">{status}</div>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  )
}
