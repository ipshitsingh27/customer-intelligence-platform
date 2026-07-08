import { useState } from 'react'
import { ArrowUpRight, ArrowDownRight } from 'lucide-react'
import { analyticsMetrics } from '../data/mockData.js'
import Card from '../components/ui/Card.jsx'
import SectionHeader from '../components/ui/SectionHeader.jsx'
import Tabs from '../components/ui/Tabs.jsx'
import RevenueChart from '../components/charts/RevenueChart.jsx'
import SalesChart from '../components/charts/SalesChart.jsx'
import GrowthChart from '../components/charts/GrowthChart.jsx'

const metricCards = [
  { key: 'revenue', label: 'Revenue', prefix: '$' },
  { key: 'orders', label: 'Orders', prefix: '' },
  { key: 'retention', label: 'Retention Rate', prefix: '', suffix: '%' },
  { key: 'ltv', label: 'Avg. LTV', prefix: '$' },
  { key: 'aov', label: 'Avg. Order Value', prefix: '$' },
  { key: 'growth', label: 'Growth Rate', prefix: '', suffix: '%' },
]

export default function Analytics() {
  const [range, setRange] = useState('12 Months')

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl font-semibold text-ink-100">Analytics</h1>
          <p className="mt-1 text-sm text-ink-500">Deep-dive into revenue, orders, retention and lifetime value.</p>
        </div>
        <Tabs tabs={['30 Days', '90 Days', '12 Months']} active={range} onChange={setRange} />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {metricCards.map((m) => {
          const data = analyticsMetrics[m.key]
          const isUp = data.change >= 0
          return (
            <Card key={m.key} className="p-5">
              <p className="text-sm text-ink-500">{m.label}</p>
              <div className="mt-2 flex items-end justify-between">
                <p className="font-display text-2xl font-semibold text-ink-100 tabular-nums">
                  {m.prefix}
                  {data.value.toLocaleString()}
                  {m.suffix || ''}
                </p>
                <span className={`flex items-center gap-0.5 text-xs font-semibold ${isUp ? 'text-signal-teal' : 'text-signal-rose'}`}>
                  {isUp ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                  {Math.abs(data.change)}%
                </span>
              </div>
            </Card>
          )
        })}
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <Card className="p-5">
          <SectionHeader title="Revenue Trend" description="Actual vs. target revenue" />
          <RevenueChart />
        </Card>
        <Card className="p-5">
          <SectionHeader title="Customer Growth" description="Acquisition vs. churn" />
          <GrowthChart />
        </Card>
      </div>

      <Card className="p-5">
        <SectionHeader title="Sales by Category" description="Monthly revenue split across product categories" />
        <SalesChart />
      </Card>
    </div>
  )
}
