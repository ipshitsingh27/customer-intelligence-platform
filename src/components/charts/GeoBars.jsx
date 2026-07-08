import { motion } from 'framer-motion'
import { geography } from '../../data/mockData.js'

export default function GeoBars() {
  const max = Math.max(...geography.map((g) => g.share))
  return (
    <div className="space-y-4">
      {geography.map((g, i) => (
        <div key={g.region}>
          <div className="mb-1.5 flex items-center justify-between text-sm">
            <span className="font-medium text-ink-200">{g.region}</span>
            <span className="text-ink-500 tabular-nums">
              {g.customers.toLocaleString()} · {g.share}%
            </span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-base-600">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(g.share / max) * 100}%` }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: 'easeOut' }}
              className="h-full rounded-full bg-gradient-to-r from-signal-violet to-signal-teal"
            />
          </div>
        </div>
      ))}
    </div>
  )
}
