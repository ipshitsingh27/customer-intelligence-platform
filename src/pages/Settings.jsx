import { useState } from 'react'
import { Moon, Sun, Monitor, Bell, User, Shield } from 'lucide-react'
import { workspace } from '../data/mockData.js'
import Card from '../components/ui/Card.jsx'
import SectionHeader from '../components/ui/SectionHeader.jsx'
import Button from '../components/ui/Button.jsx'
import Input from '../components/ui/Input.jsx'

function Toggle({ checked, onChange }) {
  return (
    <button
      onClick={() => onChange(!checked)}
      className={`focus-ring relative h-6 w-11 flex-shrink-0 rounded-full transition-colors duration-200 ${
        checked ? 'bg-signal-violet' : 'bg-base-500'
      }`}
    >
      <span
        className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition-transform duration-200 ${
          checked ? 'translate-x-[22px]' : 'translate-x-0.5'
        }`}
      />
    </button>
  )
}

const themeOptions = [
  { id: 'dark', label: 'Dark', icon: Moon },
  { id: 'light', label: 'Light', icon: Sun },
  { id: 'system', label: 'System', icon: Monitor },
]

const notificationRows = [
  { id: 'digest', label: 'Weekly AI insight digest', description: 'A summary of new recommendations every Monday' },
  { id: 'uploads', label: 'Upload status updates', description: 'Get notified when a dataset finishes processing' },
  { id: 'alerts', label: 'Segment threshold alerts', description: 'Notify when a segment crosses a size or risk threshold' },
  { id: 'reports', label: 'Report sharing', description: 'Notify when someone shares a report with you' },
]

export default function Settings() {
  const [theme, setTheme] = useState('dark')
  const [notifs, setNotifs] = useState({ digest: true, uploads: true, alerts: true, reports: false })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-semibold text-ink-100">Settings</h1>
        <p className="mt-1 text-sm text-ink-500">Manage your workspace, account, and notification preferences.</p>
      </div>

      <Card className="p-5">
        <SectionHeader
          eyebrow="Appearance"
          title="Theme"
          description="Choose how InsightCart looks on this device"
          action={<Monitor size={18} className="text-ink-700" />}
        />
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {themeOptions.map((t) => (
            <button
              key={t.id}
              onClick={() => setTheme(t.id)}
              className={`focus-ring flex items-center gap-3 rounded-xl border px-4 py-3.5 text-left transition-colors ${
                theme === t.id
                  ? 'border-signal-violet/50 bg-signal-violet/10 text-ink-100'
                  : 'border-base-500 text-ink-300 hover:border-base-400'
              }`}
            >
              <t.icon size={17} />
              <span className="text-sm font-medium">{t.label}</span>
            </button>
          ))}
        </div>
      </Card>

      <Card className="p-5">
        <SectionHeader eyebrow="Account" title="Profile & Workspace" action={<User size={18} className="text-ink-700" />} />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-xs font-medium text-ink-500">Full name</label>
            <Input defaultValue={workspace.user.name} />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium text-ink-500">Role</label>
            <Input defaultValue={workspace.user.role} />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium text-ink-500">Workspace name</label>
            <Input defaultValue={workspace.name} />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium text-ink-500">Plan</label>
            <Input defaultValue={workspace.plan} disabled />
          </div>
        </div>
        <Button variant="primary" className="mt-5">Save Changes</Button>
      </Card>

      <Card className="p-5">
        <SectionHeader eyebrow="Preferences" title="Notifications" action={<Bell size={18} className="text-ink-700" />} />
        <div className="divide-y divide-base-600/60">
          {notificationRows.map((row) => (
            <div key={row.id} className="flex items-center justify-between gap-4 py-3.5">
              <div>
                <p className="text-sm font-medium text-ink-100">{row.label}</p>
                <p className="mt-0.5 text-xs text-ink-700">{row.description}</p>
              </div>
              <Toggle
                checked={notifs[row.id]}
                onChange={(v) => setNotifs((prev) => ({ ...prev, [row.id]: v }))}
              />
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-5">
        <SectionHeader eyebrow="Security" title="Access" action={<Shield size={18} className="text-ink-700" />} />
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-base-500 bg-base-700/30 px-4 py-3.5">
          <div>
            <p className="text-sm font-medium text-ink-100">Two-factor authentication</p>
            <p className="mt-0.5 text-xs text-ink-700">Add an extra layer of security to your account</p>
          </div>
          <Button variant="outline">Enable</Button>
        </div>
      </Card>
    </div>
  )
}
