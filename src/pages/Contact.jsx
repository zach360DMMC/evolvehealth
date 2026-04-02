import { useState } from 'react'
import { MapPin, Mail, ExternalLink, CheckCircle, Send } from 'lucide-react'
import { useRevealAll } from '../hooks/useReveal'

const orgTypes = ['Skilled Nursing Facility','Assisted Living Facility','Home Health Agency','Therapy Clinic','Home Care Organization','MD / Physician Office','Dental Clinic','Wellness / Integrative Practice','Medical Group / Health System','Other']
const sources  = ['LinkedIn','Google Search','Referral from colleague','Conference or event','Industry publication','Other']

const iStyle = { width:'100%',padding:'.8rem 1rem',borderRadius:'8px',border:'1.5px solid var(--border)',fontFamily:'Inter,sans-serif',fontSize:'.88rem',color:'var(--charcoal-dk)',outline:'none',background:'#fff',transition:'border-color .2s, box-shadow .2s' }
const focus   = e => { e.target.style.borderColor='var(--navy)'; e.target.style.boxShadow='0 0 0 3px rgba(29,53,87,.08)' }
const blur    = e => { e.target.style.borderColor='var(--border)'; e.target.style.boxShadow='none' }
const lStyle  = { display:'block',marginBottom:'.4rem',fontSize:'.68rem',fontWeight:700,textTransform:'uppercase',letterSpacing:'.08em',color:'var(--charcoal)',fontFamily:'Inter,sans-serif' }

