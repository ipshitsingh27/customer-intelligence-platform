// Customer InsightCart — single source of truth for mock data.
// All charts and pages read from this file so numbers stay consistent app-wide.

export const workspace = {
  name: 'Northwind Retail',
  plan: 'Growth Plan',
  user: {
    name: 'Priya Sharma',
    role: 'Head of Growth',
    initials: 'PS',
  },
}

export const kpis = [
  { id: 'revenue', label: 'Total Revenue', value: 482300, prefix: '$', change: 12.4, trend: 'up', spark: [30, 34, 32, 40, 38, 46, 52, 49, 58, 61, 66, 72] },
  { id: 'customers', label: 'Active Customers', value: 18420, prefix: '', change: 8.1, trend: 'up', spark: [40, 42, 41, 45, 47, 46, 50, 53, 55, 54, 58, 60] },
  { id: 'orders', label: 'Orders This Month', value: 6210, prefix: '', change: -3.2, trend: 'down', spark: [60, 58, 55, 57, 53, 50, 52, 49, 47, 46, 44, 45] },
  { id: 'ltv', label: 'Avg. Customer LTV', value: 1284, prefix: '$', change: 5.6, trend: 'up', spark: [20, 24, 23, 27, 29, 30, 33, 35, 34, 38, 40, 42] },
]

export const revenueTrend = [
  { month: 'Jan', revenue: 28400, target: 30000 },
  { month: 'Feb', revenue: 31200, target: 31000 },
  { month: 'Mar', revenue: 29800, target: 32000 },
  { month: 'Apr', revenue: 34500, target: 33000 },
  { month: 'May', revenue: 37200, target: 34500 },
  { month: 'Jun', revenue: 36100, target: 36000 },
  { month: 'Jul', revenue: 41800, target: 37500 },
  { month: 'Aug', revenue: 44200, target: 39000 },
  { month: 'Sep', revenue: 43600, target: 41000 },
  { month: 'Oct', revenue: 47900, target: 43000 },
  { month: 'Nov', revenue: 51200, target: 45500 },
  { month: 'Dec', revenue: 56300, target: 48000 },
]

export const customerGrowth = [
  { month: 'Jan', new: 820, churned: 210, net: 610 },
  { month: 'Feb', new: 940, churned: 240, net: 700 },
  { month: 'Mar', new: 880, churned: 260, net: 620 },
  { month: 'Apr', new: 1020, churned: 230, net: 790 },
  { month: 'May', new: 1150, churned: 280, net: 870 },
  { month: 'Jun', new: 1080, churned: 300, net: 780 },
  { month: 'Jul', new: 1240, churned: 260, net: 980 },
  { month: 'Aug', new: 1310, churned: 290, net: 1020 },
  { month: 'Sep', new: 1275, churned: 310, net: 965 },
  { month: 'Oct', new: 1420, churned: 275, net: 1145 },
  { month: 'Nov', new: 1510, churned: 295, net: 1215 },
  { month: 'Dec', new: 1680, churned: 320, net: 1360 },
]

export const monthlySales = [
  { month: 'Jan', apparel: 12000, electronics: 9800, home: 6400, beauty: 4200 },
  { month: 'Feb', apparel: 13200, electronics: 10100, home: 6800, beauty: 4600 },
  { month: 'Mar', apparel: 12800, electronics: 10600, home: 7100, beauty: 4400 },
  { month: 'Apr', apparel: 14500, electronics: 11200, home: 7600, beauty: 5000 },
  { month: 'May', apparel: 15800, electronics: 12400, home: 8100, beauty: 5300 },
  { month: 'Jun', apparel: 15200, electronics: 12100, home: 8400, beauty: 5500 },
  { month: 'Jul', apparel: 17100, electronics: 13600, home: 8900, beauty: 5900 },
  { month: 'Aug', apparel: 17900, electronics: 14200, home: 9200, beauty: 6100 },
  { month: 'Sep', apparel: 17400, electronics: 13900, home: 9500, beauty: 6300 },
  { month: 'Oct', apparel: 19200, electronics: 15100, home: 9900, beauty: 6700 },
  { month: 'Nov', apparel: 20800, electronics: 16400, home: 10400, beauty: 7100 },
  { month: 'Dec', apparel: 23400, electronics: 18200, home: 11600, beauty: 7900 },
]

