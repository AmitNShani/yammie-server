const express = require('express');
const cors = require('cors');
const ordersRoute = require('./routes/orderRoute')
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");


const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.use('/orders', ordersRoute);

// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
  console.log(`to get last day orders send get request to http://localhost:${port}/orders/last_day
to add an order send post request to http://localhost:${port}/orders with body. for example:
  {
    "firstName": "Amit",
    "lastName": "Shani",
    "email": "amit.n.shani@gmail.com",
    "phoneNumber": "0546999134",
    "orderItems": {"padThai": {"name": "pad thai", "quantity":1, "price": 5}, "somTam": {"name": "green papaya salad", "quantity":2, "price": 4} }
}
  for last i added  a seed order with two days ago so you can see that you will receive it in get request to: http://localhost:${port}/orders
  `);
});
