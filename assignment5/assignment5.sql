CREATE DATABASE IF NOT EXISTS book_store;
USE book_store;

CREATE TABLE books (
    book_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    quantity_available INT NOT NULL
);

CREATE TABLE users (
    user_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL
);

CREATE TABLE shopping_carts (
    cart_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE cart_items (
    item_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    cart_id INT NOT NULL,
    book_id INT NOT NULL,
    quantity INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (cart_id) REFERENCES shopping_carts(cart_id),
    FOREIGN KEY (book_id) REFERENCES books(book_id)
);

CREATE TABLE orders (
    order_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    order_date DATE NOT NULL,
    total_amount DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE order_items (
    item_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    order_id INT NOT NULL,
    book_id INT NOT NULL,
    quantity INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (book_id) REFERENCES books(book_id)
);

INSERT INTO books (title, author, price, quantity_available)
VALUES
    ('Book1', 'Author1', 19.99, 50),
    ('Book2', 'Author2', 24.99, 30),
    ('Book3', 'Author3', 12.99, 20),
    ('Book4', 'Author4', 29.99, 40),
    ('Book5', 'Author5', 14.99, 25),
    ('Book6', 'Author6', 22.99, 35),
    ('Book7', 'Author7', 17.99, 45),
    ('Book8', 'Author8', 26.99, 28),
    ('Book9', 'Author9', 32.99, 15),
    ('Book10', 'Author10', 19.99, 50);
    
INSERT INTO users (name, email, address)
VALUES
    ('User1', 'user1@email.com', 'Address1'),
    ('User2', 'user2@email.com', 'Address2'),
    ('User3', 'user3@email.com', 'Address3'),
    ('User4', 'user4@email.com', 'Address4'),
    ('User5', 'user5@email.com', 'Address5'),
    ('User6', 'user6@email.com', 'Address6'),
    ('User7', 'user7@email.com', 'Address7'),
    ('User8', 'user8@email.com', 'Address8'),
    ('User9', 'user9@email.com', 'Address9'),
    ('User10', 'user10@email.com', 'Address10');
    
INSERT INTO shopping_carts (user_id)
VALUES
    (1),
    (2),
    (3),
    (4),
    (5),
    (6),
    (7),
    (8),
    (9),
    (10);
    
INSERT INTO cart_items (cart_id, book_id, quantity, price)
VALUES
    (1, 1, 2, 39.98),
    (1, 3, 1, 12.99),
    (2, 2, 3, 74.97),
    (2, 5, 2, 29.98),
    (3, 4, 1, 29.99),
    (3, 7, 4, 71.96),
    (4, 6, 2, 45.98),
    (4, 9, 3, 98.97),
    (5, 8, 1, 26.99),
    (5, 10, 2, 39.98);
    
INSERT INTO orders (user_id, order_date, total_amount)
VALUES
    (1, '2024-01-05', 52.97),
    (2, '2024-01-06', 104.95),
    (3, '2024-01-07', 101.95),
    (4, '2024-01-08', 75.97),
    (5, '2024-01-09', 66.97),
    (6, '2024-01-10', 135.94),
    (7, '2024-01-11', 46.98),
    (8, '2024-01-12', 125.95),
    (9, '2024-01-13', 68.97),
    (10, '2024-01-14', 105.96);
    
INSERT INTO order_items (order_id, book_id, quantity, price)
VALUES
    (1, 1, 2, 39.98),
    (2, 3, 1, 12.99),
    (2, 5, 2, 29.98),
    (3, 4, 1, 29.99),
    (3, 7, 4, 71.96),
    (4, 6, 2, 45.98),
    (5, 8, 1, 26.99),
    (5, 10, 2, 39.98),
    (6, 2, 3, 74.97),
    (6, 9, 3, 98.97);
    

SELECT * FROM books;
SELECT * FROM books WHERE book_id = 5;
SELECT * FROM users;
SELECT * FROM users WHERE user_id = 1;
SELECT * FROM shopping_carts WHERE user_id = 6;

INSERT INTO cart_items (cart_id, book_id, quantity, price)
VALUES (
    (SELECT cart_id FROM shopping_carts WHERE user_id = 5),
    5,
    12,
    90.8
);

DELETE FROM cart_items
WHERE cart_id = (SELECT cart_id FROM shopping_carts WHERE user_id = 2)
AND book_id = 2;

CREATE INDEX idx_book_id ON books(book_id);
CREATE INDEX idx_user_id ON users(user_id);
CREATE INDEX idx_user_id_shopping_carts ON shopping_carts(user_id);
CREATE INDEX idx_cart_id_cart_items ON cart_items(cart_id);
CREATE INDEX idx_cart_id_book_id_cart_items ON cart_items(cart_id, book_id);

CREATE VIEW shoppingCartView AS
SELECT
    sc.cart_id,
    sc.user_id,
    u.name AS user_name,
    u.email AS user_email,
    u.address AS user_address,
    ci.item_id AS cart_item_id,
    ci.book_id,
    b.title AS book_title,
    b.author AS book_author,
    ci.quantity AS item_quantity,
    ci.price AS item_price
FROM shopping_carts AS sc
JOIN users AS u ON sc.user_id = u.user_id
JOIN cart_items AS ci ON sc.cart_id = ci.cart_id
JOIN books AS b ON ci.book_id = b.book_id;

SELECT * FROM shoppingCartView WHERE user_id = 1;

CREATE VIEW orderView AS
SELECT
    o.order_id,
    o.user_id,
    u.name AS user_name,
    u.email AS user_email,
    u.address AS user_address,
    oi.item_id AS order_item_id,
    oi.book_id,
    b.title AS book_title,
    b.author AS book_author,
    oi.quantity AS item_quantity,
    oi.price AS item_price,
    o.order_date,
    o.total_amount
FROM orders AS o
JOIN users AS u ON o.user_id = u.user_id
JOIN order_items AS oi ON o.order_id = oi.order_id
JOIN books AS b ON oi.book_id = b.book_id;

SELECT * FROM orderView WHERE user_id = 5;

DELIMITER //
CREATE PROCEDURE CreateOrder(IN userId INT, OUT orderId INT)
BEGIN 
DECLARE totalAmount DECIMAL(10, 2);
DECLARE cartId INT;	
SELECT cart_id INTO cartId FROM shopping_carts WHERE user_id = userId;
SELECT SUM(quantity * price) INTO totalAmount FROM cart_items WHERE cart_id = cartId;
INSERT INTO orders (user_id, order_date, total_amount) VALUES (userId, NOW(), totalAmount);
SET orderId = LAST_INSERT_ID();
INSERT INTO order_items (order_id, book_id, quantity, price)
SELECT orderId, book_id, quantity, price FROM cart_items WHERE cart_id = cartId;
DELETE FROM cart_items WHERE cart_id = cartId;
DELETE FROM shopping_carts WHERE cart_id = cartId;
END //
DELIMITER ;


DELIMITER //
CREATE TRIGGER after_order_placed
AFTER INSERT ON order_items
FOR EACH ROW
BEGIN
    DECLARE bookQuantity INT;
    DECLARE newQuantity INT;
    SELECT quantity_available INTO bookQuantity FROM books WHERE book_id = NEW.book_id;
    SET newQuantity = bookQuantity - NEW.quantity;
    UPDATE books SET quantity_available = newQuantity WHERE book_id = NEW.book_id;
END;
//
DELIMITER ;