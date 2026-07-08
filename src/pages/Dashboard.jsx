import { motion } from 'framer-motion'
import Hero from '../components/dashboard/Hero.jsx'
import KPIGrid from '../components/dashboard/KPIGrid.jsx'
import AIBanner from '../components/dashboard/AIBanner.jsx'
import RecentUploads from '../components/dashboard/RecentUploads.jsx'
import RecentReports from '../components/dashboard/RecentReports.jsx'
import RecentActivity from '../components/dashboard/RecentActivity.jsx'
import AIAssistantPanel from '../components/dashboard/AIAssistantPanel.jsx'
import ForecastSection from '../components/dashboard/ForecastSection.jsx'
import MarketingRecs from '../components/dashboard/MarketingRecs.jsx'
import Card from '../components/ui/Card.jsx'
import SectionHeader from '../components/ui/SectionHeader.jsx'
import RevenueChart from '../components/charts/RevenueChart.jsx'
import GrowthChart from '../components/charts/GrowthChart.jsx'
import SegmentPie from '../components/charts/SegmentPie.jsx'
import GeoBars from '../components/charts/GeoBars.jsx'
import Heatmap from '../components/charts/Heatmap.jsx'
import { segmentDistribution } from '../data/mockData.js'

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
}

function Section({ children, delay = 0 }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      variants={fadeUp}
      transition={{ duration: 0.4, delay }}
    >
      {children}
    </motion.div>
  )
}

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <Hero />
      <KPIGrid />
      <AIBanner />

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <Section delay={0.05}>
          <Card className="p-5 xl:col-span-2">
            <SectionHeader title="Revenue" description="Actual revenue vs. monthly target" />
            <RevenueChart />
          </Card>
        </Section>
        <Section delay={0.1}>
          <Card className="p-5 h-full">
            <SectionHeader title="Segment Distribution" description="Share of active customers" />
            <SegmentPie />
            <div className="mt-4 space-y-2">
              {segmentDistribution.map((s) => (
                <div key={s.name} className="flex items-center justify-between text-xs">
                  <span className="flex items-center gap-2 text-ink-300">
                    <span className="h-2 w-2 rounded-full" style={{ backgroundColor: s.color }} />
                    {s.name}
                  </span>
                  <span className="font-medium text-ink-100">{s.value}%</span>
                </div>
              ))}
            </div>
          </Card>
        </Section>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <Section delay={0.05}>
          <Card className="p-5 xl:col-span-2">
            <SectionHeader title="Customer Growth" description="New vs. churned customers per month" />
            <GrowthChart />
          </Card>
        </Section>
        <Section delay={0.1}>
          <Card className="p-5 h-full">
            <SectionHeader title="Customer Geography" description="Distribution by region" />
            <GeoBars />
          </Card>
        </Section>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <Section delay={0.05}>
          <Card className="p-5 xl:col-span-2">
            <SectionHeader title="Purchase Intensity Heatmap" description="Relative buying activity by day and hour" />
            <Heatmap />
          </Card>
        </Section>
        <Section delay={0.1}>
          <AIAssistantPanel />
        </Section>
      </div>

      <Section delay={0.05}>
        <ForecastSection />
      </Section>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Section delay={0.05}>
          <RecentUploads />
        </Section>
        <Section delay={0.1}>
          <RecentReports />
        </Section>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Section delay={0.05}>
          <RecentActivity />
        </Section>
        <Section delay={0.1}>
          <MarketingRecs />
        </Section>
      </div>
    </div>
  )
}
