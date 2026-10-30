import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, Bot, Boxes, Code2, Headphones, Workflow, ScanSearch, PencilRuler, Rocket, RefreshCw } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { ServiceVisual } from "@/components/service-visual";

const services = [
  { number: "01", title: "AI Business Automation", description: "Connect the tools your team already uses. Remove repetitive handoffs and give people more time for work that moves the business forward.", href: "/services/ai-business-automation", icon: Workflow, visual: "workflow" as const },
  { number: "02", title: "AI Agents & Agentic Systems", description: "Build task-focused agents that can reason, use approved tools and complete defined workflows with the right guardrails.", href: "/services/ai-agents", icon: Bot, visual: "agent" as const },
  { number: "03", title: "AI Customer Support", description: "Deliver faster, more consistent support across chat and messaging, grounded in your business knowledge and escalation rules.", href: "/services/ai-customer-support", icon: Headphones, visual: "support" as const },
  { number: "04", title: "Full-Stack Development", description: "Ship reliable websites, dashboards and business platforms with clean architecture and a clear path to future growth.", href: "/services/full-stack-development", icon: Code2, visual: "code" as const },
  { number: "05", title: "AI-Powered Applications", description: "Turn a useful AI capability into a real product, from a focused MVP to an integrated application your team can operate.", href: "/services/ai-applications", icon: Boxes, visual: "product" as const },
];

const process = [
  { step: "01", title: "Discover", detail: "Understand the business goal, current workflow and constraints before choosing a solution.", icon: ScanSearch },
  { step: "02", title: "Design", detail: "Map the experience, system boundaries, integrations and success measures.", icon: PencilRuler },
  { step: "03", title: "Build", detail: "Develop in focused milestones, with maintainability and security considered from day one.", icon: Code2 },
  { step: "04", title: "Deploy", detail: "Prepare the product for real use, with clear handover and operational ownership.", icon: Rocket },
  { step: "05", title: "Improve", detail: "Use feedback and measurable signals to refine what is working and fix what is not.", icon: RefreshCw },
];

