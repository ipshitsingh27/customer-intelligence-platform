import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { UploadCloud, FileSpreadsheet, CheckCircle2, XCircle, Loader2, Inbox } from 'lucide-react'
import { uploads, supportedFileTypes } from '../data/mockData.js'
import Card from '../components/ui/Card.jsx'
import Badge from '../components/ui/Badge.jsx'
import ProgressBar from '../components/ui/ProgressBar.jsx'
import SectionHeader from '../components/ui/SectionHeader.jsx'
import { Table, THead, TH, TBody, TR, TD } from '../components/ui/Table.jsx'

const statusTone = { Processed: 'teal', Processing: 'amber', Failed: 'rose' }
const statusIcon = { Processed: CheckCircle2, Processing: Loader2, Failed: XCircle }

export default function Upload() {
  const [dragging, setDragging] = useState(false)
  const [simUpload, setSimUpload] = useState(null) // { name, progress }

  const simulate = useCallback((name) => {
    setSimUpload({ name, progress: 0 })
    let p = 0
    const interval = setInterval(() => {
      p += Math.random() * 22 + 8
      if (p >= 100) {
        p = 100
        clearInterval(interval)
        setTimeout(() => setSimUpload(null), 900)
      }
      setSimUpload((prev) => (prev ? { ...prev, progress: p } : prev))
    }, 300)
  }, [])

  const handleDrop = (e) => {
    e.preventDefault()
    setDragging(false)
    const file = e.dataTransfer.files?.[0]
    simulate(file ? file.name : 'customer_dataset.csv')
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-semibold text-ink-100">Upload Dataset</h1>
        <p className="mt-1 text-sm text-ink-500">
          Bring in customer, order, or transaction data — InsightCart's AI will map it automatically.
        </p>
      </div>

      <Card className="p-6">
        <div
          onDragOver={(e) => { e.preventDefault(); setDragging(true) }}
          onDragLeave={() => setDragging(false)}
          onDrop={handleDrop}
          className={`relative flex flex-col items-center justify-center rounded-2xl border-2 border-dashed px-6 py-16 text-center transition-all duration-300 ${
            dragging
              ? 'border-signal-violet bg-signal-violet/5 scale-[1.01]'
              : 'border-base-500 hover:border-base-400'
          }`}
        >
          <motion.div
            animate={{ y: dragging ? -6 : [0, -6, 0] }}
            transition={{ duration: 2.4, repeat: dragging ? 0 : Infinity, ease: 'easeInOut' }}
            className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-signal-violet/20 to-signal-teal/20"
          >
            <UploadCloud size={28} className="text-signal-violet" />
          </motion.div>
          <p className="mt-5 font-display text-lg font-medium text-ink-100">
            Drag & drop your file here
          </p>
          <p className="mt-1 text-sm text-ink-500">or click to browse from your computer</p>
          <label className="focus-ring mt-5 inline-flex cursor-pointer items-center gap-2 rounded-xl bg-gradient-to-r from-signal-violet to-signal-violetDim px-5 py-2.5 text-sm font-medium text-white shadow-[0_8px_24px_-8px_rgba(124,92,252,0.6)] hover:brightness-110">
            Choose File
            <input
              type="file"
              className="hidden"
              onChange={(e) => e.target.files?.[0] && simulate(e.target.files[0].name)}
            />
          </label>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {supportedFileTypes.map((t) => (
              <Badge key={t.ext} tone="neutral">
                .{t.ext.toLowerCase()}
              </Badge>
            ))}
          </div>

          <AnimatePresence>
            {simUpload && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-8 w-full max-w-sm rounded-xl border border-base-500 bg-base-800/80 p-4 text-left"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="flex items-center gap-2 font-medium text-ink-200">
                    <FileSpreadsheet size={14} className="text-signal-violet" />
                    {simUpload.name}
                  </span>
                  <span className="tabular-nums text-ink-500">{Math.min(100, Math.round(simUpload.progress))}%</span>
                </div>
                <ProgressBar value={simUpload.progress} tone="violet" className="mt-2.5" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Card>

      <Card className="p-5">
        <SectionHeader
          title="Upload History"
          description="Every dataset you've sent to InsightCart, with processing status"
        />
        {uploads.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-14 text-center">
            <Inbox size={32} className="text-ink-700" />
            <p className="mt-3 text-sm font-medium text-ink-300">No uploads yet</p>
            <p className="mt-1 text-xs text-ink-700">Files you upload will appear here once processed.</p>
          </div>
        ) : (
          <Table>
            <THead>
              <tr>
                <TH>File</TH>
                <TH>Rows</TH>
                <TH>Size</TH>
                <TH>Date</TH>
                <TH>Status</TH>
              </tr>
            </THead>
            <TBody>
              {uploads.map((u) => {
                const Icon = statusIcon[u.status]
                return (
                  <TR key={u.id}>
                    <TD className="font-medium text-ink-100">{u.name}</TD>
                    <TD>{u.rows.toLocaleString()}</TD>
                    <TD>{u.size}</TD>
                    <TD>{u.date}</TD>
                    <TD>
                      <Badge tone={statusTone[u.status]}>
                        <Icon size={11} className={u.status === 'Processing' ? 'animate-spin' : ''} />
                        {u.status}
                      </Badge>
                    </TD>
                  </TR>
                )
              })}
            </TBody>
          </Table>
        )}
      </Card>
    </div>
  )
}
