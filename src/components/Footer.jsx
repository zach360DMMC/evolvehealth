import { Link } from 'react-router-dom'
import { MapPin, Mail, ExternalLink, ArrowRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container" style={{ paddingTop:'4rem', paddingBottom:'2rem' }}>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))', gap:'3rem', marginBottom:'3rem' }}>

          {/* Brand */}
          <div style={{ maxWidth:'260px' }}>
            <div style={{ marginBottom:'1rem' }}>
              <div style={{ fontFamily:'Playfair Display,serif', fontSize:'1.2rem', fontWeight:700, color:'#fff' }}>
                EVOLVE HEALTH <span style={{ color:'var(--steel-light)' }}>AI</span>
              </div>
              <div style={{ fontFamily:'Inter,sans-serif', fontSize:'.58rem', letterSpacing:'.2em', textTransform:'uppercase', color:'rgba(255,255,255,.35)', marginTop:'3px' }}>
                Intelligent Health Solutions
              </div>
            </div>
            <p style={{ fontSize:'.84rem', lineHeight:1.7, color:'rgba(255,255,255,.5)' }}>
              Healthcare AI transformation partner helping clinical organizations reduce burden, improve patient outcomes, and operate at full potential.
            </p>
            <div style={{ display:'flex', alignItems:'center', gap:'6px', marginTop:'1rem' }}>
              <span style={{ width:'8px', height:'8px', borderRadius:'50%', background:'#4ade80', display:'inline-block' }} />
              <span style={{ fontSize:'.75rem', color:'rgba(255,255,255,.4)' }}>HIPAA-Compliant Solutions</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="footer-heading">Quick Links</p>
            <ul style={{ listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:'.5rem' }}>
              {[{ l:'Home', to:'/' },{ l:'What We Do', to:'/what-we-do' },{ l:'Who We Serve', to:'/who-we-serve' },{ l:'Who We Are', to:'/who-we-are' },{ l:'Digital Solutions', to:'/digital-solutions' },{ l:'FAQ', to:'/faq' },{ l:'Contact Us', to:'/contact' }].map(item => (
                <li key={item.to}><Link to={item.to} style={{ fontSize:'.85rem' }}>{item.l}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="footer-heading">Contact</p>
            <ul style={{ listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:'1rem' }}>
              <li style={{ display:'flex', gap:'10px' }}>
                <MapPin size={15} style={{ color:'var(--steel-light)', flexShrink:0, marginTop:'2px' }} />
                <span style={{ fontSize:'.84rem', lineHeight:1.6 }}>1 East Erie Street, Suite 525-2501<br />Chicago, IL 60611</span>
              </li>
              <li style={{ display:'flex', gap:'10px', alignItems:'center' }}>
                <Mail size={15} style={{ color:'var(--steel-light)', flexShrink:0 }} />
                <a href="mailto:Consult@EvolveHealthAI.com" style={{ fontSize:'.84rem' }}>Consult@EvolveHealthAI.com</a>
              </li>
              <li style={{ display:'flex', gap:'10px', alignItems:'center' }}>
                <ExternalLink size={15} style={{ color:'var(--steel-light)', flexShrink:0 }} />
                <a href="https://www.linkedin.com/company/evolve-health-ai/" target="_blank" rel="noreferrer" style={{ fontSize:'.84rem' }}>LinkedIn</a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <p className="footer-heading">Get Started</p>
            <p style={{ fontSize:'.84rem', marginBottom:'1.2rem', color:'rgba(255,255,255,.5)' }}>Ready to transform your practice with AI?</p>
            <Link to="/contact" className="btn btn-steel" style={{ padding:'.65rem 1.25rem', fontSize:'.83rem' }}>
              Book Free Consultation <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        <div style={{ borderTop:'1px solid rgba(255,255,255,.07)', paddingTop:'1.5rem', display:'flex', flexWrap:'wrap', justifyContent:'space-between', gap:'1rem' }}>
          <p style={{ fontSize:'.75rem', color:'rgba(255,255,255,.3)' }}>© 2026 Evolve Health AI Corp. | All Rights Reserved.</p>
          <p style={{ fontSize:'.75rem', color:'rgba(255,255,255,.3)' }}>HIPAA-Compliant Solutions · Chicago, IL</p>
        </div>
      </div>
    </footer>
  )
}
