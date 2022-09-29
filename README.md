
# Rest API backend for home assignment

As home assignment i was asked to implement a Rest API backend for a restuarant.  
Server demanded functionality:
- create new order.
- get all orders from last day.


## Installation

If you have a mysql port (3306) used somewere else change in docker-compose.yml
the port mapping to a new port ```ports: - <newPort>:3306```  
and also change in .env ```DATABASE_URL="mysql://root:1111@localhost:<newPort>/yammie"```


First for installing the project run:

```bash
  npm run build
```
this will automatically trigger 3 steps:
- npm i
- docker compose up -d
- npx prisma generate 
## Main Tech Stack
**Server:**
- Node 
- Express: for routing and handling request
- Joi: for api data validations 
- Prisma: database ORM for handling the crud operations
- Jest: for unit testing
**Database:** MySQL

***CI/CD:*** 
- Git
- Docker: used for creating a database container with mysql 


## API Reference

#### Get all orders

```http
  GET /orders
```


#### Get last day orders

```http
  GET /orders/last_day
```

response
```
HTTP/1.1 200 OK

[
    {
        "orderId": 2,
        "firstName": "amit",
        "lastName": "shani",
        "email": "amit.n.shani@gmail.com",
        "phoneNumber": "0546999134",
        "orderItems": {
            "somTam": {
                "name": "green papaya salad",
                "price": 4,
                "quantity": 2
            },
            "padThai": {
                "name": "pad thai",
                "price": 5,
                "quantity": 1
            }
        },
        "orderStatus": "pending",
        "price": "13",
        "createdAt": "2022-09-29T00:00:00.000Z",
        "updatedAt": "2022-09-29T00:00:00.000Z"
    },
    {
        "orderId": 3,
        "firstName": "john",
        "lastName": "snow2",
        "email": "john@gmail.com",
        "phoneNumber": "05646894",
        "orderItems": {
            "byriany": {
                "name": "byriany rice",
                "price": 4,
                "quantity": 2
            },
            "kungPow": {
                "name": "kung pow",
                "price": 5,
                "quantity": 1
            }
        },
        "orderStatus": "pending",
        "price": "13",
        "createdAt": "2022-09-29T00:00:00.000Z",
        "updatedAt": "2022-09-29T00:00:00.000Z"
    }
] 
```

#### Get last day orders

```http
  POST /orders
```

| Parameter       | Type     | Description                       |
| :--------       | :------- | :-------------------------------- |
| `firstName`     | `string` | **Required**.  |
| `lastName`      | `string` | **Required**.  |
| `email`         | `string` | **Required**.  |
| `phoneNumber`   | `string` | **Required**.  |
| `orderItems`    | `json` | **Required**.  {<itemKey>: {name: string, quantity: number, price: number}}|

orderItems object:
| Parameter       | Type     | Description                       |
| :--------       | :------- | :-------------------------------- |
| `name`     | `string` | **Required**.  |
| `quantity`      | `number` | **Required**. positive round number |
| `price`         | `string` | **Required**.  double number with percision of 2|


**response:**
```
HTTP/1.1 201 OK

[
    {
    "orderId": 4,
    "firstName": "john",
    "lastName": "snow2",
    "email": "john@gmail.com",
    "phoneNumber": "05646894",
    "orderItems": {
        "byriany": {
            "name": "byriany rice",
            "price": 4,
            "quantity": 2
        },
        "kungPow": {
            "name": "kung pow",
            "price": 5,
            "quantity": 1
        }
    },
    "orderStatus": "pending",
    "price": "13",
    "createdAt": "2022-09-29T00:00:00.000Z",
    "updatedAt": "2022-09-29T00:00:00.000Z"
}
] 
```


## Running Tests

To run tests, run the following command

```bash
  npm run test
```


## Lessons Learned

- creating a docker compose file with mysql server and dump files to create the table and seed.
- using middleware for error handling and joi validations.
- using prisma ORM and auto generating with prisma

prisma commands:
- ```npx prisma init``` 
- ```npx prisma db pull``` 
- ```npx prisma generate``` for creating the prisma client.

