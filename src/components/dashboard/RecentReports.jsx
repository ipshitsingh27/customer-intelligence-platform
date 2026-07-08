import { FileText, Download } from 'lucide-react'
import { reports } from '../../data/mockData.js'
import Card from '../ui/Card.jsx'
import SectionHeader from '../ui/SectionHeader.jsx'

export default function RecentReports() {
  return (
    <Card className="p-5">
      <SectionHeader title="Recent Reports" description="Generated exports ready to share" />
      <div className="space-y-1">
        {reports.slice(0, 4).map((r) => (
          <div key={r.id} className="flex items-center gap-3 rounded-xl px-2 py-2.5 hover:bg-base-700/40">
            <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-base-600/60 text-ink-500">
              <FileText size={16} />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-ink-200">{r.name}</p>
              <p className="text-xs text-ink-700">{r.type} · {r.size} · {r.generated}</p>
            </div>
            <button className="focus-ring rounded-lg p-2 text-ink-500 hover:bg-base-600 hover:text-ink-100">
              <Download size={15} />
            </button>
          </div>
        ))}
      </div>
    </Card>
  )
}
