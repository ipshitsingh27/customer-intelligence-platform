import pandas as pd


def build_analytics(dataframe):

    df = dataframe.copy()

    # Revenue
    df["Revenue"] = df["Quantity"] * df["UnitPrice"]

    # Date
    df["InvoiceDate"] = pd.to_datetime(df["InvoiceDate"])

    # Month
    df["Month"] = df["InvoiceDate"].dt.strftime("%b")

    # =========================
    # Monthly Revenue
    # =========================

    monthly_revenue = (
        df.groupby("Month")["Revenue"]
        .sum()
        .reset_index()
    )

    # =========================
    # Monthly Orders
    # =========================

    monthly_orders = (
        df.groupby("Month")["InvoiceNo"]
        .nunique()
        .reset_index(name="Orders")
    )

    # =========================
    # Top Countries
    # =========================

    top_countries = (
        df.groupby("Country")["Revenue"]
        .sum()
        .sort_values(ascending=False)
        .head(10)
        .reset_index()
    )

    # =========================
    # Top Products
    # =========================

    top_products = (
        df.groupby("Description")["Revenue"]
        .sum()
        .sort_values(ascending=False)
        .head(10)
        .reset_index()
    )

    # =========================
    # Top Customers
    # =========================

    top_customers = (
        df.groupby("CustomerID")["Revenue"]
        .sum()
        .sort_values(ascending=False)
        .head(10)
        .reset_index()
    )

    return {

        "monthly_revenue":
            monthly_revenue.to_dict(
                orient="records"
            ),

        "monthly_orders":
            monthly_orders.to_dict(
                orient="records"
            ),

        "top_countries":
            top_countries.to_dict(
                orient="records"
            ),

        "top_products":
            top_products.to_dict(
                orient="records"
            ),

        "top_customers":
            top_customers.to_dict(
                orient="records"
            )

    }