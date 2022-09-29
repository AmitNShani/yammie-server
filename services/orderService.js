
const prisma = require('../prismaClient');
const { errorsMessages } = require('../constants/errors');

const getAll = async () => {
    try {
        await prisma.order.findMany()
    } catch (error) {
        throw new Error(errorsMessages.FAILED_TO_GET_ALL_ORDERS, { cause: error })
    }
};

const getLastDayOrders = async () => {
    try {
        let lastDayTime = new Date();
        lastDayTime.setDate(lastDayTime.getDate() - 1);
        return await prisma.order.findMany({
            where: {
                createdAt: {
                    gte: lastDayTime,
                    lte: new Date()
                },
            },
        })
    } catch (error) {
        throw new Error(errorsMessages.FAILED_TO_GET_LAST_DAY_ORDERS, { cause: error })
    }
};

const addOrder = async (orderData) => {
    try {
        const { orderItems } = orderData;
        const price = Object.values(orderItems).reduce((prevItem, currItem) => prevItem + (currItem.quantity * currItem.price), 0);
        const newOrder = await prisma.order.create({ datas: { ...orderData, price } });
    } catch (error) {
        throw new Error(errorsMessages.FAILED_TO_CREATE_ORDER, { cause: error });
    }
    return newOrder;
}

module.exports = { getLastDayOrders, addOrder, getAll }