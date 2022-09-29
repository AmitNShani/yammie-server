const { addOrder } = require('../../services/orderService');
const { prismaMock } = require('../../prismaTestSingleton')


describe('Order service unit tests', () => {

    const createMock = jest.fn();

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


        await expect(addOrder(mockOrder)).resolves.toEqual(mockResultOrder);
    });

    it('Should call create with price 13', async () => {
        prismaMock.order.create = createMock;
        const order = await addOrder(mockOrder);



        await expect(createMock).toHaveBeenCalledWith(expect.objectContaining({
            data: {
                ...mockOrder, price: 13
            }
        }));


    });
});