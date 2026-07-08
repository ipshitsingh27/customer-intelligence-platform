import { Routes, Route } from 'react-router-dom'
import DashboardLayout from './layouts/DashboardLayout.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Upload from './pages/Upload.jsx'
import Segments from './pages/Segments.jsx'
import Analytics from './pages/Analytics.jsx'
import Insights from './pages/Insights.jsx'
import Reports from './pages/Reports.jsx'
import Settings from './pages/Settings.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/segments" element={<Segments />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  )
}
