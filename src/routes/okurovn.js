const express = require("express");
const router = express.Router();
const okurovnController = require("../controllers/okuroController");

router.get("/hos", okurovnController.hos);
router.get("/edu", okurovnController.edu);
router.get("/card", okurovnController.card);
router.get("/", okurovnController.read);

module.exports = router;
