import Link from "next/link";
import { ArrowLeft } from "lucide-react";
export default function NotFound(){return <section className="page-hero"><div className="container"><div className="eyebrow">404 / Page not found</div><h1 className="display mt-6">This page took a <span className="text-blue">different route.</span></h1><p className="body-copy mt-6 max-w-[560px]">The page may have moved, or the address may be incorrect. Let’s get you back to something useful.</p><Link href="/" className="button-primary mt-8"><ArrowLeft size={16}/> Back to homepage</Link></div></section>}
