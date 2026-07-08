export function Table({ children, className = '' }) {
  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="w-full border-collapse text-left text-sm">{children}</table>
    </div>
  )
}

export function THead({ children }) {
  return <thead className="border-b border-base-500">{children}</thead>
}

export function TH({ children, className = '', ...props }) {
  return (
    <th className={`px-4 py-3 text-xs font-medium uppercase tracking-wide text-ink-500 ${className}`} {...props}>
      {children}
    </th>
  )
}

export function TBody({ children }) {
  return <tbody className="divide-y divide-base-600/60">{children}</tbody>
}

export function TR({ children, className = '', ...props }) {
  return <tr className={`transition-colors hover:bg-base-700/40 ${className}`} {...props}>{children}</tr>
}

export function TD({ children, className = '', ...props }) {
  return <td className={`px-4 py-3.5 text-ink-300 ${className}`} {...props}>{children}</td>
}
