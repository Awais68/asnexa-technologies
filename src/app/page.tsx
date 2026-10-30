import Link from "next/link";
import { ArrowRight, ArrowUpRight, Bot, Workflow, Headphones, Code2, Boxes, Check, Sparkles } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { HeroScene } from "@/components/hero-scene";

const services = [
  { n: "01", icon: Workflow, title: "Business automation", text: "Connect the tools your team already uses. Replace repetitive handoffs with dependable workflows.", tags: ["n8n", "Integrations", "Operations"] },
  { n: "02", icon: Bot, title: "AI agents & copilots", text: "Purpose-built agents that work with approved tools, clear boundaries and human oversight.", tags: ["Agentic AI", "MCP", "Tool use"] },
  { n: "03", icon: Headphones, title: "AI customer experience", text: "Knowledge-grounded support that answers routine questions and knows when to bring in a person.", tags: ["RAG", "Voice AI", "Support"] },
  { n: "04", icon: Code2, title: "Full-stack products", text: "Fast, thoughtful web applications, internal platforms and customer-facing experiences.", tags: ["Next.js", "TypeScript", "APIs"] },
  { n: "05", icon: Boxes, title: "AI-powered software", text: "Turn a useful AI capability into a product people can actually use and your team can maintain.", tags: ["SaaS", "Dashboards", "MVPs"] },
];

const steps = [
  ["01", "Understand", "We learn how your business works, where friction lives and what a useful outcome looks like."],
  ["02", "Shape", "We define the experience, integrations, safeguards and a realistic first milestone."],
  ["03", "Build", "We develop in focused increments, sharing progress and testing the important paths."],
  ["04", "Improve", "We measure what matters, learn from real use and make the system better over time."],
];

const faqs = [
  ["What can you automate?", "We start with repetitive, rules-based work such as lead routing, follow-ups, document handling, reporting and support workflows. We assess the tools and risks before recommending automation."],
  ["Do you build custom AI agents?", "Yes. We design agents around specific jobs, approved tools, clear permissions and human review where needed. We do not give agents unrestricted access by default."],
  ["Can you work with our existing software?", "Often, yes. We review the APIs, permissions and limitations of your current tools before confirming an integration approach."],
  ["How do we get started?", "Book a discovery call and tell us what you want to improve or build. We will discuss the problem, constraints and a sensible next step."],
];

