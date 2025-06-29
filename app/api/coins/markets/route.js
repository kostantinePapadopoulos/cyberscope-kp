import { buildQueryString } from "@/utils/buildQueryString";

export async function GET(request, context) {
  const searchParams = request.nextUrl.searchParams;
  const page = searchParams.get("page");
  const per_page = searchParams.get("per_page");

  try {
    const headers = { "x-cg-demo-api-key": process.env.COINGECKO_API_KEY };
    const params = {
      vs_currency: process.env.COINGECKO_API_CURRENCY,
      page: page,
      per_page: per_page,
    };
    const queryString = buildQueryString(params);
    const response = await fetch(
      `${process.env.COINGECKO_API_URL}/coins/markets?${queryString}`,
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
    const filteredKeysData = data.map((itm) => {
      return {
        id: itm.id,
        name: itm.name,
        symbol: itm.symbol,
        current_price: itm.current_price,
        high_24h: itm.high_24h,
        low_24h: itm.low_24h,
        price_change_percentage_24h: itm.price_change_percentage_24h,
      };
    });
    return new Response(JSON.stringify({ data: filteredKeysData }), {
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
