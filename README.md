# Customer InsightCart

AI-powered customer intelligence dashboard — frontend only, built with React, Vite, Tailwind CSS, Framer Motion, and Recharts.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL in your browser.

## Stack

- React 18 + Vite
- Tailwind CSS (custom design tokens — see `tailwind.config.js`)
- React Router v6
- Framer Motion (page/section transitions, hover states)
- Recharts (all charts)
- Lucide React (icons)

## Structure

```
src/
  data/mockData.js        single source of truth for all mock data
  components/ui/          reusable primitives (Card, Button, Badge, Table, Tabs...)
  components/charts/      Recharts wrappers (Revenue, Growth, Sales, Segment Pie, Heatmap, Forecast)
  components/layout/      Sidebar, Navbar
  components/dashboard/   dashboard-only sections (Hero, KPIGrid, AI Assistant, etc.)
  layouts/DashboardLayout.jsx
  pages/                  Dashboard, Upload, Segments, Analytics, Insights, Reports, Settings
```

This is a frontend-only project. No backend, API, or database is included — all data comes from `src/data/mockData.js`.
