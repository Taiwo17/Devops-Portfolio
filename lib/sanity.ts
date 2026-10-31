import { createClient } from "next-sanity";
import { projects as local, type Project } from "@/data/projects";
import type { PortableTextBlock } from "next-sanity";
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const client = projectId ? createClient({ projectId, dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production", apiVersion: "2024-01-01", useCdn: true }) : null;
async function q<T>(query: string, fallback: T, params: Record<string, string> = {}): Promise<T> {
  if (!client) return fallback;
  try { return await client.fetch<T>(query, params, { next: { revalidate: 60 } }); } catch (e) { return fallback; }
}
export type Article = { title: string; slug: string; excerpt: string; publishedAt: string; tags: string[]; coverUrl?: string; coverAlt?: string; seoTitle?: string; seoDescription?: string; body: PortableTextBlock[] };
export type LogEntry = { title: string; slug: string; date: string; tags: string[]; body: PortableTextBlock[] };
const BODY = `body[]{..., _type=="figure" => {..., "url": image.asset->url}}`;
const ART = `title, "slug": slug.current, excerpt, publishedAt, "tags": coalesce(tags, []), "coverUrl": cover.asset->url, coverAlt, seoTitle, seoDescription, "body": coalesce(${BODY}, [])`;
export async function getProjects(): Promise<Project[]> {
  const r = await q<Project[]>(`*[_type=="project" && defined(slug.current)] | order(_createdAt desc){"slug": slug.current, title, "summary": coalesce(summary, ""), "tags": coalesce(tags, []), "highlights": coalesce(highlights, []), repo, "flow": flow}`, []);
  return r.length ? r.map((p) => ({ ...p, flow: p.flow ?? undefined })) : local;
}
export const getArticles = () => q<Article[]>(`*[_type=="article" && defined(slug.current)] | order(publishedAt desc){${ART}}`, []);
export const getArticle = async (slug: string) => (await q<Article[]>(`*[_type=="article" && slug.current==$slug][0..0]{${ART}}`, [], { slug }))[0] ?? null;
export const getLog = () => q<LogEntry[]>(`*[_type=="buildLog" && defined(slug.current)] | order(date desc){title, "slug": slug.current, date, "tags": coalesce(tags, []), "body": coalesce(${BODY}, [])}`, []);
const text = (b: PortableTextBlock[]) => b.filter((x) => x._type === "block").map((x) => ((x as { children?: { text: string }[] }).children ?? []).map((c) => c.text).join("")).join(" ");
export const readingTime = (b: PortableTextBlock[]) => Math.max(1, Math.round(text(b).split(/\s+/).length / 220));
export const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
export const headings = (b: PortableTextBlock[]) => b.filter((x) => x._type === "block" && (x as { style?: string }).style === "h2").map((x) => text([x]));
