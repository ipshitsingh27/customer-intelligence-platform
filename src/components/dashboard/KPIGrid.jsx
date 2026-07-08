import { kpis } from '../../data/mockData.js'
import StatCard from '../ui/StatCard.jsx'

export default function KPIGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {kpis.map((k, i) => (
        <StatCard key={k.id} {...k} index={i} />
      ))}
    </div>
  )
}
