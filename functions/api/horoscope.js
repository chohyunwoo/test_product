export async function onRequest({ request, env }) {
  if (request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type"
      }
    });
  }

  const url = new URL(request.url);
  const sign = (url.searchParams.get("sign") || "").toLowerCase();

  if (!sign) {
    return new Response(JSON.stringify({ error: "Missing sign" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
  }

  const endpoint = `https://ohmanda.com/api/horoscope/${encodeURIComponent(sign)}/`;

  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      return new Response(JSON.stringify({ error: "Horoscope API error" }), {
        status: response.status,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      });
    }
    const data = await response.json();
    return new Response(JSON.stringify({
      sign: data.sign || sign,
      date: data.date || "",
      description: data.horoscope || ""
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Horoscope API unavailable" }), {
      status: 502,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
  }
}
