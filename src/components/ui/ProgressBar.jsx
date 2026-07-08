export default function ProgressBar({ value = 0, tone = 'violet', className = '' }) {
  const colors = {
    violet: 'from-signal-violet to-signal-violetDim',
    teal: 'from-signal-teal to-signal-teal/60',
    amber: 'from-signal-amber to-signal-amber/60',
    rose: 'from-signal-rose to-signal-rose/60',
  }
  return (
    <div className={`h-1.5 w-full overflow-hidden rounded-full bg-base-600 ${className}`}>
      <div
        className={`h-full rounded-full bg-gradient-to-r ${colors[tone]} transition-all duration-700 ease-out`}
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  )
}
