import { profile } from '../data/content'
import PortraitFrame from './PortraitFrame'

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-5 pb-16 pt-14 md:pt-20">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div className="animate-fade-up">
          <p className="bracket-label mb-4">INITIALIZING PROFILE...</p>
          <p className="mb-2 font-mono text-sm text-[var(--color-text-dim)]">
            {profile.name.toUpperCase()} //
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-[var(--color-text)] sm:text-5xl">
            DATA & ML
            <br />
            <span className="text-[var(--color-accent)]">RESEARCH</span>
            <br />
            ENGINEER
          </h1>
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-[var(--color-text-dim)]">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="border border-[var(--color-accent)] bg-[var(--color-accent)] px-5 py-2.5 text-xs font-semibold tracking-widest text-[#0a0a0d] transition-opacity hover:opacity-90"
            >
              VIEW PROJECTS
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="border border-[var(--color-border-hi)] px-5 py-2.5 text-xs font-semibold tracking-widest text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              GET_RESUME.PDF
            </a>
          </div>

          <div className="mt-8 flex gap-3">
            {[
              { label: 'GH', href: profile.github },
              { label: 'IN', href: profile.linkedin },
              { label: '@', href: `mailto:${profile.email}` },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center border border-[var(--color-border)] text-xs text-[var(--color-text-dim)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <PortraitFrame />
        </div>
      </div>
    </section>
  )
}
