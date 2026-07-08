import pandas as pd

from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler


def generate_rfm(dataframe):
    """
    Generate RFM table.
    """

    df = dataframe.copy()

    df["InvoiceDate"] = pd.to_datetime(df["InvoiceDate"])

    snapshot_date = df["InvoiceDate"].max() + pd.Timedelta(days=1)

    rfm = (
        df.groupby("CustomerID")
        .agg({
            "InvoiceDate": lambda x: (snapshot_date - x.max()).days,
            "InvoiceNo": "nunique",
            "UnitPrice": lambda x: (
                df.loc[x.index, "Quantity"] *
                df.loc[x.index, "UnitPrice"]
            ).sum()
        })
        .reset_index()
    )

    rfm.columns = [
        "CustomerID",
        "Recency",
        "Frequency",
        "Monetary"
    ]

    return rfm


def segment_customers(rfm):

    scaler = StandardScaler()

    scaled = scaler.fit_transform(
        rfm[
            [
                "Recency",
                "Frequency",
                "Monetary"
            ]
        ]
    )

    model = KMeans(
        n_clusters=4,
        random_state=42,
        n_init=10
    )

    rfm["Cluster"] = model.fit_predict(scaled)

    return rfm