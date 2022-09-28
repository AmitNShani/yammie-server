const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

router
  .route("/")
  .get(orderController.getLastDayOrders)
  .post(orderController.addOrder);

module.exports = router;