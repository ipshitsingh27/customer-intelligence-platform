export default function Input({ icon: Icon, className = '', ...props }) {
  return (
    <div className="relative">
      {Icon && (
        <Icon size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-500" />
      )}
      <input
        className={`focus-ring w-full rounded-xl border border-base-500 bg-base-700/60 py-2.5 text-sm text-ink-100 placeholder:text-ink-700 transition-colors focus:border-signal-violet/50 ${
          Icon ? 'pl-10 pr-4' : 'px-4'
        } ${className}`}
        {...props}
      />
    </div>
  )
}
