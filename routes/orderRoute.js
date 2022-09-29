const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");
const Joi = require('joi');

const { validate } = require('../middlewares/validationMiddleware');

const orederItemsSchema = Joi.object().keys({
  name: Joi.string().min(3).required(),
  quantity: Joi.number().positive().precision(0).required(),
  price: Joi.number().precision(2).required()
});
const createSchema = Joi.object().keys({
  firstName: Joi.string().min(2).max(50).required(),
  lastName: Joi.string().min(2).max(50),
  email: Joi.string().required(),
  phoneNumber: Joi.number().required(),
  orderItems: Joi.object().pattern(Joi.string().min(1), orederItemsSchema),


});

router.route('/last_day').get(orderController.getLastDayOrders);

router
  .route("/")
  .get(orderController.getAll)
  .post(validate(createSchema), orderController.addOrder);

module.exports = router;