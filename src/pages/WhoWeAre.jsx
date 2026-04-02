import { Link } from 'react-router-dom'
import { ArrowRight, Heart, Shield, Handshake, Eye, CheckCircle } from 'lucide-react'
import { useRevealAll } from '../hooks/useReveal'
import PageHero from '../components/PageHero'
import CTABanner from '../components/CTABanner'

const values = [
  { icon:<Heart size={20}/>, title:'Clinical Integrity First', desc:"Every solution we build is evaluated against its clinical impact. If it doesn't improve care quality, reduce provider burden, or protect patient safety — we don't recommend it." },
  { icon:<Eye size={20}/>, title:'Radical Transparency', desc:"We tell clients what AI can and can't do. We don't oversell. We define success metrics upfront and measure against them honestly throughout every engagement." },
  { icon:<Shield size={20}/>, title:'HIPAA Compliance Is Non-Negotiable', desc:"Security and privacy are built into everything we do — from architecture decisions to staff training. Your patients' data is treated with the seriousness it deserves." },
  { icon:<Handshake size={20}/>, title:'Long-Term Partnership', desc:"We don't deploy and disappear. We build ongoing relationships with our clients, measuring outcomes over time and evolving our solutions as their needs change." },
]

const team = [
  { name:'[Founder Name]', title:'Founder & CEO', bio:'With a background spanning clinical operations and enterprise technology, [Name] founded Evolve Health AI to bridge the gap between powerful AI tools and the healthcare providers who need them most.' },
  { name:'[Team Member]', title:'Chief Clinical Officer', bio:'A clinician and healthcare administrator with [X] years of experience in post-acute care and ambulatory settings, bringing deep domain expertise to every client engagement.' },
  { name:'[Team Member]', title:'VP of AI Implementation', bio:'A healthcare technology engineer with experience deploying AI solutions across EHR environments including Epic, Cerner, and PointClickCare.' },
]

const creds = ['HIPAA-Compliant Architecture on all engagements','BAA (Business Associate Agreement) provided on all client engagements','U.S.-based team and operations','EHR/EMR integration expertise across major platforms','Healthcare operations and clinical domain expertise']

