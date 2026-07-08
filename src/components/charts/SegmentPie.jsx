import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'
import { segmentDistribution } from '../../data/mockData.js'
import ChartTooltip from './ChartTooltip.jsx'

export default function SegmentPie({ height = 240 }) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <PieChart>
        <Pie
          data={segmentDistribution}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius="62%"
          outerRadius="90%"
          paddingAngle={3}
          strokeWidth={0}
        >
          {segmentDistribution.map((s) => (
            <Cell key={s.name} fill={s.color} />
          ))}
        </Pie>
        <Tooltip content={<ChartTooltip />} />
      </PieChart>
    </ResponsiveContainer>
  )
}
