import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, ShoppingBag, Users2, Megaphone, Clock } from 'lucide-react'
import { aiInsights } from '../data/mockData.js'
import Card from '../components/ui/Card.jsx'
import Badge from '../components/ui/Badge.jsx'
import Tabs from '../components/ui/Tabs.jsx'
import ProgressBar from '../components/ui/ProgressBar.jsx'

const categoryIcon = { Merchandising: ShoppingBag, Retention: Users2, Marketing: Megaphone, Timing: Clock }
const priorityTone = { High: 'rose', Medium: 'amber', Low: 'neutral' }

export default function Insights() {
  const [filter, setFilter] = useState('All')
  const categories = ['All', ...new Set(aiInsights.map((i) => i.category))]

  const filtered = useMemo(
    () => (filter === 'All' ? aiInsights : aiInsights.filter((i) => i.category === filter)),
    [filter]
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl font-semibold text-ink-100">AI Insights</h1>
          <p className="mt-1 text-sm text-ink-500">
            Recommendations generated from your customer, order, and engagement data.
          </p>
        </div>
        <Tabs tabs={categories} active={filter} onChange={setFilter} />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((insight, i) => {
          const Icon = categoryIcon[insight.category] || Sparkles
          return (
            <motion.div
              key={insight.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
            >
              <Card className="flex h-full flex-col p-5 hover:border-signal-violet/30 transition-colors">
                <div className="flex items-start justify-between">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-signal-violet/12 text-signal-violet">
                    <Icon size={16} />
                  </span>
                  <Badge tone={priorityTone[insight.priority]}>{insight.priority} priority</Badge>
                </div>
                <p className="mt-4 text-sm font-semibold leading-snug text-ink-100">{insight.title}</p>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-ink-500">{insight.description}</p>
                <div className="mt-4">
                  <div className="mb-1.5 flex items-center justify-between text-xs">
                    <span className="text-ink-700">Confidence</span>
                    <span className="font-medium text-ink-200">{insight.confidence}%</span>
                  </div>
                  <ProgressBar value={insight.confidence} tone="violet" />
                </div>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
