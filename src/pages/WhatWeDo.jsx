import { Link } from 'react-router-dom'
import { ArrowRight, Users, FileText, Settings, BarChart3, Map, CheckCircle, Award, TrendingUp, Building2 } from 'lucide-react'
import { useRevealAll } from '../hooks/useReveal'
import PageHero from '../components/PageHero'
import CTABanner from '../components/CTABanner'

const diff = [
  { icon:<Award size={20}/>, title:'Specialized Healthcare AI Expertise', desc:"Our team includes professionals with direct backgrounds in clinical operations, healthcare administration, and enterprise AI engineering. We understand the regulatory landscape and daily pressures your team faces — because we've worked inside healthcare organizations. This isn't generalist AI consulting applied to healthcare. It's domain-specific expertise from day one." },
  { icon:<TrendingUp size={20}/>, title:'Client-Centric Value & Demonstrable ROI', desc:"Every engagement begins with a discovery process identifying your highest-value AI opportunities. We define success metrics upfront — hours saved per provider, reduction in claim denials, patient satisfaction scores — and track them throughout. You'll never wonder if you got a return on your investment." },
  { icon:<Building2 size={20}/>, title:'Robust MSO Framework & Operational Support', desc:"Our MSO model means we don't just implement AI tools — we can also provide the administrative infrastructure alongside them: billing, RCM, HR operations, IT support, and compliance management. We're a full operational partner, not just a software vendor." },
]

const services = [
  { icon:<Users size={20}/>, title:'AI-Powered Patient Intake & Communication',
    what:'An intelligent front-door experience for your practice — from scheduling to walk-in.',
    does:['Automated appointment scheduling and rescheduling (24/7)','AI-powered patient FAQ responses via chat or SMS','Digital intake forms with pre-population from existing records','Pre-visit instructions, reminders, and preparation guides','Post-visit follow-up and satisfaction surveys'],
    who:'Any practice managing high appointment volume, front-desk staffing challenges, or patient no-show rates above 10%.',
    outcome:'30–40% reduction in front-desk administrative time.' },
  { icon:<FileText size={20}/>, title:'Generative AI for Clinical Documentation',
    what:'AI tools that assist clinicians in generating, summarizing, and communicating clinical content — dramatically reducing documentation burden.',
    does:['Real-time AI-assisted chart notes and SOAP documentation','Automated referral letter drafting from clinical data','Patient-friendly discharge summaries and care instructions','Prior visit summaries for incoming provider handoffs','AI review and quality-check of generated documentation'],
    who:'Physician practices, SNFs, therapy clinics, or any clinical environment where providers spend more than 90 minutes per day on documentation.',
    outcome:'30–45 minutes saved per provider per day.' },
  { icon:<Settings size={20}/>, title:'Intelligent Clinical Workflow Automation',
    what:'End-to-end automation of the administrative and operational workflows between patient care and practice revenue.',
    does:['Automated prior authorization submission and follow-up','AI-assisted medical coding and charge capture','Claims management and denial prevention workflows','Automated eligibility verification and benefits checks','Staff task routing and care coordination automation'],
    who:'Practices experiencing high denial rates, billing backlogs, or significant time lost to prior authorization management.',
    outcome:'Reduction in claim denial rates by 20–35%.' },
  { icon:<BarChart3 size={20}/>, title:'Clinical Analytics & Predictive Insights',
    what:'A data intelligence layer that transforms patient and operational data into actionable insights — before problems become crises.',
    does:['At-risk patient identification and early intervention alerts','Chronic disease progression and readmission risk modeling','Population health trend analysis and reporting','Operational dashboards for capacity, staffing, and throughput','Quality metric tracking (HEDIS, CMS, value-based care)'],
    who:'Medical groups, SNFs, home health agencies, and organizations working toward value-based care contracts.',
    outcome:'Earlier identification of high-risk patients and improved quality scores.' },
  { icon:<Map size={20}/>, title:'AI Strategy & Clinical Integration Roadmap',
    what:'A structured, expert-led engagement that defines exactly where and how AI can create maximum value in your specific organization.',
    does:['Comprehensive AI readiness assessment (technology, workflow, staff, compliance)','Prioritized opportunity analysis with projected ROI for each use case','Vendor evaluation and tool selection support','HIPAA compliance and data governance planning','A written 12-month AI integration roadmap with milestones'],
    who:"Leadership teams evaluating AI adoption for the first time, or organizations that have tried AI tools and haven't seen results.",
    outcome:'A clear strategy with executive-level confidence.' },
]

const msoItems = ['Comprehensive Billing & Revenue Cycle Management (RCM)','Human Resources and Credentialing Support','IT Infrastructure & Helpdesk','Regulatory Compliance & Audit Readiness','Scalable Solutions That Grow With Your Organization']

