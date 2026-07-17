import { profile } from '../data/content'
import SectionHeading from './SectionHeading'

const links = [
  { label: 'EMAIL', value: profile.email, href: `mailto:${profile.email}` },
  { label: 'GITHUB', value: 'github.com/ArthurFachel', href: profile.github },
  { label: 'LINKEDIN', value: 'in/arthurfachelnunes', href: profile.linkedin },
]

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading eyebrow="SEC_06 // OPEN_CHANNEL" title="CONTACT" />

      <div className="terminal-chrome p-6 sm:p-8">
        <p className="mb-6 font-mono text-sm leading-relaxed text-[var(--color-text-dim)]">
          <span className="text-[var(--color-accent)]">$ </span>
          Open to research collaborations, internships, and data/ML roles. Reach out directly:
          <span className="caret text-[var(--color-accent)]"> _</span>
        </p>

        <div className="grid gap-4 sm:grid-cols-3">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="border border-[var(--color-border)] p-4 transition-colors hover:border-[var(--color-accent)]"
            >
              <p className="mb-1 text-[10px] tracking-widest text-[var(--color-accent)]">
                {l.label}
              </p>
              <p className="break-words text-xs text-[var(--color-text)]">{l.value}</p>
            </a>
          ))}
        </div>

        <a
          href={`mailto:${profile.email}`}
          className="mt-6 inline-block w-full border border-[var(--color-accent)] bg-[var(--color-accent)] px-5 py-3 text-center text-xs font-semibold tracking-widest text-[#0a0a0d] transition-opacity hover:opacity-90 sm:w-auto"
        >
          SEND_MESSAGE →
        </a>
      </div>
    </section>
  )
}
