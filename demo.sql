-- create a table with 5 coloumns customer_id, customer_fname, customer_lname, customer_phone, customer_address
CREATE TABLE customers (
    customer_id INT PRIMARY KEY,
    customer_fname VARCHAR(50),
    customer_lname VARCHAR(50),
    customer_phone VARCHAR(15),
    customer_address VARCHAR(100)
);
-- fill in 5 rows in customers table
INSERT INTO customers (customer_id, customer_fname, customer_lname, customer_phone, customer_address) VALUES
(1, 'John', 'Doe', '555-1234', '123 Elm St'),
(2, 'Jane', 'Smith', '555-5678', '456 Oak St'),
(3, 'Alice', 'Johnson', '555-8765', '789 Pine St'),
(4, 'Bob', 'Brown', '555-4321', '101 Maple St'),
(5, 'Charlie', 'Davis', '555-6789', '202 Birch St');
-- show the data in customers table
SELECT * FROM customers;