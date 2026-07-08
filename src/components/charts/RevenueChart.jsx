import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'
import { revenueTrend } from '../../data/mockData.js'
import ChartTooltip from './ChartTooltip.jsx'

export default function RevenueChart() {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <AreaChart data={revenueTrend} margin={{ top: 8, right: 8, left: -12, bottom: 0 }}>
        <defs>
          <linearGradient id="revFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7C5CFC" stopOpacity={0.35} />
            <stop offset="100%" stopColor="#7C5CFC" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} stroke="#232838" strokeDasharray="3 6" />
        <XAxis dataKey="month" stroke="#5A6178" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#5A6178"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(v) => `$${v / 1000}k`}
        />
        <Tooltip content={<ChartTooltip prefix="$" />} />
        <Area
          type="monotone"
          dataKey="target"
          stroke="#5A6178"
          strokeDasharray="4 4"
          strokeWidth={1.5}
          fill="none"
        />
        <Area
          type="monotone"
          dataKey="revenue"
          stroke="#7C5CFC"
          strokeWidth={2.5}
          fill="url(#revFill)"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}
