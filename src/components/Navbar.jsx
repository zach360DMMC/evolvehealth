import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react'

const segments = [
  { label: 'Skilled Nursing & Rehab', slug: 'skilled-nursing' },
  { label: 'Assisted Living Facilities', slug: 'assisted-living' },
  { label: 'Home Health Agencies', slug: 'home-health' },
  { label: 'Therapy Clinics', slug: 'therapy-clinics' },
  { label: 'Home Care & Caregiving', slug: 'home-care' },
  { label: 'MD & Physician Offices', slug: 'physician-offices' },
  { label: 'Dental Clinics', slug: 'dental-clinics' },
  { label: 'Wellness & Integrative Care', slug: 'wellness-care' },
  { label: 'Medical Groups & Health Systems', slug: 'medical-groups' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [serveOpen, setServeOpen] = useState(false)
  const { pathname } = useLocation()
  const dropdownRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false); setServeOpen(false) }, [pathname])

  // Dark navbar pages (white text on transparent) — only homepage uses transparent
  const isHomePage = pathname === '/'
  const useLightNav = isHomePage && !scrolled

  const linkClass = useLightNav ? 'nav-link light' : 'nav-link dark'

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : 'top'}`}>
      <div className="container">
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', height:'72px' }}>

          {/* Logo */}
          <Link to="/" style={{ textDecoration:'none', display:'flex', flexDirection:'column', lineHeight:1 }}
            className={scrolled ? 'logo-scrolled' : 'logo-light'}>
            <span className="logo-text" style={{ fontFamily:'Playfair Display,serif', fontSize:'1.28rem', fontWeight:700, letterSpacing:'-.01em' }}>
              EVOLVE HEALTH <span className="logo-ai">AI</span>
            </span>
            <span className="logo-tag" style={{ fontFamily:'Inter,sans-serif', fontSize:'.58rem', letterSpacing:'.2em', textTransform:'uppercase', marginTop:'2px' }}>
              Intelligent Health Solutions
            </span>
          </Link>

          {/* Desktop nav */}
          <nav style={{ display:'flex', alignItems:'center', gap:'2px' }} className="hide-mobile">
            {[{ label:'What We Do', to:'/what-we-do' },{ label:'Who We Are', to:'/who-we-are' },{ label:'Digital Solutions', to:'/digital-solutions' }].map(l => (
              <Link key={l.to} to={l.to} className={`${linkClass} ${pathname === l.to ? (useLightNav ? 'active-light' : 'active-dark') : ''}`}>{l.label}</Link>
            ))}

            {/* Who We Serve dropdown */}
            <div style={{ position:'relative' }} ref={dropdownRef}
              onMouseEnter={() => setServeOpen(true)}
              onMouseLeave={() => setServeOpen(false)}>
              <button
                className={`${linkClass} ${pathname.startsWith('/who-we-serve') ? (useLightNav ? 'active-light' : 'active-dark') : ''}`}
                style={{ display:'flex', alignItems:'center', gap:'4px', background:'none', border:'none', cursor:'pointer' }}
                onClick={() => setServeOpen(v => !v)}
              >
                Who We Serve
                <ChevronDown size={13} style={{ transition:'transform .2s', transform: serveOpen ? 'rotate(180deg)' : 'none' }} />
              </button>
              {serveOpen && (
                <div className="nav-dropdown">
                  <div className="nav-dropdown-header">Healthcare Segments</div>
                  <Link to="/who-we-serve" style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'.75rem 1.1rem', fontWeight:600, color:'var(--navy)', borderBottom:'1px solid var(--border)' }}>
                    All Providers <ArrowRight size={13} />
                  </Link>
                  {segments.map(s => (
                    <Link key={s.slug} to={`/who-we-serve/${s.slug}`}>{s.label}</Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/faq" className={linkClass}>FAQ</Link>
          </nav>

          {/* CTA */}
          <div style={{ display:'flex', alignItems:'center', gap:'12px' }} className="hide-mobile">
            <Link to="/contact" className={`btn ${useLightNav ? 'btn-white' : 'btn-primary'}`} style={{ padding:'.6rem 1.3rem', fontSize:'.83rem' }}>
              Book Free Consultation
            </Link>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setMobileOpen(v => !v)} className="show-mobile"
            style={{ background:'none', border:'none', cursor:'pointer', padding:'6px', color: useLightNav ? '#fff' : 'var(--navy)' }}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{ background:'#fff', borderTop:'1px solid var(--border)', padding:'1rem 0 1.5rem', boxShadow:'0 8px 32px rgba(0,0,0,.1)' }}>
          <div className="container" style={{ display:'flex', flexDirection:'column', gap:'2px' }}>
            {[
              { label:'Home', to:'/' },
              { label:'What We Do', to:'/what-we-do' },
              { label:'Who We Serve', to:'/who-we-serve' },
              { label:'Who We Are', to:'/who-we-are' },
              { label:'Digital Solutions', to:'/digital-solutions' },
              { label:'FAQ', to:'/faq' },
            ].map(l => (
              <Link key={l.to} to={l.to} style={{ padding:'.75rem .5rem', fontSize:'.9rem', fontWeight:500, color:'var(--charcoal-dk)', textDecoration:'none', borderBottom:'1px solid var(--border)' }}>
                {l.label}
              </Link>
            ))}
            <div style={{ borderTop:'1px solid var(--border)', paddingTop:'1rem', marginTop:'.5rem' }}>
              {segments.map(s => (
                <Link key={s.slug} to={`/who-we-serve/${s.slug}`} style={{ display:'block', padding:'.5rem .5rem .5rem 1rem', fontSize:'.82rem', color:'var(--steel)', textDecoration:'none' }}>
                  → {s.label}
                </Link>
              ))}
            </div>
            <Link to="/contact" className="btn btn-primary" style={{ marginTop:'1rem', justifyContent:'center' }}>
              Book Free Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
