-- Cart table
CREATE TABLE IF NOT EXISTS cart (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL DEFAULT 1,
    is_saved_for_later BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
    
    UNIQUE KEY unique_user_product (user_id, product_id),
    
    INDEX idx_user_id (user_id),
    INDEX idx_product_id (product_id),
    INDEX idx_saved_for_later (is_saved_for_later)
);


DROP PROCEDURE IF EXISTS add_to_cart;
CREATE PROCEDURE add_to_cart(
    IN p_user_id INT,
    IN p_product_id INT,
    IN p_quantity INT
)
BEGIN
    DECLARE v_exists INT DEFAULT 0;
    SELECT COUNT(*) INTO v_exists 
    FROM cart 
    WHERE user_id = p_user_id AND product_id = p_product_id;
    
    IF v_exists > 0 THEN
        SELECT 0 AS status;
    ELSE
        INSERT INTO cart (user_id, product_id, quantity, is_saved_for_later) 
        VALUES (p_user_id, p_product_id, p_quantity, FALSE);
        
        SELECT 1 AS status;
    END IF;
END;
DROP PROCEDURE IF EXISTS get_user_cart;
CREATE PROCEDURE get_user_cart(
    IN p_user_id INT
)
BEGIN
    -- Result set 1: cart items
    SELECT 
        c.id,
        c.user_id,
        c.product_id,
        c.quantity,
        c.is_saved_for_later,
        c.created_at,
        c.updated_at,
        p.name AS product_name,
        p.image AS product_image,
        p.price,
        p.sale_price,
        p.is_sale_available,
        p.stock,
        (c.quantity * IF(p.is_sale_available, p.sale_price, p.price)) AS item_total
    FROM cart c
    INNER JOIN products p ON c.product_id = p.id
    WHERE c.user_id = p_user_id 
    ORDER BY c.created_at DESC;

    -- Result set 2: metadata
    SELECT
        COUNT(c.id) AS total_items,
        SUM(c.quantity * IF(p.is_sale_available, p.sale_price, p.price)) AS subtotal
    FROM cart c
    INNER JOIN products p ON c.product_id = p.id
    WHERE c.user_id = p_user_id;
END;


DROP PROCEDURE IF EXISTS update_cart_quantity;
CREATE PROCEDURE update_cart_quantity(
    IN p_user_id INT,
    IN p_product_id INT,
    IN p_quantity INT
)
BEGIN
    UPDATE cart 
    SET quantity = p_quantity
    WHERE user_id = p_user_id 
        AND product_id = p_product_id;
    
    IF ROW_COUNT() > 0 THEN
        SELECT 1 AS status;
    ELSE
        SELECT 0 AS status;
    END IF;
END;


DROP PROCEDURE IF EXISTS toggle_saved_for_later;
CREATE PROCEDURE toggle_saved_for_later(
    IN p_user_id INT,
    IN p_product_id INT
)
BEGIN
    DECLARE v_current_state BOOLEAN DEFAULT NULL;
    

    SELECT is_saved_for_later INTO v_current_state
    FROM cart
    WHERE user_id = p_user_id AND product_id = p_product_id
    LIMIT 1;
    
    IF v_current_state IS NULL THEN
        SELECT 0 AS status;
    ELSE
        UPDATE cart 
        SET is_saved_for_later = NOT is_saved_for_later
        WHERE user_id = p_user_id AND product_id = p_product_id;

        IF v_current_state = FALSE THEN
            SELECT 1 AS status, 'Moved to saved for later' AS message;
        ELSE
            SELECT 1 AS status, 'Removed to saved for later' AS message;
        END IF;
    END IF;
END;


DROP PROCEDURE IF EXISTS remove_from_cart;
CREATE PROCEDURE remove_from_cart(
    IN p_user_id INT,
    IN p_product_id INT
)
BEGIN
    DELETE FROM cart 
    WHERE user_id = p_user_id 
        AND product_id = p_product_id;
    
    IF ROW_COUNT() > 0 THEN
        SELECT 1 AS status;
    ELSE
        SELECT 0 AS status;
    END IF;
END;


DROP PROCEDURE IF EXISTS clear_cart;
CREATE PROCEDURE clear_cart(
    IN p_user_id INT
)
BEGIN
    DELETE FROM cart 
    WHERE user_id = p_user_id;
    SELECT ROW_COUNT() AS items_removed;
END;


DROP PROCEDURE IF EXISTS batch_update_cart_quantities;
CREATE PROCEDURE batch_update_cart_quantities(
    IN p_user_id INT,
    IN p_updates JSON  
)
BEGIN
    DECLARE i INT DEFAULT 0;
    DECLARE total INT;
    DECLARE p_product_id INT;
    DECLARE p_quantity INT;
    DECLARE v_affected INT DEFAULT 0;      -- ← Track affected rows
    DECLARE v_total_affected INT DEFAULT 0; -- ← Track total affected

    DECLARE EXIT HANDLER FOR SQLEXCEPTION 
    BEGIN
        ROLLBACK;
        SELECT 0 AS status, 0 AS items_updated, 'Transaction failed and rolled back' AS message;
    END;

    SET total = JSON_LENGTH(p_updates);

    START TRANSACTION;

    WHILE i < total DO

        SET p_product_id = JSON_EXTRACT(p_updates, CONCAT('$[', i, '].productId'));
        SET p_quantity = JSON_EXTRACT(p_updates, CONCAT('$[', i, '].quantity'));

        UPDATE cart 
        SET quantity = p_quantity
        WHERE user_id = p_user_id 
            AND product_id = p_product_id;
        
        -- Track how many rows were actually updated
        SET v_affected = ROW_COUNT();
        SET v_total_affected = v_total_affected + v_affected;
    
        SET i = i + 1;
    END WHILE;
    
    COMMIT;
    
    -- Return both total sent and total actually updated
    SELECT 
        1 AS status, 
        total AS items_sent,                    -- How many user sent
        v_total_affected AS items_updated,      -- How many actually updated
        IF(total = v_total_affected, 
            'All quantities updated',
            CONCAT(v_total_affected, ' of ', total, ' items updated') -- Some not found
        ) AS message;
END;