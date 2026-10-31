import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
const hl = ["Infrastructure as Code", "Deployment Automation", "Cloud & Container Infrastructure"];
export function About() {
  return (
    <Section id="about" title="Engineering beyond deployment." kicker="About">
      <div className="grid gap-10 md:grid-cols-[1.3fr_1fr]">
        <Reveal className="max-w-prose space-y-4 text-neutral-400">
          <p>My approach to DevOps goes beyond getting applications running. I focus on building structured infrastructure, automating repetitive processes, improving deployment workflows, and understanding how applications operate in real environments.</p>
          <p>Through hands-on projects, I have worked with AWS infrastructure, Terraform, Docker, CI/CD pipelines, Linux administration, and application deployment.</p>
          <p>I enjoy solving infrastructure challenges and building systems that are easier to deploy, maintain, and scale.</p>
        </Reveal>
        <Reveal delay={0.1}><ul className="frame divide-y divide-line">{hl.map((h) => <li key={h} className="px-5 py-5 text-white">{h}</li>)}</ul></Reveal>
      </div>
    </Section>
  );
}
