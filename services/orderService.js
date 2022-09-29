
const prisma = require('../prismaClient');

const getAll = async () => await prisma.order.findMany();

const getLastDayOrders = async () => {
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
};

const addOrder = async (orderData) => {
    try {
        const { orderItems } = orderData;
        const price = Object.values(orderItems).reduce((prevItem, currItem) => prevItem + (currItem.quantity * currItem.price), 0)
        const newOrder = await prisma.order.create({ data: { ...orderData, price } });
        console.log(newOrder);
        return newOrder;
    } catch (error) {
        console.log("error catched in order service", error);
        throw error;
    }
}

module.exports = { getLastDayOrders, addOrder, getAll }