const faqs = [
  ["What kind of businesses do you work with?", "We work with small and medium-sized businesses that want to improve operations, customer experience or digital products. The best starting point is a clear business problem, not a particular technology."],
  ["Can you work with our existing tools?", "Usually, yes. We first review the tools, APIs and access available. Integration feasibility depends on the vendor, permissions and the condition of the existing systems."],
  ["Do you build custom AI agents?", "Yes. Agent scope is designed around specific tasks, approved tools, human review points and measurable outcomes. We avoid giving an agent broad access without a clear reason."],
  ["How do projects get started?", "Start with a discovery call. We will discuss the problem, desired outcome, constraints and a sensible first milestone before proposing a scope."],
  ["Do you offer ongoing support?", "Support and improvement can be included in a project plan or agreed separately. The exact coverage, response expectations and responsibilities are defined before work begins."],
];

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AsNexa Technologies",
    url: "https://asnexatech.com",
    description: "AI automation and full-stack software development for growing businesses.",
    knowsAbout: ["AI business automation", "AI agents", "Customer support automation", "Full-stack development", "AI-powered applications"],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        <div className="absolute inset-0 grid-lines opacity-70" aria-hidden="true" />
        <div className="absolute -right-40 top-8 h-[620px] w-[620px] rounded-full border border-[#477bff20]" aria-hidden="true" />
        <div className="absolute -right-12 top-24 h-[420px] w-[420px] rounded-full border border-[#dce8f510]" aria-hidden="true" />
        <div className="container relative grid min-h-[690px] items-center gap-14 py-24 lg:grid-cols-[1.08fr_.92fr]">
          <div className="max-w-[690px]">
            <div className="eyebrow mb-8">Technology built around your business</div>
            <h1 className="display max-w-[760px]">Make your business work <span className="text-blue">smarter.</span><br />Not harder.</h1>
            <p className="body-copy mt-7 max-w-[560px] text-base">We design practical AI systems and custom software that help growing businesses simplify operations, serve customers better and build what comes next.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link className="button-primary" href="/contact">Book a discovery call <ArrowUpRight size={16} /></Link>
              <Link className="button-secondary" href="/services">Explore what we do <ArrowRight size={16} /></Link>
            </div>
            <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-[var(--border)] pt-6 text-xs text-[var(--muted)]">
              <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[var(--blue)]" /> Business-first thinking</span>
              <span>Human-led, AI-enabled</span>
              <span>Built for real workflows</span>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[490px]">
            <div className="absolute inset-8 rounded-full border border-[#477bff35]" />
            <div className="absolute inset-16 rounded-full border border-[#dce8f51a]" />
            <div className="relative rounded-md border border-[var(--border)] bg-[#191f29] p-5 shadow-2xl shadow-black/30">
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
                <div><div className="text-[10px] uppercase tracking-[.18em] text-[var(--muted)]">Operations overview</div><div className="mt-1 text-sm font-semibold">A clearer view of work</div></div>
                <span className="rounded-sm border border-[#477bff55] bg-[var(--blue-soft)] px-2 py-1 text-[9px] font-semibold tracking-wider text-[var(--ice)]">SYSTEM MAP</span>
              </div>
              <div className="grid grid-cols-[1fr_32px_1fr] items-center gap-2 py-8">
                <div className="space-y-3">
                  <div className="rounded border border-[var(--border)] bg-[#222a36] p-3"><div className="text-[9px] text-[var(--muted)]">INPUT</div><div className="mt-1 text-xs">Customer request</div></div>
                  <div className="rounded border border-[var(--border)] bg-[#222a36] p-3"><div className="text-[9px] text-[var(--muted)]">CONTEXT</div><div className="mt-1 text-xs">Business knowledge</div></div>
                  <div className="rounded border border-[var(--border)] bg-[#222a36] p-3"><div className="text-[9px] text-[var(--muted)]">RULES</div><div className="mt-1 text-xs">Team permissions</div></div>
                </div>
                <div className="flex flex-col items-center gap-5 text-[var(--blue)]"><ArrowRight size={17}/><ArrowRight size={17}/><ArrowRight size={17}/></div>
                <div className="rounded border border-[#477bff70] bg-[#172b50] p-4">
                  <div className="mb-4 flex h-9 w-9 items-center justify-center rounded border border-[#477bff70] bg-[#477bff20] text-[var(--ice)]"><Bot size={18}/></div>
                  <div className="text-xs font-semibold">Intelligent workflow</div>
                  <p className="mt-2 text-[10px] leading-5 text-[#aebed4]">Understand. Decide. Act with guardrails.</p>
                  <div className="mt-5 border-t border-[#477bff40] pt-3 text-[9px] tracking-wider text-[#aebed4]">HUMAN OVERSIGHT</div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 border-t border-[var(--border)] pt-4">
                {["Connected tools", "Clear ownership", "Visible outcomes"].map((item) => <div key={item} className="rounded bg-[#222a36] px-2 py-3 text-center text-[9px] text-[var(--steel)]">{item}</div>)}
              </div>
            </div>
            <div className="absolute -bottom-7 -left-5 hidden rounded border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-xs text-[var(--steel)] shadow-xl sm:block"><span className="mr-2 inline-block h-2 w-2 rounded-full bg-[var(--blue)]"/>Designed for real work</div>
          </div>
        </div>
        <a href="#services" className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[10px] uppercase tracking-[.18em] text-[var(--muted)] md:flex">Scroll to explore <ArrowDown size={13}/></a>
      </section>

      <section className="section-sm border-b border-[var(--border)]">
        <div className="container grid gap-8 md:grid-cols-[.8fr_1.2fr] md:items-center">
          <div className="eyebrow">A better way to build</div>
          <p className="max-w-[780px] font-[family-name:var(--font-manrope)] text-xl leading-relaxed tracking-tight text-[var(--ice)] md:text-2xl">Technology should remove friction, not create another layer of complexity. We start with the work that matters, then build the right system around it.</p>
        </div>
      </section>

      <section id="services" className="section">
        <div className="container">
          <SectionHeading eyebrow="What we do" title="Practical technology. Meaningful progress." description="From a single workflow to a complete digital product, we connect business needs with technology that earns its place." />
          <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return <article key={service.number} className="card group flex flex-col p-5 transition-colors hover:border-[#477bff80]">
                <ServiceVisual kind={service.visual}/>
                <div className="mt-6 flex items-center justify-between"><span className="text-[10px] tracking-[.16em] text-[var(--muted)]">{service.number} / SERVICE</span><Icon size={17} className="text-[var(--blue)]"/></div>
                <h3 className="mt-3 font-[family-name:var(--font-manrope)] text-xl font-semibold tracking-tight">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-[var(--steel)]">{service.description}</p>
                <Link href={service.href} className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-[var(--ice)] transition-colors group-hover:text-[var(--blue)]">Explore service <ArrowUpRight size={14}/></Link>
              </article>;
            })}
          </div>
          <div className="mt-8 flex justify-center"><Link href="/services" className="button-secondary">View all services <ArrowRight size={15}/></Link></div>
        </div>
      </section>

      <section className="section border-y border-[var(--border)] bg-[#171c24]">
        <div className="container grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
          <div><div className="eyebrow">Where we help</div><h2 className="heading mt-5">Solve the friction holding your team back.</h2><p className="body-copy mt-5">The right solution depends on the bottleneck. We look at the whole workflow before recommending a tool or building a feature.</p></div>
          <div className="grid gap-0 sm:grid-cols-2">
            {[
              ["Repetitive admin", "Reduce manual data entry, follow-ups and routine coordination."],
              ["Slow customer response", "Help customers find answers sooner and route complex cases to people."],
              ["Disconnected systems", "Move information between tools with fewer brittle handoffs."],
              ["Manual reporting", "Bring key operational information into a clearer, more useful view."],
              ["Product bottlenecks", "Build the internal tools and customer experiences your team needs."],
              ["Unclear AI adoption", "Identify safe, useful AI opportunities instead of adding AI for its own sake."],
            ].map(([title, detail], i) => <div key={title} className="border-b border-[var(--border)] py-6 sm:px-5 sm:nth-[2n]:border-l">
              <div className="text-[10px] tracking-widest text-[var(--blue)]">0{i + 1}</div><h3 className="mt-3 text-base font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-[var(--muted)]">{detail}</p>
            </div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="How we work" title="A clear path from problem to progress." description="Small, understandable steps. Shared decisions. No mystery handoffs." />
          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((item, i) => { const Icon = item.icon; return <div key={item.step} className="relative border-t border-[var(--border)] pt-6">
              <div className="absolute -top-[4px] left-0 h-[7px] w-[7px] rounded-full bg-[var(--blue)]"/>
              <div className="flex items-center justify-between"><span className="text-xs tracking-widest text-[var(--muted)]">{item.step}</span><Icon size={18} className="text-[var(--blue)]"/></div>
              <h3 className="mt-5 text-lg font-semibold">{item.title}</h3><p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.detail}</p>
            </div>; })}
          </div>
        </div>
      </section>

      <section className="section border-y border-[var(--border)] bg-[#171c24]">
        <div className="container grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div><div className="eyebrow">Selected work</div><h2 className="heading mt-5">Show the work. Be honest about the proof.</h2><p className="body-copy mt-5">We are preparing a portfolio of detailed project breakdowns. We would rather share real implementation context than fill this space with unverified client logos or made-up outcomes.</p><Link href="/work" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[var(--ice)] hover:text-[var(--blue)]">How we approach projects <ArrowUpRight size={16}/></Link></div>
          <div className="card p-6 md:p-8">
            <div className="flex items-center justify-between border-b border-[var(--border)] pb-5"><span className="text-xs font-semibold tracking-wider">PROJECT PRINCIPLES</span><span className="text-[10px] text-[var(--muted)]">OUR STANDARD</span></div>
            {["A real problem and a defined user", "A clear explanation of the solution", "Screenshots and implementation details", "Outcomes supported by evidence"].map((item, i) => <div key={item} className="flex items-center gap-4 border-b border-[var(--border)] py-5 last:border-0"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded border border-[#477bff60] bg-[var(--blue-soft)] text-[10px] text-[var(--ice)]">0{i+1}</span><span className="text-sm text-[var(--steel)]">{item}</span></div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Common questions" title="A few things worth knowing." description="Clear answers before we start a conversation." />
          <div className="mx-auto mt-12 max-w-[850px] divide-y divide-[var(--border)] border-y border-[var(--border)]">
            {faqs.map(([question, answer]) => <details key={question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left text-base font-semibold marker:hidden">{question}<span className="text-xl font-normal text-[var(--blue)] transition-transform group-open:rotate-45">+</span></summary>
              <p className="max-w-[740px] pt-4 text-sm leading-7 text-[var(--steel)]">{answer}</p>
            </details>)}
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <div className="relative overflow-hidden rounded-md border border-[#477bff50] bg-[#172b50] px-7 py-12 md:px-14 md:py-16">
            <div className="absolute -right-20 -top-32 h-96 w-96 rounded-full border border-[#dce8f51c]" aria-hidden="true"/>
            <div className="relative max-w-[720px]"><div className="eyebrow">Start with a conversation</div><h2 className="heading mt-5">Have a business challenge worth solving?</h2><p className="mt-5 max-w-[560px] text-sm leading-7 text-[#b9c9df]">Tell us what is slowing your team down or what you want to build. We will help you think through a sensible next step.</p><Link href="/contact" className="button-primary mt-8 bg-white text-[#172b50] hover:bg-[#dce8f5]">Book a discovery call <ArrowUpRight size={16}/></Link></div>
          </div>
        </div>
      </section>
    </>
  );
}