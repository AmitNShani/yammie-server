DROP DATABASE IF EXISTS yammie;
CREATE DATABASE IF NOT EXISTS yammie;
USE yammie;

CREATE TABLE `order` (
    `order_id`      INT             NOT NULL AUTO_INCREMENT,
    `first_name`  VARCHAR(50)     NOT NULL,
    `last_name`   VARCHAR(50)     NOT NULL,
    `email`   VARCHAR(50)     NOT NULL,
    `phone_number`   VARCHAR(50)     NOT NULL,
    `order_items` JSON NOT NULL,
    `order_status`      ENUM ('pending','done', 'cancled')  NOT NULL,    
    `created_at`  DATE            NOT NULL,
    `updated_at`   DATE            NOT NULL,
    PRIMARY KEY (`order_id`)
);
