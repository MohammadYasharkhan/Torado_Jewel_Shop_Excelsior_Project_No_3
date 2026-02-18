CREATE TABLE IF NOT EXISTS wishlist (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    product_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
    UNIQUE KEY unique_user_product (user_id, product_id),
    INDEX idx_user_id (user_id),
    INDEX idx_product_id (product_id)
);


DROP PROCEDURE IF EXISTS create_wishlist;

CREATE PROCEDURE create_wishlist(
    IN p_user_id INT,
    IN p_product_id INT
)
BEGIN 
    DECLARE v_exists INT DEFAULT 0;

    SELECT COUNT(*) INTO v_exists 
    FROM wishlist 
    WHERE user_id = p_user_id AND product_id = p_product_id;
    
    IF v_exists > 0 THEN
        SELECT 0 AS status;
    ELSE
        INSERT INTO wishlist(user_id, product_id) 
        VALUES(p_user_id, p_product_id);
        SELECT 1 AS status;
    END IF;
END;


DROP PROCEDURE IF EXISTS get_user_wishlist;
CREATE PROCEDURE get_user_wishlist(
    IN p_user_id INT
)
BEGIN
    SELECT 
        w.id,
        w.user_id,
        w.product_id,
        w.created_at,
        p.name AS product_name,
        p.image AS product_image,
        p.price,
        p.sale_price,
        p.is_sale_available,
        p.stock
    FROM wishlist w
    INNER JOIN products p ON w.product_id = p.id
    WHERE w.user_id = p_user_id
    ORDER BY w.created_at DESC;
END;



DROP PROCEDURE IF EXISTS remove_from_wishlist;
CREATE PROCEDURE remove_from_wishlist(
    IN p_user_id INT,
    IN p_product_id INT
)
BEGIN
    DELETE FROM wishlist 
    WHERE user_id = p_user_id AND product_id = p_product_id;
    
    IF ROW_COUNT() > 0 THEN
        SELECT 1 AS status;
    ELSE
        SELECT 0 AS status;
    END IF;
END;