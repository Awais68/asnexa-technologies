"use client";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
export function Reveal({children,delay=0}:{children:ReactNode;delay?:number}){const reduce=useReducedMotion();return <motion.div initial={reduce?false:{opacity:0,y:22}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.18}} transition={{duration:reduce?0:.65,delay:reduce?0:delay,ease:"easeOut"}}>{children}</motion.div>}
