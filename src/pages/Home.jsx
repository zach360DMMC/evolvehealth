import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Heart, Handshake, Users, FileText, Settings, BarChart3, Map, CheckCircle, Star, ChevronRight, Activity, Brain } from 'lucide-react'
import { useRevealAll } from '../hooks/useReveal'

const stats = [
  { n:'2+',    label:'Hours lost per clinician daily to documentation',          src:'AMA, 2023' },
  { n:'60%',   label:'Of physician burnout linked to administrative overload',   src:'NEJM Catalyst' },
  { n:'40%',   label:'Reduction in front-desk workload with AI intake',          src:'Client results' },
  { n:'45min', label:'Saved per provider per day with AI documentation tools',   src:'Client results' },
]

const pillars = [
  { icon:<Heart size={20}/>, title:'Patient Outcomes at the Center', desc:"Every solution is evaluated against one question: does this improve care? We don't automate for automation's sake — we build toward measurable clinical outcomes." },
  { icon:<Shield size={20}/>, title:'HIPAA Compliant by Default', desc:"Security and regulatory compliance are built into every layer of our work — not bolted on. Your patient data is always protected, your operations always audit-ready." },
  { icon:<Handshake size={20}/>, title:'We Work Inside Your Workflow', desc:"We integrate with your EMR/EHR, train your staff, and stay engaged long after go-live. Our team becomes an extension of yours." },
]

const services = [
  { icon:<Users size={20}/>,    title:'AI-Powered Patient Intake & Communication', desc:'Automate scheduling, FAQs, intake forms, and reminders. Reduce front-desk workload by up to 40% while improving patient experience from first contact.' },
  { icon:<FileText size={20}/>, title:'Generative AI for Clinical Documentation',  desc:'Draft chart summaries, referral letters, and discharge notes in real time — so providers can focus on patients, not paperwork.' },
  { icon:<Settings size={20}/>, title:'Intelligent Clinical Workflow Automation',  desc:'Streamline prior authorizations, coding, billing submissions, and care coordination. Fewer errors, faster throughput, better financial performance.' },
  { icon:<BarChart3 size={20}/>,title:'Clinical Analytics & Predictive Insights', desc:'Turn patient data into proactive decisions. Identify at-risk populations, predict care gaps, and optimize treatment pathways.' },
  { icon:<Map size={20}/>,      title:'AI Strategy & Clinical Integration Roadmap',desc:'A clear, actionable 12-month AI integration roadmap tailored to your organization — with projected ROI before anything is built.' },
]

const steps = [
  { n:'01', title:'Clinical Discovery',       time:'Week 1–2',  desc:'A hands-on review of your workflows, technology stack, staffing structure, and compliance posture — delivered as a written findings summary before we propose a single solution.' },
  { n:'02', title:'Solution Design',          time:'Week 2–4',  desc:'A tailored AI integration strategy with the right tools, sequencing, and KPIs. You receive a full written roadmap, HIPAA checklist, and projected ROI model before anything is built.' },
  { n:'03', title:'Implementation & Support', time:'Ongoing',   desc:'Full EHR/EMR integration, staff training, pilot testing, and phased rollout. Post-launch, we remain engaged for optimization, troubleshooting, and performance reviews.' },
]

const testimonials = [
  { quote:'Evolve Health AI transformed how our admissions team operates. What used to take hours of manual intake work now runs almost automatically. Our clinical staff finally has time to focus on residents.', author:'Director of Operations', org:'Skilled Nursing Facility, Illinois' },
  { quote:"We were skeptical about AI in a clinical environment — especially around HIPAA. The team addressed every concern upfront and implementation was smoother than anything we'd done before.", author:'Practice Administrator', org:'Independent MD Office, Chicago' },
  { quote:'Staffing has been our biggest challenge for years. The AI scheduling tools made a real difference — and predictive analytics helped us catch patient deterioration earlier than ever before.', author:'CEO', org:'Home Health Agency, Midwest' },
]

