CREATE TABLE IF NOT EXISTS orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    status ENUM('pending', 'processing', 'shipped', 'delivered', 'cancelled') NOT NULL DEFAULT 'pending',
    subtotal DECIMAL(10,2) NOT NULL,
    shipping DECIMAL(10,2) NOT NULL DEFAULT 0.00,

    -- shipping details snapshot
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    country ENUM('US', 'UK', 'Canada') NOT NULL,
    city ENUM('New York', 'Florida', 'Kentucky') NOT NULL,
    division ENUM('New York', 'Florida', 'Kentucky') NOT NULL,
    street VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    order_note TEXT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    INDEX idx_user_id (user_id),
    INDEX idx_status (status)
);



CREATE TABLE IF NOT EXISTS order_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    price DECIMAL(10,2) NOT NULL,        -- price at time of order
    sale_price DECIMAL(10,2) NULL,       -- sale price at time of order
    is_sale_available BOOLEAN NOT NULL DEFAULT FALSE,
    item_total DECIMAL(10,2) NOT NULL,   -- snapshot so price changes don't affect old orders
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
    INDEX idx_order_id (order_id)
);




DROP PROCEDURE IF EXISTS place_order;
CREATE PROCEDURE place_order(
    IN p_user_id INT,
    IN p_first_name VARCHAR(100),
    IN p_last_name VARCHAR(100),
    IN p_country ENUM('US', 'UK', 'Canada'),
    IN p_city ENUM('New York', 'Florida', 'Kentucky'),
    IN p_division ENUM('New York', 'Florida', 'Kentucky'),
    IN p_street VARCHAR(255),
    IN p_phone VARCHAR(20),
    IN p_order_note TEXT
)
BEGIN
    DECLARE v_subtotal DECIMAL(10,2);
    DECLARE v_order_id INT;
    DECLARE v_cart_count INT;

    SELECT COUNT(*) INTO v_cart_count
    FROM cart
    WHERE user_id = p_user_id AND is_saved_for_later = FALSE;

    IF v_cart_count = 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Cart is empty';
    END IF;

    SELECT SUM(c.quantity * IF(p.is_sale_available, p.sale_price, p.price))
    INTO v_subtotal
    FROM cart c
    INNER JOIN products p ON c.product_id = p.id
    WHERE c.user_id = p_user_id AND c.is_saved_for_later = FALSE;

    INSERT INTO orders (
        user_id, subtotal,
        first_name, last_name, country,
        city, division, street,
        phone, order_note
    )
    VALUES (
        p_user_id, v_subtotal,
        p_first_name, p_last_name, p_country,
        p_city, p_division, p_street,
        p_phone, p_order_note
    );

    SET v_order_id = LAST_INSERT_ID();

    INSERT INTO order_items (order_id, product_id, quantity, price, sale_price, is_sale_available, item_total)
    SELECT 
        v_order_id,
        c.product_id,
        c.quantity,
        p.price,
        p.sale_price,
        p.is_sale_available,
        (c.quantity * IF(p.is_sale_available, p.sale_price, p.price))
    FROM cart c
    INNER JOIN products p ON c.product_id = p.id
    WHERE c.user_id = p_user_id AND c.is_saved_for_later = FALSE;

    DELETE FROM cart
    WHERE user_id = p_user_id AND is_saved_for_later = FALSE;

    -- Return the order id
    SELECT v_order_id AS order_id;
END;