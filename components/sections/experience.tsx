import { Section } from "@/components/ui/section";
import { journey, certifications } from "@/data/content";
export function Experience() {
  return (
    <Section id="experience" title="Professional journey" kicker="Projects, training and milestones">
      <ol className="border-l border-line">
        {journey.map((e) => (
          <li key={e.title} className="relative pb-8 pl-6"><span className="absolute -left-[3px] top-2 h-1.5 w-1.5 bg-lime" aria-hidden />
            <p className="font-mono text-xs text-mute">{e.kind}{e.when ? `, ${e.when}` : ""}</p>
            <p className="mt-1 text-white">{e.title}</p><p className="text-sm text-neutral-400">{e.detail}</p></li>
        ))}
      </ol>
      <h3 id="certifications" className="mt-16 text-2xl font-medium text-white">Certifications</h3>
      <ul className="mt-6 grid gap-4 md:grid-cols-2">
        {certifications.map((c) => <li key={c.name} className="frame p-5"><p className="text-white">{c.name}</p><p className="mt-1 text-sm text-neutral-400">{c.issuer}</p><p className="mt-3 font-mono text-xs text-lime">{c.status}</p></li>)}
      </ul>
    </Section>
  );
}
