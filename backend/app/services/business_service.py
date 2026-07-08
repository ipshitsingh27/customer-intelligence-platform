import pandas as pd

from app.services.segmentation_service import (
    generate_rfm,
    segment_customers
)


def identify_segment(row):

    r = row["Recency"]
    f = row["Frequency"]
    m = row["Monetary"]

    # Champions
    if r <= 30 and f >= 10 and m >= 5000:
        return {
            "name": "Champions",
            "color": "#06B6D4",
            "priority": "Highest",
            "description": "Your highest-value and most loyal customers.",
            "recommendation": "Reward with VIP offers and exclusive benefits."
        }

    # Loyal Customers
    elif r <= 90 and f >= 3:
        return {
            "name": "Loyal Customers",
            "color": "#8B5CF6",
            "priority": "High",
            "description": "Frequent customers with strong engagement.",
            "recommendation": "Maintain loyalty through rewards and personalized campaigns."
        }

    # Potential Customers
    elif r <= 180:
        return {
            "name": "Potential Customers",
            "color": "#22C55E",
            "priority": "Medium",
            "description": "Customers with potential to become loyal.",
            "recommendation": "Run targeted email and discount campaigns."
        }

    # At Risk
    else:
        return {
            "name": "At Risk",
            "color": "#EF4444",
            "priority": "High",
            "description": "Customers haven't purchased recently.",
            "recommendation": "Launch win-back campaigns immediately."
        }


def build_business_dashboard(dataframe):

    rfm = generate_rfm(dataframe)

    segmented = segment_customers(rfm)

    segmented["Segment"] = segmented.apply(
        lambda row: identify_segment(row)["name"],
        axis=1
    )

    segmented["Color"] = segmented.apply(
        lambda row: identify_segment(row)["color"],
        axis=1
    )

    segmented["Priority"] = segmented.apply(
        lambda row: identify_segment(row)["priority"],
        axis=1
    )

    segmented["Description"] = segmented.apply(
        lambda row: identify_segment(row)["description"],
        axis=1
    )

    segmented["Recommendation"] = segmented.apply(
        lambda row: identify_segment(row)["recommendation"],
        axis=1
    )

    total_customers = len(segmented)

    distribution = []

    for segment_name in segmented["Segment"].unique():

        temp = segmented[
            segmented["Segment"] == segment_name
        ]

        info = identify_segment(temp.iloc[0])

        distribution.append({

            "segment": segment_name,

            "customers": len(temp),

            "percentage": round(
                len(temp) / total_customers * 100,
                2
            ),

            "color": info["color"],

            "priority": info["priority"],

            "description": info["description"],

            "recommendation": info["recommendation"]

        })

    dashboard = {

        "total_customers": total_customers,

        "segments": distribution,

        "preview": segmented.head(20).to_dict(
            orient="records"
        )

    }

    return dashboard