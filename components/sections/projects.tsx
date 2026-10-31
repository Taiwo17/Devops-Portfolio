"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Github } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import type { Project } from "@/data/projects";
function Card({ p }: { p: Project }) {
  const [open, setOpen] = useState(false);
  return (
    <article id={p.slug} className="frame p-6 md:p-8">
      <h3 className="text-xl font-medium text-white md:text-2xl">{p.title}</h3>
      <p className="mt-3 max-w-2xl text-neutral-400">{p.summary}</p>
      <ul className="mt-4 flex flex-wrap gap-1.5">{p.tags.map((t) => <li key={t} className="bg-neutral-900 px-2 py-1 font-mono text-xs text-mute">{t}</li>)}</ul>
      <div className="mt-6 flex flex-wrap gap-4">
        <button onClick={() => setOpen(!open)} aria-expanded={open} className="flex items-center gap-1 font-mono text-sm text-white hover:text-lime">Technical details <ChevronDown size={16} className={open ? "rotate-180" : ""} /></button>
        <a href={p.repo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 font-mono text-sm text-lime"><Github size={16} />View repository</a>
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <ul className="mt-6 grid gap-2 border-t border-line pt-6 text-sm text-neutral-300 sm:grid-cols-2">{p.highlights.map((h) => <li key={h} className="before:mr-2 before:text-lime before:content-['+']">{h}</li>)}</ul>
            {p.flow && <ol className="mt-6 flex flex-wrap items-center gap-2 font-mono text-xs text-mute">{p.flow.map((s, i) => <li key={s} className="flex items-center gap-2"><span className="border border-line px-2 py-1 text-white">{s}</span>{i < p.flow!.length - 1 && <span aria-hidden>/</span>}</li>)}</ol>}
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}
export function Projects({ items }: { items: Project[] }) {
  return (
    <Section id="projects" title="Featured projects" kicker="Public repositories">
      <div className="space-y-4">{items.map((p, i) => <Reveal key={p.slug} delay={i * 0.08}><Card p={p} /></Reveal>)}</div>
    </Section>
  );
}
