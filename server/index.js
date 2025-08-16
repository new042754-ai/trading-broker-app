const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// simple route
app.get("/health", (req, res) => res.json({ ok: true }));

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`API running on :${port}`));
