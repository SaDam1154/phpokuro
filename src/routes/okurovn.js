const express = require("express");
const router = express.Router();
const okurovnController = require("../controllers/okuroController");

router.get("/", okurovnController.read);

module.exports = router;
