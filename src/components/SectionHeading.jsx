export default function SectionHeading({ eyebrow, title }) {
  return (
    <div className="mb-10">
      <p className="bracket-label mb-3">{eyebrow}</p>
      <h2 className="font-display text-2xl font-semibold tracking-tight text-[var(--color-text)] sm:text-3xl">
        {title}
      </h2>
    </div>
  )
}
