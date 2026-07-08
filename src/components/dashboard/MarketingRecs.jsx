import { marketingRecommendations } from '../../data/mockData.js'
import Card from '../ui/Card.jsx'
import SectionHeader from '../ui/SectionHeader.jsx'
import Badge from '../ui/Badge.jsx'

const impactTone = { High: 'teal', Medium: 'amber', Low: 'neutral' }

export default function MarketingRecs() {
  return (
    <Card className="p-5">
      <SectionHeader title="Marketing Recommendations" description="Actions ranked by expected impact" />
      <div className="space-y-2.5">
        {marketingRecommendations.map((m) => (
          <div
            key={m.id}
            className="flex items-center justify-between gap-3 rounded-xl border border-base-500 bg-base-700/30 px-4 py-3"
          >
            <div>
              <p className="text-sm font-medium text-ink-100">{m.title}</p>
              <p className="mt-0.5 text-xs text-ink-700">Segment: {m.segment} · Effort: {m.effort}</p>
            </div>
            <Badge tone={impactTone[m.impact]}>{m.impact} impact</Badge>
          </div>
        ))}
      </div>
    </Card>
  )
}
