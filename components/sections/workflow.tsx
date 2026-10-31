"use client";
import { motion, useReducedMotion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { stages, principles } from "@/data/content";
export function Workflow() {
  const reduce = useReducedMotion();
  return (
    <Section id="workflow" title="From code to cloud." kicker="Delivery workflow">
      <p className="max-w-2xl text-neutral-400">Code is versioned, validated by CI/CD, built into an image, deployed onto infrastructure that is itself defined in code, then watched through health checks and logs so problems surface early.</p>
      <ol className="mt-10 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
        {stages.map((s, i) => (
          <li key={s} className="relative bg-ink p-5">
            <span className="text-sm text-white">{s}</span>
            <motion.span aria-hidden className="absolute bottom-0 left-0 h-px bg-lime" initial={{ width: 0 }}
              animate={reduce ? { width: "100%" } : { width: ["0%", "100%", "100%", "0%"] }}
              transition={{ duration: 8, repeat: Infinity, delay: i, times: [0, 0.15, 0.7, 1] }} />
          </li>
        ))}
      </ol>
      <h3 className="mt-24 text-3xl font-medium text-white">How I approach infrastructure.</h3>
      <dl className="mt-8 divide-y divide-line border-y border-line">
        {principles.map(([t, d]) => <div key={t} className="grid gap-1 py-5 md:grid-cols-[1fr_2fr]"><dt className="text-white">{t}</dt><dd className="text-neutral-400">{d}</dd></div>)}
      </dl>
    </Section>
  );
}
