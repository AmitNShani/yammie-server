const { getAll, getLastDayOrders, addOrder } = require('../../services/orderService');
const { prismaMock } = require('../../prismaTestSingleton')


describe('Order service unit tests', () => {

    const mockOrder = {
        firstName: "Amit",
        lastName: "Shani",
        email: "amit.n.shani@gmail.com",
        phoneNumber: "0546999134",
        orderItems: {
            "kungPow": { "name": "kung pow", "quantity": 1, "price": 5 },
            "byriany": { "name": "byriany rice", "quantity": 2, "price": 4 }
        }
    };

    const mockResultOrder = {
        ...mockOrder,
        orderId: 1,
        orderStatus: "pending",
        price: 13,
        createdAt: new Date(),
        updatedAt: new Date()
    };

    it('Should create new order', async () => {
        prismaMock.order.create
            .mockResolvedValue(mockResultOrder);


        // console.log(await addOrder(mockOrder));
        await expect(addOrder(mockOrder)).resolves;
        // await expect(prismaMock).toHaveBeenCalledWith({ ...mockOrder, price: 13 })
    });
});