"use client";
import { useState, type FormEvent } from "react";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { Section } from "@/components/ui/section";
import { site } from "@/lib/site";
type F = { name: string; email: string; subject: string; message: string };
const empty: F = { name: "", email: "", subject: "", message: "" };
export function Contact() {
  const [v, setV] = useState<F>(empty);
  const [err, setErr] = useState<Partial<F>>({});
  const submit = (e: FormEvent) => {
    e.preventDefault();
    const x: Partial<F> = {};
    if (v.name.trim().length < 2) x.name = "Enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(v.email)) x.email = "Enter a valid email address.";
    if (v.subject.trim().length < 3) x.subject = "Enter a subject.";
    if (v.message.trim().length < 10) x.message = "Write at least 10 characters.";
    setErr(x);
    if (Object.keys(x).length || !site.email) return;
    const body = `${v.message}\n\nFrom: ${v.name} <${v.email}>`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(v.subject)}&body=${encodeURIComponent(body)}`;
  };
  const field = (k: keyof F, label: string, area = false) => {
    const cls = "mt-1 w-full border border-line bg-ink px-3 py-2.5 text-white";
    return (
      <label className="block text-sm text-neutral-300">{label}
        {area ? <textarea rows={5} className={cls} value={v[k]} onChange={(e) => setV({ ...v, [k]: e.target.value })} aria-invalid={!!err[k]} />
          : <input className={cls} type={k === "email" ? "email" : "text"} value={v[k]} onChange={(e) => setV({ ...v, [k]: e.target.value })} aria-invalid={!!err[k]} />}
        {err[k] && <span role="alert" className="text-xs text-red-400">{err[k]}</span>}
      </label>
    );
  };
  return (
    <Section id="contact" title="Let's build something reliable." kicker="Contact">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <p className="max-w-md text-neutral-400">I&apos;m open to DevOps engineering opportunities, cloud infrastructure projects, and conversations with teams building reliable technology.</p>
          <ul className="mt-8 space-y-3 text-white">
            {site.email && <li><a className="flex items-center gap-2 hover:text-lime" href={`mailto:${site.email}`}><Mail size={18} />{site.email}</a></li>}
            <li><a className="flex items-center gap-2 hover:text-lime" href={site.github}><Github size={18} />GitHub</a></li>
            {site.linkedin && <li><a className="flex items-center gap-2 hover:text-lime" href={site.linkedin}><Linkedin size={18} />LinkedIn</a></li>}
            {site.whatsapp && <li><a className="flex items-center gap-2 hover:text-lime" href={`https://wa.me/${site.whatsapp}`}><MessageCircle size={18} />WhatsApp</a></li>}
          </ul>
        </div>
        <form onSubmit={submit} noValidate className="frame space-y-4 p-6">
          {field("name", "Name")}{field("email", "Email")}{field("subject", "Subject")}{field("message", "Message", true)}
          <button className="bg-lime px-5 py-3 font-mono text-sm font-medium text-black">Send via email app</button>
          <p className="text-xs text-mute">{site.email ? "This opens your email app with the message filled in. No data is stored." : "Set NEXT_PUBLIC_CONTACT_EMAIL to enable sending."}</p>
        </form>
      </div>
    </Section>
  );
}
