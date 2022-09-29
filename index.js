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
  console.log(`-to get last day orders send get request to http://localhost:${port}/orders/last_day
-to get all orders (there is one order before 2 days) http://localhost:${port}/orders
-to add an order send post request to http://localhost:${port}/orders with body. for example: use the readme file`);
});
// i added a seed contain 2 orders 1) with two days ago so you can see that you will receive it in get request to: