import type { ReactNode } from "react";
export function Section({ id, title, kicker, children }: { id: string; title: string; kicker?: string; children: ReactNode }) {
  return (
    <section id={id} className="border-t border-line">
      <div className="hatch h-6 border-b border-line" aria-hidden />
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        {kicker && <p className="mb-3 font-mono text-xs text-mute">{kicker}</p>}
        <h2 className="max-w-2xl text-3xl font-medium tracking-tight text-white md:text-5xl">{title}</h2>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