const segs = [
  { label:'Skilled Nursing & Rehab', slug:'skilled-nursing' },
  { label:'Assisted Living',          slug:'assisted-living' },
  { label:'Home Health',              slug:'home-health' },
  { label:'Therapy Clinics',          slug:'therapy-clinics' },
  { label:'Home Care',                slug:'home-care' },
  { label:'MD Offices',               slug:'physician-offices' },
  { label:'Dental Clinics',           slug:'dental-clinics' },
  { label:'Wellness Care',            slug:'wellness-care' },
  { label:'Medical Groups',           slug:'medical-groups' },
]

export default function Home() {
  useRevealAll()

  return (
    <main>
      {/* ━━ HERO ━━ */}
      <section className="hero-section">
        <div className="hero-bg" />
        <div className="hero-grid" />

        <div className="anim-pulse" style={{ position:'absolute',top:'12%',right:'6%',width:'500px',height:'500px',borderRadius:'50%',background:'radial-gradient(circle,rgba(108,140,163,.16) 0%,transparent 70%)',pointerEvents:'none' }}/>
        <div className="anim-pulse" style={{ position:'absolute',bottom:'8%',left:'2%',width:'320px',height:'320px',borderRadius:'50%',background:'radial-gradient(circle,rgba(108,140,163,.09) 0%,transparent 70%)',pointerEvents:'none',animationDelay:'2.5s' }}/>
        <div style={{ position:'absolute',right:'-120px',top:'50%',transform:'translateY(-50%)',width:'700px',height:'700px',borderRadius:'50%',border:'1px solid rgba(108,140,163,.07)',pointerEvents:'none' }}/>
        <div style={{ position:'absolute',right:'-60px',top:'50%',transform:'translateY(-50%)',width:'480px',height:'480px',borderRadius:'50%',border:'1px solid rgba(108,140,163,.06)',pointerEvents:'none' }}/>

        <div className="container" style={{ position:'relative',zIndex:1,paddingTop:'7.5rem',paddingBottom:'6rem' }}>
          <div style={{ maxWidth:'760px' }}>
            <div className="pill pill-white anim-up d1" style={{ marginBottom:'1.75rem' }}>
              <Activity size={12}/>&nbsp;HIPAA-Compliant · EHR-Integrated · U.S.-Based
            </div>

            <h1 className="anim-up d2" style={{ fontFamily:'Playfair Display,serif',fontSize:'clamp(2.8rem,5.5vw,4.8rem)',fontWeight:700,color:'#fff',lineHeight:1.07,letterSpacing:'-.025em',marginBottom:'1.6rem' }}>
              Your Practice Deserves<br/>
              <em style={{ fontStyle:'italic',color:'var(--steel-light)' }}>Smarter Tools.</em><br/>
              We Build Them.
            </h1>

            <p className="anim-up d3" style={{ fontSize:'1.08rem',lineHeight:1.78,color:'rgba(255,255,255,.68)',maxWidth:'560px',marginBottom:'2.5rem' }}>
              Secure, HIPAA-compliant AI solutions designed exclusively for healthcare providers. Reduce admin burden, improve patient outcomes, and lead your practice into the future.
            </p>

            <div className="anim-up d4" style={{ display:'flex',flexWrap:'wrap',gap:'12px' }}>
              <Link to="/contact" className="btn btn-white">Book Free Consultation <ArrowRight size={15}/></Link>
              <Link to="/what-we-do" className="btn btn-outline-white">See How It Works</Link>
            </div>

            <div className="anim-up d5" style={{ marginTop:'3rem',display:'flex',flexWrap:'wrap',gap:'1.5rem 2.5rem' }}>
              {['HIPAA Compliant','EHR/EMR Integrated','Built for Clinical Workflows','U.S.-Based Experts'].map(item=>(
                <div key={item} style={{ display:'flex',alignItems:'center',gap:'7px' }}>
                  <CheckCircle size={13} style={{ color:'var(--steel-light)' }}/>
                  <span style={{ fontSize:'.81rem',color:'rgba(255,255,255,.58)',fontFamily:'Inter,sans-serif' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ━━ STATS ━━ */}
      <section style={{ background:'var(--navy-dark)',borderBottom:'1px solid rgba(255,255,255,.06)',padding:'3.5rem 0' }}>
        <div className="container">
          <p style={{ textAlign:'center',fontSize:'.68rem',fontFamily:'Inter,sans-serif',fontWeight:700,letterSpacing:'.15em',textTransform:'uppercase',color:'var(--steel-light)',marginBottom:'2.5rem' }}>
            The Clinical Burden Is Real. So Are Our Results.
          </p>
          <div className="stats-grid">
            {stats.map((s,i)=>(
              <div key={i} className="reveal" style={{ textAlign:'center',transitionDelay:`${i*80}ms` }}>
                <div style={{ fontFamily:'Playfair Display,serif',fontSize:'clamp(2.2rem,4vw,3.2rem)',fontWeight:700,color:'#fff',lineHeight:1 }}>{s.n}</div>
                <p style={{ marginTop:'.6rem',fontSize:'.82rem',color:'rgba(255,255,255,.52)',fontFamily:'Inter,sans-serif',lineHeight:1.55 }}>{s.label}</p>
                <p style={{ marginTop:'.3rem',fontSize:'.7rem',color:'var(--steel-light)',fontFamily:'Inter,sans-serif' }}>{s.src}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━ WHY US ━━ */}
      <section className="section-lg" style={{ background:'var(--off-white)' }}>
        <div className="container">
          <div className="two-col-50">
            <div>
              <span className="section-label reveal">Why Evolve Health AI</span>
              <h2 className="display-sm text-navy reveal" style={{ marginBottom:'1.2rem' }}>The AI Partner Built for Healthcare — Not Just for Business</h2>
              <p className="body reveal" style={{ color:'var(--charcoal)',marginBottom:'1rem' }}>
                Most AI vendors sell general-purpose tools and leave healthcare providers to figure out clinical compliance, EHR integration, and workflow fit on their own.
              </p>
              <p className="body reveal" style={{ color:'var(--charcoal)',marginBottom:'2rem' }}>
                Evolve Health AI was built from the ground up for the specific regulatory demands, operational pressures, and patient care standards of clinical environments. We deliver solutions that actually work in your practice — not just in a demo.
              </p>
              <Link to="/who-we-are" className="btn btn-outline reveal">Learn About Our Team <ArrowRight size={15}/></Link>
            </div>
            <div style={{ display:'flex',flexDirection:'column',gap:'1rem' }}>
              {pillars.map((p,i)=>(
                <div key={i} className="card reveal" style={{ padding:'1.5rem',display:'flex',gap:'1rem',transitionDelay:`${i*100}ms` }}>
                  <div className="icon-box">{p.icon}</div>
                  <div>
                    <h3 style={{ fontFamily:'Inter,sans-serif',fontSize:'.93rem',fontWeight:700,color:'var(--navy)',marginBottom:'.4rem' }}>{p.title}</h3>
                    <p style={{ fontSize:'.84rem',color:'var(--charcoal)',lineHeight:1.65 }}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ━━ SERVICES ━━ */}
      <section className="section-lg" style={{ background:'#fff' }}>
        <div className="container">
          <div style={{ textAlign:'center',marginBottom:'3.5rem' }}>
            <span className="section-label reveal">Our Services</span>
            <h2 className="display-sm text-navy reveal" style={{ marginBottom:'.8rem' }}>AI Solutions That Solve Real Clinical Problems</h2>
            <p className="body reveal" style={{ color:'var(--charcoal)',maxWidth:'500px',margin:'0 auto' }}>From the front desk to the exam room to the billing department — we bring AI to the workflows that matter most.</p>
          </div>
          <div className="services-main-grid">
            {services.map((s,i)=>(
              <div key={i} className="service-card reveal" style={{ padding:'2rem',transitionDelay:`${i*65}ms` }}>
                <div className="icon-box" style={{ marginBottom:'1.1rem' }}>{s.icon}</div>
                <h3 style={{ fontFamily:'Inter,sans-serif',fontSize:'.94rem',fontWeight:700,color:'var(--navy)',marginBottom:'.6rem' }}>{s.title}</h3>
                <p style={{ fontSize:'.84rem',color:'var(--charcoal)',lineHeight:1.65 }}>{s.desc}</p>
              </div>
            ))}
            <div className="card-navy reveal" style={{ padding:'2rem',display:'flex',flexDirection:'column',justifyContent:'space-between',transitionDelay:'390ms' }}>
              <div>
                <Brain size={24} style={{ color:'var(--steel-light)',marginBottom:'1.1rem' }}/>
                <h3 style={{ fontFamily:'Playfair Display,serif',fontSize:'1.3rem',color:'#fff',marginBottom:'.7rem' }}>Explore All Services</h3>
                <p style={{ fontSize:'.84rem',color:'rgba(255,255,255,.55)',lineHeight:1.65 }}>Explore the full depth of what our clinical AI practice delivers for healthcare providers.</p>
              </div>
              <Link to="/what-we-do" style={{ display:'inline-flex',alignItems:'center',gap:'6px',marginTop:'1.5rem',fontSize:'.85rem',fontWeight:600,color:'var(--steel-pale)',textDecoration:'none',transition:'color .2s' }}
                onMouseEnter={e=>e.currentTarget.style.color='#fff'}
                onMouseLeave={e=>e.currentTarget.style.color='var(--steel-pale)'}
              >View Full Services <ArrowRight size={14}/></Link>
            </div>
          </div>
        </div>
      </section>

      {/* ━━ PROCESS ━━ */}
      <section className="section-lg" style={{ background:'var(--off-white)' }}>
        <div className="container">
          <div style={{ textAlign:'center',marginBottom:'3.5rem' }}>
            <span className="section-label reveal">Our Process</span>
            <h2 className="display-sm text-navy reveal" style={{ marginBottom:'.8rem' }}>A Process Built Around Your Practice</h2>
            <p className="body reveal" style={{ color:'var(--charcoal)',maxWidth:'460px',margin:'0 auto' }}>Not around our product. Every engagement starts with understanding your unique clinical environment.</p>
          </div>
          <div className="process-grid">
            {steps.map((s,i)=>(
              <div key={i} className="reveal" style={{ padding:'2.2rem',borderRadius:'14px',transitionDelay:`${i*110}ms`,position:'relative',
                background:i===1?'var(--navy)':'#fff',
                border:i===1?'none':'1px solid var(--border)',
                boxShadow:i===1?'0 24px 60px rgba(29,53,87,.25)':'0 2px 16px rgba(29,53,87,.05)' }}>
                {i<2&&<div style={{ position:'absolute',top:'2.4rem',right:'-13px',zIndex:10,width:'26px',height:'26px',borderRadius:'50%',background:'var(--off-white)',border:'1px solid var(--border)',display:'flex',alignItems:'center',justifyContent:'center' }}>
                  <ChevronRight size={13} style={{ color:'var(--steel)' }}/>
                </div>}
                <div style={{ display:'flex',alignItems:'center',gap:'12px',marginBottom:'1.2rem' }}>
                  <span style={{ fontFamily:'Playfair Display,serif',fontSize:'2.4rem',fontWeight:700,lineHeight:1,color:i===1?'rgba(255,255,255,.12)':'var(--steel-pale)' }}>{s.n}</span>
                  <span style={{ fontSize:'.7rem',fontFamily:'Inter,sans-serif',fontWeight:700,padding:'.25rem .65rem',borderRadius:'100px',
                    background:i===1?'rgba(255,255,255,.1)':'var(--accent)',color:i===1?'var(--steel-pale)':'var(--navy)' }}>{s.time}</span>
                </div>
                <h3 style={{ fontFamily:'Inter,sans-serif',fontSize:'1.05rem',fontWeight:700,marginBottom:'.75rem',color:i===1?'#fff':'var(--navy)' }}>{s.title}</h3>
                <p style={{ fontSize:'.84rem',lineHeight:1.72,color:i===1?'rgba(255,255,255,.6)':'var(--charcoal)' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━ WHO WE SERVE TEASER ━━ */}
      <section className="section" style={{ background:'#fff' }}>
        <div className="container">
          <div style={{ display:'flex',flexWrap:'wrap',alignItems:'flex-end',justifyContent:'space-between',gap:'1rem',marginBottom:'2rem' }}>
            <div>
              <span className="section-label reveal">Who We Serve</span>
              <h2 className="heading text-navy reveal">We Speak Your Language</h2>
            </div>
            <Link to="/who-we-serve" className="btn btn-outline reveal" style={{ flexShrink:0 }}>All Segments <ArrowRight size={14}/></Link>
          </div>
          <div className="serve-teaser-grid">
            {segs.map((seg,i)=>(
              <Link key={seg.slug} to={`/who-we-serve/${seg.slug}`} className="reveal"
                style={{ transitionDelay:`${i*45}ms`,display:'flex',alignItems:'center',justifyContent:'space-between',
                  padding:'.95rem 1.2rem',borderRadius:'9px',border:'1px solid var(--border)',textDecoration:'none',
                  fontSize:'.85rem',fontWeight:500,color:'var(--navy)',background:'var(--off-white)',transition:'all .2s' }}
                onMouseEnter={e=>{e.currentTarget.style.background='var(--navy)';e.currentTarget.style.color='#fff';e.currentTarget.style.borderColor='var(--navy)'}}
                onMouseLeave={e=>{e.currentTarget.style.background='var(--off-white)';e.currentTarget.style.color='var(--navy)';e.currentTarget.style.borderColor='var(--border)'}}
              >{seg.label} <ChevronRight size={14} style={{ opacity:.45 }}/></Link>
            ))}
          </div>
        </div>
      </section>

      {/* ━━ TESTIMONIALS ━━ */}
      <section className="section-lg" style={{ background:'var(--off-white)' }}>
        <div className="container">
          <div style={{ textAlign:'center',marginBottom:'3rem' }}>
            <span className="section-label reveal">Client Voices</span>
            <h2 className="display-sm text-navy reveal">Trusted by Healthcare Providers Across the Country</h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t,i)=>(
              <div key={i} className="testimonial-card reveal" style={{ transitionDelay:`${i*100}ms` }}>
                <div style={{ display:'flex',gap:'3px',marginBottom:'1.2rem' }}>
                  {[...Array(5)].map((_,j)=><Star key={j} size={13} fill="var(--steel)" stroke="none"/>)}
                </div>
                <p style={{ fontSize:'.88rem',lineHeight:1.77,color:'var(--charcoal)',fontStyle:'italic',marginBottom:'1.5rem' }}>"{t.quote}"</p>
                <div style={{ borderTop:'1px solid var(--border)',paddingTop:'1rem' }}>
                  <p style={{ fontSize:'.84rem',fontWeight:700,color:'var(--navy)',fontFamily:'Inter,sans-serif' }}>{t.author}</p>
                  <p style={{ fontSize:'.76rem',color:'var(--steel)',marginTop:'2px',fontFamily:'Inter,sans-serif' }}>{t.org}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━ FINAL CTA ━━ */}
      <section className="cta-section">
        <div className="container" style={{ position:'relative',zIndex:1,textAlign:'center' }}>
          <h2 className="display-sm text-white reveal" style={{ marginBottom:'1rem' }}>Your Practice Is Ready<br/>for What's Next.</h2>
          <p className="lead text-muted reveal" style={{ maxWidth:'490px',margin:'0 auto 2.5rem',animationDelay:'.1s' }}>
            Book a free 30-minute consultation with our clinical AI team — no commitment, no pressure. Just an honest conversation about where AI can create real value.
          </p>
          <div className="reveal" style={{ display:'flex',flexWrap:'wrap',gap:'12px',justifyContent:'center',animationDelay:'.2s' }}>
            <Link to="/contact" className="btn btn-white">Book Free Consultation <ArrowRight size={15}/></Link>
            <Link to="/faq" className="btn btn-outline-white">Read the FAQ</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
