export default function Tabs({ tabs, active, onChange }) {
  return (
    <div className="inline-flex items-center gap-1 rounded-xl border border-base-500 bg-base-700/40 p-1">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`focus-ring rounded-lg px-3.5 py-1.5 text-sm font-medium transition-all duration-200 ${
            active === tab
              ? 'bg-base-500 text-ink-100 shadow-sm'
              : 'text-ink-500 hover:text-ink-300'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}
