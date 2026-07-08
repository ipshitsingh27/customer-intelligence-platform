import { Sparkles, UploadCloud, FileText, Users, Zap } from 'lucide-react'
import { recentActivity } from '../../data/mockData.js'
import Card from '../ui/Card.jsx'
import SectionHeader from '../ui/SectionHeader.jsx'

const iconMap = { ai: Sparkles, upload: UploadCloud, report: FileText, segment: Users, system: Zap }
const colorMap = {
  ai: 'text-signal-violet bg-signal-violet/10',
  upload: 'text-signal-teal bg-signal-teal/10',
  report: 'text-signal-amber bg-signal-amber/10',
  segment: 'text-signal-rose bg-signal-rose/10',
  system: 'text-ink-500 bg-base-600/60',
}

export default function RecentActivity() {
  return (
    <Card className="p-5">
      <SectionHeader title="Recent Activity" description="What's happened across your workspace" />
      <div className="space-y-4">
        {recentActivity.map((a, i) => {
          const Icon = iconMap[a.type]
          return (
            <div key={a.id} className="flex gap-3">
              <div className="flex flex-col items-center">
                <span className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg ${colorMap[a.type]}`}>
                  <Icon size={14} />
                </span>
                {i < recentActivity.length - 1 && <span className="mt-1 w-px flex-1 bg-base-500" />}
              </div>
              <div className="pb-4">
                <p className="text-sm text-ink-200">{a.text}</p>
                <p className="mt-0.5 text-xs text-ink-700">{a.time}</p>
              </div>
            </div>
          )
        })}
      </div>
    </Card>
  )
}
