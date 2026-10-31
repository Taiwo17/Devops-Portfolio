import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Body } from "@/components/portable";
import { getArticles, getLog, readingTime } from "@/lib/sanity";
export const revalidate = 60;
export const metadata: Metadata = { title: "Blog", description: "Articles and build notes on AWS, Terraform, Docker and CI/CD." };
const fmt = (d: string) => new Date(d).toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" });
export default async function BlogPage() {
  const [articles, log] = await Promise.all([getArticles(), getLog()]);
  return (<><Nav /><main className="mx-auto max-w-6xl px-5 py-20">
    <h1 className="text-4xl font-medium text-white md:text-6xl">Blog</h1>
    <p className="mt-4 max-w-xl text-neutral-400">Articles and build notes on cloud infrastructure, automation and deployment.</p>
    {articles.length === 0 && <p className="frame mt-12 p-6 text-neutral-400">No articles yet. Publish one in the studio at /studio and it appears here.</p>}
    <div className="mt-12 grid gap-4 md:grid-cols-2">{articles.map((a) => (
      <Link key={a.slug} href={`/blog/${a.slug}`} className="frame group block overflow-hidden">
        {a.coverUrl && <div className="relative aspect-video"><Image src={a.coverUrl} alt={a.coverAlt ?? a.title} fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover" /></div>}
        <div className="p-6"><p className="font-mono text-xs text-mute">{fmt(a.publishedAt)}, {readingTime(a.body)} min read</p>
          <h2 className="mt-2 text-xl text-white group-hover:text-lime">{a.title}</h2><p className="mt-2 text-neutral-400">{a.excerpt}</p></div>
      </Link>))}</div>
    {log.length > 0 && <section className="mt-20"><h2 className="text-2xl font-medium text-white">Build log</h2>
      <div className="mt-6 divide-y divide-line border-y border-line">{log.map((l) => (
        <article key={l.slug} className="py-8"><p className="font-mono text-xs text-mute">{fmt(l.date)}</p>
          <h3 className="mt-1 text-xl text-white">{l.title}</h3><div className="max-w-2xl"><Body value={l.body} /></div></article>))}</div></section>}
  </main><Footer /></>);
}
