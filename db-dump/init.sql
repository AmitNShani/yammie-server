DROP DATABASE IF EXISTS yammie;
CREATE DATABASE IF NOT EXISTS yammie;
USE yammie;

CREATE TABLE `order` (
    `order_id`      INT                                NOT NULL AUTO_INCREMENT,
    `first_name`    VARCHAR(50)                        NOT NULL,
    `last_name`     VARCHAR(50)                        NOT NULL,
    `email`         VARCHAR(50)                        NOT NULL,
    `phone_number`  VARCHAR(50)                        NOT NULL,
    `order_items`   JSON                               NOT NULL,
    `order_status`  ENUM('pending','done', 'cancled')  NOT NULL DEFAULT 'pending',
    `price`         DECIMAL(9,2)                       NOT NULL,
    `created_at`    DATE                               NOT NULL,
    `updated_at`    DATE                               NOT NULL,
    PRIMARY KEY (`order_id`)
);

INSERT INTO `order` (
        first_name,
        last_name,
        email,
        phone_number,
        order_items,
        price,
        created_at,
        updated_at) 
    VALUES (
        'john',
        'snow',
        'johns@thewall.com',
        '054698754',
        '{"kungPow": {"name": "kung pow", "quantity":1, "price": 5}, "byriany": {"name": "byriany rice", "quantity":2, "price": 4}}',
        '13',
        '2022-09-27 23:59:59',
        '2022-09-27 23:59:59');

INSERT INTO `order` (
        `first_name`,
        `last_name`,
        `email`,
        `phone_number`,
        `order_items`,
        `price`,
        `created_at`,
        `updated_at`) 
    VALUES (
        'amit',
        'shani',
        'amit.n.shani@gmail.com',
        '0546999134',
        '{"padThai": {"name": "pad thai", "quantity":1, "price": 5}, "somTam": {"name": "green papaya salad", "quantity":2, "price": 4} }',
        '13',
        NOW(),
        NOW());
