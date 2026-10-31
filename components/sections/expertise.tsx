"use client";
import { useState } from "react";
import { Section } from "@/components/ui/section";
import { skillGroups, ecosystem } from "@/data/skills";
export function Expertise() {
  const [id, setId] = useState(skillGroups[0].id);
  const group = skillGroups.find((g) => g.id === id)!;
  return (
    <Section id="expertise" title="Technical expertise" kicker="Hands-on first, awareness second">
      <div role="tablist" aria-label="Skill categories" className="flex flex-wrap gap-2">
        {skillGroups.map((g) => (
          <button key={g.id} role="tab" aria-selected={g.id === id} onClick={() => setId(g.id)}
            className={`border px-3 py-2 font-mono text-xs transition-colors ${g.id === id ? "border-lime bg-lime text-black" : "border-line text-mute hover:text-white"}`}>{g.label}</button>
        ))}
      </div>
      <div role="tabpanel" className="frame mt-4 p-6">
        <p className="mb-4 font-mono text-xs text-mute">{group.items[0].level === "hands-on" ? "Used in my own projects" : "Used in my own projects."}</p>
        <ul className="flex flex-wrap gap-2">{group.items.map((i) => <li key={i.name} className="border border-line px-3 py-1.5 text-sm text-white">{i.name}</li>)}</ul>
      </div>
      <div className="mt-20 border-t border-dashed border-line pt-12">
        <h3 className="text-2xl font-medium text-white">The Modern DevOps Ecosystem</h3>
        <p className="mt-2 max-w-xl text-mute">The wider landscape I follow.</p>
        <dl className="mt-8 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
          {ecosystem.map((c) => (
            <div key={c.label} className="bg-ink p-5"><dt className="font-mono text-xs text-mute">{c.label}</dt><dd className="mt-2 text-sm text-neutral-300">{c.items.join(", ")}</dd></div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
