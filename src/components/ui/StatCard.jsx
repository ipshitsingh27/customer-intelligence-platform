import { ArrowUpRight, ArrowDownRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Card from './Card.jsx'

export default function StatCard({ label, value, prefix = '', change, trend, spark, index = 0 }) {
  const isUp = trend === 'up'
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: 'easeOut' }}
    >
      <Card className="p-5 hover:border-signal-violet/30 transition-colors duration-300 group">
        <div className="flex items-start justify-between">
          <p className="text-sm text-ink-500 font-medium">{label}</p>
          <span
            className={`flex items-center gap-0.5 rounded-full px-2 py-0.5 text-xs font-semibold ${
              isUp ? 'bg-signal-teal/10 text-signal-teal' : 'bg-signal-rose/10 text-signal-rose'
            }`}
          >
            {isUp ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
            {Math.abs(change)}%
          </span>
        </div>
        <p className="mt-3 font-display text-3xl font-semibold text-ink-100 tabular-nums">
          {prefix}
          {value.toLocaleString()}
        </p>
        <div className="mt-4 flex h-8 items-end gap-[3px]">
          {spark.map((v, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm bg-signal-violet/25 group-hover:bg-signal-violet/50 transition-all duration-300"
              style={{ height: `${(v / Math.max(...spark)) * 100}%` }}
            />
          ))}
        </div>
      </Card>
    </motion.div>
  )
}
