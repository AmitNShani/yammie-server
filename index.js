const express = require('express');
const cors = require('cors');
const ordersRoute = require('./routes/orderRoute')


const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.use('/orders', ordersRoute); // add controller

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
