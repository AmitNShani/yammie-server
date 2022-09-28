const orderService = require('../services/orderService');
const asyncHandler = require('express-async-handler')


const getLastDayOrders = asyncHandler(async (req, res) => {

    const orders = await orderService.getLastDayOrders();
    console.log("in contoroller get", orders);
    res.status(200).json(orders);

});

const addOrder = asyncHandler(async (req, res) => {

    const { body } = req;
    const order = await orderService.addOrder(body);
    console.log("in contoroller", order);
    res.status(201).json(order);


});

module.exports = { getLastDayOrders, addOrder }