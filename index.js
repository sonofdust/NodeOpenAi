const express = require("express");
const {getResponse} = require("./OpenAI");
const app = express();
app.use(express.json());
app.post("/chat", async (req, res) => getResponse(req, res));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listing on port ${port}`));
