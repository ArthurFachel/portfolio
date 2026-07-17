import { stats } from '../data/content'

export default function StatsBar() {
  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-bg-raised)]/40">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-8 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center sm:text-left">
            <p className="font-display text-2xl font-semibold text-[var(--color-accent)] sm:text-3xl">
              {s.value}
            </p>
            <p className="mt-1 text-[10px] tracking-widest text-[var(--color-text-faint)]">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
