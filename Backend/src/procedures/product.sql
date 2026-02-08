CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    sale_price DECIMAL(10,2) NULL,
    stock INT NOT NULL DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

DROP PROCEDURE IF EXISTS getAll_products;

CREATE PROCEDURE getAll_products()
BEGIN
    SELECT * FROM products;
END;


CREATE PROCEDURE add_single_products(
    IN p_name VARCHAR(255),
    IN p_image VARCHAR(255),
    IN p_price DECIMAL(10,2),
    IN p_sale_price DECIMAL(10,2),
    IN stock INT
)
BEGIN   
    INSERT INTO products (
        name,
        image,
        price,
        sale_price,
        stock
    )
    VALUES (
        p_name,
        p_image,
        p_price,
        p_sale_price,
        p_stock
    );
END;