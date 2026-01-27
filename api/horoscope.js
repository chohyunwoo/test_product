module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  const sign = (req.query.sign || "").toLowerCase();
  if (!sign) {
    res.status(400).json({ error: "Missing sign" });
    return;
  }

  const endpoint = `https://ohmanda.com/api/horoscope/${encodeURIComponent(sign)}/`;

  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      res.status(response.status).json({ error: "Horoscope API error" });
      return;
    }
    const data = await response.json();
    res.status(200).json({
      sign: data.sign || sign,
      date: data.date || "",
      description: data.horoscope || ""
    });
  } catch (error) {
    res.status(502).json({ error: "Horoscope API unavailable" });
  }
};
