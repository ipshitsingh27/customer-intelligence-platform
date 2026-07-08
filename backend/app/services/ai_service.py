from app.services.business_service import build_business_dashboard
from app.services.analytics_service import build_analytics


def generate_ai_insights(dataframe):

    dashboard = build_business_dashboard(dataframe)

    analytics = build_analytics(dataframe)

    insights = []

    # Revenue Insight
    revenue = dashboard["kpis"]["total_revenue"]

    insights.append({

        "title": "Revenue Performance",

        "type": "success",

        "message":
            f"Total revenue generated is ₹{revenue:,.2f}."

    })

    # Largest Segment
    largest_segment = max(
        dashboard["segments"],
        key=lambda x: x["customers"]
    )

    insights.append({

        "title": "Largest Customer Segment",

        "type": "info",

        "message":
            f"{largest_segment['segment']} represent {largest_segment['percentage']}% of all customers."

    })

    # Country Insight
    country = analytics["top_countries"][0]

    insights.append({

        "title": "Top Market",

        "type": "success",

        "message":
            f"{country['Country']} contributes the highest revenue."

    })

    # Product Insight
    product = analytics["top_products"][0]

    insights.append({

        "title": "Best Selling Product",

        "type": "info",

        "message":
            f"{product['Description']} generated the highest revenue."

    })

    # Recommendation
    insights.append({

        "title": "Business Recommendation",

        "type": "warning",

        "message":
            "Launch targeted campaigns for Potential Customers and retention offers for At Risk customers."

    })

    return {

        "summary": {

            "total_insights": len(insights)

        },

        "insights": insights

    }