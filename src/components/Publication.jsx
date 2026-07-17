import { publication } from '../data/content'
import SectionHeading from './SectionHeading'

export default function Publication() {
  return (
    <section id="research" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading eyebrow="SEC_03 // RESEARCH_LOG" title="PUBLICATIONS" />

      <div className="terminal-chrome p-6">
        <p className="mb-3 text-[10px] tracking-widest text-[var(--color-ok)]">
          [ ACCEPTED // BRACIS 2026 ]
        </p>
        <p className="font-mono text-sm leading-relaxed text-[var(--color-text)]">
          {publication.citation}{' '}
          <span className="italic text-[var(--color-accent)]">{publication.title}</span>
        </p>
        <p className="mt-2 text-xs text-[var(--color-text-dim)]">{publication.venue}</p>
      </div>
    </section>
  )
}
