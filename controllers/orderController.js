const orderService = require('../services/orderService');
const asyncHandler = require('express-async-handler')


const getAllOrders = asyncHandler((req, res) => {

    const orders = orderService.getAllOrders();
    res.status(200).json(orders);

});

const addOrder = asyncHandler((req, res) => {

    const { body } = req;
    const orders = orderService.addOrder(body);
    res.status(201).json(orders);


});

module.exports = { getAllOrders, addOrder }