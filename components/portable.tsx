import Image from "next/image";
import { PortableText, type PortableTextComponents } from "next-sanity";
import { slugify } from "@/lib/sanity";
const tone = { info: "border-sky-400/50", tip: "border-lime", warning: "border-amber-400/60" } as const;
const plain = (v: { children?: { text: string }[] }) => (v.children ?? []).map((c) => c.text).join("");
const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="my-5 leading-8 text-neutral-300">{children}</p>,
    h2: ({ children, value }) => <h2 id={slugify(plain(value))} className="mb-4 mt-14 text-3xl font-medium text-white">{children}</h2>,
    h3: ({ children }) => <h3 className="mb-3 mt-10 text-xl font-medium text-white">{children}</h3>,
    blockquote: ({ children }) => <blockquote className="my-8 border-l-2 border-lime pl-5 text-lg text-neutral-200">{children}</blockquote>,
  },
  marks: { code: ({ children }) => <code className="bg-neutral-900 px-1.5 py-0.5 font-mono text-sm text-lime">{children}</code>,
    link: ({ children, value }) => <a href={value?.href} className="text-lime underline underline-offset-4">{children}</a> },
  types: {
    codeBlock: ({ value }) => (
      <figure className="frame my-8 overflow-hidden">
        <figcaption className="border-b border-line px-4 py-2 font-mono text-xs text-mute">{value.filename ?? value.language}</figcaption>
        <pre className="overflow-x-auto p-4 font-mono text-sm text-neutral-200"><code>{value.code}</code></pre>
      </figure>),
    callout: ({ value }) => <aside className={`my-8 border-l-2 bg-panel p-5 text-neutral-200 ${tone[value.tone as keyof typeof tone] ?? tone.info}`}>{value.text}</aside>,
    figure: ({ value }) => value.url ? (
      <figure className="my-10"><div className="relative aspect-video border border-line"><Image src={value.url} alt={value.alt} fill sizes="(min-width:768px) 720px, 100vw" className="object-contain" /></div>
        {value.caption && <figcaption className="mt-2 text-sm text-mute">{value.caption}</figcaption>}</figure>) : null,
    table: ({ value }) => { const [head, ...rows] = (value.rows ?? []) as { cells: string[] }[]; return (
      <div className="my-8 overflow-x-auto"><table className="w-full border border-line text-left text-sm">
        {head && <thead className="bg-panel"><tr>{head.cells.map((c, i) => <th key={i} className="border-b border-line p-3 text-white">{c}</th>)}</tr></thead>}
        <tbody>{rows.map((r, i) => <tr key={i}>{r.cells.map((c, j) => <td key={j} className="border-t border-line p-3 text-neutral-300">{c}</td>)}</tr>)}</tbody></table></div>); },
  },
};
export function Body({ value }: { value: Parameters<typeof PortableText>[0]["value"] }) { return <PortableText value={value} components={components} />; }
