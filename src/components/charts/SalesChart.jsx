import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts'
import { monthlySales } from '../../data/mockData.js'
import ChartTooltip from './ChartTooltip.jsx'

export default function SalesChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={monthlySales} margin={{ top: 8, right: 8, left: -12, bottom: 0 }}>
        <defs>
          {['apparel', 'electronics', 'home', 'beauty'].map((k, i) => (
            <linearGradient id={`sales-${k}`} x1="0" y1="0" x2="0" y2="1" key={k}>
              <stop offset="0%" stopColor={['#7C5CFC', '#22D3B8', '#F5B84C', '#FF6B8B'][i]} stopOpacity={0.4} />
              <stop offset="100%" stopColor={['#7C5CFC', '#22D3B8', '#F5B84C', '#FF6B8B'][i]} stopOpacity={0} />
            </linearGradient>
          ))}
        </defs>
        <CartesianGrid vertical={false} stroke="#232838" strokeDasharray="3 6" />
        <XAxis dataKey="month" stroke="#5A6178" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#5A6178" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(v) => `$${v / 1000}k`} />
        <Tooltip content={<ChartTooltip prefix="$" />} />
        <Legend wrapperStyle={{ fontSize: 12, color: '#8B93A7' }} iconType="circle" iconSize={8} />
        <Area type="monotone" dataKey="apparel" stackId="1" stroke="#7C5CFC" fill="url(#sales-apparel)" strokeWidth={2} />
        <Area type="monotone" dataKey="electronics" stackId="1" stroke="#22D3B8" fill="url(#sales-electronics)" strokeWidth={2} />
        <Area type="monotone" dataKey="home" stackId="1" stroke="#F5B84C" fill="url(#sales-home)" strokeWidth={2} />
        <Area type="monotone" dataKey="beauty" stackId="1" stroke="#FF6B8B" fill="url(#sales-beauty)" strokeWidth={2} />
      </AreaChart>
    </ResponsiveContainer>
  )
}
