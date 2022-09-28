const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()


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
// again crud operations would return us also a copy of the data
const addOrder = async (orderData) => {
    try {
        const { orderItems } = orderData;
        const price = Object.values(orderItems).reduce((prevItem, currItem) => prevItem + (currItem.quantity * currItem.price), 0)
        const newOrder = prisma.order.create({ data: { ...orderData, price } });
        console.log(newOrder);
        return newOrder;
    } catch (error) {
        console.log("error catched in order service", error);
        throw error;
    }
}

module.exports = { getLastDayOrders, addOrder }