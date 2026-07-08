from app.services.business_service import build_business_dashboard
from app.services.analytics_service import build_analytics


def generate_business_report(dataframe):

    dashboard = build_business_dashboard(dataframe)

    analytics = build_analytics(dataframe)

    executive_summary = {

        "total_customers":
            dashboard["total_customers"],

        "total_revenue":
            dashboard["kpis"]["total_revenue"],

        "total_orders":
            dashboard["kpis"]["total_orders"],

        "active_customers":
            dashboard["kpis"]["active_customers"],

        "average_order_value":
            dashboard["kpis"]["average_order_value"]

    }

    report = {

        "executive_summary":
            executive_summary,

        "customer_segments":
            dashboard["segments"],

        "monthly_revenue":
            dashboard["monthly_revenue"],

        "top_products":
            analytics["top_products"],

        "top_customers":
            analytics["top_customers"],

        "top_countries":
            analytics["top_countries"],

        "business_recommendations": [

            "Focus marketing campaigns on Potential Customers.",

            "Reward Champions with exclusive offers.",

            "Retain At Risk customers with win-back campaigns.",

            "Promote best-selling products to increase revenue."

        ]

    }

    return report