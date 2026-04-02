import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useRevealAll } from '../hooks/useReveal'
import PageHero from '../components/PageHero'
import CTABanner from '../components/CTABanner'

const cats = [
  { title:'About AI in Healthcare', items:[
    { q:'Is AI safe to use in a clinical environment?', a:"When implemented correctly, yes. AI tools in healthcare must be designed with clinical accuracy, regulatory compliance, and patient safety as the primary requirements. Every solution we deploy is validated for clinical environment use, HIPAA-compliant by design, and implemented with change management support." },
    { q:'Will AI replace clinical staff?', a:"No — and that's not what it's designed to do. The most effective healthcare AI tools augment your staff, taking over repetitive, low-judgment tasks so your team can focus on higher-value work. Documentation assistance, scheduling automation, and intake management don't replace people — they give your people their time back." },
    { q:'How do AI documentation tools maintain accuracy?', a:"AI documentation tools work as assistants — not autonomous authors. They generate drafts based on clinical context, which are reviewed and approved by the provider before being finalized. The AI reduces the mechanical burden of writing so providers can make better decisions, faster." },
  ]},
  { title:'HIPAA & Data Security', items:[
    { q:'Are your solutions HIPAA compliant?', a:"Yes. HIPAA compliance is a baseline requirement on every engagement, not an add-on. We will execute a Business Associate Agreement (BAA) with your organization, and all tools, integrations, and data flows are designed to meet or exceed HIPAA's technical, administrative, and physical safeguard requirements." },
    { q:'Where is patient data stored and processed?', a:"All data is stored and processed within U.S.-based, HIPAA-compliant cloud infrastructure. We do not store patient data on our own servers — all data resides in your environment or within a compliant, contracted cloud provider with a fully executed BAA." },
    { q:"What happens if there's a data breach?", a:"Our architecture is designed to minimize breach risk through encryption at rest and in transit, access control, audit logging, and continuous monitoring. In the event of a security incident, our team follows defined incident response procedures and will notify your organization per HIPAA's Breach Notification Rule." },
  ]},
  { title:'Working With Evolve Health AI', items:[
    { q:'How long does implementation take?', a:"It depends on the scope. A targeted solution — such as AI-assisted documentation for a single-location practice — can often be implemented in 4–6 weeks. A multi-service or enterprise deployment typically takes 2–4 months. We'll provide a clear timeline during the discovery process." },
    { q:'Do you integrate with our existing EHR/EMR?', a:"Yes. EHR/EMR integration is central to how we work. We have integration experience across major platforms including Epic, Cerner, PointClickCare, MatrixCare, Athenahealth, and others. We'll assess your specific environment during the discovery phase." },
    { q:'What does ongoing support look like after implementation?', a:"We don't disappear after go-live. Post-implementation includes performance monitoring, staff Q&A, optimization recommendations, and a formal 90-day review. Long-term support arrangements are available for organizations wanting a continued operational partnership." },
    { q:'How do you measure success?', a:"We define success metrics with you during discovery and solution design — before anything is built. Metrics may include hours saved per provider per day, claim denial rate reduction, patient satisfaction scores, or other KPIs relevant to your goals. We track and report against them throughout the engagement." },
    { q:'What does a free consultation involve?', a:"A 30-minute call with a member of our healthcare AI team. No pitch deck, no hard sell. We ask about your organization, workflows, and biggest pain points — and share honest, experience-based perspective on where AI can and can't help. Most clients leave with 2–3 specific ideas worth exploring further." },
  ]},
  { title:'Pricing & Engagement', items:[
    { q:'How do you price your services?', a:"Pricing is scoped based on the size of your organization, the complexity of the implementation, and the services selected. We offer both project-based and ongoing retainer engagement models. All pricing is discussed transparently after the discovery consultation — there are no surprises." },
    { q:'Is there a minimum contract commitment?', a:"Our strategy and roadmap engagements are typically project-based with no ongoing commitment required. Implementation and managed services engagements are structured as 6- or 12-month agreements. We'll walk you through the options during the proposal phase." },
    { q:'Do you offer a pilot or proof-of-concept?', a:"Yes. For most organizations, we recommend starting with a focused pilot — a single use case in a defined part of your operation — before scaling. This lets you see measurable results and build internal confidence before committing to a broader deployment." },
  ]},
]

function Accordion({ items }) {
  const [open, setOpen] = useState(null)
  return (
    <div style={{ background:'#fff',borderRadius:'14px',border:'1px solid var(--border)',boxShadow:'0 2px 20px rgba(29,53,87,.05)',overflow:'hidden' }}>
      {items.map((item,i)=>(
        <div key={i} style={{ borderBottom:i<items.length-1?'1px solid var(--border)':'none' }}>
          <button onClick={()=>setOpen(open===i?null:i)}
            style={{ width:'100%',textAlign:'left',display:'flex',alignItems:'center',justifyContent:'space-between',padding:'1.2rem 1.5rem',gap:'1rem',cursor:'pointer',border:'none',background:'none',fontFamily:'Inter,sans-serif',fontSize:'.93rem',fontWeight:500,color:'var(--navy)' }}>
            <span>{item.q}</span>
            <ChevronDown size={17} style={{ color:'var(--steel)',flexShrink:0,transition:'transform .25s',transform:open===i?'rotate(180deg)':'none' }}/>
          </button>
          {open===i&&(
            <div style={{ padding:'0 1.5rem 1.4rem' }}>
              <p style={{ fontSize:'.87rem',lineHeight:1.75,color:'var(--charcoal)' }}>{item.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default function FAQ() {
  useRevealAll()
  return (
    <main>
      <PageHero badge="FAQ" title="Questions We Hear From Healthcare Leaders Like You" subtitle="Honest answers about AI in healthcare, how we work, and what to expect when you partner with Evolve Health AI." />
      <section className="section-lg">
        <div className="container-sm">
          <div style={{ display:'flex',flexDirection:'column',gap:'3rem' }}>
            {cats.map((cat,ci)=>(
              <div key={ci} className="reveal" style={{ transitionDelay:`${ci*80}ms` }}>
                <div style={{ display:'flex',alignItems:'center',gap:'1rem',marginBottom:'1.2rem' }}>
                  <span style={{ fontFamily:'Playfair Display,serif',fontSize:'2rem',fontWeight:700,color:'var(--steel-pale)',lineHeight:1 }}>{String(ci+1).padStart(2,'0')}</span>
                  <h2 style={{ fontFamily:'Inter,sans-serif',fontSize:'1.1rem',fontWeight:700,color:'var(--navy)' }}>{cat.title}</h2>
                </div>
                <Accordion items={cat.items}/>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTABanner title="Still Have Questions?" body="Book a free consultation and get direct answers from our healthcare AI team — no commitment required." cta="Book Free Consultation"/>
    </main>
  )
}
