export async function GET(request, context) {
  const { params } = await context;
  const { id } = await params;

  try {
    const headers = { "x-cg-demo-api-key": process.env.COINGECKO_API_KEY };

    const response = await fetch(
      `${process.env.COINGECKO_API_URL}/coins/${id}`,
      {
        headers: headers,
      }
    );

    if (!response.ok) {
      return new Response(
        JSON.stringify({ error: "Internal connection error" }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const data = await response.json();
    //remove extra fields not needed

    //Price change on the last 24 hours, 7 days, 14 days, 1 month, 2 months, 200
    const returnDto = {
      name: data.name,
      description: data.description?.en,
      current_price:
        data?.market_data?.current_price[
          process.env.COINGECKO_API_CURRENCY.toLowerCase()
        ],
      price_change_percentage_24h_in_currency:
        data?.market_data?.price_change_percentage_24h_in_currency[
          process.env.COINGECKO_API_CURRENCY.toLowerCase()
        ],
      price_change_percentage_7d_in_currency:
        data?.market_data?.price_change_percentage_7d_in_currency[
          process.env.COINGECKO_API_CURRENCY.toLowerCase()
        ],
      price_change_percentage_14d_in_currency:
        data?.market_data?.price_change_percentage_14d_in_currency[
          process.env.COINGECKO_API_CURRENCY.toLowerCase()
        ],
      price_change_percentage_30d_in_currency:
        data?.market_data?.price_change_percentage_30d_in_currency[
          process.env.COINGECKO_API_CURRENCY.toLowerCase()
        ],
      price_change_percentage_60d_in_currency:
        data?.market_data?.price_change_percentage_60d_in_currency[
          process.env.COINGECKO_API_CURRENCY.toLowerCase()
        ],
      price_change_200d_in_currency:
        data?.market_data?.price_change_percentage_200d_in_currency[
          process.env.COINGECKO_API_CURRENCY.toLowerCase()
        ],
      high_24h_in_currency:
        data?.market_data?.high_24h[
          process.env.COINGECKO_API_CURRENCY.toLowerCase()
        ],
      low_24h_in_currency:
        data?.market_data?.low_24h[
          process.env.COINGECKO_API_CURRENCY.toLowerCase()
        ],
    };

    return new Response(JSON.stringify(returnDto), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log("log error:", error);
    return new Response(
      JSON.stringify({ error: "Internal connection error" }),
      {
        status: 404,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