export const geography = [
  { region: 'North America', customers: 7420, revenue: 198400, share: 41 },
  { region: 'Europe', customers: 5210, revenue: 142300, share: 29 },
  { region: 'Asia Pacific', customers: 3680, revenue: 89600, share: 19 },
  { region: 'Latin America', customers: 1240, revenue: 32100, share: 7 },
  { region: 'Middle East & Africa', customers: 870, revenue: 19900, share: 4 },
]

export const segmentDistribution = [
  { name: 'Loyal Champions', value: 28, color: '#7C5CFC' },
  { name: 'Growth Potential', value: 24, color: '#22D3B8' },
  { name: 'New Explorers', value: 19, color: '#F5B84C' },
  { name: 'At Risk', value: 15, color: '#FF6B8B' },
  { name: 'Dormant', value: 14, color: '#5A6178' },
]

export const segments = [
  {
    id: 'seg-1',
    name: 'Loyal Champions',
    size: 5164,
    avgOrderValue: 186,
    retention: 92,
    ltv: 2140,
    trend: 'up',
    description: 'High-frequency buyers with strong brand affinity and low price sensitivity.',
    color: '#7C5CFC',
  },
  {
    id: 'seg-2',
    name: 'Growth Potential',
    size: 4421,
    avgOrderValue: 124,
    retention: 74,
    ltv: 1310,
    trend: 'up',
    description: 'Recently increased purchase frequency; responsive to bundle offers.',
    color: '#22D3B8',
  },
  {
    id: 'seg-3',
    name: 'New Explorers',
    size: 3501,
    avgOrderValue: 68,
    retention: 41,
    ltv: 420,
    trend: 'flat',
    description: 'First purchase within 30 days; still forming habits and preferences.',
    color: '#F5B84C',
  },
  {
    id: 'seg-4',
    name: 'At Risk',
    size: 2763,
    avgOrderValue: 91,
    retention: 22,
    ltv: 610,
    trend: 'down',
    description: 'Declining engagement over the last 60 days; strong churn signals.',
    color: '#FF6B8B',
  },
  {
    id: 'seg-5',
    name: 'Dormant',
    size: 2578,
    avgOrderValue: 0,
    retention: 4,
    ltv: 180,
    trend: 'down',
    description: 'No activity in 120+ days; candidates for win-back campaigns.',
    color: '#5A6178',
  },
]

export const customers = [
  { id: 'CU-1042', name: 'Elena Voss', email: 'elena.voss@meridian.co', segment: 'Loyal Champions', orders: 34, spend: 5210, lastActive: '2 hours ago' },
  { id: 'CU-1043', name: 'Marcus Ihenacho', email: 'marcus.i@bluewave.io', segment: 'Growth Potential', orders: 12, spend: 1480, lastActive: '1 day ago' },
  { id: 'CU-1044', name: 'Sofia Petrov', email: 'sofia.petrov@driftlab.com', segment: 'New Explorers', orders: 2, spend: 136, lastActive: '3 days ago' },
  { id: 'CU-1045', name: 'Daniel Cho', email: 'daniel.cho@northfield.com', segment: 'At Risk', orders: 18, spend: 2140, lastActive: '19 days ago' },
  { id: 'CU-1046', name: 'Amara Bello', email: 'amara.bello@sundial.co', segment: 'Loyal Champions', orders: 41, spend: 6890, lastActive: '5 hours ago' },
  { id: 'CU-1047', name: 'Lucas Ferreira', email: 'lucas.f@haventech.io', segment: 'Dormant', orders: 6, spend: 410, lastActive: '134 days ago' },
  { id: 'CU-1048', name: 'Nadia Hussain', email: 'nadia.h@lumenworks.com', segment: 'Growth Potential', orders: 15, spend: 1920, lastActive: '6 hours ago' },
  { id: 'CU-1049', name: 'Tom Reyes', email: 'tom.reyes@paperandpine.com', segment: 'New Explorers', orders: 1, spend: 74, lastActive: '2 days ago' },
]

