import { Link } from 'react-router-dom'
import { ArrowRight, Cpu, Megaphone, Users, BarChart3 } from 'lucide-react'
import { useRevealAll } from '../hooks/useReveal'
import PageHero from '../components/PageHero'
import CTABanner from '../components/CTABanner'

const solutions = [
  { icon:<Cpu size={20}/>, title:'Healthcare Digital Transformation Consulting', headline:'End-to-End Digital Strategy for Clinical Organizations',
    desc:"We help healthcare organizations assess their complete digital maturity — from patient-facing technology to back-office infrastructure — and build a roadmap for sustainable transformation. This includes EHR optimization, digital workflow redesign, patient portal strategy, and technology vendor evaluation.",
    who:'Organizations undergoing growth, system migration, or facing competitive pressure to modernize their digital patient experience.' },
  { icon:<Megaphone size={20}/>, title:'Healthcare Content & Communication Strategy', headline:'Content That Builds Trust — With Patients and Referral Partners',
    desc:"In healthcare, trust is everything. We help organizations build a content and communication strategy that establishes clinical authority, supports patient education, and drives referral growth. From website content and patient-facing materials to LinkedIn thought leadership and email campaigns.",
    who:'Medical groups, specialty practices, and health systems looking to strengthen their digital brand and patient acquisition pipeline.' },
  { icon:<Users size={20}/>, title:'Patient Experience & Journey Design', headline:'Design Every Patient Touchpoint to Build Loyalty',
    desc:"The patient experience extends far beyond the exam room. We analyze and redesign every digital touchpoint in your patient journey — from first web search to post-discharge follow-up — using AI-driven insights and human-centered design to improve satisfaction, retention, and health outcomes.",
    who:'Organizations prioritizing HCAHPS scores, patient retention, or competitive differentiation in saturated markets.' },
  { icon:<BarChart3 size={20}/>, title:'Healthcare Data Analytics & Reporting Infrastructure', headline:'Turn Your Data Into a Competitive Advantage',
    desc:"Most healthcare organizations are sitting on valuable data they can't use. We build the analytics infrastructure — dashboards, reporting pipelines, KPI frameworks — that turns raw clinical and operational data into decisions your leadership team can act on.",
    who:'Multi-site organizations, medical groups, and value-based care participants who need better visibility into performance across their organization.' },
]

export default function DigitalSolutions() {
  useRevealAll()
  return (
    <main>
      <PageHero badge="Digital Solutions" title="Full Digital Transformation, Built for Healthcare" subtitle="AI is the engine. But a truly transformed healthcare organization also needs a compelling digital presence, a data-driven patient experience strategy, and the operational infrastructure to sustain growth." />

      {/* INTRO */}
      <section className="section-lg" style={{ background:'#fff' }}>
        <div className="container">
          <div className="two-col-50">
            <div>
              <span className="section-label reveal">The Full Picture</span>
              <h2 className="display-sm text-navy reveal" style={{ marginBottom:'1.2rem' }}>Beyond AI Implementation</h2>
              <p className="body reveal" style={{ color:'var(--charcoal)',marginBottom:'1rem' }}>Our Digital Solutions practice extends the value of AI implementation into every dimension of your organization's digital footprint. We believe in 360° Full Lifecycle Management — partnering with you through the entire transformation journey, from concept to implementation and ongoing evolution.</p>
              <p className="body reveal" style={{ color:'var(--charcoal)' }}>Our goal is significant, sustainable, and adaptive growth — not a one-time project that fades after delivery.</p>
            </div>
            <div className="reveal" style={{ transitionDelay:'150ms' }}>
              <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem' }}>
                {['AI-Powered Tools','Digital Strategy','Content & Brand','Data & Analytics','Patient Experience','Operational Support'].map((item,i)=>(
                  <div key={i} style={{ padding:'1.1rem',borderRadius:'10px',textAlign:'center',fontSize:'.85rem',fontWeight:600,
                    background:i%2===0?'var(--navy)':'var(--off-white)',
                    color:i%2===0?'#fff':'var(--navy)',
                    border:'1px solid var(--border)' }}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="section-lg" style={{ background:'var(--off-white)' }}>
        <div className="container">
          <div style={{ textAlign:'center',marginBottom:'3rem' }}>
            <span className="section-label reveal">Service Areas</span>
            <h2 className="display-sm text-navy reveal">Our Digital Solution Areas</h2>
          </div>
          <div style={{ display:'flex',flexDirection:'column',gap:'1.25rem' }}>
            {solutions.map((s,i)=>(
              <div key={i} className="reveal" style={{ background:'#fff',borderRadius:'14px',padding:'2.5rem',border:'1px solid var(--border)',boxShadow:'0 2px 20px rgba(29,53,87,.05)',transitionDelay:`${i*80}ms` }}>
                <div className="dig-sol-row">
                  <div style={{ gridColumn:'span 2' }}>
                    <div style={{ display:'flex',alignItems:'center',gap:'10px',marginBottom:'1rem' }}>
                      <div className="icon-box-sm">{s.icon}</div>
                      <span style={{ fontSize:'.65rem',fontWeight:700,textTransform:'uppercase',letterSpacing:'.1em',color:'var(--steel)' }}>{s.title}</span>
                    </div>
                    <h3 style={{ fontFamily:'Inter,sans-serif',fontSize:'1.1rem',fontWeight:700,color:'var(--navy)',marginBottom:'.75rem' }}>{s.headline}</h3>
                    <p style={{ fontSize:'.87rem',lineHeight:1.72,color:'var(--charcoal)' }}>{s.desc}</p>
                  </div>
                  <div style={{ padding:'1.25rem',borderRadius:'10px',background:'var(--off-white)',border:'1px solid var(--border)' }}>
                    <p style={{ fontSize:'.65rem',fontWeight:700,textTransform:'uppercase',letterSpacing:'.09em',color:'var(--steel)',marginBottom:'.5rem' }}>Best For</p>
                    <p style={{ fontSize:'.84rem',lineHeight:1.65,color:'var(--charcoal)' }}>{s.who}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Ready to See What Full Digital Transformation Looks Like?" body="Schedule a free consultation to explore how our digital solutions can complement your AI implementation." cta="Schedule a Free Consultation" />
    </main>
  )
}
