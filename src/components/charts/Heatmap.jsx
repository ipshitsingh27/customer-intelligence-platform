import { heatmap } from '../../data/mockData.js'

function intensityColor(v) {
  // 0-100 -> violet scale
  const alpha = 0.06 + (v / 100) * 0.85
  return `rgba(124, 92, 252, ${alpha.toFixed(2)})`
}

export default function Heatmap() {
  return (
    <div className="overflow-x-auto">
      <div className="min-w-[420px]">
        <div className="mb-2 grid grid-cols-[48px_repeat(6,1fr)] gap-1.5">
          <div />
          {heatmap.hours.map((h) => (
            <div key={h} className="text-center text-[11px] text-ink-700">
              {h}:00
            </div>
          ))}
        </div>
        {heatmap.days.map((day, r) => (
          <div key={day} className="mb-1.5 grid grid-cols-[48px_repeat(6,1fr)] gap-1.5">
            <div className="flex items-center text-[11px] font-medium text-ink-500">{day}</div>
            {heatmap.data[r].map((v, c) => (
              <div
                key={c}
                title={`${day} ${heatmap.hours[c]}:00 — intensity ${v}`}
                className="aspect-square rounded-md transition-transform hover:scale-110"
                style={{ backgroundColor: intensityColor(v) }}
              />
            ))}
          </div>
        ))}
        <div className="mt-3 flex items-center gap-2 text-[11px] text-ink-700">
          <span>Low</span>
          <div className="flex h-2 flex-1 max-w-[140px] overflow-hidden rounded-full">
            {[10, 30, 50, 70, 90].map((v) => (
              <div key={v} className="flex-1" style={{ backgroundColor: intensityColor(v) }} />
            ))}
          </div>
          <span>High</span>
        </div>
      </div>
    </div>
  )
}
