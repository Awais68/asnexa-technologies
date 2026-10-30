"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/work", label: "Our approach" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[#14171deF] backdrop-blur-xl">
      <div className="container flex h-[76px] items-center justify-between">
        <Link href="/" aria-label="AsNexa Technologies home" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center border border-[#477bff80] bg-[#172b50] font-[family-name:var(--font-manrope)] text-sm font-bold text-white">A<span className="text-[var(--blue)]">N</span></span>
          <span className="leading-tight"><span className="block font-[family-name:var(--font-manrope)] text-[15px] font-bold tracking-tight">AsNexa</span><span className="block text-[9px] font-semibold tracking-[.2em] text-[var(--muted)]">TECHNOLOGIES</span></span>
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          {links.map(link => <Link key={link.href} href={link.href} className="text-xs font-medium text-[var(--steel)] transition-colors hover:text-white">{link.label}</Link>)}
        </nav>
        <div className="hidden md:block"><Link href="/contact" className="button-primary min-h-[43px] px-4">Book a discovery call <ArrowUpRight size={14}/></Link></div>
        <button type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen(v => !v)} className="flex h-10 w-10 items-center justify-center border border-[var(--border)] text-[var(--ice)] md:hidden">{open ? <X size={19}/> : <Menu size={19}/>}</button>
      </div>
      {open ? <nav aria-label="Mobile navigation" className="border-t border-[var(--border)] bg-[var(--obsidian)] px-5 py-4 md:hidden">
        {links.map(link => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="block border-b border-[var(--border)] py-4 text-sm text-[var(--steel)]">{link.label}</Link>)}
        <Link href="/contact" onClick={() => setOpen(false)} className="button-primary mt-4 w-full">Book a discovery call <ArrowUpRight size={14}/></Link>
      </nav> : null}
    </header>
  );
}