export default function WhoWeAre() {
  useRevealAll()
  return (
    <main>
      <PageHero badge="Who We Are" title="We Built This Company Because Healthcare Deserves Better Tools" subtitle="Not general-purpose AI repurposed for clinical use. Real solutions, built exclusively for healthcare providers, by people who understand the stakes." />

      {/* MISSION */}
      <section className="section-lg" style={{ background:'#fff' }}>
        <div className="container">
          <div className="two-col-50">
            <div>
              <span className="section-label reveal">Our Mission</span>
              <h2 className="display-sm text-navy reveal" style={{ marginBottom:'1.2rem' }}>Reduce the Burden. Restore the Care.</h2>
              <p className="body reveal" style={{ color:'var(--charcoal)',marginBottom:'1rem' }}>At Evolve Health AI, our mission is simple: reduce the administrative burden on healthcare providers so they can spend more time delivering care. We believe that AI, applied correctly and responsibly, is one of the most powerful tools available to address the burnout crisis, the documentation overload, and the operational inefficiencies limiting healthcare quality across the United States.</p>
              <p className="body reveal" style={{ color:'var(--charcoal)' }}>We are not a general AI company that pivoted to healthcare. We are a healthcare AI company — and that distinction matters in every solution we design, every integration we build, and every client relationship we maintain.</p>
            </div>
            <div className="reveal" style={{ transitionDelay:'200ms' }}>
              <div style={{ borderRadius:'16px',padding:'2.5rem',background:'linear-gradient(130deg,#0d1f33,var(--navy))',position:'relative',overflow:'hidden' }}>
                <div style={{ position:'absolute',top:'-60px',right:'-60px',width:'240px',height:'240px',borderRadius:'50%',background:'radial-gradient(circle,rgba(108,140,163,.2),transparent 70%)',pointerEvents:'none' }}/>
                <blockquote style={{ position:'relative' }}>
                  <p style={{ fontFamily:'Playfair Display,serif',fontSize:'1.3rem',fontWeight:700,color:'#fff',lineHeight:1.45,marginBottom:'1.5rem' }}>
                    "We built this company to fill a gap that nobody else was filling — and we measure our success by what changes in your practice."
                  </p>
                  <p style={{ fontSize:'.82rem',color:'var(--steel-pale)',fontFamily:'Inter,sans-serif' }}>— Evolve Health AI Founding Team</p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="section" style={{ background:'var(--off-white)' }}>
        <div className="container-sm">
          <span className="section-label reveal">Our Story</span>
          <h2 className="heading text-navy reveal" style={{ marginBottom:'1.5rem' }}>Why We Started Evolve Health AI</h2>
          <div className="reveal" style={{ display:'flex',flexDirection:'column',gap:'1rem' }}>
            <p className="body" style={{ color:'var(--charcoal)' }}>The gap we built this company to close was clear: healthcare providers were drowning in administrative work, AI vendors were selling generic tools with no clinical understanding, and the organizations that needed help most — independent practices, skilled nursing facilities, home health agencies — had no reliable partner to turn to.</p>
            <p className="body" style={{ color:'var(--charcoal)' }}>Evolve Health AI was founded to fill that gap. We bring together clinical operations expertise, enterprise AI engineering, and deep knowledge of healthcare regulation to deliver solutions that actually work in the real, complex, regulated environments our clients operate in.</p>
            <p className="body" style={{ color:'var(--charcoal)' }}>We are headquartered in Chicago, Illinois, and serve healthcare organizations across the country.</p>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section-lg" style={{ background:'#fff' }}>
        <div className="container">
          <div style={{ textAlign:'center',marginBottom:'3rem' }}>
            <span className="section-label reveal">Our Team</span>
            <h2 className="display-sm text-navy reveal" style={{ marginBottom:'.7rem' }}>The Team Behind Your Transformation</h2>
            <p className="body reveal" style={{ color:'var(--charcoal)',maxWidth:'480px',margin:'0 auto' }}>Real backgrounds in clinical operations, healthcare administration, and AI technology — not just consulting credentials.</p>
          </div>
          <div className="team-grid">
            {team.map((m,i)=>(
              <div key={i} className="card reveal" style={{ padding:'2rem',transitionDelay:`${i*100}ms` }}>
                <div style={{ width:'68px',height:'68px',borderRadius:'50%',background:'linear-gradient(135deg,var(--navy),var(--steel))',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'1.2rem' }}>
                  <span style={{ fontFamily:'Playfair Display,serif',fontSize:'1.5rem',fontWeight:700,color:'#fff' }}>{m.name.charAt(1)}</span>
                </div>
                <h3 style={{ fontFamily:'Inter,sans-serif',fontSize:'1rem',fontWeight:700,color:'var(--navy)',marginBottom:'.25rem' }}>{m.name}</h3>
                <p style={{ fontSize:'.8rem',fontWeight:600,color:'var(--steel)',marginBottom:'.75rem' }}>{m.title}</p>
                <p style={{ fontSize:'.84rem',lineHeight:1.65,color:'var(--charcoal)' }}>{m.bio}</p>
              </div>
            ))}
          </div>
          <p className="reveal" style={{ textAlign:'center',marginTop:'1.5rem',fontSize:'.78rem',color:'var(--charcoal)',opacity:.65 }}>Team bios and photos will be updated before launch.</p>
        </div>
      </section>

      {/* VALUES */}
      <section className="section-lg" style={{ background:'var(--off-white)' }}>
        <div className="container">
          <div style={{ textAlign:'center',marginBottom:'3rem' }}>
            <span className="section-label reveal">What We Stand For</span>
            <h2 className="display-sm text-navy reveal">Our Core Values</h2>
          </div>
          <div className="values-grid">
            {values.map((v,i)=>(
              <div key={i} className="card reveal" style={{ padding:'1.75rem',transitionDelay:`${i*80}ms` }}>
                <div className="icon-box" style={{ marginBottom:'1rem' }}>{v.icon}</div>
                <h3 style={{ fontFamily:'Inter,sans-serif',fontSize:'.93rem',fontWeight:700,color:'var(--navy)',marginBottom:'.5rem' }}>{v.title}</h3>
                <p style={{ fontSize:'.84rem',lineHeight:1.65,color:'var(--charcoal)' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="section" style={{ background:'#fff' }}>
        <div className="container">
          <div className="two-col-50">
            <div>
              <span className="section-label reveal">Trust & Compliance</span>
              <h2 className="heading text-navy reveal" style={{ marginBottom:'1.5rem' }}>Built on a Foundation of Trust</h2>
              <ul style={{ listStyle:'none',padding:0,margin:0,display:'flex',flexDirection:'column',gap:'.9rem' }}>
                {creds.map((c,i)=>(
                  <li key={i} className="reveal" style={{ display:'flex',alignItems:'center',gap:'10px',transitionDelay:`${i*65}ms` }}>
                    <CheckCircle size={17} style={{ color:'var(--steel)',flexShrink:0 }}/>
                    <span style={{ fontSize:'.87rem',color:'var(--charcoal-dk)' }}>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal" style={{ transitionDelay:'200ms' }}>
              <div style={{ padding:'2.5rem',borderRadius:'14px',background:'var(--off-white)',border:'1px solid var(--border)' }}>
                <h3 style={{ fontFamily:'Inter,sans-serif',fontSize:'1.1rem',fontWeight:700,color:'var(--navy)',marginBottom:'.75rem' }}>Ready to Work With a Team That Understands Healthcare?</h3>
                <p style={{ fontSize:'.87rem',lineHeight:1.65,color:'var(--charcoal)',marginBottom:'1.5rem' }}>Book a free 30-minute consultation. We'll walk through your current workflows and give you an honest assessment of where AI can make the biggest impact.</p>
                <Link to="/contact" className="btn btn-primary">Book Free Consultation <ArrowRight size={15}/></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner title="Ready to Work with a Team That Understands Healthcare?" />
    </main>
  )
}
