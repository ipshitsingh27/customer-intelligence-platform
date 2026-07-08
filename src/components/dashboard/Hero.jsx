import { motion } from 'framer-motion'
import { Sparkles, ArrowRight } from 'lucide-react'
import { workspace } from '../../data/mockData.js'
import Button from '../ui/Button.jsx'

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass relative overflow-hidden rounded-2xl px-6 py-8 sm:px-9 sm:py-10"
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-signal-violet/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-signal-teal/15 blur-3xl" />
      <div className="relative flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-signal-violet/30 bg-signal-violet/10 px-3 py-1 text-xs font-medium text-signal-violet">
            <Sparkles size={12} /> Signal detected
          </span>
          <h1 className="mt-4 font-display text-2xl font-semibold leading-tight text-ink-100 sm:text-3xl">
            Good to see you, {workspace.user.name.split(' ')[0]}. Revenue is up{' '}
            <span className="text-gradient">12.4%</span> this month.
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-ink-500">
            Your AI model reviewed 18,420 customer profiles overnight and surfaced 6 new
            opportunities across retention and merchandising.
          </p>
        </div>
        <div className="flex flex-shrink-0 items-center gap-3">
          <Button variant="primary" icon={Sparkles}>
            View AI Insights
          </Button>
          <Button variant="outline" icon={ArrowRight}>
            Full Report
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
