const tones = {
  violet: 'bg-signal-violet/12 text-signal-violet border-signal-violet/25',
  teal: 'bg-signal-teal/12 text-signal-teal border-signal-teal/25',
  amber: 'bg-signal-amber/12 text-signal-amber border-signal-amber/25',
  rose: 'bg-signal-rose/12 text-signal-rose border-signal-rose/25',
  neutral: 'bg-base-600/60 text-ink-300 border-base-500',
}

export default function Badge({ children, tone = 'neutral', className = '' }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${tones[tone]} ${className}`}>
      {children}
    </span>
  )
}
