const express = require("express");
const router = express.Router();

// Create your routes here

router.route("/trains")
.get(require("./modules/getTrains"));

router.route("/train/:id")
.get(require("./modules/getTrain"));

module.exports = router;