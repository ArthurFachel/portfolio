import { bio, specialties } from '../data/content'
import SectionHeading from './SectionHeading'
import TerminalPanel from './TerminalPanel'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading eyebrow="SEC_01 // PROFILE LOG" title="ABOUT" />

      <div className="grid gap-10 md:grid-cols-5">
        <div className="md:col-span-3">
          <p className="font-mono text-sm leading-relaxed text-[var(--color-text-dim)]">
            <span className="text-[var(--color-accent)]">$ </span>
            {bio}
          </p>
          <div className="mt-8">
            <TerminalPanel />
          </div>
        </div>

        <div className="space-y-4 md:col-span-2">
          {specialties.map((s) => (
            <div key={s.id} className="terminal-chrome p-4">
              <p className="mb-1.5 text-[11px] tracking-widest text-[var(--color-accent)]">
                {s.id} // {s.title}
              </p>
              <p className="text-xs leading-relaxed text-[var(--color-text-dim)]">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
