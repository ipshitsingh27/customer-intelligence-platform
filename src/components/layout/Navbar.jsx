import { useState } from 'react'
import { Menu, Search, Bell, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { workspace, notifications } from '../../data/mockData.js'
import Input from '../ui/Input.jsx'

export default function Navbar({ onMenuClick }) {
  const [notifOpen, setNotifOpen] = useState(false)
  const unread = notifications.filter((n) => n.unread).length

  return (
    <header className="sticky top-0 z-30 flex items-center gap-3 border-b border-base-500 bg-base-900/80 px-4 py-3.5 backdrop-blur-xl sm:px-6">
      <button
        onClick={onMenuClick}
        className="focus-ring rounded-lg p-2 text-ink-300 hover:bg-base-700/60 lg:hidden"
      >
        <Menu size={20} />
      </button>

      <div className="hidden max-w-sm flex-1 sm:block">
        <Input icon={Search} placeholder="Search customers, reports, segments..." />
      </div>

      <div className="ml-auto flex items-center gap-2 sm:gap-3">
        <div className="hidden items-center gap-2 rounded-xl border border-base-500 bg-base-700/40 px-3 py-2 md:flex">
          <span className="h-2 w-2 rounded-full bg-signal-teal shadow-[0_0_8px_2px_rgba(34,211,184,0.5)]" />
          <span className="text-xs font-medium text-ink-300">{workspace.name}</span>
          <ChevronDown size={14} className="text-ink-700" />
        </div>

        <div className="relative">
          <button
            onClick={() => setNotifOpen((v) => !v)}
            className="focus-ring relative rounded-lg p-2.5 text-ink-300 hover:bg-base-700/60"
          >
            <Bell size={18} />
            {unread > 0 && (
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-signal-coral" />
            )}
          </button>
          <AnimatePresence>
            {notifOpen && (
              <>
                <div className="fixed inset-0 z-30" onClick={() => setNotifOpen(false)} />
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                  className="glass absolute right-0 top-12 z-40 w-80 rounded-2xl p-2 shadow-card"
                >
                  <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wide text-ink-500">
                    Notifications
                  </p>
                  {notifications.map((n) => (
                    <div key={n.id} className="flex items-start gap-3 rounded-xl px-3 py-2.5 hover:bg-base-700/50">
                      <span
                        className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full ${
                          n.unread ? 'bg-signal-violet' : 'bg-base-500'
                        }`}
                      />
                      <div>
                        <p className="text-sm text-ink-200">{n.text}</p>
                        <p className="mt-0.5 text-xs text-ink-700">{n.time}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>

        <button className="focus-ring flex items-center gap-2 rounded-xl border border-base-500 bg-base-700/40 py-1.5 pl-1.5 pr-3 hover:border-base-400">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-signal-violet to-signal-teal text-xs font-semibold text-white">
            {workspace.user.initials}
          </span>
          <span className="hidden text-left sm:block">
            <span className="block text-xs font-medium text-ink-100">{workspace.user.name}</span>
            <span className="block text-[11px] text-ink-700">{workspace.user.role}</span>
          </span>
        </button>
      </div>
    </header>
  )
}
