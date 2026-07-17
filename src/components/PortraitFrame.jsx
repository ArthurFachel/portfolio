import portrait from '../assets/portrait.jpg'

export default function PortraitFrame() {
  return (
    <div className="terminal-chrome relative w-full max-w-sm overflow-hidden rounded-md shadow-2xl shadow-black/40">
      <div className="flex items-center gap-2 border-b border-[var(--color-border)] bg-[var(--color-bg-inset)] px-3 py-2">
        <span className="terminal-dot bg-[#ff5f56]" />
        <span className="terminal-dot bg-[#ffbd2e]" />
        <span className="terminal-dot bg-[#27c93f]" />
        <span className="ml-2 font-mono text-[11px] text-[var(--color-text-faint)]">
          PORTRAIT_01.JPG
        </span>
      </div>
      <div className="relative">
        <img
          src={portrait}
          alt="Arthur Fachel Nunes"
          className="aspect-[900/848] w-full object-cover grayscale contrast-110"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/40 via-transparent to-transparent" />
      </div>
    </div>
  )
}
