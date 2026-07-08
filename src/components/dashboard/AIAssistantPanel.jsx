import { useState } from 'react'
import { Sparkles, Send } from 'lucide-react'
import Card from '../ui/Card.jsx'
import Button from '../ui/Button.jsx'

const suggestions = [
  'Which segment has the highest churn risk?',
  'Summarize this week\u2019s revenue trend',
  'What should I prioritize this month?',
]

export default function AIAssistantPanel() {
  const [query, setQuery] = useState('')

  return (
    <Card className="flex h-full flex-col p-5">
      <div className="flex items-center gap-2.5">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-signal-violet to-signal-teal">
          <Sparkles size={15} className="text-white" />
        </span>
        <div>
          <p className="text-sm font-semibold text-ink-100">AI Assistant</p>
          <p className="text-xs text-ink-700">Ask about your customer data</p>
        </div>
      </div>

      <div className="mt-4 flex-1 space-y-2 rounded-xl border border-base-500 bg-base-900/40 p-3">
        <div className="rounded-lg bg-base-700/60 p-3 text-sm text-ink-300">
          Hi Priya — I noticed the <span className="text-signal-rose font-medium">At Risk</span> segment
          grew 6% this week. Want a breakdown of likely causes?
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {suggestions.map((s) => (
          <button
            key={s}
            onClick={() => setQuery(s)}
            className="focus-ring rounded-full border border-base-500 px-2.5 py-1 text-[11px] text-ink-500 hover:border-signal-violet/40 hover:text-ink-200"
          >
            {s}
          </button>
        ))}
      </div>

      <div className="mt-3 flex items-center gap-2">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask a question..."
          className="focus-ring w-full rounded-xl border border-base-500 bg-base-700/50 px-3.5 py-2.5 text-sm text-ink-100 placeholder:text-ink-700"
        />
        <Button variant="primary" className="!px-3" aria-label="Send">
          <Send size={15} />
        </Button>
      </div>
    </Card>
  )
}