export default function Contact() {
  useRevealAll()
  const [done, setDone] = useState(false)
  const [f, setF] = useState({ firstName:'',lastName:'',org:'',orgType:'',title:'',email:'',phone:'',challenge:'',source:'' })
  const upd = e => setF({ ...f, [e.target.name]:e.target.value })

  return (
    <main>
      <section className="page-hero">
        <div className="container" style={{ position:'relative',zIndex:1 }}>
          <span className="pill pill-white anim-up d1" style={{ marginBottom:'1.2rem',display:'inline-flex' }}>Free Consultation</span>
          <h1 className="display text-white anim-up d2" style={{ maxWidth:'700px',marginBottom:'1.2rem' }}>Let's Talk About What AI Can Do for Your Practice</h1>
          <p className="lead text-muted anim-up d3" style={{ maxWidth:'560px' }}>Book a free 30-minute consultation — no commitment, no pressure, and no sales pitch. Just an honest conversation about where AI can create real value.</p>
        </div>
      </section>

      <section className="section-lg">
        <div className="container">
          <div className="contact-layout">
            {/* FORM */}
            <div>
              {done ? (
                <div style={{ textAlign:'center',padding:'4rem 2rem' }}>
                  <div style={{ width:'64px',height:'64px',borderRadius:'50%',background:'var(--accent)',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 1.5rem' }}>
                    <CheckCircle size={30} style={{ color:'var(--navy)' }}/>
                  </div>
                  <h2 style={{ fontFamily:'Playfair Display,serif',fontSize:'2rem',color:'var(--navy)',marginBottom:'.75rem' }}>Request Received!</h2>
                  <p style={{ fontSize:'.95rem',color:'var(--charcoal)',lineHeight:1.65,maxWidth:'380px',margin:'0 auto' }}>A member of our team will reach out within 1 business day to confirm your consultation time.</p>
                </div>
              ) : (
                <form onSubmit={e=>{e.preventDefault();setDone(true)}} style={{ display:'flex',flexDirection:'column',gap:'1.25rem' }}>
                  <h2 style={{ fontFamily:'Inter,sans-serif',fontSize:'1.3rem',fontWeight:700,color:'var(--navy)',marginBottom:'.25rem' }}>Book Your Free Consultation</h2>
                  <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1.25rem' }}>
                    <div><label style={lStyle}>First Name <span style={{color:'#dc2626'}}>*</span></label><input name="firstName" value={f.firstName} onChange={upd} required style={iStyle} onFocus={focus} onBlur={blur}/></div>
                    <div><label style={lStyle}>Last Name <span style={{color:'#dc2626'}}>*</span></label><input name="lastName" value={f.lastName} onChange={upd} required style={iStyle} onFocus={focus} onBlur={blur}/></div>
                  </div>
                  <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1.25rem' }}>
                    <div><label style={lStyle}>Organization Name <span style={{color:'#dc2626'}}>*</span></label><input name="org" value={f.org} onChange={upd} required style={iStyle} onFocus={focus} onBlur={blur}/></div>
                    <div><label style={lStyle}>Organization Type <span style={{color:'#dc2626'}}>*</span></label>
                      <select name="orgType" value={f.orgType} onChange={upd} required style={{...iStyle,appearance:'none',cursor:'pointer'}} onFocus={focus} onBlur={blur}>
                        <option value="">Select type...</option>
                        {orgTypes.map(t=><option key={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>
                  <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1.25rem' }}>
                    <div><label style={lStyle}>Your Title <span style={{color:'#dc2626'}}>*</span></label><input name="title" value={f.title} onChange={upd} required style={iStyle} onFocus={focus} onBlur={blur}/></div>
                    <div><label style={lStyle}>Email Address <span style={{color:'#dc2626'}}>*</span></label><input name="email" type="email" value={f.email} onChange={upd} required style={iStyle} onFocus={focus} onBlur={blur}/></div>
                  </div>
                  <div><label style={lStyle}>Phone <span style={{fontWeight:400,textTransform:'none',letterSpacing:0,color:'var(--charcoal)'}}>(optional)</span></label><input name="phone" type="tel" value={f.phone} onChange={upd} style={iStyle} onFocus={focus} onBlur={blur}/></div>
                  <div><label style={lStyle}>Primary challenge or area of interest <span style={{fontWeight:400,textTransform:'none',letterSpacing:0,color:'var(--charcoal)'}}>(optional)</span></label>
                    <textarea name="challenge" value={f.challenge} onChange={upd} rows={4} style={{...iStyle,resize:'none'}} onFocus={focus} onBlur={blur}/>
                  </div>
                  <div><label style={lStyle}>How did you hear about us?</label>
                    <select name="source" value={f.source} onChange={upd} style={{...iStyle,appearance:'none',cursor:'pointer'}} onFocus={focus} onBlur={blur}>
                      <option value="">Select...</option>
                      {sources.map(s=><option key={s}>{s}</option>)}
                    </select>
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ justifyContent:'center',padding:'1rem',fontSize:'.95rem',marginTop:'.5rem' }}>
                    Request My Free Consultation <Send size={16}/>
                  </button>
                </form>
              )}
            </div>

            {/* SIDEBAR */}
            <div style={{ display:'flex',flexDirection:'column',gap:'1.25rem' }}>
              <div style={{ padding:'1.75rem',borderRadius:'14px',background:'var(--off-white)',border:'1px solid var(--border)' }}>
                <h3 style={{ fontFamily:'Inter,sans-serif',fontSize:'1rem',fontWeight:700,color:'var(--navy)',marginBottom:'1.25rem' }}>Contact Info</h3>
                <ul style={{ listStyle:'none',padding:0,margin:0,display:'flex',flexDirection:'column',gap:'1rem' }}>
                  <li style={{ display:'flex',gap:'10px' }}><MapPin size={15} style={{ color:'var(--steel)',flexShrink:0,marginTop:'2px' }}/><span style={{ fontSize:'.84rem',color:'var(--charcoal)',lineHeight:1.6 }}>1 East Erie Street, Suite 525-2501<br/>Chicago, IL 60611</span></li>
                  <li style={{ display:'flex',gap:'10px',alignItems:'center' }}><Mail size={15} style={{ color:'var(--steel)',flexShrink:0 }}/><a href="mailto:Consult@EvolveHealthAI.com" style={{ fontSize:'.84rem',color:'var(--navy)',textDecoration:'none' }}>Consult@EvolveHealthAI.com</a></li>
                  <li style={{ display:'flex',gap:'10px',alignItems:'center' }}><ExternalLink size={15} style={{ color:'var(--steel)',flexShrink:0 }}/><a href="https://www.linkedin.com/company/evolve-health-ai/" target="_blank" rel="noreferrer" style={{ fontSize:'.84rem',color:'var(--navy)',textDecoration:'none' }}>LinkedIn</a></li>
                </ul>
              </div>
              <div style={{ padding:'1.75rem',borderRadius:'14px',background:'var(--off-white)',border:'1px solid var(--border)' }}>
                <h3 style={{ fontFamily:'Inter,sans-serif',fontSize:'1rem',fontWeight:700,color:'var(--navy)',marginBottom:'1.25rem' }}>What to Expect</h3>
                {[
                  { q:'What happens during the consultation?', a:'A 30-minute call with a healthcare AI specialist. We ask about your workflows, share relevant examples, and give an honest assessment of where AI can make the biggest impact.' },
                  { q:'Is there any cost or commitment?', a:'None. The consultation is completely free with no obligation to proceed.' },
                  { q:'How quickly can we get started?', a:'Most engagements move into a formal proposal within 1–2 weeks of the discovery consultation.' },
                ].map((item,i)=>(
                  <div key={i} style={{ borderBottom:i<2?'1px solid var(--border)':'none',paddingBottom:i<2?'1rem':0,marginBottom:i<2?'1rem':0 }}>
                    <p style={{ fontSize:'.85rem',fontWeight:600,color:'var(--navy)',marginBottom:'.3rem' }}>{item.q}</p>
                    <p style={{ fontSize:'.82rem',lineHeight:1.6,color:'var(--charcoal)' }}>{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
