import { PrismaClient } from '@prisma/client';
const asyncHandler = require('express-async-handler');

const prisma = new PrismaClient()

const orders = []; // this is only for showing the use of of the backened. 
// usually would use a database but i'm making one less configurations 
let id = 0;
const getAllOrders = () => [...orders]; // this way i send a copy of orders and not the array object. 
// again crud operations would return us also a copy of the data
const addOrder = orderData => {
    const newOrder = { id: ++id, ...orderData };
    orders.push(newOrder);
    return newOrder;
}

module.exports = { getAllOrders, addOrder }