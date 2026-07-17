import { archiveUrl, projects } from '../data/content'
import SectionHeading from './SectionHeading'

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading eyebrow="SEC_02 // PROJECT LOG" title="SELECTED PROJECTS" />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noreferrer"
            className="terminal-chrome group flex flex-col justify-between p-5 transition-colors hover:border-[var(--color-accent)]"
          >
            <div>
              <div className="mb-3 flex items-center gap-2">
                <span className="terminal-dot bg-[#ff5f56]" />
                <span className="terminal-dot bg-[#ffbd2e]" />
                <span className="terminal-dot bg-[#27c93f]" />
              </div>
              <p className="mb-2 text-[10px] tracking-widest text-[var(--color-accent)]">
                {p.tag}
              </p>
              <h3 className="mb-2 font-display text-lg font-semibold text-[var(--color-text)] group-hover:text-[var(--color-accent)]">
                {p.name}
              </h3>
              <p className="text-xs leading-relaxed text-[var(--color-text-dim)]">
                {p.description}
              </p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="border border-[var(--color-border)] px-2 py-0.5 text-[10px] text-[var(--color-text-faint)]"
                >
                  {s}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
          href={archiveUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-block border border-[var(--color-accent)] px-6 py-2.5 text-xs font-semibold tracking-widest text-[var(--color-accent)] transition-colors hover:bg-[var(--color-accent)] hover:text-[#0a0a0d]"
        >
          EXPLORE_ARCHIVE →
        </a>
      </div>
    </section>
  )
}
