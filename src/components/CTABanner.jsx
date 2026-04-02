import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CTABanner({ title = "Ready to Transform Your Practice?", body = "Book a free 30-minute consultation with our clinical AI team — no commitment, no pressure.", cta = "Book Free Consultation" }) {
  return (
    <section style={{ background:'linear-gradient(130deg, #0d1f33 0%, var(--navy) 60%, #1e3f66 100%)', position:'relative', overflow:'hidden', padding:'5rem 0' }}>
      <div className="dot-bg" style={{ position:'absolute', inset:0, opacity:.25 }} />
      <div className="container" style={{ position:'relative', zIndex:1, textAlign:'center' }}>
        <h2 className="heading text-white reveal" style={{ marginBottom:'.9rem' }}>{title}</h2>
        <p className="body text-muted reveal" style={{ maxWidth:'480px', margin:'0 auto 2rem', animationDelay:'.1s' }}>{body}</p>
        <Link to="/contact" className="btn btn-white reveal" style={{ animationDelay:'.2s' }}>
          {cta} <ArrowRight size={15} />
        </Link>
      </div>
    </section>
  )
}
