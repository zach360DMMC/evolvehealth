import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useRevealAll } from '../hooks/useReveal'
import PageHero from '../components/PageHero'
import CTABanner from '../components/CTABanner'

const segments = [
  { slug:'skilled-nursing', label:'Skilled Nursing & Rehab Facilities', desc:'AI for PDPM optimization, documentation, and resident care quality' },
  { slug:'assisted-living', label:'Assisted Living Facilities', desc:'Smarter staffing, safety monitoring, and resident engagement through AI' },
  { slug:'home-health', label:'Home Health Agencies', desc:'Predictive care, scheduling automation, and OASIS documentation compliance' },
  { slug:'therapy-clinics', label:'Therapy Clinics', desc:'Reduce documentation time and improve patient throughput' },
  { slug:'home-care', label:'Home Care & Caregiving', desc:'AI tools that support caregivers and protect care quality at scale' },
  { slug:'physician-offices', label:'MD & Physician Offices', desc:'Documentation automation and front-desk AI for busy practices' },
  { slug:'dental-clinics', label:'Dental Clinics', desc:'Intelligent scheduling, patient communication, and billing workflows' },
  { slug:'wellness-care', label:'Wellness & Integrative Care', desc:'AI for holistic care coordination and patient engagement' },
  { slug:'medical-groups', label:'Medical Groups & Health Systems', desc:'Enterprise AI strategy and system-wide clinical transformation' },
]

export default function WhoWeServe() {
  useRevealAll()
  return (
    <main>
      <PageHero badge="Who We Serve" title="We Speak Your Language — Because We Know Your World" subtitle="Not every healthcare organization faces the same challenges. We build solutions specific to your organization type — not generic tools that require you to adapt to us." />

      <section className="section-lg">
        <div className="container">
          <div style={{ textAlign:'center',marginBottom:'3.5rem' }}>
            <span className="section-label reveal">Healthcare Segments</span>
            <h2 className="display-sm text-navy reveal" style={{ marginBottom:'.7rem' }}>Select Your Organization Type</h2>
            <p className="body reveal" style={{ color:'var(--charcoal)',maxWidth:'480px',margin:'0 auto' }}>See how Evolve Health AI delivers value for your specific workflows, challenges, and goals.</p>
          </div>
          <div className="seg-grid">
            {segments.map((seg,i)=>(
              <Link key={seg.slug} to={`/who-we-serve/${seg.slug}`} className="seg-card reveal" style={{ transitionDelay:`${i*55}ms` }}>
                <div style={{ display:'flex',alignItems:'flex-start',justifyContent:'space-between',marginBottom:'1rem' }}>
                  <span className="seg-num" style={{ fontFamily:'Playfair Display,serif',fontSize:'2rem',fontWeight:700,color:'var(--steel-pale)',lineHeight:1,transition:'color .25s' }}>{String(i+1).padStart(2,'0')}</span>
                  <ArrowRight size={16} className="seg-arrow" style={{ color:'var(--steel)',marginTop:'4px',transition:'color .25s' }}/>
                </div>
                <h3 className="seg-title" style={{ fontFamily:'Inter,sans-serif',fontSize:'.95rem',fontWeight:700,color:'var(--navy)',marginBottom:'.5rem',transition:'color .25s' }}>{seg.label}</h3>
                <p className="seg-desc" style={{ fontSize:'.83rem',color:'var(--charcoal)',lineHeight:1.6,transition:'color .25s' }}>{seg.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Not Sure Which Solution Fits?" body="Our team works across every major healthcare segment. Book a free consultation and we'll match the right AI solutions to your specific needs." />
    </main>
  )
}