export default function Home() {
  const schema = { "@context": "https://schema.org", "@type": "Organization", name: "AsNexa Technologies", url: "https://asnexatech.com", description: "AI business automation and full-stack software development." };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <section className="hero-section">
      <div className="hero-wash" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <Reveal><div className="eyebrow"><span /> AI SYSTEMS & DIGITAL PRODUCTS</div></Reveal>
          <Reveal delay={0.08}><h1>Make the complex<br /><em>work beautifully.</em></h1></Reveal>
          <Reveal delay={0.16}><p className="hero-lede">We help growing businesses simplify operations with thoughtful AI automation and software built around the way people work.</p></Reveal>
          <Reveal delay={0.22}><div className="hero-actions"><Link href="/contact" className="button-primary">Let&apos;s talk <ArrowUpRight size={16}/></Link><Link href="/services" className="text-link">Explore our services <ArrowRight size={15}/></Link></div></Reveal>
          <Reveal delay={0.28}><div className="hero-proof"><span><i/> Business-first thinking</span><span>Human-led, AI-enabled</span><span>Built for real workflows</span></div></Reveal>
        </div>
        <div className="hero-art">
          <HeroScene />
          <div className="hero-art-label"><span className="label-mark"><Sparkles size={15}/></span><span><b>Intelligence, in motion</b><small>Connected systems. Clear outcomes.</small></span></div>
          <div className="hero-float hero-float-top"><span className="float-dot"/> Systems connected</div>
          <div className="hero-float hero-float-bottom">Designed around people <span>↗</span></div>
        </div>
      </div>
      <div className="container hero-bottom"><span>FROM OPERATIONAL FRICTION</span><span className="hero-bottom-line"/><span>TO MEANINGFUL PROGRESS</span></div>
    </section>

    <section className="intro-band"><div className="container intro-grid"><Reveal><div className="eyebrow"><span/> OUR POINT OF VIEW</div></Reveal><Reveal delay={0.08}><p>Technology should give your team <em>room to do better work.</em> We bring practical AI and considered engineering together to make that happen.</p></Reveal></div></section>

    <section id="services" className="section services-section"><div className="container">
      <Reveal><div className="section-top"><div><div className="eyebrow"><span/> WHAT WE DO</div><h2>Useful technology.<br/><em>Real-world impact.</em></h2></div><p>From one well-designed workflow to a complete digital product, we build around the outcome, not the hype.</p></div></Reveal>
      <div className="services-grid">{services.map((s,i)=>{const Icon=s.icon;return <Reveal key={s.n} delay={i*.07}><Link href="/services" className="service-card"><div className="service-card-top"><span>{s.n} / CAPABILITY</span><Icon size={19}/></div><div className="service-art" aria-hidden="true"><div className={`service-art-core art-${i+1}`}><span>{s.n}</span></div><div className="service-art-orbit orbit-one"/><div className="service-art-orbit orbit-two"/></div><h3>{s.title}</h3><p>{s.text}</p><div className="service-tags">{s.tags.map(t=><span key={t}>{t}</span>)}</div><div className="service-arrow"><span>Explore capability</span><ArrowUpRight size={16}/></div></Link></Reveal>})}</div>
    </div></section>

    <section className="outcomes-section"><div className="container outcomes-grid"><Reveal><div><div className="eyebrow"><span/> WHERE WE MAKE A DIFFERENCE</div><h2>Less busywork.<br/><em>More forward motion.</em></h2><p className="section-copy">The best solution starts with the problem your people face every day. Here are a few places we can help.</p><Link href="/contact" className="button-secondary">Discuss a challenge <ArrowUpRight size={15}/></Link></div></Reveal><div className="outcome-list">{[["01","Repetitive operations","Reduce manual updates, follow-ups and task switching."],["02","Disconnected tools","Move information between systems without fragile handoffs."],["03","Customer response","Give customers faster answers while keeping people in control."],["04","Slow internal decisions","Bring useful information into clear, actionable views."]].map(([n,t,d],i)=><Reveal key={n} delay={i*.08}><div className="outcome-row"><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div><ArrowUpRight size={17}/></div></Reveal>)}</div></div></section>

    <section className="approach-section"><div className="container"><Reveal><div className="eyebrow"><span/> A CLEARER WAY TO BUILD</div><div className="section-top approach-heading"><h2>From first question<br/>to <em>lasting value.</em></h2><p>Good work is a partnership. You stay close to the decisions, understand what is being built and know what happens next.</p></div></Reveal><div className="steps-grid">{steps.map(([n,t,d],i)=><Reveal key={n} delay={i*.09}><div className="step-card"><div className="step-number">{n}<span/></div><h3>{t}</h3><p>{d}</p></div></Reveal>)}</div></div></section>

    <section className="principles-section"><div className="container principles-grid"><Reveal><div className="eyebrow"><span/> BUILT WITH INTENTION</div><h2>Thoughtful by design.<br/><em>Responsible by default.</em></h2></Reveal><div className="principles-list">{["Human oversight where it matters","Clear permissions and system boundaries","Maintainable software, not quick hacks","Progress measured against business goals"].map((x,i)=><Reveal key={x} delay={i*.06}><div><Check size={16}/>{x}</div></Reveal>)}</div></div></section>

    <section className="faq-section"><div className="container faq-grid"><Reveal><div className="eyebrow"><span/> GOOD TO KNOW</div><h2>Questions before<br/><em>the first conversation.</em></h2><p className="section-copy">A few straightforward answers about how we work.</p></Reveal><div className="faq-list">{faqs.map(([q,a])=><details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></div></section>

    <section className="closing-section"><div className="container"><Reveal><div className="closing-card"><div className="closing-orb" aria-hidden="true"/><div className="eyebrow"><span/> START WITH THE RIGHT QUESTION</div><h2>What could your business<br/><em>do with more room?</em></h2><p>Tell us what is slowing you down or what you want to create. We will help you find a practical next step.</p><Link href="/contact" className="button-primary">Book a discovery call <ArrowUpRight size={16}/></Link></div></Reveal></div></section>
  </>;
}
