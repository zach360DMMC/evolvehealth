export default function PageHero({ badge, title, subtitle, children }) {
  return (
    <section className="page-hero">
      <div className="container" style={{ position:'relative', zIndex:1 }}>
        {badge && <span className="pill pill-white anim-up d1" style={{ marginBottom:'1.2rem', display:'inline-flex' }}>{badge}</span>}
        <h1 className="display text-white anim-up d2" style={{ maxWidth:'720px', marginBottom:'1.2rem', marginTop:'.5rem' }}>
          {title}
        </h1>
        {subtitle && (
          <p className="lead text-muted anim-up d3" style={{ maxWidth:'580px' }}>{subtitle}</p>
        )}
        {children && <div style={{ marginTop:'2rem' }}>{children}</div>}
      </div>
    </section>
  )
}
