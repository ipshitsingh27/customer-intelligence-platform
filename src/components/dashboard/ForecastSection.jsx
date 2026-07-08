import Card from '../ui/Card.jsx'
import SectionHeader from '../ui/SectionHeader.jsx'
import ForecastChart from '../charts/ForecastChart.jsx'
import Badge from '../ui/Badge.jsx'

export default function ForecastSection() {
  return (
    <Card className="p-5">
      <SectionHeader
        title="Revenue Forecast"
        description="Projected next 3 months based on historical trend"
        action={<Badge tone="violet">AI Projected</Badge>}
      />
      <ForecastChart />
    </Card>
  )
}