export const uploads = [
  { id: 'up-1', name: 'q4_customer_export.csv', size: '4.2 MB', rows: 18420, status: 'Processed', date: 'Dec 18, 2025' },
  { id: 'up-2', name: 'shopify_orders_dec.csv', size: '2.8 MB', rows: 6210, status: 'Processed', date: 'Dec 15, 2025' },
  { id: 'up-3', name: 'newsletter_subscribers.xlsx', size: '1.1 MB', rows: 9840, status: 'Processing', date: 'Dec 14, 2025' },
  { id: 'up-4', name: 'refunds_and_returns.csv', size: '640 KB', rows: 512, status: 'Failed', date: 'Dec 10, 2025' },
  { id: 'up-5', name: 'loyalty_program_members.json', size: '3.4 MB', rows: 5164, status: 'Processed', date: 'Dec 3, 2025' },
]

export const reports = [
  { id: 'rp-1', name: 'Q4 Customer Intelligence Summary', type: 'PDF', generated: 'Dec 20, 2025', size: '2.1 MB' },
  { id: 'rp-2', name: 'Segment Performance — November', type: 'XLSX', generated: 'Dec 1, 2025', size: '860 KB' },
  { id: 'rp-3', name: 'Churn Risk Deep Dive', type: 'PDF', generated: 'Nov 22, 2025', size: '1.4 MB' },
  { id: 'rp-4', name: 'Marketing Attribution Report', type: 'CSV', generated: 'Nov 15, 2025', size: '340 KB' },
  { id: 'rp-5', name: 'LTV Cohort Analysis', type: 'PDF', generated: 'Nov 4, 2025', size: '1.9 MB' },
]

export const recentActivity = [
  { id: 'ac-1', text: 'AI flagged 214 customers newly entering the At Risk segment', time: '12 min ago', type: 'ai' },
  { id: 'ac-2', text: 'q4_customer_export.csv finished processing', time: '1 hour ago', type: 'upload' },
  { id: 'ac-3', text: 'Priya generated the Q4 Customer Intelligence Summary', time: '3 hours ago', type: 'report' },
  { id: 'ac-4', text: 'Segment "Growth Potential" grew by 6.2% week over week', time: '6 hours ago', type: 'segment' },
  { id: 'ac-5', text: 'New integration connected: Shopify Orders', time: '1 day ago', type: 'system' },
]

export const heatmap = {
  days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  hours: ['00', '04', '08', '12', '16', '20'],
  // rows = days, cols = hours, value = relative purchase intensity 0-100
  data: [
    [12, 18, 42, 68, 74, 55],
    [10, 16, 46, 71, 78, 58],
    [14, 20, 44, 69, 80, 60],
    [11, 19, 48, 73, 82, 64],
    [16, 24, 52, 76, 88, 72],
    [22, 30, 58, 65, 70, 84],
    [18, 26, 40, 54, 60, 76],
  ],
}

