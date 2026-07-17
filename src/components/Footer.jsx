import { profile } from '../data/content'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-[var(--color-border)] px-5 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-center text-[10px] tracking-widest text-[var(--color-text-faint)] sm:flex-row sm:text-left">
        <p>© {year} {profile.name.toUpperCase()}</p>
        <p>BUILT_WITH: REACT // TAILWIND // VITE</p>
        <p>STATUS: <span className="text-[var(--color-ok)]">OPEN_TO_WORK</span></p>
      </div>
    </footer>
  )
}
