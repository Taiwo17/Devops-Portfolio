import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Body } from "@/components/portable";
import { getArticle, headings, readingTime, slugify } from "@/lib/sanity";
export const revalidate = 60;
type P = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: P): Promise<Metadata> {
  const a = await getArticle((await params).slug);
  if (!a) return {};
  return { title: a.seoTitle ?? a.title, description: a.seoDescription ?? a.excerpt, openGraph: { title: a.seoTitle ?? a.title, description: a.seoDescription ?? a.excerpt, type: "article", publishedTime: a.publishedAt, images: a.coverUrl ? [a.coverUrl] : undefined } };
}
export default async function ArticlePage({ params }: P) {
  const a = await getArticle((await params).slug);
  if (!a) notFound();
  const toc = headings(a.body);
  return (<><Nav /><main className="mx-auto max-w-3xl px-5 py-16">
    <Link href="/blog" className="font-mono text-sm text-mute hover:text-white">Back to blog</Link>
    <p className="mt-8 font-mono text-xs text-mute">{new Date(a.publishedAt).toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}, {readingTime(a.body)} min read</p>
    <h1 className="mt-3 text-4xl font-medium leading-tight text-white md:text-5xl">{a.title}</h1>
    <p className="mt-4 text-lg text-neutral-400">{a.excerpt}</p>
    {a.coverUrl && <div className="relative mt-10 aspect-video border border-line"><Image src={a.coverUrl} alt={a.coverAlt ?? a.title} fill priority sizes="768px" className="object-cover" /></div>}
    {toc.length > 2 && <nav aria-label="Table of contents" className="frame mt-10 p-5"><p className="font-mono text-xs text-mute">In this article</p>
      <ul className="mt-3 space-y-1.5 text-sm">{toc.map((t) => <li key={t}><a className="text-neutral-300 hover:text-lime" href={`#${slugify(t)}`}>{t}</a></li>)}</ul></nav>}
    <article className="mt-6"><Body value={a.body} /></article>
  </main><Footer /></>);
}
