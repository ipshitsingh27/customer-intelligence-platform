import { useEffect, useState } from "react";
import { getDashboard } from "../../services/api.js";
import StatCard from "../ui/StatCard.jsx";

export default function KPIGrid() {
  const [kpis, setKpis] = useState([]);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      console.log("Calling Dashboard API...");

      const response = await getDashboard();

      console.log("Dashboard Response:", response);

      if (response.success) {
        const data = response.dashboard.kpis;

        console.log("KPI Data:", data);

        setKpis([
          {
            id: "revenue",
            label: "Total Revenue",
            value: data.total_revenue,
            prefix: "₹",
            change: 12.4,
            trend: "up",
            spark: [30, 34, 32, 40, 38, 46, 52, 49, 58, 61, 66, 72],
          },
          {
            id: "customers",
            label: "Active Customers",
            value: data.active_customers,
            prefix: "",
            change: 8.1,
            trend: "up",
            spark: [40, 42, 41, 45, 47, 46, 50, 53, 55, 54, 58, 60],
          },
          {
            id: "orders",
            label: "Total Orders",
            value: data.total_orders,
            prefix: "",
            change: 5.8,
            trend: "up",
            spark: [60, 58, 55, 57, 53, 50, 52, 49, 47, 46, 44, 45],
          },
          {
            id: "aov",
            label: "Average Order Value",
            value: data.average_order_value,
            prefix: "₹",
            change: 4.3,
            trend: "up",
            spark: [20, 24, 23, 27, 29, 30, 33, 35, 34, 38, 40, 42],
          },
        ]);
      }
    } catch (error) {
      console.log("FULL ERROR:", error);
      console.log("ERROR RESPONSE:", error.response);
      console.log("ERROR MESSAGE:", error.message);
    }
  };

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {kpis.map((k, i) => (
        <StatCard key={k.id} {...k} index={i} />
      ))}
    </div>
  );
}
