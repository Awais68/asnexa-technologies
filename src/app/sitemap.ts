import type { MetadataRoute } from "next";
const base="https://asnexatech.com";
export default function sitemap():MetadataRoute.Sitemap{
 const routes=["","/services","/services/ai-business-automation","/services/ai-agents","/services/ai-customer-support","/services/full-stack-development","/services/ai-applications","/industries","/about","/work","/contact"];
 return routes.map(route=>({url:base+route,lastModified:new Date(),changeFrequency:route===""?"weekly":"monthly",priority:route===""?1:route.startsWith("/services")?0.8:0.6}));
}
