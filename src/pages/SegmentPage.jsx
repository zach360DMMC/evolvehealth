import { useParams, Link } from 'react-router-dom'
import { ArrowRight, AlertCircle, CheckCircle, ChevronLeft } from 'lucide-react'
import { useRevealAll } from '../hooks/useReveal'
import { segmentData } from '../data/segments'
import CTABanner from '../components/CTABanner'
import PageHero from '../components/PageHero'

export default function SegmentPage() {
  const { segment } = useParams()
  useRevealAll()
  const data = segmentData[segment]

  if (!data) return (
    <main style={{ paddingTop:'10rem',textAlign:'center',minHeight:'60vh',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center' }}>
      <h2 className="heading text-navy" style={{ marginBottom:'1rem' }}>Segment not found</h2>
      <Link to="/who-we-serve" className="btn btn-primary">Back to Who We Serve</Link>
    </main>
  )

  return (
    <main>
      <PageHero badge={data.badge} title={data.hero} subtitle={data.intro}/>

      <div className="container" style={{ paddingTop:'2rem',paddingBottom:'.5rem' }}>
        <Link to="/who-we-serve" style={{ display:'inline-flex',alignItems:'center',gap:'5px',fontSize:'.83rem',fontWeight:500,color:'var(--steel)',textDecoration:'none' }}>
          <ChevronLeft size={14}/> Back to All Segments
        </Link>
      </div>

      {/* CHALLENGES + SOLUTIONS INTRO */}
      <section className="section">
        <div className="container">
          <div className="two-col-50">
            <div className="reveal">
              <span className="section-label">Challenges You Face Every Day</span>
              <ul style={{ listStyle:'none',padding:0,margin:'1rem 0 0',display:'flex',flexDirection:'column',gap:'.75rem' }}>
                {data.challenges.map((c,i)=>(
                  <li key={i} style={{ display:'flex',alignItems:'flex-start',gap:'10px',padding:'1rem 1.1rem',borderRadius:'9px',background:'#fff5f5',border:'1px solid rgba(220,38,38,.12)' }}>
                    <AlertCircle size={15} style={{ color:'#dc2626',flexShrink:0,marginTop:'2px' }}/>
                    <span style={{ fontSize:'.87rem',color:'var(--charcoal-dk)',lineHeight:1.55 }}>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal" style={{ transitionDelay:'150ms' }}>
              <span className="section-label" style={{ color:'#166534' }}>How We Help</span>
              <p className="body" style={{ color:'var(--charcoal)',margin:'1rem 0 1.75rem' }}>
                Every challenge above has a targeted AI solution we've built and deployed in organizations like yours. Below is how we address each one specifically for <strong style={{ color:'var(--navy)' }}>{data.label}</strong>.
              </p>
              <Link to="/contact" className="btn btn-primary">
                Book a Free Consultation <ArrowRight size={15}/>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="section-lg" style={{ background:'var(--off-white)' }}>
        <div className="container">
          <div style={{ marginBottom:'2.5rem' }}>
            <span className="section-label reveal">Solutions</span>
            <h2 className="heading text-navy reveal">AI Solutions Built for {data.label}</h2>
          </div>
          <div className="seg-grid">
            {data.solutions.map((sol,i)=>(
              <div key={i} className="card reveal" style={{ padding:'1.75rem',borderLeft:'4px solid var(--steel)',borderRadius:'0 12px 12px 0',transitionDelay:`${i*70}ms` }}>
                <div style={{ display:'flex',alignItems:'flex-start',gap:'10px',marginBottom:'.75rem' }}>
                  <CheckCircle size={16} style={{ color:'var(--steel)',flexShrink:0,marginTop:'2px' }}/>
                  <h3 style={{ fontFamily:'Inter,sans-serif',fontSize:'.93rem',fontWeight:700,color:'var(--navy)' }}>{sol.title}</h3>
                </div>
                <p style={{ fontSize:'.84rem',lineHeight:1.65,color:'var(--charcoal)',paddingLeft:'26px' }}>{sol.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title={`Ready to Transform Your ${data.label.split(' ')[0]} Operations?`} body="Book a free consultation and we'll show you exactly how our AI solutions apply to your specific environment." />
    </main>
  )
}
