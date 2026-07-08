import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, ReferenceLine } from 'recharts'
import { forecast } from '../../data/mockData.js'
import ChartTooltip from './ChartTooltip.jsx'

export default function ForecastChart() {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <AreaChart data={forecast} margin={{ top: 8, right: 8, left: -12, bottom: 0 }}>
        <defs>
          <linearGradient id="actualFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22D3B8" stopOpacity={0.35} />
            <stop offset="100%" stopColor="#22D3B8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="forecastFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7C5CFC" stopOpacity={0.3} />
            <stop offset="100%" stopColor="#7C5CFC" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} stroke="#232838" strokeDasharray="3 6" />
        <XAxis dataKey="month" stroke="#5A6178" fontSize={11} tickLine={false} axisLine={false} />
        <YAxis stroke="#5A6178" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(v) => `$${v / 1000}k`} />
        <Tooltip content={<ChartTooltip prefix="$" />} />
        <ReferenceLine x="Dec" stroke="#5A6178" strokeDasharray="4 4" />
        <Area type="monotone" dataKey="actual" name="Actual" stroke="#22D3B8" strokeWidth={2.5} fill="url(#actualFill)" connectNulls />
        <Area type="monotone" dataKey="forecast" name="Forecast" stroke="#7C5CFC" strokeWidth={2.5} strokeDasharray="5 3" fill="url(#forecastFill)" connectNulls />
      </AreaChart>
    </ResponsiveContainer>
  )
}
