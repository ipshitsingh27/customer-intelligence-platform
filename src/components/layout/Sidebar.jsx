import { NavLink } from 'react-router-dom'
import {
  LayoutGrid,
  UploadCloud,
  Users,
  BarChart3,
  Sparkles,
  FileText,
  Settings as SettingsIcon,
  Radar,
} from 'lucide-react'
import { workspace } from '../../data/mockData.js'

const links = [
  { to: '/', label: 'Dashboard', icon: LayoutGrid },
  { to: '/upload', label: 'Upload Dataset', icon: UploadCloud },
  { to: '/segments', label: 'Customer Segments', icon: Users },
  { to: '/analytics', label: 'Analytics', icon: BarChart3 },
  { to: '/insights', label: 'AI Insights', icon: Sparkles },
  { to: '/reports', label: 'Reports', icon: FileText },
  { to: '/settings', label: 'Settings', icon: SettingsIcon },
]

export default function Sidebar({ open, onClose }) {
  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        />
      )}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-base-500 bg-base-900/95 backdrop-blur-xl transition-transform duration-300 lg:static lg:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center gap-2.5 px-6 py-6">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-signal-violet to-signal-teal shadow-glow">
            <Radar size={18} className="text-white" strokeWidth={2.25} />
          </div>
          <div>
            <p className="font-display text-[15px] font-semibold leading-tight text-ink-100">
              InsightCart
            </p>
            <p className="text-[11px] leading-tight text-ink-700">Customer Intelligence</p>
          </div>
        </div>

        <nav className="flex-1 space-y-1 px-3">
          {links.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={onClose}
              className={({ isActive }) =>
                `focus-ring group relative flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-signal-violet/15 to-transparent text-ink-100'
                    : 'text-ink-500 hover:bg-base-700/60 hover:text-ink-200'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <span className="absolute left-0 top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-r-full bg-gradient-to-b from-signal-violet to-signal-teal" />
                  )}
                  <Icon size={17} strokeWidth={2} className={isActive ? 'text-signal-violet' : ''} />
                  {label}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="mx-3 mb-4 rounded-2xl border border-base-500 bg-gradient-to-br from-base-700 to-base-800 p-4">
          <p className="text-xs font-semibold text-ink-100">{workspace.plan}</p>
          <p className="mt-1 text-[11px] text-ink-700">62% of monthly upload quota used</p>
          <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-base-500">
            <div className="h-full w-[62%] rounded-full bg-gradient-to-r from-signal-violet to-signal-teal" />
          </div>
        </div>
      </aside>
    </>
  )
}
