import { FileSpreadsheet } from 'lucide-react'
import { uploads } from '../../data/mockData.js'
import Card from '../ui/Card.jsx'
import Badge from '../ui/Badge.jsx'
import SectionHeader from '../ui/SectionHeader.jsx'

const statusTone = { Processed: 'teal', Processing: 'amber', Failed: 'rose' }

export default function RecentUploads() {
  return (
    <Card className="p-5">
      <SectionHeader title="Recent Uploads" description="Latest datasets ingested into your workspace" />
      <div className="space-y-1">
        {uploads.slice(0, 4).map((u) => (
          <div key={u.id} className="flex items-center gap-3 rounded-xl px-2 py-2.5 hover:bg-base-700/40">
            <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-base-600/60 text-ink-500">
              <FileSpreadsheet size={16} />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-ink-200">{u.name}</p>
              <p className="text-xs text-ink-700">{u.rows.toLocaleString()} rows · {u.size} · {u.date}</p>
            </div>
            <Badge tone={statusTone[u.status]}>{u.status}</Badge>
          </div>
        ))}
      </div>
    </Card>
  )
}
