const express = require("express");
const hotelsController = require("../controllers/hotels.controller");
const checkAuthMiddleware = require("../middleware/check-auth");

const router = express.Router();
router.get("/", hotelsController.getHotels);
router.get("/:id", hotelsController.getHotelsById);
module.exports = router;
