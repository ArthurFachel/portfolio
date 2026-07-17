import { languages, skillGroups } from '../data/content'
import SectionHeading from './SectionHeading'

function Bar({ pct }) {
  return (
    <div className="h-1.5 w-full overflow-hidden bg-[var(--color-border)]">
      <div
        className="h-full bg-[var(--color-accent)] transition-all duration-700"
        style={{ width: `${pct}%` }}
      />
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading eyebrow="SEC_05 // SKILL_MATRIX" title="SKILLS" />

      <div className="grid gap-8 md:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <p className="mb-4 text-[11px] tracking-widest text-[var(--color-text-faint)]">
              {group.label}
            </p>
            <div className="space-y-4">
              {group.items.map((item) => (
                <div key={item.name}>
                  <div className="mb-1.5 flex items-center justify-between text-xs">
                    <span className="text-[var(--color-text)]">{item.name}</span>
                    <span className="text-[10px] text-[var(--color-text-faint)]">{item.level}</span>
                  </div>
                  <Bar pct={item.pct} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 terminal-chrome p-5">
        <p className="mb-3 text-[11px] tracking-widest text-[var(--color-text-faint)]">
          guest@arfn:~$ cat languages.conf
        </p>
        <div className="flex flex-wrap gap-x-8 gap-y-2">
          {languages.map((l) => (
            <p key={l.name} className="text-xs text-[var(--color-text-dim)]">
              <span className="text-[var(--color-text)]">{l.name}</span>: {l.level}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
