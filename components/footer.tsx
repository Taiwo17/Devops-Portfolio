import { site } from "@/lib/site";
export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-8 text-sm text-mute">
        <p>Designed and engineered by {site.short}. &copy; {new Date().getFullYear()}</p>
        <nav aria-label="Footer" className="flex gap-5">
          <a href={site.github} className="hover:text-white">GitHub</a>
          {site.linkedin && <a href={site.linkedin} className="hover:text-white">LinkedIn</a>}
          {site.email && <a href={`mailto:${site.email}`} className="hover:text-white">Email</a>}
        </nav>
      </div>
    </footer>
  );
}
