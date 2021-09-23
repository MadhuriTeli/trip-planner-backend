const express = require("express");
const destinationController = require("../controllers/destination.controller");
const checkAuthMiddleware = require("../middleware/check-auth");

const router = express.Router();
router.get("/", destinationController.getDestinations);
router.get("/:id", destinationController.getDestinationById);
module.exports = router;
