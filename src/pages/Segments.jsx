import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Search, ArrowUpDown, TrendingUp, TrendingDown, Minus } from 'lucide-react'
import { segments, customers } from '../data/mockData.js'
import Card from '../components/ui/Card.jsx'
import Badge from '../components/ui/Badge.jsx'
import Input from '../components/ui/Input.jsx'
import SectionHeader from '../components/ui/SectionHeader.jsx'
import SegmentPie from '../components/charts/SegmentPie.jsx'
import { Table, THead, TH, TBody, TR, TD } from '../components/ui/Table.jsx'

const trendIcon = { up: TrendingUp, down: TrendingDown, flat: Minus }
const trendTone = { up: 'text-signal-teal', down: 'text-signal-rose', flat: 'text-ink-500' }

export default function Segments() {
  const [search, setSearch] = useState('')
  const [sortKey, setSortKey] = useState('spend')
  const [sortDir, setSortDir] = useState('desc')

  const toggleSort = (key) => {
    if (sortKey === key) setSortDir((d) => (d === 'desc' ? 'asc' : 'desc'))
    else { setSortKey(key); setSortDir('desc') }
  }

  const filtered = useMemo(() => {
    let rows = customers.filter(
      (c) =>
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.email.toLowerCase().includes(search.toLowerCase()) ||
        c.segment.toLowerCase().includes(search.toLowerCase())
    )
    rows = [...rows].sort((a, b) => {
      const av = a[sortKey], bv = b[sortKey]
      if (typeof av === 'number') return sortDir === 'desc' ? bv - av : av - bv
      return sortDir === 'desc' ? String(bv).localeCompare(String(av)) : String(av).localeCompare(String(bv))
    })
    return rows
  }, [search, sortKey, sortDir])

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-semibold text-ink-100">Customer Segments</h1>
        <p className="mt-1 text-sm text-ink-500">AI-clustered groups based on purchase behavior and engagement.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
        {segments.map((s, i) => {
          const TrendIcon = trendIcon[s.trend]
          return (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
            >
              <Card className="h-full p-4 hover:border-signal-violet/30 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: s.color }} />
                  <TrendIcon size={14} className={trendTone[s.trend]} />
                </div>
                <p className="mt-3 text-sm font-semibold text-ink-100">{s.name}</p>
                <p className="mt-1 font-display text-2xl font-semibold text-ink-100 tabular-nums">
                  {s.size.toLocaleString()}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-ink-700">{s.description}</p>
                <div className="mt-3 flex items-center justify-between text-xs text-ink-500">
                  <span>Retention</span>
                  <span className="font-medium text-ink-200">{s.retention}%</span>
                </div>
              </Card>
            </motion.div>
          )
        })}
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <Card className="p-5 xl:col-span-2">
          <SectionHeader
            title="Customers"
            description="Search, filter, and sort your customer base"
            action={
              <div className="w-64">
                <Input icon={Search} placeholder="Search name, email, segment" value={search} onChange={(e) => setSearch(e.target.value)} />
              </div>
            }
          />
          <Table>
            <THead>
              <tr>
                <TH>Customer</TH>
                <TH>Segment</TH>
                <TH>
                  <button onClick={() => toggleSort('orders')} className="flex items-center gap-1 hover:text-ink-200">
                    Orders <ArrowUpDown size={11} />
                  </button>
                </TH>
                <TH>
                  <button onClick={() => toggleSort('spend')} className="flex items-center gap-1 hover:text-ink-200">
                    Spend <ArrowUpDown size={11} />
                  </button>
                </TH>
                <TH>Last Active</TH>
              </tr>
            </THead>
            <TBody>
              {filtered.map((c) => (
                <TR key={c.id}>
                  <TD>
                    <p className="font-medium text-ink-100">{c.name}</p>
                    <p className="text-xs text-ink-700">{c.email}</p>
                  </TD>
                  <TD>
                    <Badge tone="violet">{c.segment}</Badge>
                  </TD>
                  <TD className="tabular-nums">{c.orders}</TD>
                  <TD className="tabular-nums font-medium text-ink-100">${c.spend.toLocaleString()}</TD>
                  <TD>{c.lastActive}</TD>
                </TR>
              ))}
              {filtered.length === 0 && (
                <TR>
                  <TD className="py-8 text-center text-ink-700" colSpan={5}>
                    No customers match your search.
                  </TD>
                </TR>
              )}
            </TBody>
          </Table>
        </Card>

        <Card className="p-5">
          <SectionHeader title="Distribution" description="Share of customers per segment" />
          <SegmentPie height={200} />
          <div className="mt-4 space-y-2">
            {segments.map((s) => (
              <div key={s.id} className="flex items-center justify-between text-xs">
                <span className="flex items-center gap-2 text-ink-300">
                  <span className="h-2 w-2 rounded-full" style={{ backgroundColor: s.color }} />
                  {s.name}
                </span>
                <span className="font-medium text-ink-100">{s.size.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
