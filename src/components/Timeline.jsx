import { timeline } from '../data/content'
import SectionHeading from './SectionHeading'

export default function Timeline() {
  return (
    <section id="timeline" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading eyebrow="SEC_04 // TIMELINE // TRACE" title="RESEARCH JOURNEY" />

      <div className="space-y-6 border-l border-[var(--color-border)] pl-6">
        {timeline.map((t) => (
          <div key={t.role} className="relative">
            <span className="absolute -left-[27px] top-1.5 h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]" />
            <div className="terminal-chrome p-5">
              <p className="mb-1 text-[10px] tracking-widest text-[var(--color-accent)]">
                {t.period}
              </p>
              <h3 className="font-display text-base font-semibold text-[var(--color-text)]">
                {t.role}
              </h3>
              <p className="mb-3 text-xs text-[var(--color-text-dim)]">{t.org}</p>
              <ul className="mb-3 space-y-1.5">
                {t.points.map((pt) => (
                  <li key={pt} className="flex gap-2 text-xs leading-relaxed text-[var(--color-text-dim)]">
                    <span className="text-[var(--color-accent)]">›</span>
                    {pt}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {t.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-[var(--color-border)] px-2 py-0.5 text-[10px] text-[var(--color-text-faint)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
