export default function ChartTooltip({ active, payload, label, prefix = '' }) {
  if (!active || !payload || !payload.length) return null
  return (
    <div className="glass rounded-xl px-3.5 py-2.5 text-xs shadow-card">
      <p className="mb-1 font-medium text-ink-300">{label}</p>
      {payload.map((p) => (
        <div key={p.dataKey} className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: p.color || p.stroke }} />
          <span className="text-ink-500 capitalize">{p.name}:</span>
          <span className="font-semibold text-ink-100 tabular-nums">
            {prefix}
            {typeof p.value === 'number' ? p.value.toLocaleString() : p.value}
          </span>
        </div>
      ))}
    </div>
  )
}
