const express = require("express");
const router = express.Router();
const okurovnRoute = require("./okurovn");

router.use("/okurovn", okurovnRoute);

module.exports = router;
