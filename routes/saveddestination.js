const express = require("express");
const savedDestinationController = require("../controllers/saveddestination.controller");
const checkAuthMiddleware = require("../middleware/check-auth");

const router = express.Router();
router.post("/add", savedDestinationController.save);
module.exports = router;
