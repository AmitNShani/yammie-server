const orderService = require('../services/orderService');
const asyncHandler = require('express-async-handler')


const getLastDayOrders = asyncHandler(async (req, res) => {

    const lastDayOrders = await orderService.getLastDayOrders();
    res.status(200).json(lastDayOrders);

});

const getAll = asyncHandler(async (req, res) => {
    const allOrders = await orderService.getAll();
    res.status(200).json(allOrders);
});

const addOrder = asyncHandler(async (req, res) => {

    const { body } = req;
    const order = await orderService.addOrder(body);
    res.status(201).json(order);


});

module.exports = { getLastDayOrders, addOrder, getAll }