import Link from "next/link";
import { Mail } from "lucide-react";

const serviceLinks = [
  ["AI Business Automation", "/services/ai-business-automation"],
  ["AI Agents", "/services/ai-agents"],
  ["AI Customer Support", "/services/ai-customer-support"],
  ["Full-Stack Development", "/services/full-stack-development"],
  ["AI-Powered Applications", "/services/ai-applications"],
];

export function SiteFooter() {
  return <footer className="border-t border-[var(--border)] bg-[#101319]">
    <div className="container grid gap-12 py-14 md:grid-cols-[1.2fr_.8fr_.8fr]">
      <div><Link href="/" className="inline-flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center border border-[#477bff80] bg-[#172b50] font-bold">A<span className="text-[var(--blue)]">N</span></span><span className="font-[family-name:var(--font-manrope)] text-lg font-bold">AsNexa</span></Link><p className="mt-5 max-w-[330px] text-sm leading-7 text-[var(--muted)]">Practical AI systems and thoughtful software, built around the way your business works.</p><a href="mailto:hello@asnexatech.com" className="mt-5 inline-flex items-center gap-2 text-sm text-[var(--ice)] hover:text-[var(--blue)]"><Mail size={15}/> hello@asnexatech.com</a></div>
      <div><h3 className="text-xs font-bold uppercase tracking-[.15em] text-[var(--ice)]">Explore</h3><div className="mt-5 flex flex-col gap-4 text-sm text-[var(--muted)]"><Link href="/services" className="hover:text-white">Services</Link><Link href="/industries" className="hover:text-white">Industries</Link><Link href="/work" className="hover:text-white">Our approach</Link><Link href="/about" className="hover:text-white">About AsNexa</Link><Link href="/contact" className="hover:text-white">Contact</Link></div></div>
      <div><h3 className="text-xs font-bold uppercase tracking-[.15em] text-[var(--ice)]">Services</h3><div className="mt-5 flex flex-col gap-4 text-sm text-[var(--muted)]">{serviceLinks.map(([label, href]) => <Link key={href} href={href} className="hover:text-white">{label}</Link>)}</div></div>
    </div>
    <div className="border-t border-[var(--border)]"><div className="container flex flex-col justify-between gap-3 py-5 text-[11px] text-[var(--muted)] sm:flex-row"><span>© 2026 AsNexa Technologies. All rights reserved.</span><span>Built with clarity. Designed for real work.</span></div></div>
  </footer>;
}