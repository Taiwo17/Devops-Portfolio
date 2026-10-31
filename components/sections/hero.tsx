"use client";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import type { Project } from "@/data/projects";
import { site } from "@/lib/site";
export function Hero({ projects }: { projects: Project[] }) {
  const reduce = useReducedMotion();
  const a = (i: number) => ({ initial: reduce ? false : { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.1 * i, duration: 0.6 } } as const);
  return (
    <section id="home" className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:py-24 lg:grid-cols-[1.05fr_1fr]">
      <div className="flex flex-col justify-center">
        <motion.p {...a(0)} className="mb-6 w-fit border border-line px-2 py-1 font-mono text-xs text-mute">DevOps Engineer | Cloud Infrastructure | Automation</motion.p>
        <motion.h1 {...a(1)} className="text-5xl font-medium leading-[1.02] tracking-tight text-white md:text-7xl">Building reliable infrastructure. Automating what matters.</motion.h1>
        <motion.p {...a(2)} className="mt-6 max-w-lg text-lg text-neutral-400">I&apos;m a DevOps Engineer focused on cloud infrastructure, containerisation, infrastructure as code, and CI/CD automation. I build practical solutions that make application deployment and infrastructure management more reliable and efficient.</motion.p>
        <motion.div {...a(3)} className="mt-8 flex flex-wrap items-center gap-3">
          <a href="#projects" className="bg-lime px-5 py-3 font-mono text-sm font-medium text-black">Explore My Work</a>
          <a href="#contact" className="border border-line px-5 py-3 font-mono text-sm text-white hover:border-lime">Get In Touch</a>
          <a href={site.github} aria-label="GitHub" className="p-2 text-mute hover:text-white"><Github size={20} /></a>
          {site.linkedin && <a href={site.linkedin} aria-label="LinkedIn" className="p-2 text-mute hover:text-white"><Linkedin size={20} /></a>}
        </motion.div>
      </div>
      <motion.div {...a(2)} className="frame relative overflow-hidden">
        <Image src="/images/landscape.jpg" alt="Monochrome mountain lake landscape used as a textured backdrop" fill priority sizes="(min-width:1024px) 40vw, 100vw" className="object-cover opacity-30" />
        <div className="relative p-5 font-mono text-xs">
          <p className="border-b border-line pb-3 text-mute">taiwo / portfolio / projects</p>
          {projects.map((p, i) => (
            <a key={p.slug} href={`#${p.slug}`} className="group block border-b border-line py-5">
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm text-white group-hover:text-lime">{p.title}</span>
                <span className="flex items-center gap-1.5 text-mute"><motion.span animate={reduce ? undefined : { opacity: [1, 0.3, 1] }} transition={{ repeat: Infinity, duration: 2.4, delay: i * 0.4 }} className="h-1.5 w-1.5 rounded-full bg-lime" />public repo</span>
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">{p.tags.slice(0, 4).map((t) => <span key={t} className="bg-neutral-900 px-1.5 py-0.5 text-mute">{t}</span>)}</div>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