export default function WhatWeDo() {
  useRevealAll()
  return (
    <main>
      <PageHero badge="What We Do" title="AI Services Designed for the Way Healthcare Actually Works" subtitle="We don't offer off-the-shelf AI tools. We deliver integrated, HIPAA-compliant solutions built around your specific clinical environment — and we measure success by what changes in your practice." />

      {/* DIFFERENTIATORS */}
      <section className="section-lg" style={{ background:'#fff' }}>
        <div className="container">
          <div style={{ textAlign:'center',marginBottom:'3rem' }}>
            <span className="section-label reveal">The Difference</span>
            <h2 className="display-sm text-navy reveal">The Evolve Health AI Difference</h2>
          </div>
          <div className="diff-grid">
            {diff.map((d,i)=>(
              <div key={i} className="card reveal" style={{ padding:'2rem',transitionDelay:`${i*100}ms` }}>
                <div className="icon-box" style={{ marginBottom:'1.1rem' }}>{d.icon}</div>
                <h3 style={{ fontFamily:'Inter,sans-serif',fontSize:'.97rem',fontWeight:700,color:'var(--navy)',marginBottom:'.7rem' }}>{d.title}</h3>
                <p style={{ fontSize:'.85rem',lineHeight:1.7,color:'var(--charcoal)' }}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES DETAIL */}
      <section className="section-lg" style={{ background:'var(--off-white)' }}>
        <div className="container">
          <div style={{ textAlign:'center',marginBottom:'3rem' }}>
            <span className="section-label reveal">Core Services</span>
            <h2 className="display-sm text-navy reveal" style={{ marginBottom:'.6rem' }}>Our Core AI Services</h2>
            <p className="body reveal" style={{ color:'var(--charcoal)',maxWidth:'460px',margin:'0 auto' }}>A focused suite of high-impact solutions, each built to address a specific clinical challenge.</p>
          </div>
          <div style={{ display:'flex',flexDirection:'column',gap:'1.25rem' }}>
            {services.map((s,i)=>(
              <div key={i} className="reveal" style={{ background:'#fff',borderRadius:'14px',padding:'2.5rem',border:'1px solid var(--border)',boxShadow:'0 2px 20px rgba(29,53,87,.05)',transitionDelay:`${i*60}ms` }}>
                <div className="service-detail-row">
                  <div>
                    <div style={{ display:'flex',alignItems:'center',gap:'10px',marginBottom:'1rem' }}>
                      <div className="icon-box-sm">{s.icon}</div>
                      <h3 style={{ fontFamily:'Inter,sans-serif',fontSize:'.93rem',fontWeight:700,color:'var(--navy)' }}>{s.title}</h3>
                    </div>
                    <p style={{ fontSize:'.85rem',lineHeight:1.65,color:'var(--charcoal)',marginBottom:'1rem' }}>{s.what}</p>
                    <div style={{ padding:'.9rem 1.1rem',borderRadius:'8px',background:'var(--accent)' }}>
                      <p style={{ fontSize:'.65rem',fontWeight:700,textTransform:'uppercase',letterSpacing:'.09em',color:'var(--steel)',marginBottom:'.3rem' }}>Typical Outcome</p>
                      <p style={{ fontSize:'.87rem',fontWeight:600,color:'var(--navy)' }}>{s.outcome}</p>
                    </div>
                  </div>
                  <div>
                    <p style={{ fontSize:'.65rem',fontWeight:700,textTransform:'uppercase',letterSpacing:'.09em',color:'var(--steel)',marginBottom:'.8rem' }}>What It Does</p>
                    <ul style={{ listStyle:'none',padding:0,margin:0,display:'flex',flexDirection:'column',gap:'.6rem' }}>
                      {s.does.map((item,j)=>(
                        <li key={j} style={{ display:'flex',gap:'8px',alignItems:'flex-start' }}>
                          <CheckCircle size={13} style={{ color:'var(--steel)',flexShrink:0,marginTop:'3px' }}/>
                          <span style={{ fontSize:'.83rem',color:'var(--charcoal)',lineHeight:1.5 }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p style={{ fontSize:'.65rem',fontWeight:700,textTransform:'uppercase',letterSpacing:'.09em',color:'var(--steel)',marginBottom:'.8rem' }}>Best For</p>
                    <p style={{ fontSize:'.85rem',lineHeight:1.7,color:'var(--charcoal)' }}>{s.who}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MSO */}
      <section className="section-lg" style={{ background:'#fff' }}>
        <div className="container">
          <div className="two-col-50">
            <div>
              <span className="section-label reveal">Beyond AI</span>
              <h2 className="display-sm text-navy reveal" style={{ marginBottom:'1rem' }}>A Full Operational Backbone</h2>
              <p className="body reveal" style={{ color:'var(--charcoal)',marginBottom:'1rem' }}>For organizations that need more than technology — our Management Services Organization (MSO) model provides the administrative infrastructure to support sustainable clinical growth.</p>
              <p className="body reveal" style={{ color:'var(--charcoal)',marginBottom:'2rem' }}>Whether you're a single-location practice or a multi-site organization, our MSO framework gives you the operational stability to focus on care.</p>
              <Link to="/contact" className="btn btn-primary reveal">Talk to Our Team <ArrowRight size={15}/></Link>
            </div>
            <div style={{ display:'flex',flexDirection:'column',gap:'.9rem' }}>
              {msoItems.map((item,i)=>(
                <div key={i} className="reveal" style={{ display:'flex',alignItems:'center',gap:'12px',padding:'1rem 1.2rem',borderRadius:'9px',background:'var(--off-white)',border:'1px solid var(--border)',transitionDelay:`${i*65}ms` }}>
                  <div style={{ width:'28px',height:'28px',borderRadius:'50%',background:'var(--navy)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0 }}>
                    <CheckCircle size={13} color="white"/>
                  </div>
                  <span style={{ fontSize:'.87rem',fontWeight:500,color:'var(--navy)' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner title="Not Sure Where to Start? Start with a Conversation." body="Our clinical AI team will walk through your current workflows and give you an honest assessment of where AI can make the biggest difference." />
    </main>
  )
}
