const route = require("express").Router();
const needle = require("needle");
const url = require("url");
const API_BASE_URL = process.env.API_BASE_URL;
const API_KEY_VALUE = process.env.API_KEY_VALUE;

route.get("", async (req, res) => {
  try {
    const params = new URLSearchParams({
      key: API_KEY_VALUE,
      ...url.parse(req.url, true).query,
    });
    const API_URL = `${API_BASE_URL}?${params}`;

    const apiRes = await needle("get", API_URL);
    const data = apiRes.body;

    res.status(200).json(data);
  } catch (e) {
    res.json(e);
  }
});

module.exports = route;