export const aiInsights = [
  {
    id: 'ai-1',
    title: 'Bundle apparel with beauty for Growth Potential segment',
    description: 'Customers who purchased apparel and beauty together in the last 90 days show 34% higher average order value than single-category buyers.',
    confidence: 91,
    priority: 'High',
    category: 'Merchandising',
  },
  {
    id: 'ai-2',
    title: 'Launch a win-back flow for Dormant segment before day 150',
    description: 'Reactivation likelihood drops sharply after 150 days of inactivity. A 3-email sequence historically recovers 8-11% of this cohort.',
    confidence: 84,
    priority: 'High',
    category: 'Retention',
  },
  {
    id: 'ai-3',
    title: 'Shift paid spend toward Asia Pacific',
    description: 'Asia Pacific shows the fastest customer growth rate (19% QoQ) with acquisition cost 22% below the account average.',
    confidence: 77,
    priority: 'Medium',
    category: 'Marketing',
  },
  {
    id: 'ai-4',
    title: 'At-risk customers respond best to service outreach, not discounts',
    description: 'A/B testing across the At Risk segment shows personal outreach outperforms discount codes by 2.3x in reactivation rate.',
    confidence: 88,
    priority: 'High',
    category: 'Retention',
  },
  {
    id: 'ai-5',
    title: 'Weekend evening is the highest-intent purchase window',
    description: 'Purchase intensity peaks Friday and Saturday between 16:00–20:00 local time — consider scheduling campaigns accordingly.',
    confidence: 82,
    priority: 'Medium',
    category: 'Timing',
  },
  {
    id: 'ai-6',
    title: 'New Explorers convert faster with a second-purchase incentive',
    description: 'Offering a modest incentive within 10 days of first purchase increases 60-day retention by 15 percentage points.',
    confidence: 73,
    priority: 'Low',
    category: 'Retention',
  },
]

export const forecast = [
  { month: 'Jan', actual: 28400, forecast: null },
  { month: 'Feb', actual: 31200, forecast: null },
  { month: 'Mar', actual: 29800, forecast: null },
  { month: 'Apr', actual: 34500, forecast: null },
  { month: 'May', actual: 37200, forecast: null },
  { month: 'Jun', actual: 36100, forecast: null },
  { month: 'Jul', actual: 41800, forecast: null },
  { month: 'Aug', actual: 44200, forecast: null },
  { month: 'Sep', actual: 43600, forecast: null },
  { month: 'Oct', actual: 47900, forecast: null },
  { month: 'Nov', actual: 51200, forecast: null },
  { month: 'Dec', actual: 56300, forecast: 56300 },
  { month: 'Jan (F)', actual: null, forecast: 59800 },
  { month: 'Feb (F)', actual: null, forecast: 62100 },
  { month: 'Mar (F)', actual: null, forecast: 65900 },
]

export const marketingRecommendations = [
  { id: 'mk-1', title: 'Email win-back series', impact: 'High', effort: 'Low', segment: 'Dormant' },
  { id: 'mk-2', title: 'Loyalty tier upgrade nudge', impact: 'Medium', effort: 'Low', segment: 'Loyal Champions' },
  { id: 'mk-3', title: 'Cross-sell beauty + apparel bundle', impact: 'High', effort: 'Medium', segment: 'Growth Potential' },
  { id: 'mk-4', title: 'Personal outreach for at-risk accounts', impact: 'High', effort: 'High', segment: 'At Risk' },
]

export const analyticsMetrics = {
  revenue: { value: 482300, change: 12.4 },
  orders: { value: 6210, change: -3.2 },
  retention: { value: 68.4, change: 4.1 },
  ltv: { value: 1284, change: 5.6 },
  aov: { value: 92.4, change: 2.8 },
  growth: { value: 18.9, change: 6.3 },
}

export const notifications = [
  { id: 'nt-1', text: 'Weekly AI insight digest is ready', time: '10 min ago', unread: true },
  { id: 'nt-2', text: 'Upload "newsletter_subscribers.xlsx" is still processing', time: '2 hours ago', unread: true },
  { id: 'nt-3', text: 'Segment "At Risk" crossed your alert threshold', time: '5 hours ago', unread: false },
  { id: 'nt-4', text: 'Q4 Customer Intelligence Summary was shared with your team', time: '1 day ago', unread: false },
]

export const supportedFileTypes = [
  { ext: 'CSV', label: 'Comma-separated values' },
  { ext: 'XLSX', label: 'Excel workbook' },
  { ext: 'JSON', label: 'Structured records' },
  { ext: 'TSV', label: 'Tab-separated values' },
]
