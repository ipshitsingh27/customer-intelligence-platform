export default function SectionHeader({ eyebrow, title, description, action }) {
  return (
    <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
      <div>
        {eyebrow && (
          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-signal-violet">{eyebrow}</p>
        )}
        <h2 className="font-display text-xl font-semibold text-ink-100">{title}</h2>
        {description && <p className="mt-1 text-sm text-ink-500">{description}</p>}
      </div>
      {action}
    </div>
  )
}
