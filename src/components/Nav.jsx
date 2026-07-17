import { useEffect, useState } from 'react'
import { navLinks } from '../data/content'

function useClock() {
  const [time, setTime] = useState(new Date())
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(id)
  }, [])
  return time
}

export default function Nav() {
  const time = useClock()
  const [open, setOpen] = useState(false)
  const hh = String(time.getHours()).padStart(2, '0')
  const mm = String(time.getMinutes()).padStart(2, '0')
  const ss = String(time.getSeconds()).padStart(2, '0')

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="font-display text-sm font-semibold tracking-widest text-[var(--color-text)]">
          ARFN<span className="text-[var(--color-accent)]">.SYS</span>
        </a>

        <ul className="hidden gap-6 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-xs tracking-widest text-[var(--color-text-dim)] transition-colors hover:text-[var(--color-accent)]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden font-mono text-xs text-[var(--color-text-faint)] md:block">
          LOCAL_TIME: {hh}:{mm}:{ss}
        </div>

        <button
          className="text-xs tracking-widest text-[var(--color-accent)] md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? '[ CLOSE ]' : '[ MENU ]'}
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-[var(--color-border)] px-5 py-3 md:hidden">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-xs tracking-widest text-[var(--color-text-dim)] hover:text-[var(--color-accent)]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
