import { motion } from 'framer-motion'
import { Sparkles, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { aiInsights } from '../../data/mockData.js'

export default function AIBanner() {
  const top = aiInsights[0]
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="relative overflow-hidden rounded-2xl border border-signal-violet/25 bg-gradient-to-r from-signal-violet/10 via-base-800 to-signal-teal/10 px-6 py-5"
    >
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex items-start gap-3.5">
          <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-signal-violet to-signal-teal">
            <Sparkles size={16} className="text-white" />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-signal-violet">
              Top AI Recommendation · {top.confidence}% confidence
            </p>
            <p className="mt-1 text-sm font-medium text-ink-100">{top.title}</p>
          </div>
        </div>
        <Link
          to="/insights"
          className="focus-ring flex flex-shrink-0 items-center gap-1 rounded-xl border border-base-500 bg-base-700/50 px-3.5 py-2 text-sm font-medium text-ink-200 transition-colors hover:border-signal-violet/40 hover:text-white"
        >
          See all insights <ChevronRight size={14} />
        </Link>
      </div>
    </motion.div>
  )
}
