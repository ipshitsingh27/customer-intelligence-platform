import pandas as pd


def clean_dataset(dataframe: pd.DataFrame):
    """
    Clean uploaded retail dataset.
    Returns cleaned dataframe and cleaning statistics.
    """

    original_rows = len(dataframe)

    # ---------------------------------------
    # Remove duplicate rows
    # ---------------------------------------
    duplicate_count = dataframe.duplicated().sum()

    dataframe = dataframe.drop_duplicates()

    # ---------------------------------------
    # Remove cancelled invoices
    # ---------------------------------------
    cancelled_count = dataframe[
        dataframe["InvoiceNo"].astype(str).str.startswith("C")
    ].shape[0]

    dataframe = dataframe[
        ~dataframe["InvoiceNo"].astype(str).str.startswith("C")
    ]

    # ---------------------------------------
    # Remove missing CustomerID
    # ---------------------------------------
    missing_customer_count = dataframe["CustomerID"].isna().sum()

    dataframe = dataframe.dropna(subset=["CustomerID"])

    # ---------------------------------------
    # Remove invalid Quantity
    # ---------------------------------------
    invalid_quantity = dataframe[dataframe["Quantity"] <= 0].shape[0]

    dataframe = dataframe[dataframe["Quantity"] > 0]

    # ---------------------------------------
    # Remove invalid UnitPrice
    # ---------------------------------------
    invalid_price = dataframe[dataframe["UnitPrice"] <= 0].shape[0]

    dataframe = dataframe[dataframe["UnitPrice"] > 0]

    # ---------------------------------------
    # Convert InvoiceDate
    # ---------------------------------------
    dataframe["InvoiceDate"] = pd.to_datetime(
        dataframe["InvoiceDate"]
    )

    final_rows = len(dataframe)

    summary = {
        "original_rows": original_rows,
        "duplicates_removed": int(duplicate_count),
        "cancelled_orders_removed": int(cancelled_count),
        "missing_customer_removed": int(missing_customer_count),
        "invalid_quantity_removed": int(invalid_quantity),
        "invalid_price_removed": int(invalid_price),
        "final_rows": final_rows,
    }

    return dataframe, summary