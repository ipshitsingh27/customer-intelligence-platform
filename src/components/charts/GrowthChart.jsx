import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts'
import { customerGrowth } from '../../data/mockData.js'
import ChartTooltip from './ChartTooltip.jsx'

export default function GrowthChart() {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <BarChart data={customerGrowth} margin={{ top: 8, right: 8, left: -12, bottom: 0 }} barGap={4}>
        <CartesianGrid vertical={false} stroke="#232838" strokeDasharray="3 6" />
        <XAxis dataKey="month" stroke="#5A6178" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#5A6178" fontSize={12} tickLine={false} axisLine={false} />
        <Tooltip content={<ChartTooltip />} cursor={{ fill: 'rgba(124,92,252,0.06)' }} />
        <Legend
          wrapperStyle={{ fontSize: 12, color: '#8B93A7' }}
          iconType="circle"
          iconSize={8}
        />
        <Bar dataKey="new" name="New" fill="#22D3B8" radius={[4, 4, 0, 0]} />
        <Bar dataKey="churned" name="Churned" fill="#FF6B8B" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
