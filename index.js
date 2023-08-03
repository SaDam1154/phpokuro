const express = require("express");
const parseFilters = require("./src/middleware/parseFilters");
const parseSorts = require("./src/middleware/parseSorts");
const corsConfig = require("./src/configs/cors");
const route = require("./src/routes");

// app
const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
app.use(corsConfig);

app.use(parseFilters, parseSorts);

// route
app.use("/", route);

app.get("/", (req, res) => {
    res.json("Okurovn");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Example app listening on PORT ${PORT}`);
});
