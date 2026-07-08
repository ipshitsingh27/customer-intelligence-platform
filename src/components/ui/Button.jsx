const variants = {
  primary: 'bg-gradient-to-r from-signal-violet to-signal-violetDim text-white hover:brightness-110 shadow-[0_8px_24px_-8px_rgba(124,92,252,0.6)]',
  secondary: 'bg-base-700 text-ink-100 border border-base-500 hover:bg-base-600',
  ghost: 'text-ink-300 hover:text-ink-100 hover:bg-base-700/60',
  outline: 'border border-base-500 text-ink-100 hover:border-signal-violet/60 hover:text-white',
}

export default function Button({ children, variant = 'primary', className = '', icon: Icon, ...props }) {
  return (
    <button
      className={`focus-ring inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200 active:scale-[0.98] disabled:opacity-40 disabled:pointer-events-none ${variants[variant]} ${className}`}
      {...props}
    >
      {Icon && <Icon size={16} strokeWidth={2.25} />}
      {children}
    </button>
  )
}
